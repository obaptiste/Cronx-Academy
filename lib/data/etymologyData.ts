import type {
  EtymologyLanguageNode,
  EtymologyTimelineEvent,
  WordDetectiveRound,
  DeadLanguage,
  EtymologyQuizQuestion,
} from '@/types';

// ─── Language Family Tree ────────────────────────────────────────────────────

export const languageNodes: EtymologyLanguageNode[] = [
  // Root
  {
    id: 'pie',
    name: 'Proto-Indo-European (PIE)',
    type: 'root',
    era: '~4500–2500 BCE',
    region: 'Pontic-Caspian steppes (modern Ukraine/Russia)',
    status: 'extinct',
    examples: [
      {
        modernWord: 'father',
        chain: [
          'father (English)',
          'fæder (Old English)',
          'fadēr (Proto-Germanic)',
          '*ph₂tḗr (PIE)',
        ],
        meaning:
          'Compare: pater (Latin), patḗr (Greek), pitṛ́ (Sanskrit) — all from the same ancient root across thousands of miles.',
      },
      {
        modernWord: 'water',
        chain: ['water (English)', 'wæter (Old English)', '*watōr (Proto-Germanic)', '*wódr̥ (PIE)'],
        meaning: 'Greek húdōr (→ hydro-), Latin unda (→ undulate) — the PIE root *wed- runs deep.',
      },
    ],
    didYouKnow:
      "PIE was spoken by nomadic pastoralists on the Eurasian steppes. We have NO written records — linguists reconstructed it entirely by comparing patterns across its descendant languages. It's archaeology through words.",
  },
  // ─ Celtic family
  {
    id: 'celtic',
    name: 'Celtic',
    type: 'family',
    parent: 'pie',
    era: '~1000 BCE – present',
    region: 'Originally all of Western Europe; now Ireland, Wales, Brittany, Scotland',
    status: 'living',
    speakers: 'Approx. 1.5 million combined',
    examples: [
      {
        modernWord: 'Avon (river name)',
        chain: [
          'Avon (English river name)',
          'afon (Welsh, "river")',
          'abhainn (Irish)',
          '*abonā (Proto-Celtic)',
          '*h₂ep- (PIE, "water")',
        ],
        meaning:
          'There are 8 rivers called Avon in Britain — all from Celtic. The Romans borrowed the name too.',
      },
    ],
    didYouKnow:
      'Celtic languages once dominated all of Western Europe — from Turkey to Ireland. The Romans pushed them to the Atlantic fringe. Celtic is the original language family of Britain before English even existed.',
    caribbeanConnection:
      "Many Caribbean islands were colonised by British settlers with Celtic roots — from Cornwall, Ireland, and Scotland. Celtic words like 'clan' and 'whiskey' (uisce beatha, 'water of life') reached the Caribbean through these settlers.",
  },
  {
    id: 'irish',
    name: 'Irish Gaelic',
    type: 'language',
    parent: 'celtic',
    era: '~500 CE – present',
    region: 'Ireland',
    status: 'living',
    speakers: 'Under 100,000 daily speakers (endangered)',
    examples: [
      {
        modernWord: 'whiskey',
        chain: ['whiskey (English)', 'fuisce (Irish)', 'uisce beatha (Irish, "water of life")'],
        meaning:
          "The same concept gives French 'eau-de-vie' and Latin 'aqua vitae' — water of life across languages.",
      },
    ],
    didYouKnow:
      "Irish Gaelic is Ireland's first official language, yet fewer than 100,000 people speak it daily. Centuries of British colonisation suppressed it. Revival efforts continue — but it's still endangered.",
  },
  {
    id: 'welsh',
    name: 'Welsh (Cymraeg)',
    type: 'language',
    parent: 'celtic',
    era: '~6th century CE – present',
    region: 'Wales, UK',
    status: 'living',
    speakers: 'Approx. 800,000 speakers',
    examples: [
      {
        modernWord: 'dragon',
        chain: ['dragon (English)', 'draig (Welsh)', 'draco (Latin)', 'drakōn (Greek)'],
        meaning:
          "The Welsh dragon (Y Ddraig Goch — 'The Red Dragon') is on the Welsh flag. An ancient word.",
      },
    ],
    didYouKnow:
      'Welsh is the strongest surviving Celtic language — spoken continuously in Wales for 1,500 years. The Welsh government mandates bilingual education, bilingual road signs, and Welsh-language TV.',
  },
  {
    id: 'breton',
    name: 'Breton',
    type: 'language',
    parent: 'celtic',
    era: '~6th century CE – present',
    region: 'Brittany, France',
    status: 'living',
    speakers: 'Approx. 200,000 speakers',
    examples: [
      {
        modernWord: 'Brittany',
        chain: [
          'Brittany (English)',
          'Bretagne (French)',
          'Britannia (Latin)',
          'Brython (Celtic, "Briton")',
        ],
        meaning:
          "Brittany = 'Little Britain' — named by Celtic settlers who migrated from southwest Britain around 500 CE.",
      },
    ],
    didYouKnow:
      'Breton is more closely related to Welsh and Cornish than to Irish. Its speakers migrated from southwest Britain to what is now France — they took their language with them across the Channel.',
  },
  {
    id: 'scottish-gaelic',
    name: 'Scottish Gaelic',
    type: 'language',
    parent: 'celtic',
    era: '~5th century CE – present',
    region: 'Scottish Highlands and Western Isles',
    status: 'living',
    speakers: 'Approx. 60,000 speakers',
    examples: [
      {
        modernWord: 'clan',
        chain: ['clan (English)', 'clann (Scottish Gaelic/Irish, "children/family")'],
        meaning:
          "The word 'clan' entered English directly from Scottish Gaelic during the Highland clan system.",
      },
    ],
    didYouKnow:
      "Scottish Gaelic arrived from Ireland around 500 CE. Today it's mostly spoken in the Hebridean islands. Many Scots-Gaelic speakers emigrated to or were transported to the Caribbean in the 17th–19th centuries.",
    caribbeanConnection:
      'Scottish Highlanders — many Gaelic-speaking — were transported to or emigrated to the Caribbean from the 1600s onward. Scottish surnames and place names appear across Jamaica, Barbados, and Guyana.',
  },
  {
    id: 'cornish',
    name: 'Cornish',
    type: 'language',
    parent: 'celtic',
    era: '~6th century – extinct ~1777, revived 20th century',
    region: 'Cornwall, England',
    status: 'revived',
    speakers: 'Approx. 600 revived speakers',
    examples: [
      {
        modernWord: 'penguin (possibly)',
        chain: ['penguin (English)', 'pen gwyn (Cornish/Welsh, "white head")'],
        meaning:
          "The word 'penguin' may come from Cornish or Welsh pen gwyn — though linguists still debate this!",
      },
    ],
    didYouKnow:
      'Dolly Pentreath (died 1777) is often cited as the last native Cornish speaker. The language was declared extinct — then activists began reviving it. Today around 600 people speak a language that came back from the dead.',
  },
  // ─ Germanic family
  {
    id: 'germanic',
    name: 'Germanic',
    type: 'family',
    parent: 'pie',
    era: '~500 BCE – present',
    region: 'Originally Scandinavia and northern Europe',
    status: 'living',
    examples: [
      {
        modernWord: 'house',
        chain: [
          'house (English)',
          'hūs (Old English)',
          'gudhus (Gothic, "god-house/temple")',
          '*keus- (PIE, "to hide/cover")',
        ],
        meaning:
          "The concept of a house as a 'covering place' goes back 6,000 years. Gothic used it for God's house.",
      },
    ],
    didYouKnow:
      "Germanic languages divided into North Germanic (Scandinavian) and West Germanic (English, German, Dutch) around 500 CE. The Vikings later brought North Germanic words flooding into English — 'sky', 'knife', 'egg', 'they', 'their', 'them' are all Old Norse.",
  },
  {
    id: 'north-germanic',
    name: 'North Germanic',
    type: 'subfamily',
    parent: 'germanic',
    era: '~800 CE – present',
    region: 'Scandinavia, Iceland',
    status: 'living',
    examples: [
      {
        modernWord: 'Thursday',
        chain: [
          'Thursday (English)',
          'Þūnresdæg (Old English)',
          'Þórsdagr (Old Norse)',
          'Þórr (Norse god of thunder)',
        ],
        meaning:
          "Thursday = Thor's Day! Four English day names come from Norse gods: Tuesday (Týr), Wednesday (Woden), Thursday (Thor), Friday (Frigg).",
      },
    ],
    didYouKnow:
      "The Vikings brought enormous amounts of Old Norse vocabulary into English during the 8th–11th centuries. Even the word 'they' is Old Norse — Old English used a different pronoun.",
  },
  {
    id: 'swedish',
    name: 'Swedish (Svenska)',
    type: 'language',
    parent: 'north-germanic',
    era: '~12th century CE – present',
    region: 'Sweden',
    status: 'living',
    speakers: 'Approx. 10 million',
    examples: [
      {
        modernWord: 'ombudsman',
        chain: ['ombudsman (English)', 'ombudsman (Swedish, "legal representative")'],
        meaning:
          'This Swedish word entered English unchanged — it means a person who investigates complaints against institutions.',
      },
    ],
    didYouKnow:
      'Swedish, Norwegian, and Danish are mutually intelligible — speakers of one can often understand the others. They all evolved from Old Norse within the last 1,000 years.',
  },
  {
    id: 'icelandic',
    name: 'Icelandic (Íslenska)',
    type: 'language',
    parent: 'north-germanic',
    era: '~9th century CE – present',
    region: 'Iceland',
    status: 'living',
    speakers: 'Approx. 370,000',
    examples: [
      {
        modernWord: 'geyser',
        chain: [
          'geyser (English)',
          'Geysir (Icelandic hot spring name)',
          'gjósa (Old Norse, "to gush")',
        ],
        meaning:
          "Named after the specific Icelandic geyser 'Geysir' — the place name became the word for all geysers.",
      },
    ],
    didYouKnow:
      'Icelandic has changed so little in 1,000 years that Icelanders can still read 9th-century Viking sagas in the original — like English speakers being able to read Beowulf without any help.',
  },
  {
    id: 'norn',
    name: 'Norn ☠',
    type: 'language',
    parent: 'north-germanic',
    era: '~9th century CE – ~19th century CE',
    region: 'Orkney and Shetland, Scotland',
    status: 'extinct',
    examples: [
      {
        modernWord: 'bairn (Orcadian dialect)',
        chain: ['bairn (Scottish dialect, "child")', 'barn (Norn/Old Norse, "child/barn")'],
        meaning:
          'Traces of Norn survive in Orkney and Shetland dialect words that English speakers in those islands still use.',
      },
    ],
    didYouKnow:
      'Norn died when Orkney and Shetland were transferred from Norway to Scotland in 1468. Scots English gradually replaced it. The last speakers probably died in the 18th–19th century.',
  },
  {
    id: 'west-germanic',
    name: 'West Germanic',
    type: 'subfamily',
    parent: 'germanic',
    era: '~400 CE – present',
    region: 'Britain, Germany, Netherlands, Belgium',
    status: 'living',
    examples: [
      {
        modernWord: 'apple',
        chain: ['apple (English)', 'æppel (Old English)', '*aplaz (Proto-Germanic)'],
        meaning:
          'One of the oldest cultivated fruits — the Germanic word for apple is ancient and widespread.',
      },
    ],
    didYouKnow:
      'West Germanic languages evolved from tribes in what is now Germany and the Netherlands. Anglo-Saxon settlers brought West Germanic to Britain in the 5th–6th centuries CE, forming the foundation of English.',
  },
  {
    id: 'english',
    name: 'English',
    type: 'language',
    parent: 'west-germanic',
    era: '~450 CE – present',
    region: 'Originally Britain; now global (70+ countries)',
    status: 'living',
    speakers: 'Approx. 1.5 billion (native + second language)',
    examples: [
      {
        modernWord: 'beef / cow',
        chain: [
          'beef (English, for eating) → bœuf (French) → bos/bovis (Latin) → *gʷōus (PIE)',
          'cow (English, for the animal) → cū (Old English) → *kWōus (PIE)',
        ],
        meaning:
          'After 1066, French-speaking Normans ate the meat while Anglo-Saxon peasants tended the animals — English ended up with two words for the same creature.',
      },
    ],
    didYouKnow:
      "English is a hybrid — 60% of its vocabulary comes from French and Latin (post-1066), while its grammar and most common words are Germanic. It is the world's great linguistic crossroads.",
    caribbeanConnection:
      'English colonised Jamaica (1655), Barbados (1627), Trinidad (1797), and many other Caribbean islands. Caribbean English Creoles — like Jamaican Patois — evolved from contact between English and African languages, creating entirely new forms.',
  },
  {
    id: 'german',
    name: 'German (Deutsch)',
    type: 'language',
    parent: 'west-germanic',
    era: '~8th century CE – present',
    region: 'Germany, Austria, Switzerland',
    status: 'living',
    speakers: 'Approx. 90 million native speakers',
    examples: [
      {
        modernWord: 'kindergarten',
        chain: ['kindergarten (English)', 'Kindergarten (German, "children-garden")'],
        meaning:
          'Friedrich Froebel invented the concept in 1837 — the English-speaking world adopted both the idea AND the German word.',
      },
    ],
    didYouKnow:
      "German builds new concepts by joining words into compounds — sometimes spectacularly long ones. Weltanschauung (world-view), Schadenfreude (joy at others' misfortune), Doppelgänger (double-walker) all entered English from German.",
  },
  {
    id: 'dutch',
    name: 'Dutch (Nederlands)',
    type: 'language',
    parent: 'west-germanic',
    era: '~12th century CE – present',
    region: 'Netherlands, Belgium',
    status: 'living',
    speakers: 'Approx. 25 million',
    examples: [
      {
        modernWord: 'coleslaw',
        chain: ['coleslaw (English)', 'koolsla (Dutch, "cabbage salad")'],
        meaning:
          'Dutch colonial settlers in America brought their cuisine — and their vocabulary — with them.',
      },
    ],
    didYouKnow:
      'Dutch colonial presence in the Caribbean (Curaçao, Aruba, Suriname) created Papiamentu — a remarkable creole blending Dutch, Spanish, Portuguese, and West African languages.',
    caribbeanConnection:
      "The Dutch colonised Curaçao (1634), Aruba, and Suriname. Papiamentu, spoken in Curaçao and Aruba, is one of the Caribbean's most fascinating linguistic creations — mixing Dutch, Spanish, Portuguese, and African languages into something entirely new.",
  },
  {
    id: 'frisian',
    name: 'West Frisian',
    type: 'language',
    parent: 'west-germanic',
    era: '~8th century CE – present',
    region: 'Friesland, Netherlands',
    status: 'living',
    speakers: 'Approx. 470,000',
    examples: [
      {
        modernWord: 'butter',
        chain: ['butter (English)', 'bûter (Frisian)', 'butere (Old English)'],
        meaning:
          "Frisian and Old English were so similar that a medieval rhyme tested who was Frisian: 'Bûter, brea, en griene tsiis' — non-Frisians couldn't say it.",
      },
    ],
    didYouKnow:
      'Frisian is the closest living language to English — more closely related than German or Dutch. If you speak both English and Frisian, you would notice astonishing similarities in core vocabulary.',
  },
  // ─ Italic/Romance family
  {
    id: 'romance',
    name: 'Italic / Romance',
    type: 'family',
    parent: 'pie',
    era: '~3rd century BCE (Latin) – present',
    region: 'Southern and Western Europe, Americas, Africa',
    status: 'living',
    examples: [
      {
        modernWord: 'language',
        chain: [
          'language (English)',
          'langage (Old French)',
          'lingua (Latin, "tongue")',
          '*dn̥ǵʰwéh₂s (PIE)',
        ],
        meaning: "Latin 'lingua' gives us linguistics, bilingual, and 'language' itself.",
      },
    ],
    didYouKnow:
      'Romance languages evolved from Vulgar Latin — everyday spoken Latin, NOT the formal written version. When the Roman Empire fell, Latin evolved differently in different regions, eventually becoming French, Spanish, Portuguese, Italian, and Romanian.',
    caribbeanConnection:
      'Spanish, French, and Portuguese colonisation carried Romance languages throughout the Caribbean. Spanish dominates Cuba, Dominican Republic, and Puerto Rico. French and French Creoles are the heartbeat of Haiti, Martinique, and Guadeloupe.',
  },
  {
    id: 'french',
    name: 'French (Français)',
    type: 'language',
    parent: 'romance',
    era: '~9th century CE – present',
    region: 'France, Belgium, and 29 other countries',
    status: 'living',
    speakers: 'Approx. 300 million',
    examples: [
      {
        modernWord: 'beef',
        chain: ['beef (English)', 'bœuf (French)', 'bos/bovis (Latin)', '*gʷōus (PIE)'],
        meaning:
          "After 1066, French vocabulary flooded English — 'beef' for the meat, 'cow' for the living animal.",
      },
    ],
    didYouKnow:
      'The Norman Conquest of 1066 introduced French into English so thoroughly that English has two words for many concepts: freedom (Germanic) / liberty (French), house / mansion, king / royal.',
    caribbeanConnection:
      "France colonised Haiti, Martinique, and Guadeloupe. Haitian Creole evolved from French and West African languages — it's spoken by 11 million Haitians and is a fully developed language in its own right, not just 'broken French'.",
  },
  {
    id: 'spanish',
    name: 'Spanish (Español)',
    type: 'language',
    parent: 'romance',
    era: '~10th century CE – present',
    region: 'Spain and 20 Latin American countries',
    status: 'living',
    speakers: 'Approx. 490 million native speakers',
    examples: [
      {
        modernWord: 'hurricane',
        chain: [
          'hurricane (English)',
          'huracán (Spanish)',
          'hurakán (Taíno — indigenous Caribbean language)',
        ],
        meaning:
          'Spanish colonisers heard the Taíno word for their storm god and adopted it — it then entered English through Spanish.',
      },
    ],
    didYouKnow:
      "Spanish has more native speakers than English. Columbus's arrival in the Caribbean in 1492 began one of the most dramatic language spreads in human history.",
    caribbeanConnection:
      'Spanish is the primary language of Cuba, Dominican Republic, and Puerto Rico. Colonisation began in 1492, and Spanish absorbed dozens of Taíno words: hurricane, canoe, tobacco, hammock, barbecue — words now used worldwide.',
  },
  {
    id: 'portuguese',
    name: 'Portuguese (Português)',
    type: 'language',
    parent: 'romance',
    era: '~12th century CE – present',
    region: 'Portugal, Brazil, Angola, Mozambique',
    status: 'living',
    speakers: 'Approx. 250 million',
    examples: [
      {
        modernWord: 'flamingo',
        chain: ['flamingo (English)', 'flamingo (Portuguese, "flame-coloured")'],
        meaning:
          'Named by Portuguese explorers — the bright pink bird reminded them of flame (or possibly Flemish people, another theory).',
      },
    ],
    didYouKnow:
      'Portuguese and Spanish diverged from the same medieval Iberian Latin around 900–1000 CE — they are still mutually intelligible. Brazil alone accounts for over 200 million Portuguese speakers.',
    caribbeanConnection:
      'Portugal colonised Brazil, deeply connected to the Atlantic world. Brazilian Portuguese absorbed numerous Tupi indigenous words and African languages, creating a rich creolised linguistic landscape.',
  },
  {
    id: 'italian',
    name: 'Italian (Italiano)',
    type: 'language',
    parent: 'romance',
    era: '~10th century CE – present',
    region: 'Italy, Switzerland',
    status: 'living',
    speakers: 'Approx. 65 million',
    examples: [
      {
        modernWord: 'piano',
        chain: [
          'piano (English)',
          'pianoforte (Italian, "soft-loud")',
          'piano (Italian, "soft/gentle")',
        ],
        meaning:
          'The instrument was named because, unlike a harpsichord, it could play softly (piano) AND loudly (forte).',
      },
    ],
    didYouKnow:
      'Global music terminology comes from Italian: tempo, forte, piano, allegro, soprano, opera — Italian composers dominated European music from the 16th–18th centuries and their vocabulary went global with their art.',
  },
  {
    id: 'romanian',
    name: 'Romanian (Română)',
    type: 'language',
    parent: 'romance',
    era: '~10th century CE – present',
    region: 'Romania, Moldova',
    status: 'living',
    speakers: 'Approx. 24 million',
    examples: [
      {
        modernWord: 'Romania (the country name)',
        chain: [
          'România (Romanian)',
          'Romani (Latin, "Romans")',
          'Roman (Latin colonisers, 106 CE)',
        ],
        meaning:
          "Romania literally means 'Land of the Romans' — the Romans colonised Dacia in 106 CE and left their language.",
      },
    ],
    didYouKnow:
      'Romanian is a Romance island in Eastern Europe, surrounded by Slavic and other non-Romance languages. It preserved Latin features that other Romance languages lost — a remarkable survivor.',
  },
  {
    id: 'dalmatian',
    name: 'Dalmatian ☠',
    type: 'language',
    parent: 'romance',
    era: '~10th century CE – 1898',
    region: 'Dalmatian coast (modern Croatia)',
    status: 'extinct',
    examples: [
      {
        modernWord: '(no modern form)',
        chain: [
          'tuota (Dalmatian, "father")',
          'Compare: padre (Italian), père (French), pater (Latin)',
          'All from PIE *ph₂tḗr — same root, dramatically different paths',
        ],
        meaning:
          "Dalmatian's words look nothing like other Romance languages — 1,000 years of isolation shaped it uniquely.",
      },
    ],
    didYouKnow:
      'Antonio Udaina (Tuone) was the last known speaker of Dalmatian. He died in 1898 when a landmine explosion killed him — a language that survived over 1,000 years ended not with a cultural shift but with a single explosion.',
  },
  // ─ Slavic family
  {
    id: 'slavic',
    name: 'Slavic',
    type: 'family',
    parent: 'pie',
    era: '~500 CE – present',
    region: 'Central and Eastern Europe',
    status: 'living',
    examples: [
      {
        modernWord: 'vampire',
        chain: ['vampire (English)', 'vampir (Serbian/Bulgarian)', 'upir (Old Slavic)'],
        meaning:
          "The word 'vampire' entered English from Slavic folklore via 18th-century German reports about Serbian legends.",
      },
    ],
    didYouKnow:
      'Slavic languages underwent a dramatic expansion between 500–900 CE, spreading from a small homeland near the Carpathians across half of Europe — from the Czech Republic to Russia to Bulgaria.',
  },
  {
    id: 'russian',
    name: 'Russian (Русский)',
    type: 'language',
    parent: 'slavic',
    era: '~10th century CE – present',
    region: 'Russia and surrounding countries',
    status: 'living',
    speakers: 'Approx. 150 million native speakers',
    examples: [
      {
        modernWord: 'sputnik',
        chain: ['sputnik (English)', 'спутник (Russian, "fellow traveller/satellite")'],
        meaning:
          "The 1957 Soviet satellite gave English 'sputnik' — and kicked off the Space Race. The Russian word literally means 'companion'.",
      },
    ],
    didYouKnow:
      'Russian uses the Cyrillic alphabet, created in the 9th century by Byzantine missionaries. Despite looking completely different, Russian and English share thousands of common PIE roots buried under 6,000 years of change.',
  },
  {
    id: 'polish',
    name: 'Polish (Polski)',
    type: 'language',
    parent: 'slavic',
    era: '~10th century CE – present',
    region: 'Poland',
    status: 'living',
    speakers: 'Approx. 45 million',
    examples: [
      {
        modernWord: 'polka',
        chain: [
          'polka (English/international)',
          'polka (Czech/Polish, possibly "half-step" or "Polish woman")',
        ],
        meaning:
          'The dance and its name spread across Europe in the 19th century — linguists still debate its exact origin.',
      },
    ],
    didYouKnow:
      "Polish survived the Nazi occupation's systematic attempt to destroy Polish culture and language. Secret schools maintained Polish identity during WWII — language as resistance.",
  },
  {
    id: 'czech',
    name: 'Czech (Čeština)',
    type: 'language',
    parent: 'slavic',
    era: '~10th century CE – present',
    region: 'Czech Republic',
    status: 'living',
    speakers: 'Approx. 10 million',
    examples: [
      {
        modernWord: 'robot',
        chain: [
          'robot (English)',
          'robot (Czech, "forced labour/drudgery")',
          'robota (Czech, "drudgery")',
        ],
        meaning:
          "Czech writer Karel Čapek coined 'robot' in his 1920 play R.U.R. — from 'robota' meaning forced labour. Czech gave us the word for the future.",
      },
    ],
    didYouKnow:
      "The English word 'robot' is Czech! Karel Čapek's 1920 science fiction play introduced the concept of artificial workers — and his word for them went global. Czech gave English the word for one of the most futuristic concepts we know.",
  },
  // ─ Hellenic family
  {
    id: 'hellenic',
    name: 'Hellenic',
    type: 'family',
    parent: 'pie',
    era: '~1400 BCE – present',
    region: 'Greece and surrounding regions',
    status: 'living',
    examples: [
      {
        modernWord: 'philosophy',
        chain: [
          'philosophy (English)',
          'philosophia (Latin)',
          'philosophía (Greek, "love of wisdom")',
          'philos (Greek, "loving") + sophia (Greek, "wisdom")',
        ],
        meaning:
          'Greek gave us the vocabulary of intellectual life: philosophy, democracy, mathematics, history, physics, biology...',
      },
    ],
    didYouKnow:
      'Greek has continuous written records from 1400 BCE (Linear B tablets) through Classical Greek to Modern Greek — 3,400 years of unbroken written history in a single language.',
  },
  {
    id: 'greek',
    name: 'Greek (Ελληνικά)',
    type: 'language',
    parent: 'hellenic',
    era: '~1400 BCE – present',
    region: 'Greece, Cyprus',
    status: 'living',
    speakers: 'Approx. 13 million',
    examples: [
      {
        modernWord: 'school',
        chain: [
          'school (English)',
          'scōl (Old English)',
          'schola (Latin)',
          'skholḗ (Greek, "leisure/free time")',
        ],
        meaning:
          "The Greeks studied in their free time — hence 'leisure' became 'school.' (The ancient Greeks also invented the art of not wanting to go.)",
      },
    ],
    didYouKnow:
      'A modern Greek speaker can read Classical Greek with effort — like an English speaker reading Shakespeare. Ancient Greek from 2,500 years ago is challenging without study, but the thread of continuity is unbroken.',
  },
  // ─ Baltic family
  {
    id: 'baltic',
    name: 'Baltic',
    type: 'family',
    parent: 'pie',
    era: '~500 BCE – present',
    region: 'Baltic coast (modern Latvia, Lithuania)',
    status: 'living',
    examples: [
      {
        modernWord: 'amber',
        chain: [
          'amber (English)',
          'ambre (Old French)',
          'ambar (Arabic, via Baltic trade routes)',
          'dzintars (Latvian amber, traded across ancient Europe)',
        ],
        meaning:
          'Baltic amber — fossilised tree resin — was so valuable in ancient trade that it influenced words used across many language families.',
      },
    ],
    didYouKnow:
      "Baltic languages (especially Lithuanian) are the most conservative Indo-European languages still spoken — they preserved features of PIE that were lost everywhere else. Linguists call Lithuanian a 'living fossil' of PIE.",
  },
  {
    id: 'lithuanian',
    name: 'Lithuanian (Lietuvių)',
    type: 'language',
    parent: 'baltic',
    era: '~14th century CE – present',
    region: 'Lithuania',
    status: 'living',
    speakers: 'Approx. 3 million',
    examples: [
      {
        modernWord: 'fire (comparison)',
        chain: [
          'ugnis (Lithuanian, "fire")',
          'ignis (Latin, "fire") → ignite',
          'Both from PIE *h₁égnis — the same root, preserved remarkably intact in Lithuanian',
        ],
        meaning:
          "Lithuanian's connection to Latin's 'ignis' shows how Baltic languages preserve ancient PIE features lost almost everywhere else.",
      },
    ],
    didYouKnow:
      'Lithuanian has a grammatical case system similar to ancient Latin and Sanskrit — it preserved features of PIE that most other languages discarded thousands of years ago. For linguists, Lithuanian is a treasure chest.',
  },
  {
    id: 'latvian',
    name: 'Latvian (Latviešu)',
    type: 'language',
    parent: 'baltic',
    era: '~13th century CE – present',
    region: 'Latvia',
    status: 'living',
    speakers: 'Approx. 1.8 million',
    examples: [
      {
        modernWord: 'amber (dzintars)',
        chain: [
          'dzintars (Latvian, "amber")',
          'Baltic amber traded across ancient Europe from Latvia/Lithuania',
        ],
        meaning:
          'Latvia sits on the Baltic Sea where amber has been gathered and traded for 4,000+ years — it shaped the regional identity.',
      },
    ],
    didYouKnow:
      'Latvian and Lithuanian are the only two surviving Baltic languages — the third, Old Prussian, became extinct around 1700 CE. The Baltic branch almost disappeared entirely.',
  },
  // ─ Basque outlier
  {
    id: 'basque',
    name: 'Basque (Euskara) — The Outlier',
    type: 'language',
    parent: undefined,
    era: 'Unknown — possibly older than 5000 BCE',
    region: 'Basque Country (Spain/France border)',
    status: 'living',
    speakers: 'Approx. 750,000',
    examples: [
      {
        modernWord: 'etxe (house)',
        chain: ['etxe (Basque, "house") — NO known cognates in any other language on Earth'],
        meaning:
          "Unlike English 'house' which traces to PIE *keus-, Basque 'etxe' connects to nothing else known.",
      },
      {
        modernWord: 'ur (water)',
        chain: ['ur (Basque, "water") — NO known cognates in any other language on Earth'],
        meaning:
          'Completely unrelated to PIE *wódr̥, Greek húdōr, or any other water word. A true orphan.',
      },
    ],
    didYouKnow:
      'Basque is the greatest linguistic mystery of Europe. It predates the Indo-European migrations — the last survivor of the languages spoken in Europe BEFORE the Indo-Europeans arrived. Words like etxe (house) and ur (water) are etymological orphans, connecting to nothing else on Earth. It has survived 5,000+ years of contact with PIE languages without being absorbed.',
  },
];

// Helper: build tree structure for rendering
export function getChildren(parentId: string | undefined): EtymologyLanguageNode[] {
  return languageNodes.filter((n) => n.parent === parentId);
}

export function getNodeById(id: string): EtymologyLanguageNode | undefined {
  return languageNodes.find((n) => n.id === id);
}

// ─── Timeline Events ─────────────────────────────────────────────────────────

export const timelineEvents: EtymologyTimelineEvent[] = [
  {
    year: '~4500 BCE',
    event: 'PIE Origins',
    detail: 'Proto-Indo-European spoken on the Pontic-Caspian steppes',
    narrative:
      "On the vast grasslands north of the Black Sea and Caspian Sea, nomadic herders spoke a language we now call Proto-Indo-European. They had words for wagon, wheel, horse, and sky — and those words would one day become the foundation of over 400 languages spoken by half the world's population.",
    etymologicalExample:
      "PIE *péḱu (livestock) → Latin pecunia (money, because cattle = wealth) → pecuniary (English). Your money's origin is in ancient cattle herding.",
  },
  {
    year: '~3000 BCE',
    event: 'First Waves',
    detail: 'Indo-European spreads across Europe, displacing earlier languages',
    narrative:
      'Over millennia, PIE speakers spread across Europe and Asia. They brought their language with them, and the earlier languages of Europe — ancestors of Basque — were gradually displaced or absorbed. Only Basque survived. Every other pre-IE language in Europe was lost.',
    etymologicalExample:
      "The place name 'London' may come from pre-Celtic or early Celtic roots (*Lond-, meaning 'wild/bold place') — showing how place names outlast the languages that created them.",
  },
  {
    year: '~1000 BCE',
    event: 'Celtic Expansion',
    detail: 'Celtic languages dominate Western Europe',
    narrative:
      'Celtic languages spread from Central Europe westward, eventually covering Britain, Ireland, France (then called Gaul), Spain, and even as far as modern Turkey (the Galatians). At their peak, Celtic languages were the dominant language family of Western Europe.',
    etymologicalExample:
      "The River Thames comes from a Celtic root *tamesas meaning 'dark river.' British rivers — Thames, Severn, Avon, Exe — are some of the oldest surviving Celtic words in England.",
  },
  {
    year: '27 BCE',
    event: 'Roman Empire',
    detail: 'Latin spreads as the administrative language of empire',
    narrative:
      'The Roman Empire stretched from Britain to Egypt. Wherever Romans ruled, Latin followed — not the elegant Classical Latin of Cicero, but Vulgar Latin (everyday spoken Latin). Over centuries, this Vulgar Latin evolved differently in different regions, giving birth to French, Spanish, Portuguese, Italian, and Romanian.',
    etymologicalExample:
      "Latin 'augustus' (meaning 'majestic/sacred') became both the month August AND the name Augustus — a word that shaped centuries of European naming.",
    caribbeanConnection:
      'Roman Catholic missionaries later carried Latin-descended languages — Spanish, French, Portuguese — to the Caribbean, reshaping its entire linguistic landscape.',
  },
  {
    year: '400–600 CE',
    event: 'Migration Period',
    detail: "Germanic tribes reshape Europe's linguistic map",
    narrative:
      'As the Roman Empire crumbled, Germanic-speaking tribes — Visigoths, Ostrogoths, Franks, Vandals, Angles, Saxons, Jutes — swept across Europe. The Angles and Saxons sailed to Britain, bringing West Germanic speech that would eventually become English. France got its name from the Franks.',
    etymologicalExample:
      "'England' = 'Angle-land' — land of the Angles, a Germanic tribe from the Danish peninsula. The country's very name is Germanic.",
  },
  {
    year: '500–1000 CE',
    event: 'Slavic Expansion',
    detail: 'Slavic languages spread across Central and Eastern Europe',
    narrative:
      'From a homeland near the Carpathian mountains, Slavic-speaking peoples expanded dramatically, filling the linguistic vacuum left by the Migration Period upheavals. Within 400 years, Slavic languages reached from the Adriatic to the Urals.',
    etymologicalExample:
      "The word 'slave' has a dark etymology: it comes from 'Slav' — so many Slavic people were enslaved in medieval Europe that their ethnonym became the word for enslaved person.",
  },
  {
    year: '1066 CE',
    event: 'Norman Conquest',
    detail: 'French floods into English, creating the hybrid language we speak today',
    narrative:
      'When William the Conqueror defeated King Harold at the Battle of Hastings, Norman French became the language of power in England. For 300 years, English was the language of peasants; French was the language of nobles. The collision created modern English — a Germanic language with a vast French and Latin vocabulary overlay.',
    etymologicalExample:
      'English pairs: cow (Germanic) / beef (French), pig / pork, sheep / mutton, house / mansion, king / royal, freedom / liberty. The Germanic word usually refers to everyday things; the French word often feels more formal or elevated.',
  },
  {
    year: '1440 CE',
    event: 'Printing Press',
    detail: 'Gutenberg standardises languages, dramatically slowing dialectal drift',
    narrative:
      "Before the printing press, each scribe copied texts slightly differently, and dialects drifted freely. After Gutenberg, printed books spread a single standardised form of each language. English spelling was effectively frozen around 1500 CE — which is why we still write 'knight' though we stopped pronouncing the 'k' and 'gh' centuries ago.",
    etymologicalExample:
      "The word 'knight' is a perfect fossil: we write it as if it's 1400, but pronounce it as if it's 2024. The printing press preserved old spellings even as spoken language moved on.",
  },
  {
    year: '1492–1600s',
    event: 'Colonial Era',
    detail: 'European languages cross the Atlantic to the Caribbean and Americas',
    narrative:
      "Columbus's arrival in the Bahamas in 1492 triggered the most dramatic linguistic upheaval since the PIE migrations. Spanish, English, French, Dutch, and Portuguese were carried across the Atlantic by colonisers. Indigenous languages — including Taíno, Carib, and hundreds of others — were devastated. But their words lived on, absorbed into the European tongues that displaced them.",
    etymologicalExample:
      'Words from Taíno (the indigenous Caribbean language) that entered ALL European languages: hurricane (hurakán), canoe (canaoua), barbecue (barbacoa), hammock (hamaca), tobacco (tabaco), maize (mahiz). Indigenous Caribbean vocabulary went global.',
    caribbeanConnection:
      'This is the pivotal moment for Caribbean language history. Spanish arrived in 1492. English arrived in Barbados (1627) and Jamaica (1655). French and Dutch followed. The Caribbean became the most linguistically diverse region per square mile on Earth.',
  },
  {
    year: '1898 CE',
    event: 'Dalmatian Disappears',
    detail: 'The last speaker of Dalmatian is killed in an explosion',
    narrative:
      'Antonio Udaina — known as Tuone — was the last known speaker of Dalmatian, a Romance language spoken on the Adriatic coast for over 1,000 years. A linguist named Antonio Ive had interviewed him years before. Then in 1898, Tuone was killed when a landmine exploded. A language died not with a gradual fade but in a single moment.',
    etymologicalExample:
      "In Dalmatian: 'tuota' (father), 'muarter' (mother) — compare Italian 'padre', 'madre.' The same Latin roots, 1,000 years of separate evolution, forever silenced.",
  },
  {
    year: '20th Century',
    event: 'Revival Movements',
    detail: 'Cornish, Welsh, Irish Gaelic, and Hebrew fight back from near-extinction',
    narrative:
      'The 20th century saw something remarkable: languages fighting back. Hebrew was revived as a living language after 2,000 years as a liturgical tongue. Cornish was reconstructed from historical records after its last native speaker died in 1777. Welsh gained legal protection. These revivals show that language death is not always permanent — with community will and political support, languages can be brought back.',
    etymologicalExample:
      "Modern Hebrew revivalists like Eliezer Ben-Yehuda invented new words for modern concepts: miḥshav (מחשב, 'computer') from the root ḥ-sh-v meaning 'to think/calculate.' Ancient roots, new words.",
    caribbeanConnection:
      'Caribbean Creole languages — Haitian Creole, Jamaican Patois, Papiamentu — are now recognised as legitimate languages in their own right, not dialects of European languages. Their recognition parallels the revival movements.',
  },
  {
    year: 'Present',
    event: 'Endangered Languages',
    detail: 'One language dies approximately every two weeks',
    narrative:
      'Of the approximately 7,000 languages spoken today, half are expected to disappear by the end of this century. Irish Gaelic has fewer than 100,000 daily speakers. Breton faces pressure from French. Frisian from Dutch. Sorbian from German. Each loss represents not just words but entire ways of organising thought, irreplaceable ecological knowledge, and cultural memory that cannot be reconstructed.',
    etymologicalExample:
      "The Areyonga Desert Tiger Snake in Australia has a name in Pitjantjatjara that encodes knowledge about the snake's habitat and behaviour — knowledge that disappears with the language.",
    caribbeanConnection:
      "Caribbean languages like Garifuna (a mix of Arawak, Carib, and French/English/Spanish) are endangered. Kalinago (Island Carib) has very few speakers left. The Caribbean's indigenous linguistic heritage hangs by a thread.",
  },
];

// ─── Word Detective Rounds ────────────────────────────────────────────────────

export const wordDetectiveRounds: WordDetectiveRound[] = [
  {
    word: 'RIVER',
    steps: [
      {
        prompt:
          "Middle English had a word for 'river' — it came from Old French. Which form is it?",
        options: ['rivere', 'flumen', 'wasser'],
        correctIndex: 0,
        explanation:
          "'Rivere' came into Middle English from Old French — the Normans brought it after 1066.",
      },
      {
        prompt: "Old French 'rivere' came from Latin. Which Latin word means 'riverbank'?",
        options: ['aqua', 'rīpāria', 'fluvius'],
        correctIndex: 1,
        explanation:
          "Latin 'rīpāria' meant 'of/near the riverbank' — from 'rīpa' (riverbank). A river is defined by its banks.",
      },
      {
        prompt: "Latin 'rīpāria' descends from a PIE root. Which PIE root meaning 'to flow' is it?",
        options: ['*h₂ep-', '*rei-', '*peth₂-'],
        correctIndex: 1,
        explanation:
          "PIE *rei- meant 'to flow, run' — the ultimate ancestor of river, riviere, and rīpāria.",
      },
    ],
    finalFact:
      "BONUS: Welsh 'afon', Irish 'abhainn', and the English river name 'Avon' ALL come from a DIFFERENT Celtic PIE root (*h₂ep-, 'water'). Britain has two etymological rivers running through it!",
    caribbeanConnection: undefined,
  },
  {
    word: 'SCHOOL',
    steps: [
      {
        prompt: "Old English had 'scōl' for school — it borrowed this from which language?",
        options: ['French', 'Latin', 'Greek directly'],
        correctIndex: 1,
        explanation:
          "Old English borrowed 'scōl' from Latin 'schola', which the Romans had borrowed from Greek.",
      },
      {
        prompt:
          "Latin 'schola' came from Greek 'skholḗ'. What did this Greek word originally mean?",
        options: ['a place of learning', 'leisure / free time', 'a lecture hall'],
        correctIndex: 1,
        explanation:
          "Greek 'skholḗ' originally meant LEISURE — free time for thinking and discussing ideas. The Greeks studied in their free time. The concept of 'school' began as 'having time to think.'",
      },
    ],
    finalFact:
      "The Greeks invented both the idea of school AND the word for not wanting to go — how conveniently circular. 'Skholḗ' (leisure → school) is a perfect reminder that learning began as a privilege of those with free time.",
    caribbeanConnection: undefined,
  },
  {
    word: 'HURRICANE',
    steps: [
      {
        prompt: "English 'hurricane' came through Spanish. What was the Spanish form?",
        options: ['huracanó', 'huracán', 'uragano'],
        correctIndex: 1,
        explanation:
          "Spanish 'huracán' — the Spanish colonisers heard this word from the indigenous people of the Caribbean.",
      },
      {
        prompt: "'Huracán' came from the Taíno language of the Caribbean. What did it refer to?",
        options: ['a type of boat', 'the storm god / spirit of the wind', 'a mountain'],
        correctIndex: 1,
        explanation:
          "In Taíno mythology, 'Hurakán' was the god of wind, storm, and fire — one of the most powerful creator deities. The Spanish adopted the word for the terrifying storms they encountered.",
      },
    ],
    finalFact:
      "CARIBBEAN CONNECTION: This word tells the whole story of colonial linguistics. An indigenous Caribbean spiritual concept ('Hurakán', the storm god) was absorbed into Spanish by colonisers who couldn't deny the storms' power, then spread into English. Taíno vocabulary — hurricane, canoe, hammock, barbecue, tobacco — went global through colonisation.",
    caribbeanConnection:
      "Hurricane is a Taíno word. The Taíno people of the Caribbean named their storm god 'Hurakán' — and the word for one of the most powerful natural forces on Earth preserves their language and spirituality.",
  },
  {
    word: 'BARBECUE',
    steps: [
      {
        prompt: "English 'barbecue' came through Spanish. What was the Spanish form?",
        options: ['barbacoa', 'barbecúa', 'parilla'],
        correctIndex: 0,
        explanation:
          "Spanish 'barbacoa' — the Spanish colonisers borrowed this from the indigenous Taíno people of the Caribbean.",
      },
      {
        prompt: "Taíno 'barbacoa' referred to what?",
        options: [
          'a type of spice',
          'a wooden framework for cooking or sleeping (elevated platform)',
          'an outdoor fire ceremony',
        ],
        correctIndex: 1,
        explanation:
          "Taíno 'barbacoa' was a wooden framework — used both for cooking meat above fire AND as a raised sleeping platform (which also gave us 'hammock'... almost). The Spanish adopted both the technique and the word.",
      },
    ],
    finalFact:
      "CARIBBEAN CONNECTION: 'Barbecue' is 100% Caribbean. The modern global phenomenon of barbecuing — summer staple in the UK, USA, and worldwide — preserves a Taíno word and cooking technique. Every time someone fires up a BBQ, they're unknowingly honouring Caribbean indigenous culture.",
    caribbeanConnection:
      'Barbecue is a Taíno word and concept from the Caribbean. The cooking technique travelled from the Caribbean to the world through Spanish colonisers.',
  },
  {
    word: 'FATHER',
    steps: [
      {
        prompt: "Old English had 'fæder'. Which Proto-Germanic form did it come from?",
        options: ['*fadōr', '*fadēr', '*faþar'],
        correctIndex: 1,
        explanation:
          'Proto-Germanic *fadēr is reconstructed from comparing Old English, Gothic, and other Germanic languages.',
      },
      {
        prompt: "Proto-Germanic *fadēr came from PIE. Which PIE root for 'father' is it?",
        options: ['*méh₂tēr', '*ph₂tḗr', '*bʰréh₂tēr'],
        correctIndex: 1,
        explanation:
          "PIE *ph₂tḗr is the ancient root. Compare: Latin 'pater' (→ paternal), Greek 'patḗr' (→ patriarch), Sanskrit 'pitṛ́' — the same root preserved across 6,000 years and thousands of miles.",
      },
    ],
    finalFact:
      "The word 'father' connects English to Latin, Greek, Sanskrit, Persian, and dozens of other languages. When you say 'father' you're using a word whose ancestry stretches to herders on the Eurasian steppes 6,000 years ago.",
    caribbeanConnection: undefined,
  },
  {
    word: 'CHOCOLATE',
    steps: [
      {
        prompt: "English 'chocolate' came from Spanish. What was the Spanish form?",
        options: ['chocolato', 'chocolate', 'xocolate'],
        correctIndex: 1,
        explanation:
          "Spanish 'chocolate' — which the Spanish colonisers borrowed from indigenous Mesoamerican languages.",
      },
      {
        prompt: "'Chocolate' came from Nahuatl (the Aztec language). What was the Nahuatl word?",
        options: ['xocolātl', 'cacahuatl', 'chicolate'],
        correctIndex: 0,
        explanation:
          "Nahuatl 'xocolātl' — from 'xococ' (bitter/sour) + 'ātl' (water). The original chocolate drink was bitter, unsweetened cacao water. NOT Indo-European at all!",
      },
    ],
    finalFact:
      "DETECTIVE TWIST: 'Chocolate' is NOT Indo-European. It's Nahuatl — the Aztec language of Mexico. This shows how trade and colonisation bring words from completely different language families into European tongues. The same thing happened with Caribbean words: hurricane, canoe, barbecue all entered European languages through contact.",
    caribbeanConnection:
      'Chocolate shows that not all words in European languages have PIE roots — trade and colonisation brought words from Nahuatl, Taíno, and other indigenous languages into English, Spanish, and French.',
  },
];

// ─── Dead Languages Memorial ──────────────────────────────────────────────────

export const deadLanguages: DeadLanguage[] = [
  {
    name: 'Dalmatian',
    family: 'Romance (Indo-European)',
    region: 'Dalmatian coast, modern Croatia (Adriatic Sea)',
    died: '1898 CE',
    lastSpeaker:
      'Antonio Udaina (Tuone Udaina) — killed in a landmine explosion. A language that survived 1,000 years ended in a single moment.',
    legacy:
      'Dalmatian was a unique Romance language that evolved separately from Italian, Spanish, and French. A linguist named Antonio Ive recorded vocabulary before the last speaker died. The language is now documented but silent forever.',
    sampleWords: [
      { word: 'tuota', meaning: 'father (compare Italian "padre")' },
      { word: 'muarter', meaning: 'mother (compare Italian "madre")' },
      { word: 'fraid', meaning: 'brother (compare Italian "fratello")' },
      { word: 'col', meaning: 'eye (compare Italian "occhio")' },
    ],
  },
  {
    name: 'Norn',
    family: 'North Germanic (Indo-European)',
    region: 'Orkney and Shetland Islands, Scotland',
    died: '~18th–19th century CE',
    lastSpeaker:
      'Unknown. Norn gradually merged with Scots English after Orkney and Shetland were transferred from Norway to Scotland in 1468.',
    legacy:
      "Norn was the language of the Vikings who settled Orkney and Shetland. Traces survive in local dialect words (bairn, breeks) and in the islands' place names — almost every hill, bay, and farm has a Norse-derived name.",
    sampleWords: [
      { word: 'grice', meaning: 'pig (preserved in Shetland dialect)' },
      { word: 'vagaland', meaning: 'wave-land — from Old Norse (survives in place names)' },
      { word: 'bere', meaning: 'barley — still used in Orkney farming' },
    ],
  },
  {
    name: 'Cornish',
    family: 'Celtic (Indo-European)',
    region: 'Cornwall, England',
    died: '~1777 CE (revived in 20th century)',
    lastSpeaker:
      'Dolly Pentreath (died 1777) is traditionally cited as the last native Cornish speaker, though historians debate this. The language was declared dead — then revival efforts began.',
    legacy:
      "Cornish is now a remarkable success story of language revival. Reconstructed from historical texts, it has around 600 active speakers today. A language that 'died' came back to life through community determination.",
    sampleWords: [
      { word: 'kernow', meaning: 'Cornwall (the name of the region in Cornish)' },
      { word: 'penn', meaning: 'headland/promontory — many Cornish place names start with Pen-' },
      { word: 'nans', meaning: 'valley — as in Nansledan, Nanstallon' },
      { word: 'tre', meaning: 'settlement/farm — as in Truro, Trewoon' },
    ],
  },
  {
    name: 'Gothic',
    family: 'East Germanic (Indo-European)',
    region: 'Eastern Europe, eventually Crimea',
    died: '~16th century CE',
    lastSpeaker:
      'Unknown. Crimean Gothic — the last remnant — was spoken by isolated communities in the Crimean Peninsula. A Flemish ambassador recorded some vocabulary in 1562.',
    legacy:
      "Gothic is the oldest well-documented Germanic language — it gives us the oldest Germanic texts we have. It also gave us the word 'gothic' (as in Gothic architecture, Gothic fiction) — named after the Goths who carried their language across Europe.",
    sampleWords: [
      { word: 'wulfs', meaning: 'wolf (compare English wolf, German Wolf)' },
      { word: 'gudhus', meaning: 'god-house / temple — house of God (compare English "house")' },
      { word: 'reiks', meaning: 'ruler / powerful — gives us "reich" (German empire)' },
      { word: 'managei', meaning: 'multitude/crowd — related to "many"' },
    ],
  },
  {
    name: 'Etruscan',
    family: 'Unknown — possibly a language isolate (non-Indo-European)',
    region: 'Ancient Italy (modern Tuscany)',
    died: '~1st century CE',
    lastSpeaker: 'Unknown. Etruscan gradually gave way to Latin as Roman power expanded.',
    legacy:
      "Etruscan influenced the Latin alphabet — which became the Roman alphabet — which became the script you're reading right now. The word 'Tuscany' comes from 'Etruscan' (the land of the Etruscans). We can read Etruscan but barely understand it.",
    sampleWords: [
      { word: 'aesar', meaning: 'god — possibly related to Norse "Aesir" (the gods)' },
      { word: 'rasna', meaning: "what the Etruscans called themselves ('the People')" },
      { word: 'nefts', meaning: 'nephew — possibly borrowed into Latin as nepos' },
    ],
  },
  {
    name: 'Polabian',
    family: 'West Slavic (Indo-European)',
    region: 'Northern Germany (Elbe river region)',
    died: '~18th century CE',
    lastSpeaker: 'Unknown. Polabian gradually gave way to German over several centuries.',
    legacy:
      'Polabian was the last West Slavic language spoken in what is now Germany. Its name comes from Slavic "po Labe" meaning "along the Elbe river." A German pastor named Christian Henning recorded vocabulary from the last speakers in the early 1700s — the only substantial record we have.',
    sampleWords: [
      { word: 'müka', meaning: 'flour (compare Polish "mąka")' },
      { word: 'draugus', meaning: 'friend (compare Russian "drug")' },
      { word: 'wüdro', meaning: 'otter (compare German "Otter")' },
    ],
  },
];

// ─── Quiz Questions ───────────────────────────────────────────────────────────

export const quizQuestions: EtymologyQuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does PIE stand for in linguistics?',
    options: [
      'Proto-Indo-European',
      'Pre-Italian Etruscan',
      'Proto-Island European',
      'Pan-Indo European',
    ],
    correctIndex: 0,
    explanation:
      'Proto-Indo-European (PIE) is the reconstructed ancestral language of most European, Iranian, and North Indian languages — spoken ~4500–2500 BCE on the Pontic-Caspian steppes.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Which is the ONLY surviving pre-Indo-European language in Europe?',
    options: ['Finnish', 'Basque', 'Hungarian', 'Estonian'],
    correctIndex: 1,
    explanation:
      'Basque (Euskara) is the sole survivor of the languages spoken in Europe before the Indo-European migrations — a genuine linguistic mystery. Finnish, Hungarian, and Estonian are Uralic languages, a separate family from PIE, but they arrived in Europe after PIE.',
  },
  {
    id: 3,
    type: 'true-false',
    question:
      "True or False: The Greek word 'skholḗ' (origin of 'school') originally meant 'leisure' or 'free time'.",
    options: ['True', 'False'],
    correctIndex: 0,
    explanation:
      "True! Ancient Greeks studied philosophy and ideas in their leisure time — so 'skholḗ' (free time) became the word for a place of learning. School literally began as what you do when you have nothing else to do.",
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Who was the last known speaker of Dalmatian?',
    options: ['Dolly Pentreath', 'Tuone Udaina', 'Antonio Ive', 'Karl Bühler'],
    correctIndex: 1,
    explanation:
      "Tuone Udaina (Antonio Udaina) was the last known speaker of Dalmatian, killed in a landmine explosion in 1898. Antonio Ive was the linguist who had recorded his speech — without those recordings, we'd know almost nothing about Dalmatian.",
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: "The English word 'house' traces back to PIE *keus-. What did this PIE root mean?",
    options: ['to build', 'to hide / cover', 'to rest', 'to gather'],
    correctIndex: 1,
    explanation:
      "PIE *keus- meant 'to hide' or 'to cover' — a house as a covering or hiding place. Gothic used 'gudhus' (god-house) for a temple. The concept of shelter as concealment is ancient.",
  },
  {
    id: 6,
    type: 'multiple-choice',
    question:
      'Which major historical event in 1066 CE flooded the English language with French words?',
    options: [
      'The signing of Magna Carta',
      'The Norman Conquest of England',
      'The invention of the printing press',
      'The Black Death plague',
    ],
    correctIndex: 1,
    explanation:
      'The Norman Conquest brought French-speaking Normans to power in England. For 300 years, French was the language of the ruling class. This is why English has pairs like cow/beef, pig/pork, king/royal — Germanic for everyday life, French for power and cuisine.',
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: "The word 'hurricane' comes from which indigenous Caribbean language?",
    options: ['Carib', 'Taíno', 'Nahuatl', 'Quechua'],
    correctIndex: 1,
    explanation:
      "Taíno! The indigenous Taíno people of the Caribbean had 'Hurakán' — their god of wind and storms. Spanish colonisers adopted the word, which entered English as hurricane. Along with canoe, hammock, barbecue, and tobacco, Taíno vocabulary went global.",
  },
  {
    id: 8,
    type: 'multiple-choice',
    question: 'Which language family does Welsh belong to?',
    options: ['Germanic', 'Romance', 'Celtic', 'Baltic'],
    correctIndex: 2,
    explanation:
      'Welsh is Celtic — the indigenous language family of Britain, Ireland, and formerly much of Western Europe. Celtic languages were pushed to the Atlantic fringe (Wales, Ireland, Scotland, Brittany) by Germanic and Romance expansion.',
  },
  {
    id: 9,
    type: 'true-false',
    question:
      'True or False: Basque is related to Finnish — both are non-Indo-European European languages.',
    options: ['True', 'False'],
    correctIndex: 1,
    explanation:
      'False! Both Basque and Finnish are non-Indo-European, but they are completely unrelated to each other. Finnish belongs to the Uralic family (related to Estonian and Hungarian). Basque is a language isolate with NO known relatives anywhere on Earth.',
  },
  {
    id: 10,
    type: 'multiple-choice',
    question: 'What technology invented around 1440 CE helped standardise European languages?',
    options: [
      'The telegraph',
      "Gutenberg's printing press",
      'The postal service',
      'The dictionary',
    ],
    correctIndex: 1,
    explanation:
      "Gutenberg's printing press (c. 1440) spread a single standardised form of each language widely. Before printing, scribes copied texts slightly differently and dialects drifted freely. After printing, spelling was effectively frozen — hence we still write 'knight' with a 'k' we stopped pronouncing 500 years ago.",
  },
  {
    id: 11,
    type: 'multiple-choice',
    question: "The word 'robot' entered English from which language?",
    options: ['German', 'Czech', 'Russian', 'Polish'],
    correctIndex: 1,
    explanation:
      "Czech! Karel Čapek coined 'robot' in his 1920 play R.U.R. from Czech 'robota' (forced labour/drudgery). The word went global with the concept of artificial workers — Czech gave English one of its most futuristic words.",
  },
  {
    id: 12,
    type: 'multiple-choice',
    question: "Which language is sometimes called a 'living fossil' of Proto-Indo-European?",
    options: ['Icelandic', 'Lithuanian', 'Greek', 'Latin'],
    correctIndex: 1,
    explanation:
      'Lithuanian! It preserved features of PIE that most other languages lost thousands of years ago — including grammatical cases similar to ancient Latin and Sanskrit. Linguists study Lithuanian to understand what PIE may have sounded like.',
  },
  {
    id: 13,
    type: 'multiple-choice',
    question:
      "The word 'barbecue' entered English from Spanish, which borrowed it from which Caribbean people?",
    options: ['The Carib people', 'The Taíno people', 'The Arawak people', 'The Maya people'],
    correctIndex: 1,
    explanation:
      "The Taíno! 'Barbacoa' in Taíno referred to a wooden framework for cooking meat over fire. The Spanish adopted the technique and the word, which eventually became 'barbecue' in English. A Caribbean concept that went global.",
  },
  {
    id: 14,
    type: 'true-false',
    question:
      'True or False: The Dutch language created the Caribbean creole called Papiamentu, spoken in Curaçao and Aruba.',
    options: ['True', 'False'],
    correctIndex: 1,
    explanation:
      "False — but close! Papiamentu evolved from contact between MULTIPLE languages: Dutch (the colonial power), Spanish, Portuguese, and West African languages. It's a creole language — meaning it developed from the mixing of several languages, not from just one. That's what makes creoles linguistically fascinating.",
  },
  {
    id: 15,
    type: 'multiple-choice',
    question: 'Which Romance language has the most native speakers worldwide?',
    options: ['French', 'Italian', 'Spanish', 'Portuguese'],
    correctIndex: 2,
    explanation:
      "Spanish — with approximately 490 million native speakers, it's the second most spoken native language in the world (after Mandarin Chinese). Columbus's 1492 Caribbean landing began one of the most dramatic language spreads in history.",
  },
];
