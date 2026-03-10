import { BiologyTopics, BiologyLesson, BiologyTopicCategory } from '@/types';

export const biologyTopics: BiologyTopics = {
  cellsAndOrganisation: [
    {
      title: 'The Cell: Building Block of Life',
      category: 'Cells & Organisation',
      level: 'standard',
      objectives: [
        'Describe the structure of animal and plant cells',
        'Identify and explain the function of key cell organelles',
        'Compare and contrast animal and plant cells',
      ],
      introduction:
        'Every living thing — from a bacterium to a blue whale — is made of cells. Cells are the smallest units of life, capable of carrying out all the basic processes: obtaining energy, growing, reproducing, and responding to their environment. Right now, about 37 trillion cells in your body are working in perfect coordination to keep you alive and thinking.',
      mainContent: [
        'All cells share basic features: a cell membrane controlling what enters and exits, cytoplasm (a jelly-like fluid where chemical reactions occur), and DNA containing genetic instructions.',
        'Animal cells also contain: a nucleus (control centre with DNA), mitochondria (where respiration releases energy), ribosomes (where proteins are made), and an endoplasmic reticulum (transport network).',
        'Plant cells have all of the above PLUS: a rigid cell wall made of cellulose (for support), chloroplasts (where photosynthesis occurs), and a large central vacuole (for storage and maintaining pressure).',
        'Prokaryotic cells (bacteria) lack a nucleus — their DNA floats freely in the cytoplasm. Eukaryotic cells (animals, plants, fungi) have a membrane-bound nucleus.',
        'Cells are organised into tissues (groups of similar cells), then organs (groups of tissues), then organ systems, and finally organisms.',
        'Specialised cells are adapted for specific jobs — red blood cells lack a nucleus to carry more haemoglobin; root hair cells have long projections to increase surface area for water absorption.',
      ],
      keyConceptsAndDefinitions: [
        {
          term: 'Cell membrane',
          definition:
            'A thin, flexible layer surrounding all cells that controls the movement of substances in and out.',
        },
        {
          term: 'Nucleus',
          definition:
            'The control centre of a eukaryotic cell, containing DNA and directing cell activities.',
        },
        {
          term: 'Mitochondria',
          definition:
            'Organelles where aerobic respiration occurs, releasing energy (ATP) for the cell.',
        },
        {
          term: 'Chloroplast',
          definition:
            'Organelle found in plant cells that contains chlorophyll and carries out photosynthesis.',
        },
        {
          term: 'Cell wall',
          definition:
            'A rigid outer layer made of cellulose in plant cells, providing structural support.',
        },
        {
          term: 'Vacuole',
          definition:
            'A large membrane-bound sac in plant cells storing water and maintaining turgor pressure.',
        },
        {
          term: 'Ribosome',
          definition:
            'Tiny organelle where proteins are synthesised according to instructions from DNA.',
        },
      ],
      experiments: [
        {
          name: 'Observing Onion Cells Under a Microscope',
          description: 'Prepare a wet mount of onion skin cells to observe plant cell structures.',
          steps: [
            'Peel a thin layer from the inside of an onion and lay it flat on a glass slide.',
            'Add one drop of iodine solution to stain the cells (this makes the nucleus visible).',
            'Lower a coverslip carefully at an angle to avoid bubbles.',
            'Place the slide on the microscope stage and start with the lowest magnification (×4 objective).',
            'Bring cells into focus, then switch to ×10 or ×40 for a detailed view.',
            'Sketch what you see — label cell wall, cell membrane, nucleus, and vacuole.',
          ],
          safetyNote:
            'Iodine stains skin and clothing. Handle microscope slides carefully as they can break. Adult supervision recommended.',
        },
      ],
      practiceQuestions: [
        {
          question: 'Name THREE structures found in plant cells but not in animal cells.',
          answer: 'Cell wall (cellulose), chloroplasts, and large permanent vacuole.',
        },
        {
          question: 'Why do red blood cells lack a nucleus?',
          answer:
            'Removing the nucleus creates more space to pack in haemoglobin, the protein that carries oxygen — making red blood cells more efficient at their job.',
        },
        {
          question: 'What is the difference between a prokaryotic and a eukaryotic cell?',
          answer:
            'Prokaryotic cells (like bacteria) have no membrane-bound nucleus — DNA floats in the cytoplasm. Eukaryotic cells (like animal and plant cells) have a true nucleus enclosed in a membrane.',
        },
      ],
      funFacts: [
        'The largest cell in the human body is the egg cell (ovum) — just visible to the naked eye at about 0.1 mm across.',
        'Your body replaces about 3.8 million cells every single second — mostly red blood cells and skin cells.',
        'The longest cells in your body are motor neurons — some stretch from your spinal cord all the way to your big toe (over a metre long).',
      ],
      realWorldConnections: [
        'Cancer occurs when cells lose control of their division cycle — understanding cell biology is the foundation of cancer treatment.',
        "Stem cell therapy uses undifferentiated cells to repair or replace damaged tissues, offering hope for conditions like Parkinson's disease.",
        'Yeast cells (used in bread and beer-making) are single-celled fungi — bakers exploit their metabolic processes daily.',
      ],
      quizQuestions: [
        {
          question: 'Which organelle is responsible for releasing energy through respiration?',
          options: ['Nucleus', 'Chloroplast', 'Mitochondria', 'Ribosome'],
          correctIndex: 2,
        },
        {
          question: 'What substance makes up the plant cell wall?',
          options: ['Starch', 'Cellulose', 'Protein', 'Chitin'],
          correctIndex: 1,
        },
        {
          question: 'Which type of cell has no membrane-bound nucleus?',
          options: ['Animal cell', 'Plant cell', 'Fungal cell', 'Bacterial cell'],
          correctIndex: 3,
        },
      ],
      furtherReading:
        'BBC Bitesize: Cell structure; Khan Academy: Introduction to cells; "The Cell: A Very Short Introduction" by Terence Allen',
    },
    {
      title: 'Diffusion, Osmosis and Active Transport',
      category: 'Cells & Organisation',
      level: 'standard',
      objectives: [
        'Define diffusion, osmosis, and active transport',
        'Explain how substances move in and out of cells',
        'Predict the effect of concentration gradients on cell behaviour',
      ],
      introduction:
        'Cells are not sealed boxes — they constantly exchange substances with their surroundings. Oxygen must enter, carbon dioxide must leave, nutrients must be absorbed, and waste must be expelled. Three key processes govern this traffic: diffusion (passive movement down a concentration gradient), osmosis (water movement across a partially permeable membrane), and active transport (energy-powered movement against a gradient).',
      mainContent: [
        'Diffusion is the net movement of particles from an area of high concentration to an area of low concentration, down the concentration gradient. No energy is required — particles move randomly until evenly distributed.',
        'Factors affecting diffusion: concentration gradient (steeper = faster), surface area (larger = faster), distance (shorter = faster), temperature (higher = faster), and molecule size (smaller = faster).',
        'Osmosis is the movement of WATER molecules only, across a partially permeable membrane, from a region of HIGH water potential (dilute solution) to LOW water potential (concentrated solution).',
        'When a plant cell is placed in water, it becomes turgid as water enters by osmosis — the cell wall prevents it from bursting. An animal cell (no cell wall) would burst (lysis).',
        'When a plant cell is placed in a concentrated salt solution, it loses water and becomes flaccid — this is plasmolysis. Animal cells shrivel (crenation).',
        'Active transport moves substances AGAINST the concentration gradient (from low to high concentration). It requires energy (ATP) from respiration. Example: root hair cells absorbing mineral ions from dilute soil water.',
      ],
      keyConceptsAndDefinitions: [
        {
          term: 'Diffusion',
          definition:
            'Net movement of particles from high to low concentration, down the concentration gradient, without energy.',
        },
        {
          term: 'Osmosis',
          definition:
            'Movement of water molecules across a partially permeable membrane from high to low water potential.',
        },
        {
          term: 'Concentration gradient',
          definition:
            'The difference in concentration between two regions — the steeper the gradient, the faster diffusion occurs.',
        },
        {
          term: 'Partially permeable membrane',
          definition:
            'A membrane that allows small molecules (like water) to pass through but not larger solute molecules.',
        },
        {
          term: 'Active transport',
          definition:
            'Movement of substances against the concentration gradient, requiring energy (ATP) from respiration.',
        },
        {
          term: 'Turgid',
          definition:
            'A plant cell swollen with water, exerting pressure against the cell wall — the normal healthy state.',
        },
        {
          term: 'Plasmolysis',
          definition:
            'When a plant cell loses so much water by osmosis that the membrane pulls away from the cell wall.',
        },
      ],
      experiments: [
        {
          name: 'Osmosis in Potato Strips',
          description:
            'Investigate how salt concentration affects water movement in potato tissue.',
          steps: [
            'Cut 5 identical strips of potato (approx. 5 cm × 1 cm) and measure and record their initial length and mass.',
            'Prepare 5 solutions: 0%, 5%, 10%, 15%, and 20% salt solution in separate beakers.',
            'Place one potato strip in each beaker and leave for 30–40 minutes.',
            'Remove each strip, blot dry with paper towel, and measure length and mass again.',
            'Calculate percentage change in mass: ((final − initial) / initial) × 100',
            "Plot a graph of salt concentration (x-axis) vs percentage change in mass (y-axis). Where does the line cross zero? That is the isotonic point — the concentration of the potato's own cell sap.",
          ],
          safetyNote: 'Take care with sharp knives when cutting potato. Wash hands after handling.',
        },
      ],
      practiceQuestions: [
        {
          question:
            'Explain why a plant cell placed in pure water becomes turgid but does not burst.',
          answer:
            'Water enters the cell by osmosis (moving from high to low water potential). The cell expands, but the rigid cellulose cell wall resists further expansion and prevents bursting — generating turgor pressure.',
        },
        {
          question: 'Why does active transport require energy while diffusion does not?',
          answer:
            'Diffusion moves particles down the concentration gradient — this is a natural, spontaneous process requiring no energy input. Active transport moves particles against the gradient, from low to high concentration, which requires protein pumps powered by ATP (energy from respiration).',
        },
        {
          question: 'List THREE factors that increase the rate of diffusion.',
          answer:
            'A steeper concentration gradient, a larger surface area, a shorter diffusion distance, higher temperature, or smaller molecule size (any three).',
        },
      ],
      funFacts: [
        'When you add salt to aubergine or cucumber before cooking, osmosis draws out the water — this is why they soften and liquid appears.',
        'Mangrove trees in the Caribbean thrive in salt water partly because their roots can exclude salt ions through selective membrane mechanisms.',
        'Sports drinks are designed to be isotonic with blood — so water and electrolytes are absorbed quickly without osmotic imbalance.',
      ],
      realWorldConnections: [
        'Kidney dialysis mimics osmosis and diffusion to remove waste products from blood when kidneys fail.',
        'Farmers use dilute fertiliser solutions — too concentrated and osmosis would pull water OUT of plant roots, killing the crop.',
        'Preservation of food with salt or sugar works by drawing water out of microbial cells by osmosis, killing bacteria.',
      ],
      quizQuestions: [
        {
          question: 'In osmosis, water moves from a region of:',
          options: [
            'Low water potential to high water potential',
            'High water potential to low water potential',
            'High solute concentration to low solute concentration',
            'Low temperature to high temperature',
          ],
          correctIndex: 1,
        },
        {
          question: 'Which process requires energy (ATP)?',
          options: ['Diffusion', 'Osmosis', 'Active transport', 'Evaporation'],
          correctIndex: 2,
        },
        {
          question: 'A plant cell placed in a very concentrated salt solution will become:',
          options: ['Turgid', 'Lysed', 'Plasmolysed', 'Isotonic'],
          correctIndex: 2,
        },
      ],
      furtherReading:
        'BBC Bitesize: Transport in cells; Khan Academy: Osmosis; "The Selfish Gene" by Richard Dawkins (intro chapters on cells)',
    },
  ],

  bodySystems: [
    {
      title: "The Circulatory System: Your Body's Transport Network",
      category: 'Body Systems',
      level: 'standard',
      objectives: [
        'Describe the structure and function of the heart',
        'Explain the double circulatory system in humans',
        'Identify the roles of blood, arteries, veins, and capillaries',
      ],
      introduction:
        "Your heart beats around 100,000 times a day without you thinking about it, pushing about 7,000 litres of blood through roughly 100,000 km of blood vessels. The circulatory system is your body's delivery and collection service — bringing oxygen and nutrients to every cell while collecting carbon dioxide and waste for removal. Without it, cells would starve and suffocate within minutes.",
      mainContent: [
        'The human circulatory system is a double circulatory system: the right side of the heart pumps deoxygenated blood to the lungs (pulmonary circulation); the left side pumps oxygenated blood to the rest of the body (systemic circulation).',
        'The heart has four chambers: two atria (upper) that receive blood and two ventricles (lower) that pump blood out. The left ventricle has a much thicker wall because it pumps blood the full distance around the body.',
        'Arteries carry blood AWAY from the heart under high pressure — they have thick, elastic walls. Veins carry blood TOWARDS the heart at low pressure — they have thinner walls and valves to prevent backflow. Capillaries are microscopic and allow exchange of substances with tissues.',
        'Blood consists of red blood cells (carry oxygen using haemoglobin), white blood cells (fight infection), platelets (clotting), and plasma (liquid carrying dissolved nutrients, hormones, and waste).',
        'The cardiac cycle: diastole (heart muscle relaxes, chambers fill with blood), then systole (atria contract, then ventricles contract, pushing blood out).',
        "Heart rate is controlled by the sinoatrial node (the heart's natural pacemaker) in the right atrium. Exercise, adrenaline, and stress increase heart rate; sleep and relaxation decrease it.",
      ],
      keyConceptsAndDefinitions: [
        {
          term: 'Double circulation',
          definition:
            'A system where blood passes through the heart twice per complete circuit — once for the lungs and once for the body.',
        },
        {
          term: 'Artery',
          definition:
            'A blood vessel carrying blood away from the heart under high pressure, with thick elastic walls.',
        },
        {
          term: 'Vein',
          definition:
            'A blood vessel carrying blood towards the heart at low pressure, with valves to prevent backflow.',
        },
        {
          term: 'Capillary',
          definition:
            'The smallest blood vessels, one cell thick, where gas and nutrient exchange occurs between blood and tissues.',
        },
        {
          term: 'Haemoglobin',
          definition:
            'The iron-containing protein in red blood cells that binds oxygen in the lungs and releases it in tissues.',
        },
        {
          term: 'Plasma',
          definition:
            'The liquid component of blood (mostly water) that transports dissolved substances including glucose, urea, and hormones.',
        },
        {
          term: 'Sinoatrial node',
          definition:
            "The heart's natural pacemaker in the right atrium, generating electrical signals that coordinate heartbeats.",
        },
      ],
      experiments: [
        {
          name: 'Measuring Heart Rate and Recovery',
          description:
            'Investigate how exercise affects heart rate and how quickly it returns to resting rate.',
          steps: [
            'Sit quietly for 3 minutes, then measure your resting heart rate by counting pulse beats for 15 seconds and multiplying by 4 (beats per minute).',
            'Do 2 minutes of step-ups (stepping on and off a chair or step).',
            'Immediately measure heart rate again (15 seconds × 4).',
            'Sit down and measure heart rate every minute for 5 minutes.',
            'Plot a graph: time (x-axis) vs heart rate (y-axis). Mark the exercise period.',
            'Compare recovery times between different people. Fitter people recover faster — their hearts are more efficient.',
          ],
          safetyNote:
            'Anyone with a known heart condition should not do vigorous exercise. Stop immediately if you feel dizzy or unwell.',
        },
      ],
      practiceQuestions: [
        {
          question:
            'Why does the left ventricle have a thicker muscular wall than the right ventricle?',
          answer:
            'The left ventricle must pump blood to the entire body (systemic circulation) — a much greater distance requiring higher pressure. The right ventricle only pumps blood to the nearby lungs (pulmonary circulation), requiring less force.',
        },
        {
          question: 'Explain why capillaries are well-suited for exchange of substances.',
          answer:
            'Capillaries are just one cell thick, reducing diffusion distance. They also have a massive total surface area and blood flows slowly through them — all maximising exchange of oxygen, glucose, and waste products with surrounding cells.',
        },
        {
          question: 'What is the role of valves in veins?',
          answer:
            'Valves prevent the backflow of blood. Blood in veins is under low pressure — without valves it would flow backwards under gravity. Valves open when blood flows towards the heart and snap shut to stop it reversing.',
        },
      ],
      funFacts: [
        'If you stretched all your blood vessels end to end, they would circle the Earth about 2.5 times.',
        'Octopuses have THREE hearts — two pump blood to the gills, one pumps it to the rest of the body. And their blood is blue, not red (it uses copper-based haemocyanin instead of iron-based haemoglobin).',
        "A giraffe's heart weighs about 11 kg and generates twice the blood pressure of a human to push blood all the way up its long neck.",
      ],
      realWorldConnections: [
        'Sickle cell disease — more common in people of African and Caribbean heritage — changes the shape of red blood cells, affecting oxygen transport.',
        'Coronary heart disease, caused by fatty deposits narrowing arteries, remains the leading cause of death in the UK. Diet, exercise, and not smoking dramatically reduce risk.',
        'Heart transplants, pacemakers, and stents are all medical technologies developed from understanding circulatory system biology.',
      ],
      quizQuestions: [
        {
          question: 'Which side of the heart pumps blood to the lungs?',
          options: [
            'Left side',
            'Right side',
            'Both sides equally',
            'Neither — the lungs inflate themselves',
          ],
          correctIndex: 1,
        },
        {
          question: 'Which blood vessel type has valves to prevent backflow?',
          options: ['Arteries', 'Capillaries', 'Veins', 'Aorta'],
          correctIndex: 2,
        },
        {
          question: 'What component of blood carries oxygen?',
          options: ['Plasma', 'Platelets', 'White blood cells', 'Red blood cells'],
          correctIndex: 3,
        },
      ],
      furtherReading:
        'BBC Bitesize: The circulatory system; British Heart Foundation website; "The Body: A Guide for Occupants" by Bill Bryson (Chapter on the heart)',
    },
    {
      title: 'Photosynthesis and Respiration',
      category: 'Body Systems',
      level: 'standard',
      objectives: [
        'Write and explain the equations for photosynthesis and aerobic respiration',
        'Describe where these reactions occur in cells',
        'Explain the interdependence of photosynthesis and respiration in ecosystems',
      ],
      introduction:
        "Two chemical reactions power almost all life on Earth. Photosynthesis — carried out by plants, algae, and some bacteria — captures the sun's energy and converts it into glucose, releasing oxygen as a by-product. Respiration — carried out by virtually all living things, including plants — releases that stored energy from glucose for cellular work. Together, these reactions form the foundation of life and drive the cycling of carbon and oxygen through every ecosystem.",
      mainContent: [
        'Photosynthesis equation: carbon dioxide + water → glucose + oxygen (using light energy). In symbols: 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂. This occurs in chloroplasts, specifically in the thylakoid membranes and the stroma.',
        'Factors limiting photosynthesis: light intensity (more light = faster, up to a maximum), CO₂ concentration (more CO₂ = faster, up to a maximum), and temperature (higher = faster until enzymes denature at ~40°C).',
        'Aerobic respiration equation: glucose + oxygen → carbon dioxide + water (+ energy as ATP). In symbols: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + ATP. This occurs in mitochondria.',
        'Anaerobic respiration occurs when oxygen is limited: in animals, glucose → lactic acid (+ a small amount of ATP), causing muscle fatigue. In yeast and plants, glucose → ethanol + carbon dioxide (fermentation).',
        'Plants carry out BOTH photosynthesis and respiration: during the day, photosynthesis exceeds respiration and they absorb CO₂; at night, only respiration occurs and they release CO₂.',
        'The rate of photosynthesis can be measured by counting bubbles of oxygen produced by aquatic plants (e.g. Elodea) per unit time under different conditions.',
      ],
      keyConceptsAndDefinitions: [
        {
          term: 'Photosynthesis',
          definition:
            'The process by which plants use light energy, CO₂, and water to produce glucose and oxygen.',
        },
        {
          term: 'Aerobic respiration',
          definition:
            'The release of energy from glucose using oxygen, producing CO₂ and water as waste products.',
        },
        {
          term: 'Anaerobic respiration',
          definition:
            'The release of energy from glucose WITHOUT oxygen — producing lactic acid (in animals) or ethanol + CO₂ (in yeast).',
        },
        {
          term: 'Chlorophyll',
          definition:
            'The green pigment in chloroplasts that absorbs light energy (mainly red and blue wavelengths) for photosynthesis.',
        },
        {
          term: 'ATP',
          definition:
            'Adenosine triphosphate — the molecule that stores and transfers energy within cells, produced during respiration.',
        },
        {
          term: 'Limiting factor',
          definition:
            'The factor present in the shortest supply that restricts the rate of a process such as photosynthesis.',
        },
        {
          term: 'Fermentation',
          definition:
            'Anaerobic respiration in yeast: glucose → ethanol + carbon dioxide. Used in bread-making and brewing.',
        },
      ],
      experiments: [
        {
          name: 'Investigating Photosynthesis Rate with Elodea',
          description:
            'Measure how light intensity affects photosynthesis by counting oxygen bubbles produced by aquatic pondweed.',
          steps: [
            'Place a 10 cm sprig of Elodea in a boiling tube filled with water containing dissolved sodium hydrogen carbonate (provides CO₂).',
            'Set up a lamp at 10 cm from the plant. Count the number of oxygen bubbles produced in 1 minute.',
            'Repeat at distances of 20 cm, 30 cm, 40 cm, and 50 cm (light intensity decreases with distance).',
            'Keep temperature constant by placing the boiling tube in a water bath.',
            'Record results in a table and plot a graph of bubble count (y-axis) vs distance from lamp (x-axis).',
            'Discuss: why does bubble count decrease with distance? What other factors could limit the rate?',
          ],
          safetyNote:
            'Handle glassware carefully. Ensure lamps do not overheat the water — use a water bath or fan if needed.',
        },
      ],
      practiceQuestions: [
        {
          question: 'Write the word equation for aerobic respiration.',
          answer: 'Glucose + oxygen → carbon dioxide + water (+ energy released as ATP).',
        },
        {
          question:
            'Explain why increasing CO₂ concentration increases the rate of photosynthesis up to a point, then stops having an effect.',
          answer:
            'More CO₂ provides more raw material for photosynthesis, increasing the rate. However, once another factor (such as light intensity or temperature) becomes limiting, adding more CO₂ cannot increase the rate further — the reaction is being restricted by a different factor.',
        },
        {
          question:
            'A student runs a race and afterwards feels a burning sensation in their leg muscles. Explain why.',
          answer:
            'During intense exercise, oxygen delivery to muscle cells cannot keep up with demand. Anaerobic respiration occurs, producing lactic acid as a by-product. Lactic acid accumulates in the muscles, causing the characteristic burning pain.',
        },
      ],
      funFacts: [
        "About half of the Earth's oxygen is produced not by trees, but by phytoplankton — tiny photosynthetic organisms in the ocean.",
        'A single mature tree absorbs about 21 kg of CO₂ per year — but a hectare of Caribbean mangrove forest can store up to 10 times more carbon than a typical tropical forest.',
        'Bioluminescent creatures like fireflies and deep-sea fish use ATP energy (from respiration) to produce light — a process called chemiluminescence.',
      ],
      realWorldConnections: [
        'Fermentation by yeast is the basis of the Caribbean rum industry — yeast breaks down sugar from sugar cane into ethanol through anaerobic respiration.',
        'Climate change is driven largely by the disruption of the carbon cycle — burning fossil fuels releases CO₂ faster than photosynthesis can absorb it.',
        'Greenhouses use elevated CO₂ levels to boost photosynthesis and increase crop yields — a direct application of limiting factor biology.',
      ],
      quizQuestions: [
        {
          question: 'Where in the cell does photosynthesis occur?',
          options: ['Mitochondria', 'Nucleus', 'Chloroplasts', 'Ribosomes'],
          correctIndex: 2,
        },
        {
          question: 'What is produced during anaerobic respiration in human muscle cells?',
          options: ['Ethanol', 'Lactic acid', 'Carbon dioxide only', 'ATP only'],
          correctIndex: 1,
        },
        {
          question: 'Which of the following is a product of aerobic respiration?',
          options: ['Glucose', 'Oxygen', 'Carbon dioxide', 'Chlorophyll'],
          correctIndex: 2,
        },
      ],
      furtherReading:
        'BBC Bitesize: Photosynthesis; Khan Academy: Cellular respiration; "The Hidden Life of Trees" by Peter Wohlleben',
    },
  ],

  ecologyAndEcosystems: [
    {
      title: 'Food Webs and Energy Flow',
      category: 'Ecology & Ecosystems',
      level: 'standard',
      objectives: [
        'Construct and interpret food chains and food webs',
        'Explain the flow of energy through ecosystems',
        'Describe the consequences of removing a species from a food web',
      ],
      introduction:
        'Every meal you eat connects you to a web of life stretching back billions of years. In every ecosystem — a Caribbean coral reef, an English woodland, a tropical rainforest — species are linked by what eats what. Energy flows through these connections, from the sun through producers to consumers, losing some at each step. Understanding food webs is fundamental to understanding why ecosystems are fragile, and what happens when they are disrupted.',
      mainContent: [
        'Producers (plants, algae, phytoplankton) make their own food through photosynthesis, converting light energy into chemical energy stored in glucose. They form the base of all food chains.',
        'Consumers obtain energy by eating other organisms: primary consumers (herbivores) eat plants; secondary consumers eat herbivores; tertiary consumers eat secondary consumers.',
        'Decomposers (bacteria and fungi) break down dead organisms, returning minerals to the soil for producers to absorb — completing nutrient cycles.',
        'Energy is lost at each trophic level: only about 10% of energy is passed on — the rest is lost as heat through respiration, or is not consumed. This is why food chains rarely exceed 4–5 links.',
        'A food web shows the interconnected feeding relationships in an ecosystem. Removing one species can have cascading effects — this is called a trophic cascade.',
        'Biomass pyramids show the total mass of organisms at each trophic level. They are almost always pyramid-shaped because energy (and therefore biomass) is lost at each level.',
      ],
      keyConceptsAndDefinitions: [
        {
          term: 'Producer',
          definition:
            'An organism that makes its own food through photosynthesis — the base of all food chains.',
        },
        {
          term: 'Consumer',
          definition: 'An organism that obtains energy by eating other organisms.',
        },
        {
          term: 'Decomposer',
          definition:
            'Bacteria or fungi that break down dead organic matter, returning nutrients to the soil.',
        },
        {
          term: 'Trophic level',
          definition:
            'The position of an organism in a food chain — producers are level 1, primary consumers level 2, etc.',
        },
        {
          term: 'Food web',
          definition:
            'A diagram showing all the interconnected feeding relationships in an ecosystem.',
        },
        {
          term: 'Trophic cascade',
          definition:
            'A chain of effects throughout a food web caused by the removal or addition of a species at one level.',
        },
        {
          term: 'Biomass',
          definition:
            'The total mass of living material at a given trophic level, usually measured in grams or kilograms per unit area.',
        },
      ],
      experiments: [
        {
          name: 'Building a Local Food Web',
          description: 'Research and construct a food web for a local or Caribbean ecosystem.',
          steps: [
            'Choose an ecosystem: a Caribbean coral reef, a Croydon garden, or a temperate woodland.',
            'Research 8–10 organisms found in that ecosystem — include producers, herbivores, carnivores, and a decomposer.',
            'For each organism, find out what it eats (its diet).',
            'Draw each organism as a labelled box or image on a large sheet of paper.',
            'Draw arrows from the organism being eaten TO the organism eating it (arrows show energy flow).',
            'Analyse your web: which organism is eaten by the most others? What might happen if a key species was removed?',
          ],
          safetyNote: 'No safety concerns — this is a research and drawing activity.',
        },
      ],
      practiceQuestions: [
        {
          question: 'Explain why a biomass pyramid is almost always pyramid-shaped.',
          answer:
            'Only about 10% of energy from one trophic level is transferred to the next — the rest is lost as heat through respiration. This means biomass decreases at each level, giving the characteristic pyramid shape.',
        },
        {
          question:
            'A marine food chain is: phytoplankton → krill → fish → shark. What would happen to the krill population if all sharks were removed?',
          answer:
            'Without sharks, the fish population would increase (less predation). More fish would eat more krill, so the krill population would initially decrease. The phytoplankton population might then increase (less krill grazing). This is a trophic cascade.',
        },
        {
          question: 'What is the role of decomposers in an ecosystem?',
          answer:
            'Decomposers (bacteria and fungi) break down dead organisms and waste, releasing minerals back into the soil. These minerals are then absorbed by producers — making decomposers essential for nutrient cycling.',
        },
      ],
      funFacts: [
        'When wolves were reintroduced to Yellowstone National Park in 1995, they triggered a trophic cascade so dramatic that it changed the course of rivers — by altering where deer grazed, allowing vegetation to grow along riverbanks.',
        'The longest food chain ever recorded was in the deep ocean: phytoplankton → zooplankton → shrimp → lanternfish → squid → sperm whale — six trophic levels!',
        'Caribbean coral reefs support around 25% of all marine species despite covering less than 1% of the ocean floor — one of the most productive ecosystems on Earth.',
      ],
      realWorldConnections: [
        'Overfishing disrupts Caribbean food webs — removing top predators like sharks allows prey populations to explode, which can devastate lower levels of the food web.',
        'Pesticides like DDT bioaccumulate through food chains — concentrations can be millions of times higher in top predators than in producers, a process called biomagnification.',
        'Understanding food webs is essential for conservation: protecting one keystone species can preserve an entire ecosystem.',
      ],
      quizQuestions: [
        {
          question: 'In a food chain, arrows represent the transfer of:',
          options: ['Water', 'Nutrients only', 'Energy', 'Carbon dioxide'],
          correctIndex: 2,
        },
        {
          question:
            'Approximately what percentage of energy is transferred between trophic levels?',
          options: ['50%', '25%', '10%', '1%'],
          correctIndex: 2,
        },
        {
          question: 'Which organism is a producer?',
          options: ['Shark', 'Krill', 'Seagrass', 'Crab'],
          correctIndex: 2,
        },
      ],
      furtherReading:
        'BBC Bitesize: Food chains and webs; "The Serengeti Rules" by Sean B. Carroll; WWF Caribbean Conservation resources',
    },
    {
      title: 'Nutrient Cycles and Ecosystems',
      category: 'Ecology & Ecosystems',
      level: 'higher',
      objectives: [
        'Describe the carbon cycle and nitrogen cycle',
        'Explain the roles of different organisms in nutrient cycling',
        'Analyse how human activities disrupt biogeochemical cycles',
      ],
      introduction:
        'Carbon and nitrogen are the backbone of all living things — every protein, every DNA molecule, every cell membrane contains them. Yet the total amount of carbon and nitrogen on Earth never changes. They are continuously recycled through the living and non-living world in biogeochemical cycles. Understanding these cycles is critical to understanding climate change, soil fertility, ocean acidification, and the consequences of deforestation.',
      mainContent: [
        'The carbon cycle: CO₂ is removed from the atmosphere by photosynthesis (stored as glucose in producers). It returns via respiration (all organisms), decomposition (decomposers), combustion (burning), and from the ocean.',
        'Long-term carbon stores: fossil fuels (coal, oil, gas formed over millions of years from compressed dead organisms); calcium carbonate in shells and limestone; dissolved CO₂ in oceans.',
        'The nitrogen cycle: nitrogen gas (N₂) makes up 78% of the atmosphere but most organisms cannot use it directly. Nitrogen-fixing bacteria (e.g. in root nodules of legume plants) convert N₂ to ammonium (NH₄⁺).',
        'Nitrifying bacteria convert ammonium to nitrate (NO₃⁻) in soil — the form plants absorb through roots for making proteins and DNA.',
        'Denitrifying bacteria convert nitrates back to nitrogen gas — returning N₂ to the atmosphere and completing the cycle.',
        'Human disruptions: burning fossil fuels releases stored carbon rapidly; deforestation removes a major carbon sink; artificial nitrogen fertilisers boost crop yields but excess leaches into waterways causing eutrophication.',
      ],
      keyConceptsAndDefinitions: [
        {
          term: 'Carbon cycle',
          definition:
            'The cycling of carbon through living organisms, the atmosphere, oceans, and geological stores such as fossil fuels.',
        },
        {
          term: 'Nitrogen fixation',
          definition:
            'The conversion of atmospheric nitrogen gas (N₂) into ammonia (NH₃) or ammonium, by bacteria or lightning.',
        },
        {
          term: 'Nitrification',
          definition: 'The conversion of ammonium to nitrates by nitrifying bacteria in the soil.',
        },
        {
          term: 'Denitrification',
          definition:
            'The conversion of nitrates back to nitrogen gas by denitrifying bacteria, usually in waterlogged soils.',
        },
        {
          term: 'Eutrophication',
          definition:
            'Excess nutrients (especially nitrates and phosphates) in water causing algal blooms that deplete oxygen and kill aquatic life.',
        },
        {
          term: 'Carbon sink',
          definition:
            'A reservoir that absorbs more carbon than it releases — forests, oceans, and peatlands are major carbon sinks.',
        },
        {
          term: 'Decomposition',
          definition:
            'The breakdown of dead organic matter by decomposers (bacteria and fungi), releasing nutrients back into the ecosystem.',
        },
      ],
      experiments: [
        {
          name: 'Modelling the Carbon Cycle with a Carbon Budget',
          description:
            'Create a visual model of the carbon cycle and calculate how human activities alter carbon flows.',
          steps: [
            'Draw a large diagram of the carbon cycle on A3 paper, including: atmosphere, plants, animals, soil, ocean, and fossil fuels.',
            'Research and add approximate sizes of each carbon store in gigatonnes of carbon (GtC).',
            'Add arrows showing carbon fluxes (flows per year): photosynthesis, respiration, decomposition, combustion, ocean absorption.',
            'Highlight in red the flows that human activities have altered.',
            'Calculate: if humans release ~10 GtC per year from fossil fuels and land use, and natural sinks absorb ~5 GtC, how much accumulates in the atmosphere each year?',
            'Discuss: what changes to the cycle could help reduce atmospheric CO₂ levels?',
          ],
          safetyNote: 'No safety concerns — this is a research and modelling activity.',
        },
      ],
      practiceQuestions: [
        {
          question: 'Explain the role of nitrogen-fixing bacteria in the nitrogen cycle.',
          answer:
            'Nitrogen-fixing bacteria (e.g. Rhizobium in legume root nodules) convert atmospheric nitrogen gas (N₂) into ammonium (NH₄⁺) — a form that can enter food chains. Without them, plants could not access nitrogen to make proteins and DNA.',
        },
        {
          question: 'Explain how deforestation affects the carbon cycle.',
          answer:
            'Forests are major carbon sinks — trees absorb CO₂ through photosynthesis. Deforestation removes this sink, reducing CO₂ absorption. If trees are burned, stored carbon is also released as CO₂ directly. Both effects increase atmospheric CO₂ concentrations.',
        },
        {
          question: 'What is eutrophication and what causes it?',
          answer:
            'Eutrophication is the over-enrichment of waterways with nutrients (especially nitrates and phosphates from fertiliser run-off). Algae grow explosively (algal bloom), blocking light. Algae die, decomposers multiply and consume all dissolved oxygen — fish and other aquatic life suffocate.',
        },
      ],
      funFacts: [
        'Tropical peatlands in the Caribbean and South America store vast amounts of carbon — draining them for agriculture releases thousands of years of stored carbon within years.',
        'Lightning strikes fix about 100 million tonnes of nitrogen per year globally — joining the work of bacteria in making nitrogen available to ecosystems.',
        'The ocean has absorbed over 30% of all CO₂ emitted by humans since industrialisation — but this is making it more acidic, threatening coral reefs across the Caribbean.',
      ],
      realWorldConnections: [
        'Caribbean coral bleaching is directly linked to ocean acidification and warming — both driven by elevated atmospheric CO₂.',
        'Organic farming avoids artificial nitrogen fertilisers, relying instead on crop rotation with legumes (which harbour nitrogen-fixing bacteria) to maintain soil fertility.',
        'Carbon capture and storage (CCS) technology attempts to mimic natural carbon sinks by trapping CO₂ from power stations and storing it underground.',
      ],
      quizQuestions: [
        {
          question: 'Which bacteria convert atmospheric nitrogen into ammonium?',
          options: [
            'Nitrifying bacteria',
            'Denitrifying bacteria',
            'Nitrogen-fixing bacteria',
            'Decomposing bacteria',
          ],
          correctIndex: 2,
        },
        {
          question: 'Which human activity is the BIGGEST contributor to rising atmospheric CO₂?',
          options: ['Deforestation', 'Agriculture', 'Burning fossil fuels', 'Volcanic eruptions'],
          correctIndex: 2,
        },
        {
          question: 'What is eutrophication?',
          options: [
            'The conversion of nitrates to nitrogen gas',
            'Over-enrichment of water with nutrients causing algal blooms and oxygen depletion',
            'The absorption of CO₂ by oceans',
            'The breakdown of glucose in respiration',
          ],
          correctIndex: 1,
        },
      ],
      furtherReading:
        'BBC Bitesize: Nutrient cycles; NASA Earth Observatory carbon cycle resources; "A Field Guide to Climate Anxiety" by Sarah Jaquette Ray',
    },
  ],

  geneticsAndInheritance: [
    {
      title: 'DNA, Genes and Chromosomes',
      category: 'Genetics & Inheritance',
      level: 'standard',
      objectives: [
        'Describe the structure of DNA and how genetic information is stored',
        'Explain the relationship between DNA, genes, and chromosomes',
        'Describe how DNA is copied during cell division',
      ],
      introduction:
        'Inside almost every cell in your body is a complete instruction manual for building you. This manual is written in DNA — a molecule so thin that if you stretched out all the DNA from a single human cell, it would be about 2 metres long, yet coiled and packed to fit inside a nucleus just 6 micrometres across. Understanding DNA is understanding the language of life — and it has transformed medicine, forensics, and our understanding of human ancestry.',
      mainContent: [
        'DNA (deoxyribonucleic acid) is a double helix — two strands twisted around each other. Each strand is made of nucleotides, each containing a sugar (deoxyribose), a phosphate group, and one of four bases: Adenine (A), Thymine (T), Guanine (G), or Cytosine (C).',
        'Base pairing is complementary and specific: A always pairs with T, G always pairs with C. This complementary base pairing is the key to how DNA copies itself.',
        'A gene is a section of DNA that codes for a specific protein (or sometimes a structural or regulatory RNA). The sequence of bases in a gene determines the sequence of amino acids in a protein.',
        'Chromosomes are long, coiled molecules of DNA wrapped around proteins called histones. Humans have 46 chromosomes (23 pairs) in most cells. Gametes (sperm and egg cells) contain 23 chromosomes each.',
        'DNA replication: before cell division, the double helix unzips as hydrogen bonds between base pairs break. Each strand acts as a template, and complementary bases are added by an enzyme called DNA polymerase. Two identical DNA molecules result.',
        'Mutations are changes in DNA base sequence. Some mutations change the protein coded for and may have harmful, neutral, or (rarely) beneficial effects. Mutations in genes controlling cell division can lead to cancer.',
      ],
      keyConceptsAndDefinitions: [
        {
          term: 'DNA',
          definition:
            'Deoxyribonucleic acid — the double-helix molecule carrying genetic information, made of nucleotides with four bases (A, T, G, C).',
        },
        {
          term: 'Gene',
          definition:
            'A section of DNA coding for a specific protein or other functional molecule.',
        },
        {
          term: 'Chromosome',
          definition:
            'A long, coiled DNA molecule wrapped around histone proteins; humans have 46 in most cells (23 pairs).',
        },
        {
          term: 'Base pair',
          definition:
            'Complementary bases held together by hydrogen bonds: A–T and G–C. The pairing rule ensures accurate DNA replication.',
        },
        {
          term: 'Mutation',
          definition:
            'A change in the DNA base sequence that may alter the protein coded for — can be spontaneous or caused by mutagens.',
        },
        {
          term: 'DNA replication',
          definition:
            'The process by which DNA copies itself before cell division, producing two identical double-helix molecules.',
        },
        {
          term: 'Genome',
          definition:
            'The complete set of genetic instructions in an organism — the entire DNA of all chromosomes.',
        },
      ],
      experiments: [
        {
          name: 'DNA Extraction from Strawberries',
          description:
            'Extract visible strands of DNA from strawberry cells using household materials.',
          steps: [
            'Place 2 strawberries in a zip-lock bag, seal it, and mash thoroughly for 2 minutes.',
            'Mix 5 ml washing-up liquid, 1 g salt, and 90 ml water in a cup to make the extraction solution.',
            'Add 10 ml of extraction solution to the mashed strawberry. Gently knead the bag for 1 minute.',
            'Filter the mixture through a coffee filter or mesh into a tall clear glass.',
            'Slowly pour ice-cold rubbing alcohol (isopropanol) down the side of the glass to form a layer on top.',
            'After 2–3 minutes, white stringy DNA will appear at the alcohol-water interface. Spool it out with a wooden stick.',
          ],
          safetyNote:
            'Isopropanol is flammable — keep away from flames. Do not drink. Wash hands thoroughly after.',
        },
      ],
      practiceQuestions: [
        {
          question:
            'If one strand of DNA has the sequence ATCGTA, what is the complementary strand?',
          answer:
            'TAGCAT — A pairs with T, T pairs with A, C pairs with G, G pairs with C, T pairs with A, A pairs with T.',
        },
        {
          question: 'Explain how a mutation could lead to a non-functional protein.',
          answer:
            "A mutation changes one or more bases in a gene. Since the base sequence determines the amino acid sequence (via codons), a mutation can alter the amino acid sequence of the protein. Even a single amino acid change can disrupt the protein's shape and prevent it from functioning correctly (e.g. sickle cell haemoglobin).",
        },
        {
          question: 'Why must DNA replicate before cell division?',
          answer:
            'Each new cell produced by division needs a complete set of genetic instructions. DNA replication ensures every daughter cell receives an identical copy of the full genome, allowing normal cell function.',
        },
      ],
      funFacts: [
        'Human DNA is 99.9% identical between any two people — the 0.1% difference accounts for all human variation in appearance, disease susceptibility, and traits.',
        'Humans share about 98.7% of DNA with chimpanzees, ~85% with mice, ~60% with fruit flies, and even ~31% with yeast.',
        'The entire human genome was first sequenced in 2003, taking 13 years and costing $2.7 billion. Today, a full genome can be sequenced in hours for under £200.',
      ],
      realWorldConnections: [
        'Forensic DNA profiling uses variations in non-coding regions of DNA to identify individuals from crime scene samples with very high accuracy.',
        'Sickle cell disease — prevalent in people of African and Caribbean descent — is caused by a single base mutation in the haemoglobin gene, changing one amino acid.',
        'CRISPR-Cas9 gene editing technology allows scientists to precisely change DNA sequences, offering potential cures for genetic diseases like cystic fibrosis.',
      ],
      quizQuestions: [
        {
          question: 'Which base pairs with Adenine (A) in DNA?',
          options: ['Guanine (G)', 'Cytosine (C)', 'Thymine (T)', 'Adenine (A)'],
          correctIndex: 2,
        },
        {
          question: 'How many chromosomes do human body cells (not gametes) contain?',
          options: ['23', '46', '92', '48'],
          correctIndex: 1,
        },
        {
          question: 'What enzyme builds new DNA strands during replication?',
          options: ['RNA polymerase', 'DNA polymerase', 'Lipase', 'Amylase'],
          correctIndex: 1,
        },
      ],
      furtherReading:
        'BBC Bitesize: Inheritance and genetics; "The Gene: An Intimate History" by Siddhartha Mukherjee; Human Genome Project resources at genomics.gov',
    },
    {
      title: 'Inheritance and Natural Selection',
      category: 'Genetics & Inheritance',
      level: 'standard',
      objectives: [
        'Use Punnett squares to predict outcomes of genetic crosses',
        'Distinguish between dominant and recessive alleles',
        'Explain how natural selection leads to evolution over time',
      ],
      introduction:
        'Why do you look like your parents, yet are unique? The answer lies in inheritance — the passing of genetic information from parent to offspring through sexual reproduction. But inheritance is not destiny: your exact combination of alleles has never existed before and will never exist again. Understanding how genes are inherited, and how natural selection acts on genetic variation, reveals how life has diversified over billions of years into the extraordinary range of species we see today.',
      mainContent: [
        'Each chromosome in a pair carries genes at the same positions (loci). The two copies of a gene are called alleles — they may be identical or different versions.',
        'A dominant allele is always expressed in the phenotype (even if only one copy is present). A recessive allele is only expressed when two copies are present (homozygous recessive).',
        'Genotype describes the alleles present (e.g. Bb); phenotype describes the observable characteristic (e.g. brown eyes). Homozygous = both alleles the same; heterozygous = different alleles.',
        'Punnett squares predict the probability of offspring genotypes. For a monohybrid cross of two heterozygous parents (Bb × Bb), the probability ratio is 1 BB : 2 Bb : 1 bb (phenotype ratio 3 dominant : 1 recessive).',
        'Natural selection: within any population, individuals show variation (due to mutations and sexual reproduction). Some variations improve survival and reproduction in a given environment. These individuals are more likely to pass their alleles to offspring. Over many generations, advantageous alleles become more common — this is evolution by natural selection.',
        'Charles Darwin and Alfred Russel Wallace independently developed the theory of natural selection in the 19th century. The evidence includes the fossil record, comparative anatomy, and DNA comparisons between species.',
      ],
      keyConceptsAndDefinitions: [
        {
          term: 'Allele',
          definition:
            'One of two or more versions of a gene at a specific position on a chromosome.',
        },
        {
          term: 'Dominant allele',
          definition:
            'An allele whose effect is shown in the phenotype even when only one copy is present.',
        },
        {
          term: 'Recessive allele',
          definition:
            'An allele whose effect is only shown when two copies are present (homozygous recessive).',
        },
        {
          term: 'Genotype',
          definition:
            'The genetic make-up of an organism — the alleles present at a gene locus (e.g. Bb, BB, bb).',
        },
        {
          term: 'Phenotype',
          definition:
            'The observable characteristics of an organism, determined by genotype and environment.',
        },
        {
          term: 'Natural selection',
          definition:
            'The process by which organisms with advantageous variations survive and reproduce more successfully, passing traits to offspring.',
        },
        {
          term: 'Evolution',
          definition:
            'Change in the allele frequencies of a population over many generations, driven by natural selection and other forces.',
        },
      ],
      experiments: [
        {
          name: 'Simulating Natural Selection with Coloured Beads',
          description:
            'Model how natural selection changes allele frequencies using a predator-prey simulation.',
          steps: [
            'Scatter 30 red beads and 30 green beads on a piece of green fabric (representing a grassy habitat).',
            'Act as a "predator" — pick up as many beads as you can in 30 seconds without looking carefully (rely on peripheral vision).',
            'Count how many of each colour were "eaten" (picked up). The remaining beads survive.',
            'For each remaining bead, add two more of the same colour (surviving beads "reproduce").',
            'Repeat the selection process 5 times. Record the colour counts after each round.',
            'Plot a graph of bead colour counts over rounds. Which colour is being naturally selected? Why?',
          ],
          safetyNote: 'Small beads are a choking hazard — keep away from young children.',
        },
      ],
      practiceQuestions: [
        {
          question:
            'In pea plants, tall (T) is dominant over short (t). What is the expected phenotype ratio from a cross between two heterozygous plants (Tt × Tt)?',
          answer:
            'Punnett square: TT, Tt, Tt, tt. Three plants are tall (have at least one T allele), one is short. Expected phenotype ratio = 3 tall : 1 short.',
        },
        {
          question: 'Explain the difference between genotype and phenotype using an example.',
          answer:
            'Genotype is the allele combination (e.g. Bb for eye colour), while phenotype is the physical characteristic (e.g. brown eyes). Two individuals with different genotypes (BB and Bb) can have the same phenotype (brown eyes) if B is dominant.',
        },
        {
          question:
            'Explain how antibiotic resistance in bacteria is an example of natural selection.',
          answer:
            'In a bacterial population, natural mutations create some bacteria with resistance to antibiotics. When antibiotics are applied, susceptible bacteria die but resistant ones survive and reproduce. Resistance alleles become more common with each generation — this is natural selection rapidly driving evolution of resistant strains.',
        },
      ],
      funFacts: [
        'Sickle cell trait (one copy of the sickle cell allele) is MORE common in people with West African and Caribbean ancestry because it provides partial protection against malaria — a classic example of natural selection.',
        "Darwin's finches in the Galápagos Islands developed 18 different species from a single common ancestor in just a few million years — driven by natural selection adapting each species to a different food source.",
        'The peppered moth in industrial England changed from mainly pale to mainly dark in just decades, as soot darkened trees — then reversed when clean air laws were introduced. One of the most documented examples of natural selection.',
      ],
      realWorldConnections: [
        "Understanding inheritance patterns allows genetic counsellors to estimate the risk of inherited conditions like cystic fibrosis, sickle cell disease, and Huntington's disease in families.",
        'Selective breeding (artificial selection) has produced all modern crops and farm animals — wheat, maize, cattle, dogs — from wild ancestors, applying natural selection principles deliberately.',
        'Antibiotic resistance is a global health crisis driven by natural selection — making evolutionary biology one of the most urgent areas of medical research.',
      ],
      quizQuestions: [
        {
          question: 'A dominant allele is shown in the phenotype:',
          options: [
            'Only when two copies are present',
            'Only when no copies are present',
            'Even when only one copy is present',
            'Never',
          ],
          correctIndex: 2,
        },
        {
          question:
            'Two heterozygous parents (Bb × Bb) produce offspring. What fraction will show the recessive phenotype?',
          options: ['1/4', '1/2', '3/4', '0'],
          correctIndex: 0,
        },
        {
          question: 'What provides the variation that natural selection acts upon?',
          options: [
            'Mutations and sexual reproduction',
            'Identical DNA replication',
            'Photosynthesis',
            'Respiration',
          ],
          correctIndex: 0,
        },
      ],
      furtherReading:
        'BBC Bitesize: Inheritance; "The Selfish Gene" by Richard Dawkins; "On the Origin of Species" by Charles Darwin (abridged edition)',
    },
  ],

  healthAndNutrition: [
    {
      title: 'Nutrients and a Balanced Diet',
      category: 'Health & Nutrition',
      level: 'standard',
      objectives: [
        'Identify the main nutrient groups and their functions in the body',
        'Explain what constitutes a balanced diet and why it matters',
        'Describe deficiency diseases linked to specific nutrient shortfalls',
      ],
      introduction:
        'You are, quite literally, what you eat. Every protein in your muscles, every lipid in your cell membranes, every enzyme catalysing your biochemical reactions was built from food. Nutrition is the science of how the body uses food — and getting it right is one of the most powerful things you can do for your health. From the yam stew on a Caribbean family table to the ackee and saltfish on a Jamaican morning, food is also culture, heritage, and identity.',
      mainContent: [
        'Carbohydrates provide energy. Simple carbohydrates (sugars: glucose, fructose, sucrose) are quickly absorbed. Complex carbohydrates (starch, glycogen, fibre) are digested more slowly. Fibre (insoluble) aids gut health and prevents constipation.',
        'Proteins are made of amino acids — essential for growth, repair, enzyme production, and immune function. Complete proteins (meat, fish, eggs, dairy, soya) contain all essential amino acids. Incomplete proteins (most plant sources) may lack one or more.',
        'Lipids (fats and oils) are essential for cell membranes, insulation, absorbing fat-soluble vitamins (A, D, E, K), and providing concentrated energy. Unsaturated fats (from plants, oily fish) are healthier than saturated fats.',
        'Vitamins and minerals are needed in tiny amounts but are essential for specific functions. Vitamin C (in Caribbean fruits like guava and mango) aids immune function and collagen synthesis. Iron is needed for haemoglobin; calcium for bones and teeth; iodine for thyroid hormones.',
        'Water makes up about 60% of body mass and is needed for all chemical reactions, temperature regulation, and transport of substances.',
        'Deficiency diseases: Scurvy (Vitamin C deficiency — historically common on long sea voyages), Rickets (Vitamin D deficiency — affects bone development), Anaemia (Iron deficiency — reduces oxygen transport), Kwashiorkor (severe protein deficiency — common in famine).',
      ],
      keyConceptsAndDefinitions: [
        {
          term: 'Carbohydrate',
          definition:
            'A nutrient providing energy; simple forms (sugars) are rapidly absorbed; complex forms (starch, fibre) are digested more slowly.',
        },
        {
          term: 'Protein',
          definition:
            'A nutrient made of amino acids, essential for growth, repair, enzyme and hormone production.',
        },
        {
          term: 'Lipid',
          definition:
            'Fat or oil — essential for cell membranes, energy storage, insulation, and absorbing fat-soluble vitamins.',
        },
        {
          term: 'Vitamin',
          definition:
            'An organic micronutrient needed in small amounts for specific metabolic reactions; deficiency causes specific diseases.',
        },
        {
          term: 'Mineral',
          definition:
            'An inorganic micronutrient (e.g. iron, calcium, iodine) essential for specific bodily functions.',
        },
        {
          term: 'Deficiency disease',
          definition:
            'An illness caused by a prolonged lack of a specific nutrient (e.g. scurvy from Vitamin C deficiency).',
        },
        {
          term: 'Balanced diet',
          definition:
            'A diet containing the right amounts of all nutrients — carbohydrates, proteins, fats, vitamins, minerals, water, and fibre — for health.',
        },
      ],
      experiments: [
        {
          name: 'Testing Foods for Starch, Glucose, and Protein',
          description:
            'Use chemical indicators to identify the presence of three key nutrients in food samples.',
          steps: [
            'Prepare food samples: crush a small amount of each food (e.g. bread, banana, egg white, cooking oil) in water to make a solution.',
            'Starch test: add 2–3 drops of iodine solution. Blue-black colour = starch present; brown/yellow = absent.',
            "Glucose test: add Benedict's solution and heat in a water bath at 80°C for 5 minutes. Brick-red/orange = glucose present; stays blue = absent.",
            'Protein test (Biuret): add 5 drops of sodium hydroxide solution, then 2 drops of copper sulfate solution. Purple/violet = protein present; stays blue = absent.',
            'Record results in a table. Which foods contained which nutrients?',
            'Discuss: how might these tests be used in food science or quality control?',
          ],
          safetyNote:
            'Iodine stains skin. Sodium hydroxide is corrosive — wear eye protection. Copper sulfate is toxic — wash hands thoroughly. Hot water bath: use tongs.',
        },
      ],
      practiceQuestions: [
        {
          question:
            'Explain why a diet high in saturated fat increases the risk of cardiovascular disease.',
          answer:
            'Saturated fats raise levels of LDL (low-density lipoprotein) cholesterol in the blood. LDL deposits cholesterol in artery walls, forming fatty plaques (atherosclerosis). This narrows arteries, reducing blood flow, and increases the risk of heart attack and stroke.',
        },
        {
          question:
            'Why do children and pregnant women have higher calcium requirements than the average adult?',
          answer:
            "Children need calcium for rapid bone and teeth development during growth. Pregnant women need additional calcium to supply the developing foetus's skeleton. Insufficient calcium intake during these periods leads to weaker bones and increased fracture risk.",
        },
        {
          question:
            'What is the difference between a complete and incomplete protein, and give one example of each.',
          answer:
            'A complete protein contains all 9 essential amino acids that humans cannot synthesise (e.g. chicken, eggs, quinoa). An incomplete protein lacks one or more essential amino acids (e.g. rice, most legumes individually). Combining incomplete proteins (e.g. rice and beans — a Caribbean staple!) provides all essential amino acids.',
        },
      ],
      funFacts: [
        "Ackee (Jamaica's national fruit) is a complete protein and contains more protein per 100g than many meats — making it nutritionally exceptional for a fruit.",
        "Vitamin D is produced in the skin when exposed to sunlight — in the UK's reduced winter sunlight, many people (especially those with darker skin who absorb less UV) are advised to supplement.",
        'The human gut microbiome — trillions of bacteria living in your intestines — plays a crucial role in nutrition, immunity, and even mood, and is shaped significantly by your diet.',
      ],
      realWorldConnections: [
        'Caribbean cuisine often combines incomplete proteins into complete ones naturally: rice and peas (kidney beans) provide all essential amino acids together.',
        'The Mediterranean diet — rich in vegetables, olive oil, whole grains, and fish — is associated with reduced rates of heart disease, supported by decades of research.',
        'Food fortification (adding nutrients like Vitamin D to milk, or iodine to salt) has eradicated many deficiency diseases in developed countries.',
      ],
      quizQuestions: [
        {
          question: 'Which nutrient is most important for growth and repair of body tissues?',
          options: ['Carbohydrates', 'Proteins', 'Lipids', 'Water'],
          correctIndex: 1,
        },
        {
          question: 'Scurvy is caused by a deficiency of:',
          options: ['Vitamin D', 'Iron', 'Vitamin C', 'Calcium'],
          correctIndex: 2,
        },
        {
          question: 'Which test is used to detect the presence of starch?',
          options: ["Benedict's solution", 'Biuret reagent', 'Iodine solution', 'Litmus paper'],
          correctIndex: 2,
        },
      ],
      furtherReading:
        'BBC Bitesize: Nutrition and digestion; NHS Eatwell Guide; "In Defence of Food" by Michael Pollan',
    },
  ],

  caribbeanBiodiversity: [
    {
      title: 'Caribbean Ecosystems and Biodiversity',
      category: 'Caribbean Biodiversity',
      level: 'standard',
      objectives: [
        'Describe the major ecosystems found in the Caribbean',
        'Explain why the Caribbean is a global biodiversity hotspot',
        'Identify threats to Caribbean biodiversity and conservation responses',
      ],
      introduction:
        'The Caribbean is one of the most biologically extraordinary places on Earth. Spread across 7,000 islands, cays, and islets, it is home to over 700 species of birds, 550 species of reptiles, 170 species of amphibians, and tens of thousands of plant and marine species — many found nowhere else on the planet. This biodiversity is the living legacy of millions of years of isolation, evolution, and the meeting of Atlantic and Pacific species. It is also one of the most threatened, facing habitat loss, climate change, and invasive species.',
      mainContent: [
        'Major Caribbean ecosystems: coral reefs (covering over 26,000 km² — the second largest system in the Western Hemisphere), mangrove forests (coastal saltwater trees providing nurseries for fish), tropical rainforests (high biodiversity, high rainfall), dry forests (adapted to drought), seagrass meadows (feeding grounds for manatees and turtles), and freshwater rivers and wetlands.',
        'Coral reefs are built by tiny colonial animals (coral polyps) that have a symbiotic relationship with photosynthetic algae called zooxanthellae. The algae provide food via photosynthesis; the coral provides shelter and CO₂. When water temperature rises, the coral expels the algae (coral bleaching) — if prolonged, the coral dies.',
        'The Caribbean has extremely high endemism — species found only in the region. Examples: the Cuban solenodon, the Puerto Rican parrot, the Jamaican iguana, and hundreds of plant species.',
        'Invasive species are one of the greatest threats. The lionfish (Pterois volitans), originally from the Indo-Pacific, has devastated reef fish populations after being introduced in the 1980s (possibly through aquarium releases). With no natural predators in the Caribbean, lionfish populations exploded.',
        'Conservation responses include: marine protected areas (MPAs), lionfish removal programmes (restaurants now serve lionfish), coral reef restoration projects, and national parks across Caribbean islands.',
        'Climate change poses existential threats: rising sea temperatures cause coral bleaching, more intense hurricanes damage ecosystems, sea level rise threatens coastal mangroves, and ocean acidification dissolves coral skeletons.',
      ],
      keyConceptsAndDefinitions: [
        {
          term: 'Biodiversity',
          definition:
            'The variety of life in an area — measured at genetic, species, and ecosystem levels.',
        },
        {
          term: 'Endemism',
          definition: 'When a species is native to and found only in one specific geographic area.',
        },
        {
          term: 'Coral bleaching',
          definition:
            'When rising water temperature causes coral to expel its symbiotic algae (zooxanthellae), turning white — if prolonged the coral dies.',
        },
        {
          term: 'Invasive species',
          definition:
            'A non-native species introduced (accidentally or deliberately) to an ecosystem where it has no natural predators, often causing ecological damage.',
        },
        {
          term: 'Marine Protected Area (MPA)',
          definition:
            'A region of ocean where human activities are restricted to protect marine ecosystems and species.',
        },
        {
          term: 'Mangrove',
          definition:
            'Salt-tolerant trees growing in tropical coastal areas; their roots stabilise shorelines and provide nursery habitat for marine species.',
        },
        {
          term: 'Symbiosis',
          definition:
            "A close ecological relationship between two species — mutualism (both benefit), commensalism (one benefits), or parasitism (one benefits at the other's expense).",
        },
      ],
      experiments: [
        {
          name: 'Biodiversity Survey of a Local Habitat',
          description: 'Measure the biodiversity of a local area using a quadrat sampling method.',
          steps: [
            'Choose a grassy area, garden, or park. Construct or obtain a 0.5 m × 0.5 m quadrat (metal/wooden frame or string).',
            'Use a random number table or coordinates to select 10 positions within your study area.',
            'Place the quadrat at each position and record: (a) all plant species present, (b) the percentage cover of each species.',
            'Count all animal species (insects, earthworms, etc.) visible within the quadrat.',
            'Calculate species richness (total number of different species) and compare results across your 10 samples.',
            'Discuss: how does your local biodiversity compare to Caribbean reef biodiversity? What factors limit UK urban biodiversity?',
          ],
          safetyNote:
            'Wash hands after handling soil. Avoid handling unknown insects. Return all animals to their habitat immediately.',
        },
      ],
      practiceQuestions: [
        {
          question: 'Explain the symbiotic relationship between coral polyps and zooxanthellae.',
          answer:
            "This is a mutualistic relationship — both species benefit. The zooxanthellae (photosynthetic algae) live inside coral tissue, providing the coral with glucose from photosynthesis (up to 90% of the coral's energy). In return, the coral provides the algae with shelter and CO₂ for photosynthesis.",
        },
        {
          question: 'Why has the lionfish been so damaging to Caribbean coral reefs?',
          answer:
            'Lionfish are invasive species from the Indo-Pacific — Caribbean reef fish have not evolved alongside them and do not recognise them as predators. Lionfish have no natural predators in the Caribbean, so populations have exploded unchecked. They are voracious predators that eat the small reef fish that control algae growth, upsetting the ecological balance of the reef.',
        },
        {
          question: 'Explain how climate change threatens Caribbean mangrove forests.',
          answer:
            'Mangroves grow at the boundary between land and sea. Sea level rise (driven by melting ice caps and thermal expansion of warming oceans) floods the landward side where mangroves would naturally spread — if land development prevents this inland migration, mangroves are squeezed out. More intense hurricanes also damage and uproot mangrove trees.',
        },
      ],
      funFacts: [
        'The Caribbean Sea contains over 65 species of coral — and a single Caribbean coral reef can harbour more species per square metre than the entire Amazon rainforest.',
        'The Puerto Rican parrot was reduced to just 13 individuals in the wild in 1975 — one of the most endangered birds on Earth. Conservation efforts have brought the population to over 500.',
        'Mangrove roots trap sediment that would otherwise smother coral reefs, and can reduce the height of storm waves by up to 66% — providing a natural coastal defence.',
      ],
      realWorldConnections: [
        'Caribbean coral reefs generate an estimated $3.4 billion per year through tourism and fisheries — making their conservation not just an ecological issue but an economic one.',
        'Mangrove forests store carbon at rates up to 5 times higher than tropical rainforests — their destruction contributes significantly to climate change.',
        'Traditional Caribbean ecological knowledge — passed down through generations of fishers and farmers — is increasingly recognised by scientists as valuable for conservation.',
      ],
      quizQuestions: [
        {
          question: 'What causes coral bleaching?',
          options: [
            'Pollution blocking sunlight',
            'Rising water temperature causing coral to expel its algae',
            'Overfishing removing predators',
            'Invasive species eating coral',
          ],
          correctIndex: 1,
        },
        {
          question: 'Why is the lionfish so damaging in the Caribbean?',
          options: [
            'It photosynthesises and out-competes coral',
            'It has no natural predators in the Caribbean',
            'It destroys coral reefs by burrowing',
            'It is toxic to humans',
          ],
          correctIndex: 1,
        },
        {
          question:
            'Which Caribbean ecosystem provides nursery habitats for young fish and stabilises coastlines?',
          options: ['Coral reefs', 'Seagrass meadows', 'Mangrove forests', 'Dry forests'],
          correctIndex: 2,
        },
      ],
      furtherReading:
        'IUCN Caribbean biodiversity resources; Reef Check Caribbean; "The Once and Future World" by J.B. MacKinnon; Caribbean Challenge Initiative (CCI) conservation updates',
    },
  ],
};

export function getAllBiologyLessons(): {
  lesson: BiologyLesson;
  category: BiologyTopicCategory;
}[] {
  return (Object.keys(biologyTopics) as BiologyTopicCategory[]).flatMap((category) =>
    biologyTopics[category].map((lesson) => ({ lesson, category })),
  );
}

export const biologyCategoryNames: Record<BiologyTopicCategory, string> = {
  cellsAndOrganisation: 'Cells & Organisation',
  bodySystems: 'Body Systems',
  ecologyAndEcosystems: 'Ecology & Ecosystems',
  geneticsAndInheritance: 'Genetics & Inheritance',
  healthAndNutrition: 'Health & Nutrition',
  caribbeanBiodiversity: 'Caribbean Biodiversity',
};

export const biologyCategoryIcons: Record<BiologyTopicCategory, string> = {
  cellsAndOrganisation: '🔬',
  bodySystems: '🫀',
  ecologyAndEcosystems: '🌿',
  geneticsAndInheritance: '🧬',
  healthAndNutrition: '🥗',
  caribbeanBiodiversity: '🌺',
};

export const biologyCategoryColors: Record<
  BiologyTopicCategory,
  { bg: string; border: string; text: string; badge: string }
> = {
  cellsAndOrganisation: {
    bg: 'from-violet-50 to-violet-100',
    border: 'border-violet-500',
    text: 'text-violet-900',
    badge: 'bg-violet-500',
  },
  bodySystems: {
    bg: 'from-rose-50 to-rose-100',
    border: 'border-rose-500',
    text: 'text-rose-900',
    badge: 'bg-rose-500',
  },
  ecologyAndEcosystems: {
    bg: 'from-emerald-50 to-emerald-100',
    border: 'border-emerald-500',
    text: 'text-emerald-900',
    badge: 'bg-emerald-500',
  },
  geneticsAndInheritance: {
    bg: 'from-blue-50 to-blue-100',
    border: 'border-blue-500',
    text: 'text-blue-900',
    badge: 'bg-blue-500',
  },
  healthAndNutrition: {
    bg: 'from-amber-50 to-amber-100',
    border: 'border-amber-500',
    text: 'text-amber-900',
    badge: 'bg-amber-500',
  },
  caribbeanBiodiversity: {
    bg: 'from-teal-50 to-teal-100',
    border: 'border-teal-500',
    text: 'text-teal-900',
    badge: 'bg-teal-500',
  },
};
