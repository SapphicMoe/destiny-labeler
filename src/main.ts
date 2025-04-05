import { label } from "./label.js";
import { DID, URL } from "./constants.js";
import fs from "node:fs";
import { Jetstream } from "@skyware/jetstream";

let intervalID: NodeJS.Timeout;

const cursorFile = fs.readFileSync("cursor.txt", "utf8");
if (cursorFile) console.log(`${new Date().toISOString()} Initiating Jetstream at cursor ${cursorFile}.`,);

const jetstream = new Jetstream({
	endpoint: URL,
	wantedCollections: ["app.bsky.feed.like"],
	cursor: Number(cursorFile),
});

jetstream.on("open", () => {
	intervalID = setInterval(() => {
		if (!jetstream.cursor) return;
		
		fs.writeFile("cursor.txt", jetstream.cursor.toString(), (err) => {
			if (err) console.log(err);
		});
	}, 60000);
});

jetstream.on("error", (err) => console.error(err));
jetstream.on("close", () => clearInterval(intervalID));

jetstream.onCreate("app.bsky.feed.like", (event) => {
	if (event.commit.record.subject.uri.includes(`${DID}/app.bsky.feed.post`)) {
		const rkey = event.commit.record.subject.uri.split("/").pop();
		if (!rkey) return;
		
		label(event.did, rkey);
	}
});

jetstream.start();
