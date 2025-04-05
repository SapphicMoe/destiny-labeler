import {
	API_DEV_DIDS,
	BUNGIE_DIDS,
	DID,
	DELETE,
	PORT,
	MAXLABELS,
	POSTS,
	SIGN_KEY,
} from "./constants.js";
import { LabelerServer } from "@skyware/labeler";

export const server = new LabelerServer({ did: DID, signingKey: SIGN_KEY });

server.start(PORT, (error, address) => {
	if (error) console.error(error);
	else console.log(`Labeler server listening on ${address}`);
});

const getLabels = async (did: string) => {
	const query = await server.db.execute({
		sql: "SELECT val, neg FROM labels WHERE uri = ?",
		args: [did],
	});

	return query.rows.reduce((set, { val, neg }) => {
		if (!val) return set;
		const value = val.toString();
		neg ? set.delete(value) : set.add(value);
		return set;
	}, new Set<string>());
};

export const label = async (did: string, rkey: string) => {
	const labels = await getLabels(did);

	try {
		if (rkey.includes(DELETE)) {
			await server.createLabels({ uri: did }, { negate: [...labels] });
			console.log(`${new Date().toISOString()} Deleted labels: ${did}`);
		} else if (labels.size < MAXLABELS && POSTS[rkey]) {
			await server.createLabel({ uri: did, val: POSTS[rkey] });
			console.log(`${new Date().toISOString()} Labeled ${did}: ${POSTS[rkey]}`);
		}
	} catch (err) {
		console.error(err);
	}
};

const applyLabel = async (dids: string[], labelName: string) => {
	for (const did of dids) {
		const labels = await getLabels(did);
		if (!labels.has(labelName)) {
			try {
				await server.createLabel({ uri: did, val: labelName });
				console.log(
					`${new Date().toISOString()} Granted ${labelName} label to ${did}`,
				);
			} catch (err) {
				console.error(
					`${new Date().toISOString()} Error granting ${labelName} label to ${did}: ${err}`,
				);
			}
		}
	}
};

await applyLabel(BUNGIE_DIDS, "bungie");
await applyLabel(API_DEV_DIDS, "dev");
