// credit to https://github.com/RosaeNLG/rosaenlg/tree/master/packages/english-verbs-irregular
const irregularVerbs = {
  arise: [["arose", "arisen"]],
  awake: [
    ["awakened", "awakened"],
    ["awoke", "awoken"]
  ],
  backslide: [
    ["backslid", "backslidden"],
    ["backslid", "backslid"]
  ],
  be: [
    ["was", "been"],
    ["were", "been"]
  ],
  bear: [
    ["bore", "born"],
    ["bore", "borne"]
  ],
  beat: [
    ["beat", "beaten"],
    ["beat", "beat"]
  ],
  become: [["became", "become"]],
  begin: [["began", "begun"]],
  bend: [["bent", "bent"]],
  bet: [
    ["bet", "bet"],
    ["betted", "betted"]
  ],
  bid: [
    ["bid", "bidden"],
    ["bade", "bidden"],
    ["bid", "bid"]
  ],
  bind: [["bound", "bound"]],
  bite: [["bit", "bitten"]],
  bleed: [["bled", "bled"]],
  blow: [["blew", "blown"]],
  break: [["broke", "broken"]],
  breed: [["bred", "bred"]],
  bring: [["brought", "brought"]],
  broadcast: [
    ["broadcast", "broadcast"],
    ["broadcasted", "broadcasted"]
  ],
  browbeat: [
    ["browbeat", "browbeaten"],
    ["browbeat", "browbeat"]
  ],
  build: [["built", "built"]],
  burn: [
    ["burned", "burned"],
    ["burnt", "burnt"]
  ],
  burst: [["burst", "burst"]],
  bust: [
    ["busted", "busted"],
    ["bust", "bust"]
  ],
  buy: [["bought", "bought"]],
  cast: [["cast", "cast"]],
  catch: [["caught", "caught"]],
  choose: [["chose", "chosen"]],
  cling: [["clung", "clung"]],
  clothe: [
    ["clothed", "clothed"],
    ["clad", "clad"]
  ],
  come: [["came", "come"]],
  cost: [["cost", "cost"]],
  creep: [["crept", "crept"]],
  crossbreed: [["crossbred", "crossbred"]],
  cut: [["cut", "cut"]],
  daydream: [
    ["daydreamed", "daydreamed"],
    ["daydreamt", "daydreamt"]
  ],
  deal: [["dealt", "dealt"]],
  dig: [["dug", "dug"]],
  disprove: [
    ["disproved", "disproved"],
    ["disproved", "disproven"]
  ],
  dive: [
    ["dove", "dived"],
    ["dived", "dived"]
  ],
  do: [["did", "done"]],
  draw: [["drew", "drawn"]],
  dream: [
    ["dreamed", "dreamed"],
    ["dreamt", "dreamt"]
  ],
  drink: [["drank", "drunk"]],
  drive: [["drove", "driven"]],
  dwell: [
    ["dwelt", "dwelt"],
    ["dwelled", "dwelled"]
  ],
  eat: [["ate", "eaten"]],
  fall: [["fell", "fallen"]],
  feed: [["fed", "fed"]],
  feel: [["felt", "felt"]],
  fight: [["fought", "fought"]],
  find: [["found", "found"]],
  fit: [
    ["fitted", "fitted"],
    ["fit", "fit"]
  ],
  flee: [["fled", "fled"]],
  fling: [["flung", "flung"]],
  fly: [["flew", "flown"]],
  forbid: [["forbade", "forbidden"]],
  forecast: [["forecast", "forecast"]],
  forego: [["forewent", "foregone"]],
  foresee: [["foresaw", "foreseen"]],
  foretell: [["foretold", "foretold"]],
  forget: [
    ["forgot", "forgotten"],
    ["forgot", "forgot"]
  ],
  forgive: [["forgave", "forgiven"]],
  forsake: [["forsook", "forsaken"]],
  freeze: [["froze", "frozen"]],
  frostbite: [["frostbit", "frostbitten"]],
  get: [
    ["got", "gotten"],
    ["got", "got"]
  ],
  give: [["gave", "given"]],
  go: [["went", "gone"]],
  grind: [["ground", "ground"]],
  grow: [["grew", "grown"]],
  "hand-feed": [["hand-fed", "hand-fed"]],
  handwrite: [["handwrote", "handwritten"]],
  hang: [["hung", "hung"]],
  have: [["had", "had"]],
  hear: [["heard", "heard"]],
  hew: [
    ["hewed", "hewn"],
    ["hewed", "hewed"]
  ],
  hide: [["hid", "hidden"]],
  hit: [["hit", "hit"]],
  hold: [["held", "held"]],
  hurt: [["hurt", "hurt"]],
  inbreed: [["inbred", "inbred"]],
  inlay: [["inlaid", "inlaid"]],
  input: [
    ["input", "input"],
    ["inputted", "inputted"]
  ],
  interbreed: [["interbred", "interbred"]],
  interweave: [
    ["interwove", "interwoven"],
    ["interweaved", "interweaved"]
  ],
  interwind: [["interwound", "interwound"]],
  "jerry-build": [["jerry-built", "jerry-built"]],
  keep: [["kept", "kept"]],
  kneel: [
    ["knelt", "knelt"],
    ["kneeled", "kneeled"]
  ],
  knit: [
    ["knitted", "knitted"],
    ["knit", "knit"]
  ],
  know: [["knew", "known"]],
  lay: [["laid", "laid"]],
  lead: [["led", "led"]],
  lean: [
    ["leaned", "leaned"],
    ["leant", "leant"]
  ],
  leap: [
    ["leaped", "leaped"],
    ["leapt", "leapt"]
  ],
  learn: [
    ["learned", "learned"],
    ["learnt", "learnt"]
  ],
  leave: [["left", "left"]],
  lend: [["lent", "lent"]],
  let: [["let", "let"]],
  lie: [["lay", "lain"]],
  light: [
    ["lit", "lit"],
    ["lighted", "lighted"]
  ],
  "lip-read": [["lip-read", "lip-read"]],
  lose: [["lost", "lost"]],
  make: [["made", "made"]],
  mean: [["meant", "meant"]],
  meet: [["met", "met"]],
  miscast: [["miscast", "miscast"]],
  misdeal: [["misdealt", "misdealt"]],
  misdo: [["misdid", "misdone"]],
  mishear: [["misheard", "misheard"]],
  mislay: [["mislaid", "mislaid"]],
  mislead: [["misled", "misled"]],
  mislearn: [
    ["mislearned", "mislearned"],
    ["mislearnt", "mislearnt"]
  ],
  misread: [["misread", "misread"]],
  misset: [["misset", "misset"]],
  misspeak: [["misspoke", "misspoken"]],
  misspell: [
    ["misspelled", "misspelled"],
    ["misspelt", "misspelt"]
  ],
  misspend: [["misspent", "misspent"]],
  mistake: [["mistook", "mistaken"]],
  misteach: [["mistaught", "mistaught"]],
  misunderstand: [["misunderstood", "misunderstood"]],
  miswrite: [["miswrote", "miswritten"]],
  mow: [
    ["mowed", "mowed"],
    ["mowed", "mown"]
  ],
  offset: [["offset", "offset"]],
  outbid: [["outbid", "outbid"]],
  outbreed: [["outbred", "outbred"]],
  outdo: [["outdid", "outdone"]],
  outdraw: [["outdrew", "outdrawn"]],
  outdrink: [["outdrank", "outdrunk"]],
  outdrive: [["outdrove", "outdriven"]],
  outfight: [["outfought", "outfought"]],
  outfly: [["outflew", "outflown"]],
  outgrow: [["outgrew", "outgrown"]],
  outleap: [
    ["outleaped", "outleaped"],
    ["outleapt", "outleapt"]
  ],
  outride: [["outrode", "outridden"]],
  outrun: [["outran", "outrun"]],
  outsell: [["outsold", "outsold"]],
  outshine: [
    ["outshined", "outshined"],
    ["outshone", "outshone"]
  ],
  outshoot: [["outshot", "outshot"]],
  outsing: [["outsang", "outsung"]],
  outsit: [["outsat", "outsat"]],
  outsleep: [["outslept", "outslept"]],
  outsmell: [
    ["outsmelled", "outsmelled"],
    ["outsmelt", "outsmelt"]
  ],
  outspeak: [["outspoke", "outspoken"]],
  outspeed: [["outsped", "outsped"]],
  outspend: [["outspent", "outspent"]],
  outswear: [["outswore", "outsworn"]],
  outswim: [["outswam", "outswum"]],
  outthink: [["outthought", "outthought"]],
  outthrow: [["outthrew", "outthrown"]],
  outwrite: [["outwrote", "outwritten"]],
  overbid: [["overbid", "overbid"]],
  overbreed: [["overbred", "overbred"]],
  overbuild: [["overbuilt", "overbuilt"]],
  overbuy: [["overbought", "overbought"]],
  overcome: [["overcame", "overcome"]],
  overdo: [["overdid", "overdone"]],
  overdraw: [["overdrew", "overdrawn"]],
  overdrink: [["overdrank", "overdrunk"]],
  overeat: [["overate", "overeaten"]],
  overfeed: [["overfed", "overfed"]],
  overhang: [["overhung", "overhung"]],
  overhear: [["overheard", "overheard"]],
  overlay: [["overlaid", "overlaid"]],
  overpay: [["overpaid", "overpaid"]],
  override: [["overrode", "overridden"]],
  overrun: [["overran", "overrun"]],
  oversee: [["oversaw", "overseen"]],
  oversell: [["oversold", "oversold"]],
  oversew: [
    ["oversewed", "oversewn"],
    ["oversewed", "oversewed"]
  ],
  overshoot: [["overshot", "overshot"]],
  oversleep: [["overslept", "overslept"]],
  overspeak: [["overspoke", "overspoken"]],
  overspend: [["overspent", "overspent"]],
  overspill: [
    ["overspilled", "overspilled"],
    ["overspilt", "overspilt"]
  ],
  overtake: [["overtook", "overtaken"]],
  overthink: [["overthought", "overthought"]],
  overthrow: [["overthrew", "overthrown"]],
  overwind: [["overwound", "overwound"]],
  overwrite: [["overwrote", "overwritten"]],
  partake: [["partook", "partaken"]],
  pay: [["paid", "paid"]],
  plead: [
    ["pleaded", "pleaded"],
    ["pled", "pled"]
  ],
  prebuild: [["prebuilt", "prebuilt"]],
  predo: [["predid", "predone"]],
  premake: [["premade", "premade"]],
  prepay: [["prepaid", "prepaid"]],
  presell: [["presold", "presold"]],
  preset: [["preset", "preset"]],
  preshrink: [["preshrank", "preshrunk"]],
  proofread: [["proofread", "proofread"]],
  prove: [
    ["proved", "proven"],
    ["proved", "proved"]
  ],
  put: [["put", "put"]],
  "quick-freeze": [["quick-froze", "quick-frozen"]],
  quit: [
    ["quit", "quit"],
    ["quitted", "quitted"]
  ],
  read: [["read", "read"]],
  reawake: [["reawoke", "reawaken"]],
  rebid: [["rebid", "rebid"]],
  rebind: [["rebound", "rebound"]],
  rebroadcast: [
    ["rebroadcast", "rebroadcast"],
    ["rebroadcasted", "rebroadcasted"]
  ],
  rebuild: [["rebuilt", "rebuilt"]],
  recast: [["recast", "recast"]],
  recut: [["recut", "recut"]],
  redeal: [["redealt", "redealt"]],
  redo: [["redid", "redone"]],
  redraw: [["redrew", "redrawn"]],
  refit: [
    ["refit", "refit"],
    ["refitted", "refitted"]
  ],
  regrind: [["reground", "reground"]],
  regrow: [["regrew", "regrown"]],
  rehang: [["rehung", "rehung"]],
  rehear: [["reheard", "reheard"]],
  reknit: [
    ["reknitted", "reknitted"],
    ["reknit", "reknit"]
  ],
  relay: [["relaid", "relaid"]],
  relearn: [
    ["relearned", "relearned"],
    ["relearnt", "relearnt"]
  ],
  relight: [
    ["relit", "relit"],
    ["relighted", "relighted"]
  ],
  remake: [["remade", "remade"]],
  repay: [["repaid", "repaid"]],
  reread: [["reread", "reread"]],
  rerun: [["reran", "rerun"]],
  resell: [["resold", "resold"]],
  resend: [["resent", "resent"]],
  reset: [["reset", "reset"]],
  resew: [
    ["resewed", "resewn"],
    ["resewed", "resewed"]
  ],
  retake: [["retook", "retaken"]],
  reteach: [["retaught", "retaught"]],
  retear: [["retore", "retorn"]],
  retell: [["retold", "retold"]],
  rethink: [["rethought", "rethought"]],
  retread: [["retread", "retread"]],
  retrofit: [
    ["retrofitted", "retrofitted"],
    ["retrofit", "retrofit"]
  ],
  rewake: [
    ["rewoke", "rewaken"],
    ["rewaked", "rewaked"]
  ],
  rewear: [["rewore", "reworn"]],
  reweave: [
    ["rewove", "rewoven"],
    ["reweaved", "reweaved"]
  ],
  rewed: [
    ["rewed", "rewed"],
    ["rewedded", "rewedded"]
  ],
  rewet: [
    ["rewet", "rewet"],
    ["rewetted", "rewetted"]
  ],
  rewin: [["rewon", "rewon"]],
  rewind: [["rewound", "rewound"]],
  rewrite: [["rewrote", "rewritten"]],
  rid: [["rid", "rid"]],
  ride: [["rode", "ridden"]],
  ring: [["rang", "rung"]],
  rise: [["rose", "risen"]],
  roughcast: [["roughcast", "roughcast"]],
  run: [["ran", "run"]],
  "sand-cast": [["sand-cast", "sand-cast"]],
  saw: [
    ["sawed", "sawed"],
    ["sawed", "sawn"]
  ],
  say: [["said", "said"]],
  see: [["saw", "seen"]],
  seek: [["sought", "sought"]],
  sell: [["sold", "sold"]],
  send: [["sent", "sent"]],
  set: [["set", "set"]],
  sew: [
    ["sewed", "sewn"],
    ["sewed", "sewed"]
  ],
  shake: [["shook", "shaken"]],
  shave: [
    ["shaved", "shaved"],
    ["shaved", "shaven"]
  ],
  shear: [
    ["sheared", "sheared"],
    ["sheared", "shorn"]
  ],
  shed: [["shed", "shed"]],
  shine: [
    ["shined", "shined"],
    ["shone", "shone"]
  ],
  shit: [
    ["shit", "shit"],
    ["shat", "shat"],
    ["shitted", "shitted"]
  ],
  shoot: [["shot", "shot"]],
  show: [
    ["showed", "shown"],
    ["showed", "showed"]
  ],
  shrink: [
    ["shrank", "shrunk"],
    ["shrunk", "shrunk"]
  ],
  shut: [["shut", "shut"]],
  "sight-read": [["sight-read", "sight-read"]],
  sing: [["sang", "sung"]],
  sink: [
    ["sank", "sunk"],
    ["sunk", "sunk"]
  ],
  sit: [["sat", "sat"]],
  slay: [
    ["slew", "slain"],
    ["slayed", "slayed"]
  ],
  sleep: [["slept", "slept"]],
  slide: [["slid", "slid"]],
  sling: [["slung", "slung"]],
  slink: [
    ["slinked", "slinked"],
    ["slunk", "slunk"]
  ],
  slit: [["slit", "slit"]],
  smell: [
    ["smelled", "smelled"],
    ["smelt", "smelt"]
  ],
  sneak: [
    ["sneaked", "sneaked"],
    ["snuck", "snuck"]
  ],
  sow: [
    ["sowed", "sown"],
    ["sowed", "sowed"]
  ],
  speak: [["spoke", "spoken"]],
  speed: [
    ["sped", "sped"],
    ["speeded", "speeded"]
  ],
  spell: [
    ["spelled", "spelled"],
    ["spelt", "spelt"]
  ],
  spend: [["spent", "spent"]],
  spill: [
    ["spilled", "spilled"],
    ["spilt", "spilt"]
  ],
  spin: [["spun", "spun"]],
  spit: [
    ["spit", "spit"],
    ["spat", "spat"]
  ],
  split: [["split", "split"]],
  spoil: [
    ["spoiled", "spoiled"],
    ["spoilt", "spoilt"]
  ],
  "spoon-feed": [["spoon-fed", "spoon-fed"]],
  spread: [["spread", "spread"]],
  spring: [
    ["sprang", "sprung"],
    ["sprung", "sprung"]
  ],
  stand: [["stood", "stood"]],
  steal: [["stole", "stolen"]],
  stick: [["stuck", "stuck"]],
  sting: [["stung", "stung"]],
  stink: [
    ["stunk", "stunk"],
    ["stank", "stunk"]
  ],
  strew: [
    ["strewed", "strewn"],
    ["strewed", "strewed"]
  ],
  stride: [["strode", "stridden"]],
  strike: [
    ["struck", "stricken"],
    ["struck", "struck"]
  ],
  string: [["strung", "strung"]],
  strive: [
    ["strove", "striven"],
    ["strived", "strived"]
  ],
  sublet: [["sublet", "sublet"]],
  sunburn: [
    ["sunburned", "sunburned"],
    ["sunburnt", "sunburnt"]
  ],
  swear: [["swore", "sworn"]],
  sweat: [
    ["sweat", "sweat"],
    ["sweated", "sweated"]
  ],
  sweep: [["swept", "swept"]],
  swell: [
    ["swelled", "swollen"],
    ["swelled", "swelled"]
  ],
  swim: [["swam", "swum"]],
  swing: [["swung", "swung"]],
  take: [["took", "taken"]],
  teach: [["taught", "taught"]],
  tear: [["tore", "torn"]],
  telecast: [["telecast", "telecast"]],
  tell: [["told", "told"]],
  "test-drive": [["test-drove", "test-driven"]],
  "test-fly": [["test-flew", "test-flown"]],
  think: [["thought", "thought"]],
  throw: [["threw", "thrown"]],
  thrust: [["thrust", "thrust"]],
  tread: [
    ["trod", "trodden"],
    ["trod", "trod"]
  ],
  typecast: [["typecast", "typecast"]],
  typeset: [["typeset", "typeset"]],
  typewrite: [["typewrote", "typewritten"]],
  unbend: [["unbent", "unbent"]],
  unbind: [["unbound", "unbound"]],
  unclothe: [
    ["unclothed", "unclothed"],
    ["unclad", "unclad"]
  ],
  underbid: [["underbid", "underbid"]],
  undercut: [["undercut", "undercut"]],
  underfeed: [["underfed", "underfed"]],
  undergo: [["underwent", "undergone"]],
  underlie: [["underlay", "underlain"]],
  undersell: [["undersold", "undersold"]],
  underspend: [["underspent", "underspent"]],
  understand: [["understood", "understood"]],
  undertake: [["undertook", "undertaken"]],
  underwrite: [["underwrote", "underwritten"]],
  undo: [["undid", "undone"]],
  unfreeze: [["unfroze", "unfrozen"]],
  unhang: [["unhung", "unhung"]],
  unhide: [["unhid", "unhidden"]],
  unknit: [
    ["unknitted", "unknitted"],
    ["unknit", "unknit"]
  ],
  unlearn: [
    ["unlearned", "unlearned"],
    ["unlearnt", "unlearnt"]
  ],
  unsew: [
    ["unsewed", "unsewn"],
    ["unsewed", "unsewed"]
  ],
  unsling: [["unslung", "unslung"]],
  unspin: [["unspun", "unspun"]],
  unstick: [["unstuck", "unstuck"]],
  unstring: [["unstrung", "unstrung"]],
  unweave: [
    ["unwove", "unwoven"],
    ["unweaved", "unweaved"]
  ],
  unwind: [["unwound", "unwound"]],
  uphold: [["upheld", "upheld"]],
  upset: [["upset", "upset"]],
  wake: [
    ["woke", "woken"],
    ["waked", "waked"]
  ],
  waylay: [["waylaid", "waylaid"]],
  wear: [["wore", "worn"]],
  weave: [
    ["wove", "woven"],
    ["weaved", "weaved"]
  ],
  wed: [
    ["wed", "wed"],
    ["wedded", "wedded"]
  ],
  weep: [["wept", "wept"]],
  wet: [
    ["wet", "wet"],
    ["wetted", "wetted"]
  ],
  win: [["won", "won"]],
  wind: [["wound", "wound"]],
  withdraw: [["withdrew", "withdrawn"]],
  withhold: [["withheld", "withheld"]],
  withstand: [["withstood", "withstood"]],
  wring: [["wrung", "wrung"]],
  write: [["wrote", "written"]]
};

export default irregularVerbs;
