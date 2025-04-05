import "dotenv/config";

export const DID = process.env.DID ?? "";
export const SIGN_KEY = process.env.SIGN_KEY ?? "";
export const PORT = Number(process.env.PORT ?? 4001);
export const URL = process.env.URL ?? "wss://jetstream.atproto.tools/subscribe";

export const MAXLABELS = 10;
export const DELETE = "3llzmave2yk2k";

const CLASSES = {
	"3lm3ybnwzy42m": "hunter-class",
	"3lm3ybnwzy52m": "titan-class",
	"3lm3ybnx2xf2m": "warlock-class",
} as const;

const SUBCLASSES = {
	"3lm3ybe47r22m": "arc",
	"3lm3ybe4aqc2m": "prismatic",
	"3lm3ybe4bpk2m": "solar",
	"3lm3ybe4bpl2m": "stasis",
	"3lm3ybe4cot2m": "strand",
	"3lm3ybe4cou2m": "void",
} as const;

const ACTIVITIES = {
	"3lm3y7vwbt52f": "crucible",
	"3lm3y7vwcsf2f": "gambit",
	"3lm3y7vwcsg2f": "iron-banner",
	"3lm3y7vwcsh2f": "lost-sectors",
	"3lm3y7vwcsi2f": "nightfalls",
	"3lm3y7vwdrq2f": "onslaught",
	"3lm3y7vwdrr2f": "strikes",
	"3lm3y7vwdrs2f": "trials",
} as const;

const RAIDS = {
	"3lm3y6tvqsk2f": "crotas-end",
	"3lm3y6tvqsl2f": "crown-of-sorrow",
	"3lm3y6tvrrt2f": "deep-stone-crypt",
	"3lm3y6tvrru2f": "eater-of-worlds",
	"3lm3y6tvtqe2f": "garden-of-salvation",
	"3lm3y6tvtqf2f": "kings-fall",
	"3lm3y6tvupn2f": "last-wish",
	"3lm3y6tvupo2f": "leviathan",
	"3lm3y6tvupp2f": "root-of-nightmares",
	"3lm3y6tvupq2f": "salvations-edge",
	"3lm3y6tvupr2f": "scourge-of-the-past",
	"3lm3y6tvups2f": "spire-of-stars",
	"3lm3y6tvvp22f": "the-pantheon",
	"3lm3y6tvvp32f": "vault-of-glass",
	"3lm3y6tvvp42f": "vow-of-the-disciple",
	"3lm3y6tvvp52f": "wrath-of-the-machine",
} as const;

const DUNGEONS = {
	"3lm3vcvnfsx26": "duality",
	"3lm3vcvngs726": "ghosts-of-the-deep",
	"3lm3vcvngsa26": "grasp-of-avarice",
	"3lm3vcvnhri26": "pit-of-heresy",
	"3lm3vcvnhrj26": "prophecy",
	"3lm3vcvnhrk26": "rite-of-the-nine",
	"3lm3vcvniqs26": "shattered-throne",
	"3lm3vcvniqt26": "spire-of-the-watcher",
	"3lm3vcvniqu26": "sundered-doctrine",
	"3lm3vcvnjq426": "vespers-host",
	"3lm3vcvnjq526": "warlords-ruin",
} as const;

const LOCATIONS = {
	"3lm3vbjucts26": "black-garden",
	"3lm3vbjudt226": "cosmodrome",
	"3lm3vbjudt326": "dreadnaught",
	"3lm3vbjuesd26": "dreaming-city",
	"3lm3vbjuese26": "europa",
	"3lm3vbjugqu26": "edz",
	"3lm3vbjugqv26": "io",
	"3lm3vbjugqw26": "mars",
	"3lm3vbjugqx26": "mercury",
	"3lm3vbjuhq726": "moon",
	"3lm3vbjuhqa26": "neptune",
	"3lm3vbjuhqb26": "nessus",
	"3lm3vbjuhqc26": "pale-heart",
	"3lm3vbjuhqd26": "plaguelands",
	"3lm3vbjuhqe26": "savathuns-throne-world",
	"3lm3vbjuhqf26": "tangled-shore",
	"3lm3vbjuipn26": "titan",
	"3lm3vbjuipo26": "venus",
	"3lm3vbjuipp26": "vex-network",
} as const;

export const POSTS: Record<string, string> = {
	...CLASSES,
	...SUBCLASSES,
	...ACTIVITIES,
	...RAIDS,
	...DUNGEONS,
	...LOCATIONS,
};

export const BUNGIE_DIDS = [
	"did:plc:kezsn4g7eqzxasduovuou3vi", // dmg04
	"did:plc:mn4664zhhmnrd76tjfgb6r6p", // ninehydras
	"did:plc:v2hd5o5qkry3o4aaxd3nc6hj", // Andy Salisbury
	"did:plc:e23ullyyeuyxyth5p62vzbtn", // daniel chavez
	"did:plc:c6u2depzaclyb2zuv2xcndkd", // elliott
	"did:plc:a5ce3erm3c5llhjfrllk37xz", // Josh Kulinski
	"did:plc:2c5nxcosy62w7op62rzvcgeu", // Cozmo
	"did:plc:5w37yesomka5rowxbosecxt2", // Alison Lührs
	"did:plc:vdhcgyjrtlnbcv6zeiu6ob62", // Ash Poprik
	"did:plc:vclhve7nh43xvry6bwzavm7a", // Mara Junot
	"did:plc:2tcec6ne2w3pbnkbz4nqlssm", // Tom Farnsworth
	"did:plc:6majhz4fyhpkmbdlwgk2ura4", // Ash
];

export const API_DEV_DIDS = [
	"did:plc:ggnlsz5dwdo7lsny7zfof6cy", // Steffwiz
	"did:plc:gdppcvjm2h3foyhcg7sd7trx", // JpDeathBlade
	"did:plc:oe6gmuleazulsd6qaoa7b2sm", // BinarMorker
	"did:plc:dacejitxnboaitvrfgsfye5a", // Chris Fried
	"did:plc:salgrnhwpavpitwcxuwcnhir", // Lab
	"did:plc:w6qzb3st3ap3pit7lxggzujx", // Mike Chambers
	"did:plc:vzrqui5k7egzl7y7qwsto7xu", // Fra
	"did:plc:gkcbeic4yl7kzzkez53i3pcw", // Clarity
	"did:plc:j2ye4ob7meqqfbz6g3motgqy", // Jaoryuken
	"did:plc:fh57kfjuh57xbwgt22soxxjk", // light.gg
	"did:plc:ykm3gpd2vroo3sxmrmlihu2b", // OatsFX
	"did:plc:mrc3ipj7l7347xcf2ntirnaz", // Moons
	"did:plc:ncrbjcwrxdk2vo74j5vxbly3", // Throudin
	"did:plc:rseaeaymhmiasobr2ccxgobd", // waferbaby
	"did:plc:obxnda4njacautnfad6kyjyz", // baxter
	"did:plc:q6atimofqpdjcb5rzfw24n6o", // joshhunt
	"did:plc:ezquj66bhs5w72vdk4kwvqh3", // Nigel Breslaw
	"did:plc:2umzdqto3j75ssii6kf4jbly", // aundre
	"did:plc:fcv3k6nzr27owpcfmb3a3pxz", // cbro
	"did:plc:iszscbs643fe2aesbzcou6la", // Jakosaur
	"did:plc:rpnua5z6vqz2vix34fwgjmag", // Herr Exion
	"did:plc:ovm2fjj3v43fsj3k6srtqkjo", // Tom Corke
	"did:plc:rctxtkvw3ua6z2w2t6rgyy7p", // Ben Hollis
	"did:plc:j72uc4oprfnbdyjluybjjwfo", // Jansten
	"did:plc:pgf2yw2zddrxh5ngapc7rfq6", // kat blackheart
	"did:plc:f4y4ezotqupmohkm4chlcvjn", // Harm Brammer
	"did:plc:7rac5xmrqleqgbd2bqhvarof", // camo
	"did:plc:mqo6qgh2krjs42uw6goq3kow", // Tor Kallon
	"did:plc:ispcloxaria22hjuztdmkytz", // Buuz135
	"did:plc:abz72n2pwwqkbyi7sjaa56xk", // Zeta
	"did:plc:kmotinfdktx4tspshqbr4csg", // Jocafamaka
];
