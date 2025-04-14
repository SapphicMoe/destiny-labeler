# ---- Base ----
# Use a specific Node.js version. Alpine is lightweight.
FROM node:22-alpine AS base
WORKDIR /app
# Install pnpm globally using corepack (Node.js built-in)
RUN corepack enable && corepack prepare pnpm@latest --activate


# ---- Dependencies ----
# Install *all* dependencies (including dev) needed for the build
FROM base AS deps
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile


# ---- Builder ----
# Build the TypeScript project
FROM base AS builder
COPY package.json pnpm-lock.yaml ./
# Copy dependencies from the 'deps' stage for better caching
COPY --from=deps /app/node_modules ./node_modules
# Copy the source code and tsconfig
COPY src ./src
COPY tsconfig.json ./
# Run the build script defined in package.json
RUN pnpm run build


# ---- Pruner ----
# Remove development dependencies AFTER the build is complete
FROM base AS pruner
COPY package.json pnpm-lock.yaml ./
COPY --from=builder /app/node_modules ./node_modules
# Use pnpm prune to remove devDependencies
RUN pnpm prune --prod


# ---- Runner ----
# Final, minimal production image
FROM node:22-alpine AS runner
WORKDIR /app

# Set NODE_ENV to production (good practice, some libs optimize based on this)
ENV NODE_ENV=production
# Optional: Run as non-root user for security
# Create a non-root user and switch to it
# RUN addgroup -S appgroup && adduser -S appuser -G appgroup
# USER appuser

# Copy only necessary production dependencies from the 'pruner' stage
COPY --from=pruner /app/node_modules ./node_modules
# Copy the compiled JavaScript code from the 'builder' stage
COPY --from=builder /app/dist ./dist
# Copy package.json (might be needed for metadata, optional otherwise)
COPY package.json ./

# Copy persistent data placeholders - these will be overwritten by volumes
# Create empty files so permissions are set correctly if needed,
# and the container can start even if volumes aren't mounted initially.
# Ensure the directory exists first.
RUN mkdir -p /app/data \
    && touch /app/data/cursor.txt \
    && touch /app/data/labels.db \
    && touch /app/data/labels.db-shm \
    && touch /app/data/labels.db-wal
# If running as non-root, ensure the user owns the data directory
# RUN chown -R appuser:appgroup /app/data

# Expose the port the app listens on
EXPOSE 4001

# Define the command to run the application using the compiled JS
# Note: No 'pnpm' needed here unless package.json has specific bins
CMD ["node", "dist/main.js"]