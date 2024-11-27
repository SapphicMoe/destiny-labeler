import "dotenv/config";

export const DID = process.env.DID ?? "";
export const SIGN_KEY = process.env.SIGN_KEY ?? "";
export const PORT = Number(process.env.PORT ?? 4001);
export const URL = process.env.URL ?? "wss://jetstream.atproto.tools/subscribe";
export const MAXLABELS = 4;
export const DELETE = "3kwsqucto3j2a";
export const POSTS: Record<string, string> = {
  "3kwss4ldkwd2j": "they",
  "3kwss4fmiow2n": "it",
  "3kwss4bzqlw2k": "he",
  "3kwss45mxrh2j": "she",
  "3kwst2tn2342f": "bio",
  "3kwsslg3gqk2t": "avoid",
  "3kwssldhzme27": "ask",
  "3kwss4vc4cw2x": "any",
  "3kwu55hxj4b2a": "fae",
  "3kwu5d6rq352v": "bun",
  "3kwu5s4lt6f2k": "xe",
  "3kwu5sjyg4m2f": "drae",
  "3kwu5stootb2q": "e",
  "3kwu5taglmr2q": "sier",
  "3kwu6b3cnd52k": "ey",
  "3kwu7n26cgm2m": "shey",
  "3kwue4lqwjb2q": "voi",
  "3kwueewr2p22j": "mew",
  "3kwukwwz4nt2j": "paw",
  "3kwuv4vxgwu2n": "kit",
  "3kwuv56n4jv2g": "zie",
  "3kwuvaelsru2m": "ae",
  "3kwv2d6oguw2n": "prince",
  "3kwvcc736wg2n": "ze",
  "3kwwwvsvcnz2h": "dey",
  "3kwxljuxooh2r": "none",
  "3kwzimwll6j2q": "e-em-er",
  "3kwzmcaue3e22": "xier",
  "3kwzmclqnud2t": "sier-sies",
  "3kx22bkmnco2t": "ens",
  "3kx45q2fq372f": "squee",
  "3kx4puqpu5q2j": "vi",
  "3kxntgh45yy2j": "ne-nem-nir",
  "3kxqmnktb532k": "ze-zim",
  "3kxsppngl4e2a": "pup-pups-pupself",
  "3kxvjiundpz2r": "zi-zir",
  "3kxvjixhmhh2g": "he-haw",
  "3kxwujilwty2m": "hee-haw",
  "3kxy7b27dke2w": "zhi-zhr",
  "3ky7xcoqkza2q": "ve-ver",
  "3kygr2mke2t2z": "si-hir",
  "3kyikdvmeff2g": "she-we",
  "3kyikdz4eau2a": "he-we",
  "3kyike4fibu2k": "they-we",
  "3kyilq67fyv2a": "xe-xem",
  "3kzfbgd3jpz2k": "sun-suns",
  "3kzfbgi7is225": "leaf-leafs",
  "3kzftskynd32l": "shiv-ver",
  "3l2jb2koecj27": "ferret-ferrets",
  "3l2kx6qwefk2h": "drusshe-drayr",
  "3l2xlzk6lrx2r": "frog-frogs",
  "3l2xlzt6v5z2x": "rat-rats",
  "3l2zv7xcpq62u": "shark-sharks",
  "3l32xb7nvgh2x": "proper-nouns",
  "3l4wb5cvjnz2e": "she-they",
  "3l4wb5gm6lp2o": "he-they",
  "3l4wb5kvvrm2l": "she-it",
  "3l4wb5pwzzq2j": "he-it",
  "3l4wb5uqrvs26": "they-it",
  "3l6q32zgber2l": "look-at-pin",
  "3l6q33okbuy26": "pup-puppy",
  "3l6q63u7uwa2m": "star-stars",
  "3l6q64ary322r": "plush-plushie",
  "3l6uilqh2ql2i": "panda-pandas",
  "3l6uimcattv2m": "dragon-dragons",
  "3l6uimwokp52a": "plant-plants",
  "3l6uinheojn2r": "flower-flowers",
  "3l6uinwqct22l": "tiger-tigers",
  "3l6uioemrp72o": "shi-hir",
  "3l6uiorzliu2r": "zhe-zhem",
  "3l6uip6xzv32z": "xey-xem",
  "3l6uiqa6cnw2a": "mirror",
  "3l6uszrrevl25": "hy-hym",
  "3l6x3paoy7m2d": "fox-foxs",
  "3l6x3pjoba62r": "fen-fens",
  "3l6ygalsovn2r": "it-we",
  "3l6ygazurdu2a": "vamp-vamps",
  "3l6ygbbsbo32h": "ze-zir",
  "3l6ygbkze3a25": "sea-seas",
  "3l74kcbfbvb22": "they-she",
  "3l74kcj4ziv2r": "they-he",
  "3l74kcqrbk627": "it-she",
  "3l74kcyojfi2z": "it-he",
  "3l74kda4gns25": "it-they",
  "3l7a5x37jtv2r": "she-he",
  "3l7a5xcmdry25": "he-she",
  "3l7tljdqm6s2s": "e-h-hs",
  "3l7tljns6a22s": "atp-adp",
  "3l7tlk57iec2s": "cat-cats",
  "3laiylfnutc24": "moo-moocow",
  "3laiym4vzdc24": "any-neopronouns",
  "3law2pa3wdk2k": "squeak-squeaks",
  "3lawr2cnxhc2v": "zie-hir",
  "3layhald5ic2s": "nya-nyan",
  "3lb5mwai4k225": "hoshi-hoshis",
  "3lb5mwni6yk25": "moon-moons",
  "3lb5mwzhrfs25": "bear-bears",
  "3lbfr4mdkck2e": "third-person",
  "3lbxle2gjb22f": "doll-dolls",
  "3lbxlevi5hc2f": "xi-xir",
  "3lbxlgslduc2f": "critter-creature",
  "3lbxlicjjmc2f": "vi-vir",
  "3lbxmhfq3hc24": "strawb-strawbs",
};
