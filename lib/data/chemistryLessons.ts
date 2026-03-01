import { ChemistryTopics, ChemistryLesson, ChemistryTopicCategory } from '@/types';

export const chemistryTopics: ChemistryTopics = {
  atomsAndElements: [
    {
      title: 'Atomic Structure: Inside the Atom',
      category: 'Atoms & Elements',
      level: 'standard',
      objectives: [
        'Identify the three subatomic particles and their properties',
        'Describe the structure of an atom using the nuclear model',
        'Calculate proton, neutron and electron numbers from atomic data',
      ],
      introduction:
        'Everything around you — your phone, the air you breathe, even you — is made of atoms. Atoms are so tiny that a single full stop on this page contains around 250 billion of them. Yet inside each atom is a whole miniature world of particles, forces, and energy. Understanding atomic structure is the foundation of all chemistry.',
      mainContent: [
        'An atom has two main regions: the nucleus at the centre, and electron shells (energy levels) surrounding it.',
        'Protons (positive charge, mass 1) and neutrons (no charge, mass 1) are packed tightly in the nucleus.',
        'Electrons (negative charge, negligible mass) orbit the nucleus in shells. The first shell holds up to 2 electrons, the second and third hold up to 8 each.',
        'The atomic number (proton number) tells you how many protons an atom has — this defines which element it is.',
        'The mass number is the total of protons + neutrons. Subtracting atomic number from mass number gives neutrons.',
        'In a neutral atom, the number of electrons always equals the number of protons — so the charges balance out.',
        'Isotopes are atoms of the same element with different numbers of neutrons (e.g. Carbon-12 and Carbon-14).',
      ],
      keyConceptsAndDefinitions: [
        {
          term: 'Proton',
          definition: 'Positively charged particle in the nucleus; its count defines the element.',
        },
        {
          term: 'Neutron',
          definition: 'Neutral (uncharged) particle in the nucleus; adds mass but not charge.',
        },
        {
          term: 'Electron',
          definition: 'Negatively charged particle orbiting the nucleus in energy levels (shells).',
        },
        {
          term: 'Atomic number',
          definition: 'The number of protons in an atom — unique to each element.',
        },
        { term: 'Mass number', definition: 'Total number of protons and neutrons in the nucleus.' },
        {
          term: 'Isotope',
          definition: 'Atoms of the same element with different numbers of neutrons.',
        },
        {
          term: 'Electron shell',
          definition:
            'An energy level where electrons orbit the nucleus; shells fill from the inside out.',
        },
      ],
      experiments: [
        {
          name: 'Build a 3D Atom Model',
          description:
            'Construct a physical model of a carbon or oxygen atom to visualise electron shells.',
          steps: [
            'Choose an element: Carbon (6 protons, 6 neutrons, 6 electrons) or Oxygen (8p, 8n, 8e).',
            'Use a ball of playdough or a polystyrene ball as the nucleus.',
            'Press in small coloured beads or pins to represent protons (one colour) and neutrons (another colour).',
            'Use wire hoops or drawn circles around the nucleus to represent electron shells.',
            'Attach small beads to the shells: 2 on the first shell, then the rest on the second.',
            'Label each part and write the atomic number and mass number on a card next to your model.',
          ],
          safetyNote: 'No safety concerns — this is a craft activity.',
        },
      ],
      practiceQuestions: [
        {
          question:
            'Sodium has atomic number 11 and mass number 23. How many neutrons does it have?',
          answer: '12 neutrons (23 − 11 = 12).',
        },
        {
          question:
            'How many electrons does a neutral chlorine atom have if its atomic number is 17?',
          answer: '17 electrons — in a neutral atom, electrons always equal protons.',
        },
        {
          question: 'Carbon-12 and Carbon-14 are isotopes. What is the same and what is different?',
          answer:
            'Both have 6 protons (same element). Carbon-12 has 6 neutrons; Carbon-14 has 8 neutrons.',
        },
        {
          question: 'Write the electron configuration for magnesium (atomic number 12).',
          answer: '2, 8, 2 — two on the first shell, eight on the second, two on the third.',
        },
      ],
      funFacts: [
        'If an atom were the size of a football stadium, its nucleus would be the size of a pea on the centre spot.',
        'Gold atoms are so stable that gold found in ancient Egyptian tombs is chemically identical to gold mined today.',
        'The word "atom" comes from the Greek "atomos" meaning "uncuttable" — the ancient Greeks thought atoms were the smallest possible things.',
        'Carbon-14 is radioactive and decays slowly — scientists use this to date ancient artefacts up to 50,000 years old.',
      ],
      realWorldConnections: [
        'Medical scanners (MRI) use the behaviour of hydrogen atoms in your body to create detailed images.',
        'Nuclear power stations split uranium atoms (fission) to release enormous amounts of energy.',
        'The carbon in your DNA, food, and body was forged inside ancient stars — you are literally made of stardust.',
      ],
      quizQuestions: [
        {
          question: 'Where are protons and neutrons found in an atom?',
          options: [
            'In the electron shells',
            'In the nucleus',
            'Scattered randomly',
            'In the outer shell only',
          ],
          correctIndex: 1,
        },
        {
          question:
            'An element has atomic number 8 and mass number 16. How many neutrons does it have?',
          options: ['6', '8', '16', '24'],
          correctIndex: 1,
        },
        {
          question: 'What makes two atoms isotopes of each other?',
          options: [
            'Same neutrons, different protons',
            'Same protons, different neutrons',
            'Same electrons, different protons',
            'Same mass number, different element',
          ],
          correctIndex: 1,
        },
      ],
      furtherReading: 'BBC Bitesize: Atomic Structure; Khan Academy: Atoms, compounds, and ions',
    },
    {
      title: 'Elements, Compounds & Mixtures',
      category: 'Atoms & Elements',
      level: 'standard',
      objectives: [
        'Distinguish between elements, compounds and mixtures',
        'Use chemical formulae to describe compounds',
        'Explain how compounds differ from mixtures in terms of chemical bonding',
      ],
      introduction:
        'Not all substances are the same. Pure water is a compound — two hydrogen atoms chemically bonded to one oxygen atom, always in the same ratio. But sea water is a mixture — water with dissolved salt, sand, and many other things that can be separated out again. Understanding this difference is key to chemistry.',
      mainContent: [
        'An element contains only one type of atom (e.g. gold Au, oxygen O₂, iron Fe). There are 118 known elements.',
        'A compound is formed when two or more different elements are chemically bonded together in fixed ratios (e.g. water H₂O, carbon dioxide CO₂, sodium chloride NaCl).',
        'Compounds have completely different properties from the elements they are made from — sodium is a dangerous metal, chlorine is a toxic gas, but together they make table salt.',
        'A mixture contains two or more substances that are NOT chemically bonded and can be separated by physical means (e.g. filtering, evaporation, distillation).',
        'Chemical formulae show us the ratio of atoms in a compound. H₂O means 2 hydrogen atoms for every 1 oxygen atom.',
        'Subscript numbers (small, below the line) in a formula show how many atoms of each element are present.',
      ],
      keyConceptsAndDefinitions: [
        {
          term: 'Element',
          definition:
            'A pure substance made of only one type of atom; cannot be broken down further by chemistry.',
        },
        {
          term: 'Compound',
          definition:
            'A substance formed from two or more elements chemically bonded in fixed proportions.',
        },
        {
          term: 'Mixture',
          definition:
            'Two or more substances mixed together but not chemically bonded; can be separated physically.',
        },
        {
          term: 'Chemical formula',
          definition:
            'A shorthand way of showing which elements are in a compound and in what ratio (e.g. CO₂).',
        },
        {
          term: 'Pure substance',
          definition:
            'A single element or compound with a fixed melting/boiling point and no other substances mixed in.',
        },
      ],
      experiments: [
        {
          name: 'Separating a Mixture: Salt & Sand',
          description:
            'Use physical separation techniques to split a salt and sand mixture into its components.',
          steps: [
            'Mix a teaspoon of salt and a teaspoon of sand together in a beaker — this is your mixture.',
            'Add water and stir well. The salt dissolves; the sand does not.',
            'Filter the mixture through filter paper in a funnel. Sand stays on the filter paper; salty water passes through.',
            'Gently heat the filtered water in a evaporating dish until the water evaporates, leaving white salt crystals.',
            'Compare the salt crystals and sand to the original mixture. You have successfully separated them!',
          ],
          safetyNote: 'Take care when heating. Use heat-resistant gloves and keep hair tied back.',
        },
      ],
      practiceQuestions: [
        {
          question: 'Is carbon dioxide (CO₂) an element, compound or mixture? How do you know?',
          answer:
            'A compound — it contains two different elements (carbon and oxygen) chemically bonded in a fixed ratio.',
        },
        {
          question: 'How many atoms are in one molecule of glucose (C₆H₁₂O₆)?',
          answer: '24 atoms total: 6 carbon + 12 hydrogen + 6 oxygen.',
        },
        {
          question: 'Give one difference between a compound and a mixture.',
          answer:
            'In a compound, elements are chemically bonded in fixed ratios; in a mixture, substances are not bonded and can be in any proportion.',
        },
      ],
      funFacts: [
        'Water is so special that scientists look for it on other planets first when searching for life.',
        'Diamond and graphite are both made of only carbon atoms — but arranged differently, giving completely different properties.',
        'The air you breathe is a mixture: roughly 78% nitrogen, 21% oxygen, and about 1% argon and other gases.',
      ],
      realWorldConnections: [
        'Desalination plants separate salt from sea water to produce drinking water — used widely in the Middle East and Caribbean.',
        'Blood is a complex mixture containing red cells, white cells, plasma, and dissolved substances.',
        'Pharmaceutical chemists make pure compounds for medicines — even tiny amounts of impurities (other substances) can cause harm.',
      ],
      quizQuestions: [
        {
          question: 'Which of these is a compound?',
          options: ['Oxygen (O₂)', 'Gold (Au)', 'Water (H₂O)', 'Air'],
          correctIndex: 2,
        },
        {
          question: 'How can a mixture be separated from a compound?',
          options: [
            'By chemical reactions only',
            'By physical methods such as filtering or evaporating',
            'It cannot be separated',
            'Only by heating to very high temperatures',
          ],
          correctIndex: 1,
        },
        {
          question: 'How many oxygen atoms are in one molecule of carbon dioxide (CO₂)?',
          options: ['1', '2', '3', '4'],
          correctIndex: 1,
        },
      ],
      furtherReading: 'BBC Bitesize: Mixtures, elements and compounds; RSC: Chemical Formulae',
    },
  ],

  periodicTable: [
    {
      title: 'The Periodic Table: Groups & Periods',
      category: 'The Periodic Table',
      level: 'standard',
      objectives: [
        'Describe how the periodic table is arranged by atomic number',
        'Explain what groups and periods represent',
        'Predict properties of elements based on their position in the table',
      ],
      introduction:
        "The periodic table is chemistry's greatest organisational achievement. Dmitri Mendeleev arranged the 63 known elements in 1869 and even left gaps for elements not yet discovered — and he was right. Today we know 118 elements, all arranged in a beautiful pattern where position reveals properties.",
      mainContent: [
        'Elements are arranged in order of increasing atomic number (number of protons), left to right, top to bottom.',
        'Periods (horizontal rows) represent electron shells. Elements in the same period have the same number of electron shells.',
        'Groups (vertical columns, numbered 1–18) contain elements with the same number of outer shell electrons — and therefore similar chemical properties.',
        'Group 1 (alkali metals) have 1 outer electron and are very reactive. Group 7 (halogens) have 7 outer electrons and are also highly reactive.',
        'Group 0 (noble gases, far right) have full outer shells and are almost completely unreactive.',
        'Metals are on the left side of the table (about 75% of all elements), non-metals on the right, and metalloids/semi-metals run diagonally between them.',
        'The transition metals form the large block in the middle (rows 4–7) and include iron, copper, gold, and silver.',
      ],
      keyConceptsAndDefinitions: [
        {
          term: 'Period',
          definition:
            'A horizontal row in the periodic table; elements in the same period have the same number of electron shells.',
        },
        {
          term: 'Group',
          definition:
            'A vertical column in the periodic table; elements in the same group have the same number of outer electrons and similar properties.',
        },
        {
          term: 'Alkali metals',
          definition:
            'Group 1 elements (Li, Na, K, Rb, Cs, Fr) — soft, reactive metals that react vigorously with water.',
        },
        {
          term: 'Halogens',
          definition:
            'Group 7 elements (F, Cl, Br, I) — reactive non-metals that form salts when they react with metals.',
        },
        {
          term: 'Noble gases',
          definition:
            'Group 0 elements (He, Ne, Ar, Kr, Xe) — very unreactive because their outer electron shells are full.',
        },
        {
          term: 'Transition metals',
          definition:
            'Elements in the central block (groups 3–12) such as iron, copper, and gold — often colourful and good conductors.',
        },
      ],
      experiments: [
        {
          name: 'Reactivity of Group 1: Sodium & Potassium in Water',
          description:
            'Observe (via video or demonstration) how Group 1 metals react with water to show reactivity trends.',
          steps: [
            'Watch a video of lithium, sodium, and potassium being dropped into water (search "alkali metals in water").',
            'Note what happens in each case: does the metal float, fizz, move around, catch fire, or explode?',
            'Record your observations in a table: Metal | Observations | Reactivity rating (1–5).',
            'Write the word equation: sodium + water → sodium hydroxide + hydrogen.',
            'Explain why potassium is more reactive than lithium using the idea of electron shells.',
          ],
          safetyNote:
            'Never handle Group 1 metals yourself — they are dangerously reactive. Always observe via demonstration or video only.',
        },
      ],
      practiceQuestions: [
        {
          question: 'How many outer electrons does an element in Group 6 have?',
          answer: '6 outer electrons.',
        },
        {
          question: 'What is the connection between period number and electron shells?',
          answer:
            'The period number tells you how many electron shells the element has (e.g. Period 3 elements have 3 shells).',
        },
        {
          question: 'Why do Group 0 (noble gases) not react with other elements?',
          answer:
            'Their outer electron shells are completely full, so they have no tendency to gain, lose, or share electrons.',
        },
        {
          question:
            'Predict: which is more reactive, lithium (Li) or caesium (Cs)? Both are in Group 1.',
          answer:
            'Caesium — it has more electron shells, so its outer electron is further from the nucleus and more easily lost.',
        },
      ],
      funFacts: [
        'Mendeleev predicted the properties of gallium before it was discovered — and was almost exactly right.',
        "The rarest naturally occurring element is astatine — there is probably less than 1 gram of it in the entire Earth's crust at any one time.",
        'Francium (Fr) is so unstable and rare that scientists estimate the entire Earth contains at most 20–30 grams of it.',
        'Element 118, Oganesson, was only created in 2002 and exists for less than a millisecond before decaying.',
      ],
      realWorldConnections: [
        'Chlorine (Group 7) is used to disinfect swimming pools and drinking water — saving millions of lives every year.',
        'Helium (Group 0) fills balloons and is used in MRI machines because it is safe and non-reactive.',
        'Silicon (a metalloid) is the foundation of all computer chips and solar panels — the Information Age runs on it.',
      ],
      quizQuestions: [
        {
          question: 'What does the group number tell you about an element?',
          options: [
            'How many protons it has',
            'How many electron shells it has',
            'How many outer electrons it has',
            'Its mass number',
          ],
          correctIndex: 2,
        },
        {
          question: 'Which group contains the noble gases?',
          options: ['Group 1', 'Group 7', 'Group 0', 'Group 4'],
          correctIndex: 2,
        },
        {
          question: 'Sodium is in Period 3. How many electron shells does a sodium atom have?',
          options: ['1', '2', '3', '11'],
          correctIndex: 2,
        },
      ],
      furtherReading:
        'Royal Society of Chemistry: Interactive Periodic Table (rsc.org); BBC Bitesize: The Periodic Table',
    },
    {
      title: 'Metals vs Non-Metals: Properties & Uses',
      category: 'The Periodic Table',
      level: 'standard',
      objectives: [
        'Compare the physical and chemical properties of metals and non-metals',
        'Explain these properties using ideas about structure and bonding',
        'Link properties of specific elements to their real-world uses',
      ],
      introduction:
        'Look around you — the wires in your phone are copper, the frame might be aluminium, the screen contains silicon, and if you have a filling it might be a metal alloy. The distinction between metals and non-metals shapes the entire material world. But what actually makes something a metal?',
      mainContent: [
        'Metals are typically shiny, hard (though Group 1 metals are soft), have high melting and boiling points, are good conductors of heat and electricity, and are malleable (can be shaped) and ductile (can be drawn into wires).',
        'Non-metals are usually dull, brittle (if solid), have lower melting and boiling points, and are poor conductors — with the exception of graphite.',
        'Metals form positive ions by losing electrons when they react. The more easily they lose electrons, the more reactive they are.',
        'Non-metals tend to gain electrons (or share them) to form negative ions or covalent bonds.',
        'Alloys are mixtures of metals (e.g. steel = iron + carbon) that often have improved properties over pure metals.',
        'Transition metals are particularly useful because they are strong, have high melting points, and can form colourful compounds — iron for construction, copper for wiring, gold for electronics.',
      ],
      keyConceptsAndDefinitions: [
        {
          term: 'Malleable',
          definition:
            'Can be hammered or rolled into different shapes without breaking — a key property of metals.',
        },
        {
          term: 'Ductile',
          definition: 'Can be drawn into thin wires — metals like copper are highly ductile.',
        },
        {
          term: 'Conductor',
          definition: 'A material that allows electricity or heat to pass through it easily.',
        },
        {
          term: 'Alloy',
          definition:
            'A mixture of two or more metals (or a metal with a non-metal like carbon) with improved properties.',
        },
        {
          term: 'Brittle',
          definition:
            'Breaks or shatters rather than bending — a typical property of non-metals and ceramics.',
        },
      ],
      experiments: [
        {
          name: 'Testing Metal vs Non-Metal Properties',
          description:
            'Compare a selection of metals and non-metals using simple tests for conductivity, lustre, and malleability.',
          steps: [
            'Gather samples: copper wire, iron nail, pencil graphite (carbon), piece of sulfur (yellow powder), aluminium foil.',
            'Test conductivity: connect each sample in a simple circuit with a battery and bulb. Does the bulb light up?',
            'Test lustre (shininess): compare appearance. Which look shiny? Which look dull?',
            'Test malleability: try gently bending or flattening each. Which bend without breaking?',
            'Record all results in a table and classify each sample as metal or non-metal based on your results.',
          ],
          safetyNote:
            'Use low-voltage batteries only (1.5V AA cells). Do not taste or inhale powdered sulfur.',
        },
      ],
      practiceQuestions: [
        {
          question: 'Why is copper used for electrical wiring?',
          answer:
            'Copper is an excellent conductor of electricity, is ductile (can be drawn into thin wires), and resists corrosion.',
        },
        {
          question: 'Why is steel stronger than pure iron?',
          answer:
            'Steel is an alloy of iron and carbon. The carbon atoms disrupt the regular arrangement of iron atoms, making it harder to slide layers past each other, so the material is stronger.',
        },
        {
          question: 'Explain why non-metals are generally poor conductors.',
          answer:
            'Non-metals do not have free (delocalised) electrons to carry charge — their electrons are locked in bonds.',
        },
      ],
      funFacts: [
        'Gallium (a metal) melts in your hand — its melting point is just 29.8°C, slightly above room temperature.',
        'Mercury is the only metal that is liquid at room temperature (melting point −39°C).',
        'Diamond (carbon) is the hardest natural substance on Earth but is a non-metal and a terrible conductor of electricity.',
        'About 91 of the 118 known elements are metals.',
      ],
      realWorldConnections: [
        'Aircraft are made from aluminium alloys — strong enough to withstand stress but light enough to fly efficiently.',
        'Carbon fibre composites (a non-metal material) are now used in top-end racing cars and sports equipment.',
        'Gold is used in circuit boards and connectors because it never corrodes and conducts electricity perfectly.',
      ],
      quizQuestions: [
        {
          question: 'Which of these is a property of metals?',
          options: ['Brittle', 'Poor conductor of electricity', 'Malleable', 'Low melting point'],
          correctIndex: 2,
        },
        {
          question: 'What is an alloy?',
          options: [
            'A pure metal element',
            'A mixture of two or more metals (or a metal and non-metal)',
            'A non-metal compound',
            'An element from Group 1',
          ],
          correctIndex: 1,
        },
        {
          question: 'Why is copper ideal for electrical wiring?',
          options: [
            'It is cheap and brittle',
            'It is magnetic and strong',
            'It conducts electricity well and is ductile',
            'It has a very low melting point',
          ],
          correctIndex: 2,
        },
      ],
      furtherReading: 'BBC Bitesize: Properties of Metals and Non-Metals; RSC: Uses of Metals',
    },
  ],

  chemicalBonding: [
    {
      title: 'Ionic Bonding: Opposites Attract',
      category: 'Chemical Bonding',
      level: 'standard',
      objectives: [
        'Explain how ionic bonds form through electron transfer',
        'Predict which ions form from given elements using group numbers',
        'Describe the structure of ionic compounds and link it to their properties',
      ],
      introduction:
        'Sodium chloride — table salt — is all around you. Every cell in your body needs sodium ions to function. But how do a reactive metal and a poisonous gas become a harmless white crystal you sprinkle on food? The answer is ionic bonding: a dramatic transfer of electrons that transforms elements into stable, new substances.',
      mainContent: [
        'Ionic bonding occurs between metals and non-metals. The metal atom loses one or more electrons to become a positive ion (cation). The non-metal atom gains those electrons to become a negative ion (anion).',
        'The drive for ionic bonding comes from atoms "wanting" full outer electron shells — the electronic configuration of the nearest noble gas.',
        'Group 1 metals lose 1 electron → form +1 ions (e.g. Na⁺, K⁺). Group 2 metals lose 2 electrons → form +2 ions (e.g. Mg²⁺, Ca²⁺).',
        'Group 6 non-metals gain 2 electrons → form −2 ions (e.g. O²⁻, S²⁻). Group 7 halogens gain 1 electron → form −1 ions (e.g. Cl⁻, F⁻).',
        'The opposite charges attract strongly, forming a giant ionic lattice — a regular 3D grid of alternating positive and negative ions.',
        'Ionic compounds: have high melting and boiling points (strong lattice), conduct electricity when molten or dissolved in water (free ions can move), and are often soluble in water.',
      ],
      keyConceptsAndDefinitions: [
        {
          term: 'Ion',
          definition:
            'An atom (or group of atoms) that has gained or lost electrons, giving it an overall charge.',
        },
        {
          term: 'Cation',
          definition:
            'A positively charged ion, formed when a metal atom loses electrons (e.g. Na⁺).',
        },
        {
          term: 'Anion',
          definition:
            'A negatively charged ion, formed when a non-metal atom gains electrons (e.g. Cl⁻).',
        },
        {
          term: 'Ionic lattice',
          definition:
            'The regular 3D arrangement of oppositely charged ions held together by strong electrostatic attraction.',
        },
        {
          term: 'Electron transfer',
          definition: 'The movement of electrons from one atom to another, which creates ions.',
        },
        {
          term: 'Electrostatic attraction',
          definition: 'The force of attraction between oppositely charged particles.',
        },
      ],
      experiments: [
        {
          name: 'Modelling Ionic Bond Formation',
          description:
            'Use coloured counters to model the transfer of electrons when sodium reacts with chlorine.',
          steps: [
            'Draw two large circles: one labelled "Sodium atom (Na, 2,8,1)" and one labelled "Chlorine atom (Cl, 2,8,7)".',
            'Draw the electron shells in each circle using dots or crosses for electrons.',
            'Draw an arrow to show the single outer electron moving from sodium to chlorine.',
            'Label the result: "Na⁺ ion (2,8)" and "Cl⁻ ion (2,8,8)" — both now have full outer shells.',
            'Write the ionic equation: Na → Na⁺ + e⁻ and Cl + e⁻ → Cl⁻.',
            'Discuss: why are both ions now stable? How does this relate to noble gas configurations?',
          ],
        },
      ],
      practiceQuestions: [
        {
          question: 'What ion does magnesium (Group 2) form? Why?',
          answer: 'Mg²⁺ — magnesium loses its 2 outer electrons to achieve a full outer shell.',
        },
        {
          question:
            'Explain why ionic compounds conduct electricity when dissolved in water but not when solid.',
          answer:
            'When dissolved, the ions are free to move and carry charge. In a solid, the ions are locked in the lattice and cannot move.',
        },
        {
          question:
            'Write the formula for the compound formed between calcium (Ca²⁺) and chloride (Cl⁻) ions.',
          answer:
            'CaCl₂ — two chloride ions are needed to balance one calcium ion (2+ charge balanced by two 1− charges).',
        },
      ],
      funFacts: [
        'Your body contains about 250g of salt (sodium chloride) — mostly in your blood and the fluid around cells.',
        'The Dead Sea is so salty (about 34% salt) that humans float effortlessly without swimming.',
        'Some ionic compounds glow in the dark — europium compounds are used in euro banknotes for security.',
      ],
      realWorldConnections: [
        'Lithium ions (Li⁺) power the rechargeable batteries in your phone and electric cars.',
        'Calcium ions (Ca²⁺) are essential for strong bones and teeth — and for muscle contractions, including your heartbeat.',
        'Fluoride ions (F⁻) in toothpaste replace hydroxide ions in tooth enamel to form a harder, more acid-resistant compound.',
      ],
      quizQuestions: [
        {
          question: 'What happens to electrons during ionic bond formation?',
          options: [
            'They are shared between atoms',
            'They are transferred from metal to non-metal',
            'They are destroyed',
            'They move between shells within one atom',
          ],
          correctIndex: 1,
        },
        {
          question: 'What charge does a chloride ion (Cl⁻) have?',
          options: ['+1', '−1', '+2', '0'],
          correctIndex: 1,
        },
        {
          question: 'Why do ionic compounds have high melting points?',
          options: [
            'They have lots of covalent bonds',
            'Their ions are very small',
            'The strong electrostatic attraction between ions requires a lot of energy to break',
            'They are made of metals',
          ],
          correctIndex: 2,
        },
      ],
      furtherReading:
        'BBC Bitesize: Ionic Bonding; Khan Academy: Ionic bonds and Coulombic attraction',
    },
    {
      title: 'Covalent Bonding: Sharing is Caring',
      category: 'Chemical Bonding',
      level: 'standard',
      objectives: [
        'Explain how covalent bonds form through electron sharing',
        'Draw dot-and-cross diagrams for simple covalent molecules',
        'Compare the properties of simple molecular and giant covalent structures',
      ],
      introduction:
        'Not all chemical bonding involves electron theft. When two non-metals meet, neither wants to give up its electrons — so they share them instead. This cooperative arrangement, covalent bonding, gives us water, oxygen, carbon dioxide, and the incredibly complex molecules of life itself, including your DNA.',
      mainContent: [
        'Covalent bonds form between non-metal atoms, which share pairs of electrons so that both atoms achieve full outer shells.',
        'Each shared pair of electrons forms one covalent bond. A single bond shares 1 pair; a double bond shares 2 pairs; a triple bond shares 3 pairs.',
        'Simple covalent molecules (e.g. H₂O, CO₂, CH₄, HCl) are small, have low melting/boiling points, and do not conduct electricity.',
        'The atoms within a molecule are held together strongly (strong covalent bonds), but the forces between separate molecules are weak — this is why many covalent substances are gases or liquids at room temperature.',
        'Giant covalent structures (e.g. diamond, silicon dioxide, graphite) have millions of atoms all covalently bonded in huge networks. These have very high melting points.',
        'Graphite is unusual: it has layers of carbon atoms with weak forces between layers, making it a good lubricant and — unlike most covalent substances — a conductor of electricity (delocalised electrons between layers).',
      ],
      keyConceptsAndDefinitions: [
        {
          term: 'Covalent bond',
          definition:
            'A chemical bond formed by the sharing of a pair of electrons between two atoms.',
        },
        {
          term: 'Single bond',
          definition: 'A covalent bond involving one shared pair of electrons (represented as —).',
        },
        {
          term: 'Double bond',
          definition:
            'A covalent bond involving two shared pairs of electrons (represented as =), e.g. in O₂ and CO₂.',
        },
        {
          term: 'Simple molecular structure',
          definition:
            'A substance made of small, discrete molecules with weak intermolecular forces.',
        },
        {
          term: 'Giant covalent structure',
          definition: 'A huge network of atoms all covalently bonded — e.g. diamond or SiO₂.',
        },
        {
          term: 'Delocalised electrons',
          definition:
            'Electrons not associated with any one atom; in graphite they allow electrical conductivity.',
        },
      ],
      experiments: [
        {
          name: 'Modelling Covalent Molecules with Marshmallows',
          description: 'Build 3D models of covalent molecules to understand their shapes.',
          steps: [
            'Use large marshmallows (or playdough balls) for atoms and cocktail sticks for bonds.',
            'Build water (H₂O): one large atom (oxygen) connected to two small atoms (hydrogen) at an angle.',
            'Build methane (CH₄): one carbon connected to four hydrogens in a tetrahedral shape.',
            'Build oxygen (O₂): two oxygen atoms with a double bond — use two cocktail sticks between them.',
            'Build carbon dioxide (CO₂): carbon in the middle, double bond to each oxygen on either side.',
            'Photograph your models and annotate: name, formula, number of bonds, number of atoms.',
          ],
        },
      ],
      practiceQuestions: [
        {
          question: 'How many covalent bonds does a water molecule (H₂O) have?',
          answer: 'Two single covalent bonds — one between oxygen and each hydrogen atom.',
        },
        {
          question: 'Why does diamond have a very high melting point?',
          answer:
            'Diamond has a giant covalent structure — every carbon atom is bonded to four others in a huge 3D network. An enormous amount of energy is needed to break all these strong covalent bonds.',
        },
        {
          question: 'Why does carbon dioxide (CO₂) not conduct electricity?',
          answer:
            'CO₂ is a simple covalent molecule with no free electrons or ions to carry charge.',
        },
      ],
      funFacts: [
        'The strongest material ever tested is graphene — a single layer of graphite — yet it is just one atom thick.',
        'A single strand of DNA is held together by covalent bonds, but the two strands of the double helix are held together by weaker intermolecular forces, making it easy to "unzip" during cell division.',
        'Carbon can form more different compounds than any other element — millions of them — because it can form four covalent bonds and bond to itself in long chains.',
      ],
      realWorldConnections: [
        'Cooking changes food through covalent bond reactions — when you fry an egg, heat breaks and reforms bonds in protein molecules.',
        'Medicines are covalent molecules designed with very specific shapes to fit exactly into receptor sites in your cells.',
        'Gore-Tex (used in waterproof clothing) uses the strength of carbon-fluorine covalent bonds to create a fabric nothing sticks to.',
      ],
      quizQuestions: [
        {
          question: 'What is shared in a covalent bond?',
          options: ['Protons', 'Neutrons', 'A pair of electrons', 'Whole atoms'],
          correctIndex: 2,
        },
        {
          question: 'Why do simple covalent molecules have low boiling points?',
          options: [
            'Their covalent bonds are weak',
            'The forces between separate molecules are weak',
            'They have no electrons',
            'They are ionic',
          ],
          correctIndex: 1,
        },
        {
          question: 'Which of these has a giant covalent structure?',
          options: ['Water (H₂O)', 'Carbon dioxide (CO₂)', 'Diamond (C)', 'Methane (CH₄)'],
          correctIndex: 2,
        },
      ],
      furtherReading:
        'BBC Bitesize: Covalent Bonding; Chemguide: Introduction to covalent bonding (chemguide.co.uk)',
    },
  ],

  chemicalReactions: [
    {
      title: 'Types of Chemical Reactions',
      category: 'Chemical Reactions',
      level: 'standard',
      objectives: [
        'Identify and describe six key types of chemical reactions',
        'Write word equations for each reaction type',
        'Distinguish between exothermic and endothermic reactions',
      ],
      introduction:
        'Every breath you take, every bite of food you digest, every fire you see — all of these are chemical reactions. Chemists have identified patterns in how substances react and grouped reactions into types. Understanding these types lets you predict what will happen when you mix chemicals together.',
      mainContent: [
        'Combustion: a fuel reacts rapidly with oxygen, releasing energy as heat and light. Complete combustion of hydrocarbons produces CO₂ and water. Incomplete combustion produces carbon monoxide (toxic) and soot.',
        'Oxidation: a substance gains oxygen or loses hydrogen. Rusting (iron + oxygen + water → iron oxide) is a slow oxidation reaction.',
        'Thermal decomposition: a compound breaks down into simpler substances when heated. E.g. copper carbonate → copper oxide + carbon dioxide.',
        'Neutralisation: an acid reacts with a base (alkali) to form a salt and water. This is always exothermic.',
        'Precipitation: two solutions react to form an insoluble solid (a precipitate). E.g. mixing silver nitrate and sodium chloride solutions produces a white precipitate of silver chloride.',
        'Displacement: a more reactive element displaces a less reactive element from a compound. E.g. zinc + copper sulfate → zinc sulfate + copper.',
        'Exothermic reactions release energy (feel hot) — combustion, neutralisation. Endothermic reactions absorb energy (feel cold) — thermal decomposition, some dissolving reactions.',
      ],
      keyConceptsAndDefinitions: [
        {
          term: 'Combustion',
          definition:
            'A reaction between a fuel and oxygen that releases energy as heat and light.',
        },
        {
          term: 'Oxidation',
          definition: 'Gaining oxygen (or losing hydrogen); the opposite of reduction.',
        },
        {
          term: 'Thermal decomposition',
          definition: 'Breaking down a compound into simpler products using heat.',
        },
        {
          term: 'Neutralisation',
          definition: 'The reaction between an acid and a base to form a salt and water.',
        },
        {
          term: 'Precipitation',
          definition: 'The formation of an insoluble solid when two solutions are mixed.',
        },
        {
          term: 'Displacement',
          definition: 'A more reactive element pushes out a less reactive element from a compound.',
        },
        {
          term: 'Exothermic',
          definition:
            'A reaction that releases energy to the surroundings — the temperature rises.',
        },
        {
          term: 'Endothermic',
          definition:
            'A reaction that absorbs energy from the surroundings — the temperature falls.',
        },
      ],
      experiments: [
        {
          name: 'Elephant Toothpaste: Decomposition in Action',
          description:
            'Watch a dramatic decomposition of hydrogen peroxide to produce an enormous foam eruption.',
          steps: [
            'Pour 100ml of 6% hydrogen peroxide (H₂O₂) into a large bottle or cylinder.',
            'Add a squirt of washing-up liquid and a few drops of food colouring.',
            'In a separate cup, mix 1 tablespoon of dry yeast with warm water.',
            'Quickly pour the yeast mixture into the hydrogen peroxide bottle and stand back!',
            'The yeast acts as a catalyst — it speeds up the decomposition of H₂O₂ into water and oxygen gas.',
            'The oxygen gets trapped in the foam, creating a dramatic eruption. Touch the foam — is it warm (exothermic) or cold?',
          ],
          safetyNote:
            'Use 6% H₂O₂ (available from hair supply shops) — not the stronger lab version. Wear gloves and goggles. Adult supervision required.',
        },
      ],
      practiceQuestions: [
        {
          question: 'Write a word equation for the complete combustion of methane (natural gas).',
          answer: 'Methane + oxygen → carbon dioxide + water.',
        },
        {
          question:
            'A hand warmer gets hot when activated. Is this reaction exothermic or endothermic? Explain.',
          answer: 'Exothermic — it releases energy to the surroundings, which is why it feels hot.',
        },
        {
          question:
            'Iron is more reactive than copper. What happens when iron is placed in copper sulfate solution?',
          answer:
            'Iron displaces copper: iron + copper sulfate → iron sulfate + copper. A reddish-brown coating of copper forms on the iron.',
        },
      ],
      funFacts: [
        'The International Space Station uses decomposition of water (electrolysis) to produce oxygen for astronauts to breathe.',
        'Fireflies produce cold light through a bioluminescent reaction — the most efficient light-producing reaction known, wasting almost no energy as heat.',
        'Thermite (iron oxide + aluminium powder) burns at over 2500°C — hot enough to weld railway tracks together.',
      ],
      realWorldConnections: [
        'Car airbags use a rapid decomposition reaction of sodium azide to inflate in milliseconds in a collision.',
        'Cement hardens through a hydration reaction — when concrete sets, it actually gets hot because the reaction is exothermic.',
        'Photosynthesis in plants is an endothermic reaction — plants absorb light energy from the sun to build glucose molecules.',
      ],
      quizQuestions: [
        {
          question: 'Which type of reaction produces a salt and water?',
          options: ['Combustion', 'Displacement', 'Neutralisation', 'Precipitation'],
          correctIndex: 2,
        },
        {
          question: 'A reaction makes the test tube feel cold. What type of energy change is this?',
          options: ['Exothermic', 'Endothermic', 'Neutral', 'Oxidation'],
          correctIndex: 1,
        },
        {
          question:
            'Magnesium is more reactive than copper. What happens when magnesium is added to copper sulfate solution?',
          options: [
            'Nothing — they do not react',
            'Magnesium dissolves and copper is released',
            'Copper dissolves and magnesium forms a compound',
            'Both metals dissolve',
          ],
          correctIndex: 1,
        },
      ],
      furtherReading:
        'BBC Bitesize: Types of Chemical Reactions; Khan Academy: Chemical reactions and stoichiometry',
    },
    {
      title: 'Balancing Equations & Conservation of Mass',
      category: 'Chemical Reactions',
      level: 'standard',
      objectives: [
        'State and apply the law of conservation of mass',
        'Balance simple chemical equations by adjusting coefficients',
        'Calculate reacting masses using balanced equations',
      ],
      introduction:
        'Antoine Lavoisier, the father of modern chemistry, famously stated: "Nothing is lost, nothing is created, everything is transformed." In a chemical reaction, atoms are rearranged — but not created or destroyed. This means we can account for every single atom, and the total mass of reactants must always equal the total mass of products.',
      mainContent: [
        'The law of conservation of mass: the total mass of reactants equals the total mass of products in any chemical reaction.',
        'Atoms are neither created nor destroyed — they are simply rearranged into new combinations.',
        'A balanced equation has the same number of each type of atom on both sides. We balance by adding coefficients (large numbers in front of formulae) — never by changing subscripts.',
        'To balance an equation: write the unbalanced equation → count atoms on each side → add coefficients to balance, starting with the most complex molecule → check by counting all atoms again.',
        'Example: H₂ + O₂ → H₂O is unbalanced. Balanced: 2H₂ + O₂ → 2H₂O (4H and 2O on each side).',
        'In a closed system, no mass is lost. If burning a metal in an open container, the product weighs more because oxygen from the air has been added.',
      ],
      keyConceptsAndDefinitions: [
        {
          term: 'Conservation of mass',
          definition:
            'The total mass of substances before and after a chemical reaction is always the same.',
        },
        {
          term: 'Coefficient',
          definition:
            'The large number placed before a chemical formula in an equation to balance it (e.g. the 2 in 2H₂O).',
        },
        {
          term: 'Reactants',
          definition:
            'The substances that are present before a chemical reaction begins (on the left of an equation).',
        },
        {
          term: 'Products',
          definition:
            'The new substances formed in a chemical reaction (on the right of an equation).',
        },
        {
          term: 'Balanced equation',
          definition:
            'A chemical equation where the number of each type of atom is the same on both sides.',
        },
      ],
      experiments: [
        {
          name: 'Conservation of Mass: Before and After',
          description: 'Use a scale to demonstrate that mass is conserved in a chemical reaction.',
          steps: [
            'Set up a digital scale (accurate to 0.1g). Place a zip-lock bag on it and press tare (zero).',
            'Place two small cups inside the bag: one with 5ml of vinegar (acetic acid), one with half a teaspoon of bicarbonate of soda.',
            'Seal the bag and record the total mass on the scale.',
            'Without opening the bag, tip the bicarbonate into the vinegar by squeezing the bag. Observe the reaction.',
            'Wait for the reaction to stop, then record the mass again.',
            'Is the mass before equal to the mass after? Why do you think there might be a tiny difference if you do not seal the bag?',
          ],
          safetyNote:
            'Vinegar and bicarbonate are safe for this activity. Seal the bag fully to capture all gas produced.',
        },
      ],
      practiceQuestions: [
        {
          question: 'Balance this equation: Mg + O₂ → MgO',
          answer: '2Mg + O₂ → 2MgO (2 Mg and 2 O on each side).',
        },
        {
          question: 'Balance: Fe + Cl₂ → FeCl₃',
          answer: '2Fe + 3Cl₂ → 2FeCl₃ (2 Fe and 6 Cl on each side).',
        },
        {
          question:
            'When 10g of calcium carbonate decomposes, 4.4g of CO₂ is produced. What mass of calcium oxide is produced?',
          answer: '5.6g — by conservation of mass: 10 − 4.4 = 5.6g.',
        },
      ],
      funFacts: [
        'Lavoisier proved conservation of mass by carefully sealing reactions in containers and weighing before and after — radical for the 1700s.',
        'Even in nuclear reactions (fission/fusion), if you include the energy released as a form of mass (E=mc²), mass is still conserved.',
        'A burning candle loses mass as wax and oxygen become CO₂ and water vapour — you can weigh a candle before and after burning to prove it.',
      ],
      realWorldConnections: [
        'Industrial chemists use balanced equations to calculate exactly how much of each reactant is needed to produce a target amount of product — saving money and reducing waste.',
        'Pharmaceutical companies balance equations to ensure medicines are made with precise amounts of ingredients.',
        'Environmental scientists use mass balance to track how pollutants move through ecosystems.',
      ],
      quizQuestions: [
        {
          question: 'What does the law of conservation of mass state?',
          options: [
            'Mass can be created in exothermic reactions',
            'The total mass of reactants equals the total mass of products',
            'Products always weigh less than reactants',
            'Atoms are destroyed during reactions',
          ],
          correctIndex: 1,
        },
        {
          question: 'How do you balance a chemical equation?',
          options: [
            'Change the subscripts in the formulae',
            'Add coefficients in front of formulae',
            'Remove atoms from one side',
            'Write a new formula',
          ],
          correctIndex: 1,
        },
        {
          question: 'In 2H₂ + O₂ → 2H₂O, how many hydrogen atoms are on each side?',
          options: ['2', '3', '4', '6'],
          correctIndex: 2,
        },
      ],
      furtherReading:
        'Khan Academy: Balancing chemical equations; BBC Bitesize: Conservation of Mass',
    },
  ],

  acidsAndBases: [
    {
      title: 'Acids, Bases & the pH Scale',
      category: 'Acids & Bases',
      level: 'standard',
      objectives: [
        'Describe the properties of acids and bases',
        'Use the pH scale to classify solutions as acidic, neutral or alkaline',
        'Explain how indicators are used to measure pH',
      ],
      introduction:
        'Lemons taste sour because they contain citric acid. Bleach is slippery and burns because it is a strong alkali. Vinegar cleans limescale because acids react with carbonates. Acids and bases are everywhere in everyday life — and the pH scale gives us a universal language to describe how acidic or alkaline something is.',
      mainContent: [
        'Acids produce hydrogen ions (H⁺) when dissolved in water. Common acids: hydrochloric acid (HCl), sulfuric acid (H₂SO₄), nitric acid (HNO₃).',
        'Bases are substances that can neutralise an acid. Alkalis are soluble bases — they produce hydroxide ions (OH⁻) in water. Common alkalis: sodium hydroxide (NaOH), potassium hydroxide (KOH), ammonia (NH₃).',
        'The pH scale runs from 0 to 14: pH 0–6 = acidic, pH 7 = neutral (pure water), pH 8–14 = alkaline (basic).',
        'Strong acids (pH 0–2): concentrated hydrochloric, sulfuric, nitric acid. Weak acids (pH 4–6): vinegar, citric acid.',
        'Strong alkalis (pH 12–14): sodium hydroxide (caustic soda), bleach. Weak alkalis (pH 8–10): baking soda, soap.',
        'Indicators are substances that change colour depending on pH. Universal indicator shows a rainbow of colours across the scale. Litmus: red in acid, blue in alkali.',
      ],
      keyConceptsAndDefinitions: [
        {
          term: 'Acid',
          definition: 'A substance that produces H⁺ ions in water; has a pH below 7.',
        },
        {
          term: 'Base',
          definition: 'A substance that can neutralise an acid; alkalis are soluble bases.',
        },
        {
          term: 'Alkali',
          definition: 'A soluble base that produces OH⁻ ions in water; has a pH above 7.',
        },
        {
          term: 'pH scale',
          definition: 'A scale from 0–14 measuring how acidic or alkaline a solution is.',
        },
        {
          term: 'Indicator',
          definition: 'A substance that changes colour depending on the pH of the solution.',
        },
        { term: 'Neutral', definition: 'Neither acidic nor alkaline; pH 7 (pure water).' },
      ],
      experiments: [
        {
          name: 'Red Cabbage pH Indicator',
          description:
            'Make your own natural pH indicator from red cabbage and test household substances.',
          steps: [
            'Chop half a red cabbage and boil it in water for 10 minutes. The water turns deep purple-red.',
            'Strain the liquid and let it cool. This is your indicator.',
            'Gather 6 test substances: vinegar, lemon juice, water, bicarbonate of soda solution, washing-up liquid, bleach (diluted, adult only).',
            'Add a few drops of your indicator to each substance in separate cups.',
            'Observe the colour changes: red/pink = acid, purple = neutral, green/yellow = alkaline.',
            'Rank your substances on the pH scale and explain your reasoning.',
          ],
          safetyNote:
            'Dilute bleach only, and do not mix substances together. Adult supervision for bleach. Keep away from eyes.',
        },
      ],
      practiceQuestions: [
        {
          question:
            'A solution has pH 2. Is it a strong acid, weak acid, neutral, weak alkali or strong alkali?',
          answer: 'Strong acid (pH 0–3 is strongly acidic).',
        },
        {
          question: 'What colour does litmus paper turn in an alkaline solution?',
          answer: 'Blue.',
        },
        {
          question: 'Name TWO everyday acids and explain where they are found.',
          answer:
            'Citric acid (in lemons, oranges); ethanoic acid/acetic acid (in vinegar); carbonic acid (in fizzy drinks). Any two with correct context.',
        },
      ],
      funFacts: [
        'Your stomach acid (hydrochloric acid) has a pH of about 1.5–2 — strong enough to dissolve a razor blade given enough time.',
        'Rainwater is naturally slightly acidic (pH 5.6) because dissolved CO₂ forms carbonic acid. Acid rain can reach pH 4.',
        'Blood must stay between pH 7.35 and 7.45 — a change of just 0.4 units in either direction can be fatal.',
        'Anthocyanins — the pigments in red cabbage — are natural pH indicators used by plants as a defence mechanism.',
      ],
      realWorldConnections: [
        'Farmers test soil pH and add lime (calcium hydroxide) to neutralise acidic soils — crops grow best in neutral-to-slightly-acidic soil.',
        'Indigestion tablets contain bases (e.g. magnesium hydroxide, calcium carbonate) to neutralise excess stomach acid.',
        'Aquarium owners test the pH of fish tank water because many fish can only survive in a narrow pH range.',
      ],
      quizQuestions: [
        {
          question: 'What is the pH of a neutral solution?',
          options: ['0', '5', '7', '14'],
          correctIndex: 2,
        },
        {
          question: 'Which of these is an alkali?',
          options: ['Vinegar', 'Lemon juice', 'Hydrochloric acid', 'Sodium hydroxide'],
          correctIndex: 3,
        },
        {
          question: 'What does an indicator do?',
          options: [
            'Neutralises acids and alkalis',
            'Changes colour to show whether a solution is acidic or alkaline',
            'Measures the exact concentration of an acid',
            'Produces hydrogen ions in water',
          ],
          correctIndex: 1,
        },
      ],
      furtherReading: 'BBC Bitesize: Acids and Bases; Khan Academy: Acids, bases and pH',
    },
    {
      title: 'Neutralisation & Making Salts',
      category: 'Acids & Bases',
      level: 'standard',
      objectives: [
        'Write the general equation for a neutralisation reaction',
        'Name the salt produced from a given acid and base combination',
        'Describe how to prepare a pure, dry sample of a soluble salt',
      ],
      introduction:
        'When an acid and an alkali are mixed in the right proportions, something remarkable happens — they cancel each other out completely. This neutralisation reaction is not just a classroom curiosity: it is the basis of antacid medicines, water treatment, and the production of thousands of useful chemical salts.',
      mainContent: [
        'General equation: acid + base → salt + water. This always applies to neutralisation.',
        'The salt formed depends on the acid used: hydrochloric acid → chloride salts; sulfuric acid → sulfate salts; nitric acid → nitrate salts.',
        'Example: hydrochloric acid + sodium hydroxide → sodium chloride + water. HCl + NaOH → NaCl + H₂O.',
        'To prepare a soluble salt: add excess solid base to the acid (ensure all acid is neutralised), filter off excess solid, evaporate the filtrate to crystallise the salt.',
        'The end point of a neutralisation can be found using an indicator (point where indicator changes colour) or a pH meter (pH reaches 7).',
        'Titration is the precise technique used in labs to find the exact volume of acid that neutralises a known volume of alkali.',
      ],
      keyConceptsAndDefinitions: [
        {
          term: 'Neutralisation',
          definition:
            'The reaction between an acid and a base to produce a salt and water — always exothermic.',
        },
        {
          term: 'Salt',
          definition:
            'An ionic compound formed when the hydrogen in an acid is replaced by a metal ion.',
        },
        {
          term: 'Titration',
          definition:
            'A precise lab technique to find the exact volume of one solution needed to react with another.',
        },
        {
          term: 'End point',
          definition:
            'The point in a titration where the indicator changes colour, showing neutralisation is complete.',
        },
        {
          term: 'Crystallisation',
          definition:
            'A separation technique where a dissolved substance is obtained as solid crystals by evaporating the solution.',
        },
      ],
      experiments: [
        {
          name: 'Making Copper Sulfate Crystals',
          description:
            'React copper oxide (a base) with sulfuric acid to make beautiful blue copper sulfate crystals.',
          steps: [
            'Measure 25ml of dilute sulfuric acid into a beaker and warm it gently on a hotplate (do NOT boil).',
            'Add a spatula of black copper oxide powder and stir. The black powder dissolves as blue solution forms.',
            'Keep adding copper oxide until no more dissolves (excess ensures all acid is used up).',
            'Filter the blue solution into an evaporating dish to remove excess copper oxide.',
            'Gently heat the blue solution until about half has evaporated, then leave to cool slowly.',
            'Large, brilliant blue copper sulfate crystals should form. Observe their regular shape!',
          ],
          safetyNote:
            'Wear goggles and gloves throughout. Dilute sulfuric acid is corrosive. Copper sulfate is harmful — wash hands after handling.',
        },
      ],
      practiceQuestions: [
        {
          question: 'What salt is formed when nitric acid reacts with potassium hydroxide?',
          answer:
            'Potassium nitrate (KNO₃): nitric acid → nitrate salt; potassium hydroxide → potassium salt.',
        },
        {
          question: 'Write the word equation for: sulfuric acid + copper oxide → ?',
          answer: 'Sulfuric acid + copper oxide → copper sulfate + water.',
        },
        {
          question: 'Why is excess base added when preparing a salt in the lab?',
          answer:
            'To ensure all the acid is neutralised — you need to be certain none of the corrosive acid remains in the product.',
        },
      ],
      funFacts: [
        'Indigestion tablets work by neutralising excess hydrochloric acid in your stomach — typically using calcium carbonate or magnesium hydroxide.',
        'Farmers spread powdered limestone (calcium carbonate) on fields to neutralise acidic soils — this has been done for over 2000 years.',
        'Saltpetre (potassium nitrate) was used for centuries in gunpowder and is still used in some cured meats (like jerky) as a preservative.',
      ],
      realWorldConnections: [
        'Water treatment works add lime (calcium hydroxide) to neutralise acidic water from mountains before it reaches taps.',
        'Concrete is alkaline — steel inside concrete is protected from rusting because the high pH prevents iron from oxidising.',
        'The Caribbean sea has naturally slightly alkaline water (pH ~8.1) — this supports coral reef ecosystems, but rising CO₂ is making it more acidic (ocean acidification), threatening reefs.',
      ],
      quizQuestions: [
        {
          question: 'What are the products of a neutralisation reaction?',
          options: ['Acid + base', 'Salt + water', 'Salt + hydrogen gas', 'Oxide + water'],
          correctIndex: 1,
        },
        {
          question: 'Which acid produces sulfate salts?',
          options: ['Hydrochloric acid', 'Nitric acid', 'Sulfuric acid', 'Carbonic acid'],
          correctIndex: 2,
        },
        {
          question:
            'What is the name of the salt formed when hydrochloric acid reacts with sodium hydroxide?',
          options: ['Sodium sulfate', 'Sodium nitrate', 'Sodium chloride', 'Sodium carbonate'],
          correctIndex: 2,
        },
      ],
      furtherReading: 'BBC Bitesize: Neutralisation and Making Salts; RSC: Salt preparation',
    },
  ],

  materialsAndStates: [
    {
      title: 'States of Matter & Particle Theory',
      category: 'Materials & States',
      level: 'foundation',
      objectives: [
        'Describe the arrangement and movement of particles in solids, liquids and gases',
        'Explain changes of state using particle theory',
        'Use particle theory to explain diffusion, pressure and density',
      ],
      introduction:
        'Ice, water, and steam are all the same substance — H₂O — but they look, feel, and behave completely differently. The key to understanding this is particle theory: the idea that all matter is made of tiny particles, and the differences between states come from how those particles are arranged and how much energy they have.',
      mainContent: [
        'Solid: particles are tightly packed in a regular arrangement. They vibrate in fixed positions but cannot move freely. Solids have a definite shape and volume.',
        'Liquid: particles are close together but not in a fixed arrangement. They can flow past each other. Liquids have a definite volume but take the shape of their container.',
        'Gas: particles are far apart and move randomly at high speed. Gases fill any container and are highly compressible.',
        'Changes of state: melting (solid → liquid), freezing (liquid → solid), evaporation/boiling (liquid → gas), condensation (gas → liquid), sublimation (solid → gas directly, e.g. dry ice/CO₂).',
        'During a change of state, temperature stays constant — the energy goes into breaking or forming attractions between particles, not into speeding them up.',
        'Diffusion: the spreading of particles from high concentration to low concentration. Gases diffuse faster than liquids because their particles move faster.',
      ],
      keyConceptsAndDefinitions: [
        {
          term: 'Particle theory',
          definition:
            'The model that explains the properties of matter by describing the arrangement and movement of tiny particles.',
        },
        {
          term: 'Melting point',
          definition: 'The temperature at which a solid changes to a liquid.',
        },
        {
          term: 'Boiling point',
          definition: 'The temperature at which a liquid changes to a gas throughout its volume.',
        },
        {
          term: 'Diffusion',
          definition:
            'The spreading out of particles from an area of high concentration to an area of low concentration.',
        },
        {
          term: 'Sublimation',
          definition:
            'When a solid turns directly into a gas without passing through the liquid state.',
        },
        { term: 'Condensation', definition: 'When a gas cools and turns into a liquid.' },
      ],
      experiments: [
        {
          name: 'Diffusion Race: Ammonia vs Hydrochloric Acid',
          description:
            'Watch two gases diffuse towards each other along a glass tube and see which travels faster.',
          steps: [
            'Take a 50cm glass or clear plastic tube with open ends.',
            'Soak one cotton ball in concentrated ammonia solution and another in concentrated hydrochloric acid.',
            'Simultaneously push one cotton ball into each end of the tube and seal with corks.',
            'Watch where a white ring of ammonium chloride (NH₄Cl) appears — it forms where the gases meet.',
            'Measure the distance of the ring from each end. Which gas travelled further? (Hint: lighter molecules diffuse faster.)',
            'NH₃ (molar mass 17) vs HCl (molar mass 36.5) — predict which diffuses faster before you start!',
          ],
          safetyNote:
            'Do this in a well-ventilated space or fume cupboard. Ammonia and HCl are irritants — avoid inhaling. Adult supervision required.',
        },
      ],
      practiceQuestions: [
        {
          question: 'Explain why gases can be compressed but solids cannot.',
          answer:
            'In gases, particles are far apart with lots of empty space between them — they can be pushed closer together. In solids, particles are already packed tightly together with no space to compress into.',
        },
        {
          question: 'Why does the temperature stay constant during melting?',
          answer:
            'The energy being absorbed is used to overcome the forces between particles (breaking the lattice), not to speed up the particles — so temperature does not rise.',
        },
        {
          question: 'Why does perfume spread across a room quickly?',
          answer:
            'Diffusion — perfume molecules are volatile (become a gas easily) and spread from high concentration (near the bottle) to low concentration (across the room).',
        },
      ],
      funFacts: [
        'Plasma is sometimes called the fourth state of matter — it is like a gas, but the particles have so much energy that electrons are stripped from atoms. Stars are made of plasma.',
        'Dry ice (solid CO₂) sublimates directly from solid to gas at −78°C — it never becomes a liquid at normal atmospheric pressure.',
        'At absolute zero (−273.15°C) particles would have no movement at all — but scientists have never actually achieved this temperature.',
      ],
      realWorldConnections: [
        'Refrigerators work using evaporation — a liquid refrigerant evaporates inside the fridge, absorbing heat and keeping food cold.',
        'Gore-Tex membranes have pores large enough for water vapour (gas) to pass through but too small for liquid water drops — keeping you dry while allowing sweat to escape.',
        'Carbon dioxide fire extinguishers work because CO₂ is stored as a liquid under pressure; when released it becomes a cold gas that smothers fires.',
      ],
      quizQuestions: [
        {
          question: 'In which state of matter do particles move fastest?',
          options: ['Solid', 'Liquid', 'Gas', 'All states are the same'],
          correctIndex: 2,
        },
        {
          question: 'What happens to temperature during melting?',
          options: [
            'It increases steadily',
            'It decreases steadily',
            'It stays constant',
            'It fluctuates randomly',
          ],
          correctIndex: 2,
        },
        {
          question: 'What is diffusion?',
          options: [
            'Particles moving from low to high concentration',
            'Particles moving from high to low concentration',
            'Particles staying in one place',
            'A change of state from liquid to gas',
          ],
          correctIndex: 1,
        },
      ],
      furtherReading: 'BBC Bitesize: Particle Model; Khan Academy: States of matter',
    },
    {
      title: 'Separation Techniques',
      category: 'Materials & States',
      level: 'standard',
      objectives: [
        'Identify appropriate separation techniques for different mixtures',
        'Explain the scientific principles behind each technique',
        'Apply separation methods to real-world scenarios',
      ],
      introduction:
        'Pure water does not exist in nature — water always contains dissolved minerals, salts, or gases. Crude oil from the ground is a complex mixture of hundreds of different hydrocarbons. Separating mixtures into pure substances is one of the most important skills in chemistry — and in industry, it is worth billions of pounds.',
      mainContent: [
        'Filtration: separates an insoluble solid from a liquid. The mixture is poured through filter paper. The solid (residue) stays on the paper; the liquid (filtrate) passes through. E.g. separating sand from water.',
        'Evaporation: separates a dissolved solid from a solution by heating. The liquid evaporates, leaving the solid behind. E.g. recovering salt from saltwater.',
        'Distillation: separates liquids with different boiling points. The liquid with the lower boiling point evaporates first, is collected and condensed. E.g. producing pure water from seawater; making alcohol.',
        'Fractional distillation: separates a mixture of liquids with different boiling points, e.g. crude oil → petrol, diesel, kerosene, bitumen.',
        'Chromatography: separates mixtures of dissolved substances based on how far they travel with a solvent. Used to identify substances (e.g. food dyes, plant pigments, forensic analysis).',
        'Crystallisation: obtaining large, pure crystals from a dissolved solid by slow evaporation and cooling.',
      ],
      keyConceptsAndDefinitions: [
        {
          term: 'Filtration',
          definition: 'Separating an insoluble solid from a liquid using filter paper.',
        },
        {
          term: 'Distillation',
          definition:
            'Separating liquids by evaporation and condensation, exploiting different boiling points.',
        },
        {
          term: 'Chromatography',
          definition:
            'Separating dissolved substances based on how they move through a medium with a solvent.',
        },
        {
          term: 'Rf value',
          definition:
            'In chromatography, the distance a substance travels divided by the distance the solvent travels — used to identify substances.',
        },
        {
          term: 'Fractional distillation',
          definition:
            'Separation of a mixture of liquids with different boiling points using a fractionating column.',
        },
        {
          term: 'Crystallisation',
          definition:
            'Obtaining a pure solid by dissolving it, then slowly evaporating the solution to form regular crystals.',
        },
      ],
      experiments: [
        {
          name: "Paper Chromatography: What's in the Ink?",
          description:
            'Use paper chromatography to separate and identify the pigments in felt-tip pen ink.',
          steps: [
            'Cut strips of filter paper or coffee filter about 2cm wide and 15cm long.',
            'Draw a pencil line 2cm from the bottom of each strip.',
            'Put a dot of felt-tip pen ink on the pencil line for each colour you want to test (try black, brown, or purple).',
            'Hang the strip so the bottom edge dips 1cm into a shallow layer of water in a glass (water must be below the pencil line).',
            'Watch as the water rises up the paper and carries the pigments with it at different speeds.',
            'Once the water is near the top, remove and dry the strips. Measure and identify the separate colour bands.',
            'Calculate Rf values: distance moved by spot ÷ distance moved by solvent.',
          ],
          safetyNote:
            'No safety hazards for this experiment with water-soluble inks. Pencil must be used for the baseline (pen ink would spread).',
        },
      ],
      practiceQuestions: [
        {
          question:
            'Which technique would you use to separate sand from salt water? Describe the steps.',
          answer:
            'First filter to remove sand, then evaporate to recover the salt. (Or distil the filtrate to collect pure water and leave the salt behind.)',
        },
        {
          question:
            'Why is fractional distillation used to separate crude oil rather than simple distillation?',
          answer:
            'Crude oil contains many different hydrocarbons with different boiling points — fractional distillation separates them into fractions by collecting vapours at different temperatures.',
        },
        {
          question: 'In chromatography, what does an Rf value of 1 mean?',
          answer:
            'The substance moved the same distance as the solvent — it has no attraction to the paper and is carried entirely by the solvent.',
        },
      ],
      funFacts: [
        'The alcohol in spirits (like rum and whisky) is produced by distillation — which is why distilleries are so important in Caribbean culture and history.',
        'Forensic scientists use chromatography to identify ink in questioned documents — it helped convict forgers of the famous "Hitler Diaries" in 1983.',
        'Desalination plants produce about 95 million cubic metres of fresh water every day for countries with limited fresh water supplies.',
      ],
      realWorldConnections: [
        'Rum production in the Caribbean uses distillation to separate alcohol from fermented sugar cane — a process central to regional culture and economy.',
        'Oil refineries use fractional distillation 24/7 to separate crude oil into petrol, diesel, kerosene (jet fuel), and other products.',
        'NHS blood tests use various separation techniques to isolate proteins, cells, and chemicals for analysis.',
      ],
      quizQuestions: [
        {
          question: 'Which technique separates an insoluble solid from a liquid?',
          options: ['Distillation', 'Chromatography', 'Filtration', 'Crystallisation'],
          correctIndex: 2,
        },
        {
          question: 'What property difference allows distillation to separate two liquids?',
          options: ['Colour', 'Boiling point', 'Melting point', 'Density'],
          correctIndex: 1,
        },
        {
          question: 'In chromatography, what carries the substances up the paper?',
          options: ['Heat', 'Gravity', 'A solvent', 'Electric current'],
          correctIndex: 2,
        },
      ],
      furtherReading: 'BBC Bitesize: Separation Techniques; RSC: Chromatography',
    },
  ],
};

export function getAllChemistryLessons(): {
  lesson: ChemistryLesson;
  category: ChemistryTopicCategory;
}[] {
  const categories = Object.keys(chemistryTopics) as ChemistryTopicCategory[];
  return categories.flatMap((category) =>
    chemistryTopics[category].map((lesson) => ({ lesson, category })),
  );
}

export const chemistryCategoryNames: Record<ChemistryTopicCategory, string> = {
  atomsAndElements: 'Atoms & Elements',
  periodicTable: 'The Periodic Table',
  chemicalBonding: 'Chemical Bonding',
  chemicalReactions: 'Chemical Reactions',
  acidsAndBases: 'Acids & Bases',
  materialsAndStates: 'Materials & States',
};

export const chemistryCategoryIcons: Record<ChemistryTopicCategory, string> = {
  atomsAndElements: '⚛️',
  periodicTable: '🔬',
  chemicalBonding: '🔗',
  chemicalReactions: '⚗️',
  acidsAndBases: '🧪',
  materialsAndStates: '🧊',
};

export const chemistryCategoryColors: Record<
  ChemistryTopicCategory,
  { bg: string; border: string; text: string; badge: string }
> = {
  atomsAndElements: {
    bg: 'from-violet-50 to-violet-100',
    border: 'border-violet-500',
    text: 'text-violet-900',
    badge: 'bg-violet-500',
  },
  periodicTable: {
    bg: 'from-cyan-50 to-cyan-100',
    border: 'border-cyan-500',
    text: 'text-cyan-900',
    badge: 'bg-cyan-500',
  },
  chemicalBonding: {
    bg: 'from-emerald-50 to-emerald-100',
    border: 'border-emerald-500',
    text: 'text-emerald-900',
    badge: 'bg-emerald-500',
  },
  chemicalReactions: {
    bg: 'from-orange-50 to-orange-100',
    border: 'border-orange-500',
    text: 'text-orange-900',
    badge: 'bg-orange-500',
  },
  acidsAndBases: {
    bg: 'from-rose-50 to-rose-100',
    border: 'border-rose-500',
    text: 'text-rose-900',
    badge: 'bg-rose-500',
  },
  materialsAndStates: {
    bg: 'from-sky-50 to-sky-100',
    border: 'border-sky-500',
    text: 'text-sky-900',
    badge: 'bg-sky-500',
  },
};
