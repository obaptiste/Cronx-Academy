import { PhysicsTopics, PhysicsLesson, PhysicsTopicCategory } from '@/types';

export const physicsTopics: PhysicsTopics = {
  forcesAndMotion: [
    {
      title: "Newton's Laws of Motion",
      category: 'Forces & Motion',
      level: 'standard',
      objectives: [
        "State and explain Newton's three laws of motion with examples",
        'Distinguish between mass and weight, and use W = mg',
        'Draw and interpret force diagrams for objects in equilibrium and acceleration',
      ],
      introduction:
        "Isaac Newton's three laws of motion, published in 1687, explain why objects move, stop, and change direction. From a sailing boat catching a Caribbean trade wind to a hurricane spinning over the Atlantic, every motion in the universe obeys these same three rules. Understanding them is the foundation of all mechanics.",
      mainContent: [
        "Newton's First Law (Law of Inertia): An object at rest stays at rest, and an object in motion stays in motion at the same speed and direction, unless acted on by a resultant force.",
        "Newton's Second Law: Force = mass × acceleration (F = ma). A larger force produces greater acceleration; a larger mass requires more force to achieve the same acceleration.",
        "Newton's Third Law: Every action has an equal and opposite reaction. When a boat's propeller pushes water backwards, the water pushes the boat forwards with equal force.",
        'Mass is the amount of matter in an object (measured in kg) and does not change wherever you are. Weight is a force caused by gravity acting on mass (W = mg, measured in Newtons).',
        'On Earth, g ≈ 9.8 N/kg. The Moon has weaker gravity (g ≈ 1.6 N/kg), so an astronaut weighs less there but has the same mass.',
        'A force diagram (free-body diagram) shows all forces acting on a single object as arrows. Arrow length represents magnitude; arrow direction shows direction of force.',
        'When all forces on an object are balanced (resultant force = 0), the object is in equilibrium — it is either at rest or moving at constant velocity.',
        'Unbalanced forces cause acceleration in the direction of the resultant force. The greater the resultant force, the greater the acceleration.',
      ],
      keyConceptsAndDefinitions: [
        {
          term: 'Inertia',
          definition:
            'The tendency of an object to resist changes to its state of motion. Greater mass = greater inertia.',
        },
        {
          term: 'Resultant force',
          definition:
            'The single force that has the same effect as all the forces acting on an object combined.',
        },
        {
          term: 'Mass',
          definition:
            'The amount of matter in an object, measured in kilograms (kg). Mass does not change with location.',
        },
        {
          term: 'Weight',
          definition:
            'The gravitational force acting on a mass: W = mg. Measured in Newtons; changes with gravitational field strength.',
        },
        {
          term: 'Acceleration',
          definition:
            'The rate of change of velocity, measured in m/s². Produced by a resultant (unbalanced) force.',
        },
        {
          term: 'Free-body diagram',
          definition:
            'A diagram showing all forces acting on a single object as labelled arrows from its centre.',
        },
      ],
      experiments: [
        {
          name: 'Trolley and Masses — Testing F = ma',
          description:
            'Investigate how changing force and mass affects acceleration using a toy car or trolley on a ramp.',
          steps: [
            'Set up a ramp or smooth surface with a toy car or trolley. Attach a string over the edge with a small hanging mass (e.g. 50 g).',
            'Mark a start line. Release the trolley from rest and time how long it takes to travel 50 cm.',
            'Calculate acceleration using a = 2s/t² (s = distance, t = time).',
            'Double the hanging mass (increase force). Repeat and record the new acceleration.',
            'Return to original mass, but add weight to the trolley (increase mass). Repeat and compare.',
          ],
          safetyNote:
            'Ensure the hanging mass cannot hit feet. Keep the ramp on a stable surface.',
        },
      ],
      practiceQuestions: [
        {
          question: 'A 5 kg box is pushed with a force of 20 N. What is its acceleration?',
          answer: 'a = F/m = 20 ÷ 5 = 4 m/s².',
        },
        {
          question: 'What is the weight of a 60 kg person on Earth (g = 9.8 N/kg)?',
          answer: 'W = mg = 60 × 9.8 = 588 N.',
        },
        {
          question:
            "Explain Newton's Third Law using the example of a swimmer pushing off a pool wall.",
          answer:
            'The swimmer pushes the wall backwards; the wall pushes the swimmer forwards with an equal and opposite force — propelling them through the water.',
        },
      ],
      funFacts: [
        "Newton reportedly developed his law of gravitation after observing an apple fall — though he probably didn't get hit on the head!",
        'Caribbean hurricanes demonstrate Newton\'s laws perfectly: air masses accelerate towards the low-pressure centre (2nd law) and the Earth\'s rotation deflects them (Coriolis effect, linked to inertia).',
        'Astronauts on the International Space Station are not weightless — they are in constant free-fall around Earth. Their weight is still about 90% of what it is on the ground.',
        "Newton's laws govern everything from cricket balls to rockets — they only break down at near-light speeds or atomic scales.",
      ],
      realWorldConnections: [
        'Engineers use F = ma to calculate the thrust needed to launch rockets — including those that put Caribbean weather satellites into orbit.',
        'Car safety features like crumple zones and airbags are designed around Newton\'s First Law — they extend the time of deceleration, reducing force on passengers.',
        'Sailing vessels in the Caribbean relied on Newton\'s Third Law: sails redirect wind force, propelling the boat in the desired direction.',
      ],
      quizQuestions: [
        {
          question:
            "Newton's First Law says an object will continue moving at constant velocity unless…",
          options: [
            'it runs out of momentum',
            'acted on by a resultant force',
            'gravity pulls it down',
            'it reaches maximum speed',
          ],
          correctIndex: 1,
        },
        {
          question: 'A 10 kg object accelerates at 3 m/s². What is the resultant force on it?',
          options: ['3.3 N', '13 N', '30 N', '0.3 N'],
          correctIndex: 2,
        },
        {
          question: 'How does weight differ from mass?',
          options: [
            'Weight is measured in kg, mass in Newtons',
            'They are the same thing',
            'Weight is a force; mass is the amount of matter',
            'Mass changes with gravity; weight does not',
          ],
          correctIndex: 2,
        },
      ],
      furtherReading:
        'BBC Bitesize: Forces and Newton\'s Laws; "Physics" by David Sang (Cambridge IGCSE), Chapter 2 — Forces.',
    },
    {
      title: 'Forces in Action',
      category: 'Forces & Motion',
      level: 'standard',
      objectives: [
        'Describe the effects of friction, air resistance, and gravity on moving objects',
        'Explain terminal velocity and the forces acting at that point',
        'Calculate resultant forces from multiple forces acting on an object',
      ],
      introduction:
        'When a raindrop falls over the Caribbean Sea, two forces act on it: gravity pulls it down and air resistance pushes up. As the droplet speeds up, air resistance grows until both forces are equal — and the droplet stops accelerating. This balance of forces, called terminal velocity, governs falling objects, skydiving, and even the top speed of cars.',
      mainContent: [
        'Friction is a contact force that opposes relative motion between two surfaces. It can be useful (grip when walking) or a problem (slowing vehicles, wearing out machinery).',
        'Air resistance (drag) is a force that opposes motion through air. It increases as speed increases and depends on the shape and size of the object.',
        'Water resistance acts like air resistance but in liquids — important for ships, submarines, and Caribbean marine life.',
        'Terminal velocity is reached when driving force equals resistive forces (resultant force = 0). The object then moves at constant velocity — it is no longer accelerating.',
        'A skydiver jumping from a plane: initially accelerates (gravity > drag); as speed increases, drag increases; at terminal velocity, drag = weight; opening parachute dramatically increases drag, reducing terminal velocity to a safe landing speed.',
        'The resultant force is found by adding forces in the same direction and subtracting opposing forces. Forces at right angles require Pythagoras.',
        'Streamlining reduces air resistance by shaping objects so air flows smoothly around them — used in aircraft, racing cars, and fish.',
        'Lubrication (e.g. oil) reduces friction between surfaces by replacing solid-solid contact with a thin liquid layer.',
      ],
      keyConceptsAndDefinitions: [
        {
          term: 'Friction',
          definition:
            'A contact force opposing relative motion between surfaces; generates heat and slows objects down.',
        },
        {
          term: 'Air resistance (drag)',
          definition:
            'A force opposing motion through air; increases with speed and cross-sectional area.',
        },
        {
          term: 'Terminal velocity',
          definition:
            'The constant maximum velocity reached when driving force equals resistive forces (resultant force = 0).',
        },
        {
          term: 'Resultant force',
          definition:
            'The net force on an object after all forces are combined — determines acceleration.',
        },
        {
          term: 'Streamlining',
          definition:
            'Shaping an object to minimise drag by allowing smooth airflow around it.',
        },
        {
          term: 'Lubrication',
          definition:
            'Using a substance (e.g. oil) between surfaces to reduce friction.',
        },
      ],
      experiments: [
        {
          name: 'Parachute Drop — Investigating Air Resistance',
          description:
            'Compare how different parachute sizes affect the terminal velocity (falling time) of a small weight.',
          steps: [
            'Cut three square pieces of plastic bag or thin fabric: small (20 cm × 20 cm), medium (30 cm × 30 cm), large (40 cm × 40 cm).',
            'Attach equal lengths of string (30 cm) to each corner and tie a small identical weight (e.g. a coin) to the ends.',
            'Drop each parachute from the same height (e.g. the top of a staircase or a step). Use a stopwatch to time each fall.',
            'Record your results in a table: parachute size vs. time to fall.',
            'Repeat three times for each size and calculate averages. Which size reached the lowest terminal velocity (slowest fall)?',
          ],
          safetyNote:
            'Drop from a safe, secure position. Do not lean over staircase rails.',
        },
      ],
      practiceQuestions: [
        {
          question:
            'A cyclist experiences a driving force of 150 N and air resistance of 80 N. What is the resultant force and what happens to their speed?',
          answer:
            'Resultant force = 150 − 80 = 70 N forwards. The cyclist accelerates.',
        },
        {
          question: 'Explain why a heavier skydiver has a higher terminal velocity than a lighter one.',
          answer:
            'A heavier skydiver has a greater weight (gravitational force). More air resistance is needed to balance it, which only occurs at a higher speed.',
        },
        {
          question: 'Give two ways engineers reduce air resistance on a sports car.',
          answer:
            'Streamlined body shape (smooth curves) and lowered ride height reduce drag. Some also use underbody panels and active aerodynamics.',
        },
      ],
      funFacts: [
        'A skydiver in free fall reaches about 195 km/h (120 mph) — then slows to around 20 km/h after opening their parachute.',
        'Sharks are naturally streamlined — millions of years of evolution produced a body shape that engineers now copy for aircraft and submarines.',
        'The famous Jamaican bobsled team at the 1988 Calgary Winter Olympics proved that determination matters more than natural conditions — even though Jamaica has no ice or snow!',
        'Space stations experience almost no air resistance, so the ISS needs regular rocket boosts to stay in orbit — without them, drag from the thin upper atmosphere would slowly pull it down.',
      ],
      realWorldConnections: [
        'Caribbean fishermen design boat hulls to minimise water resistance, using streamlined shapes similar to those now used in high-speed ferries.',
        'Road tyres use grooved tread patterns to increase friction on wet roads — preventing dangerous aquaplaning in tropical rain.',
        'Parachutes are used by skydivers, military equipment drops, and even Formula 1 drag chutes — all exploiting terminal velocity principles.',
      ],
      quizQuestions: [
        {
          question: 'At terminal velocity, which of the following is true?',
          options: [
            'The object is decelerating',
            'Gravity is greater than air resistance',
            'Resultant force is zero',
            'Air resistance is zero',
          ],
          correctIndex: 2,
        },
        {
          question: 'Which factor does NOT increase air resistance on a falling object?',
          options: ['Higher speed', 'Larger cross-sectional area', 'Greater mass', 'Irregular shape'],
          correctIndex: 2,
        },
        {
          question: 'A car has a driving force of 2000 N and friction forces totalling 500 N. What is the resultant force?',
          options: ['2500 N', '1500 N', '500 N', '2000 N'],
          correctIndex: 1,
        },
      ],
      furtherReading:
        'BBC Bitesize: Friction and Terminal Velocity; "GCSE Physics" by CGP — Forces chapter.',
    },
  ],

  energyAndElectricity: [
    {
      title: 'Energy Stores and Transfers',
      category: 'Energy & Electricity',
      level: 'standard',
      objectives: [
        'Identify and describe the main energy stores: kinetic, gravitational potential, chemical, thermal, and nuclear',
        'Explain the principle of conservation of energy with examples',
        'Describe energy transfers using diagrams and Sankey diagrams',
      ],
      introduction:
        'Energy cannot be created or destroyed — it can only be transferred from one store to another. This fundamental law, the conservation of energy, explains everything from a bouncing ball to the nuclear reactions powering the Sun. Understanding energy stores and transfers is the key to making sense of the physical world.',
      mainContent: [
        'Kinetic energy (KE) is the energy of moving objects: KE = ½mv². A faster or heavier object has more kinetic energy.',
        'Gravitational potential energy (GPE) is stored when an object is raised against gravity: GPE = mgh (mass × gravitational field strength × height).',
        'Chemical energy is stored in chemical bonds — in food, fuels, and batteries. It is released through chemical reactions (e.g. burning, metabolism).',
        'Thermal (heat) energy is the energy stored in the random motion of particles. Higher temperature = more thermal energy.',
        'Elastic potential energy is stored in stretched or compressed objects (springs, elastic bands, archery bows).',
        'Nuclear energy is stored in the nuclei of atoms; released in nuclear fission (splitting) or fusion (joining). Powers nuclear stations and the Sun.',
        'The conservation of energy law: energy is NEVER created or destroyed in any process — it is transferred between stores.',
        "Efficiency = (useful output energy ÷ total input energy) × 100%. No real device is 100% efficient — some energy is always 'wasted' as heat or sound.",
      ],
      keyConceptsAndDefinitions: [
        {
          term: 'Kinetic energy',
          definition: 'Energy due to motion: KE = ½mv². Measured in Joules (J).',
        },
        {
          term: 'Gravitational potential energy',
          definition:
            'Energy stored by an object due to its height above the ground: GPE = mgh.',
        },
        {
          term: 'Conservation of energy',
          definition:
            'Energy cannot be created or destroyed; the total energy in a closed system is always constant.',
        },
        {
          term: 'Efficiency',
          definition:
            'The fraction of input energy that is usefully transferred. Efficiency = useful output ÷ total input × 100%.',
        },
        {
          term: 'Sankey diagram',
          definition:
            'An energy flow diagram where the width of arrows represents the amount of energy transferred.',
        },
        {
          term: 'Joule (J)',
          definition:
            'The SI unit of energy. 1 Joule = the energy needed to move 1 Newton through 1 metre.',
        },
      ],
      experiments: [
        {
          name: 'Bouncing Ball — GPE to KE Transfer',
          description:
            'Investigate how much gravitational potential energy converts to kinetic energy (and how much is lost) when a ball bounces.',
          steps: [
            'Hold a ball (e.g. tennis ball) at a measured height (e.g. 1 m, 1.5 m, 2 m) and drop it onto a hard floor.',
            'Measure the height it bounces back to. Record both drop height and bounce height.',
            'Calculate efficiency: (bounce height ÷ drop height) × 100%.',
            'Repeat with different ball types (rubber, foam, superball) and compare efficiencies.',
            'Explain where the "lost" energy goes (sound, heat due to deformation).',
          ],
          safetyNote:
            'Use a soft ball indoors. Clear the area so the ball does not trip anyone.',
        },
      ],
      practiceQuestions: [
        {
          question:
            'A 2 kg ball moves at 5 m/s. Calculate its kinetic energy.',
          answer: 'KE = ½mv² = ½ × 2 × 25 = 25 J.',
        },
        {
          question:
            'A 3 kg object is lifted 4 m. Calculate the GPE gained (g = 9.8 N/kg).',
          answer: 'GPE = mgh = 3 × 9.8 × 4 = 117.6 J.',
        },
        {
          question:
            'A light bulb uses 100 J of electrical energy and produces 15 J of light. What is its efficiency?',
          answer: 'Efficiency = (15 ÷ 100) × 100% = 15%. The rest (85 J) is wasted as heat.',
        },
      ],
      funFacts: [
        'The human body is only about 25% efficient at converting food energy into movement — the rest becomes heat, which is why you get warm when exercising.',
        'Sugar cane, grown throughout the Caribbean, stores chemical energy from the Sun through photosynthesis — one of the most elegant energy transfers in nature.',
        'The Sun converts about 4 million tonnes of mass into energy every second through nuclear fusion — illustrating the enormous power locked inside atomic nuclei.',
        "Albert Einstein's famous equation E = mc² showed that mass itself is a form of stored energy — a tiny amount of mass holds a colossal amount of energy.",
      ],
      realWorldConnections: [
        'Caribbean islands increasingly use solar panels, which convert light energy directly into electrical energy — reducing dependence on imported fossil fuels.',
        'Hydroelectric dams convert GPE of water (held in a high reservoir) into kinetic energy (falling water) and then electrical energy via turbines.',
        'Food labels list energy in kilojoules (kJ) — your body converts this chemical energy into movement, growth, and warmth.',
      ],
      quizQuestions: [
        {
          question: 'A moving car has 10,000 J of kinetic energy. It brakes to a stop. Where does the energy go?',
          options: [
            'It disappears',
            'It converts to electrical energy',
            'It transfers mainly to thermal energy in the brakes',
            'It becomes potential energy',
          ],
          correctIndex: 2,
        },
        {
          question: 'Which energy store is used by a stretched elastic band?',
          options: ['Chemical', 'Nuclear', 'Kinetic', 'Elastic potential'],
          correctIndex: 3,
        },
        {
          question: 'An engine inputs 500 J and has 40% efficiency. How much useful energy does it output?',
          options: ['40 J', '200 J', '460 J', '500 J'],
          correctIndex: 1,
        },
      ],
      furtherReading:
        'BBC Bitesize: Energy Stores and Transfers; "GCSE Physics" by CGP — Energy chapter.',
    },
    {
      title: 'Circuits and Electricity',
      category: 'Energy & Electricity',
      level: 'standard',
      objectives: [
        'Describe the relationships between voltage, current, and resistance using Ohm\'s Law (V = IR)',
        'Compare series and parallel circuits, including calculations for combined resistance',
        'Explain how electrical energy is transferred and calculate power and energy usage',
      ],
      introduction:
        'Electricity flows through circuits just as water flows through pipes. Voltage is the pressure driving it, current is the flow rate, and resistance is anything that slows it down. Understanding these three quantities — and the relationship V = IR — allows engineers to design everything from mobile phone chargers to the electrical grids that power Caribbean islands.',
      mainContent: [
        'Current (I) is the rate of flow of electric charge, measured in Amperes (A). It is caused by electrons moving through a conductor.',
        'Voltage (potential difference, V) is the energy transferred per unit charge; measured in Volts (V). It is the "push" driving current around a circuit.',
        'Resistance (R) opposes the flow of current, measured in Ohms (Ω). Longer, thinner wires have higher resistance; good conductors have low resistance.',
        "Ohm's Law: V = IR. If voltage increases and resistance stays the same, current increases proportionally.",
        'In a series circuit, components are connected in a single loop. The same current flows through all components; voltages add up; total resistance = R₁ + R₂ + …',
        'In a parallel circuit, components have separate branches. Each branch has the same voltage; currents add up; total resistance is less than any single branch.',
        'Electrical power P = IV = I²R = V²/R. Power is measured in Watts (W); 1 W = 1 J/s.',
        'Energy transferred = power × time (E = Pt). Your electricity bill charges for kilowatt-hours (kWh): 1 kWh = 3,600,000 J.',
      ],
      keyConceptsAndDefinitions: [
        {
          term: 'Current (I)',
          definition:
            'The rate of flow of electric charge around a circuit; measured in Amperes (A).',
        },
        {
          term: 'Voltage (V)',
          definition:
            'The energy transferred per unit of charge; the "electrical pressure" driving current; measured in Volts (V).',
        },
        {
          term: "Ohm's Law",
          definition:
            'V = IR — voltage equals current multiplied by resistance. Valid for ohmic conductors at constant temperature.',
        },
        {
          term: 'Series circuit',
          definition:
            'A circuit with components in a single loop; same current everywhere; voltages add up.',
        },
        {
          term: 'Parallel circuit',
          definition:
            'A circuit with components on separate branches; same voltage across each branch; currents add up.',
        },
        {
          term: 'Power (P)',
          definition:
            'The rate of energy transfer: P = IV. Measured in Watts (W).',
        },
      ],
      experiments: [
        {
          name: 'Ohm\'s Law Investigation',
          description:
            'Test Ohm\'s Law by measuring voltage and current across a resistor and plotting a V–I graph.',
          steps: [
            'Set up a simple series circuit: battery/power pack, ammeter (in series), resistor, and voltmeter (in parallel across the resistor).',
            'Record the voltage (V) and current (I) at the starting setting.',
            'Increase the voltage in small steps. At each step, record both V and I.',
            'Plot a graph of V (y-axis) vs I (x-axis). A straight line through the origin confirms Ohm\'s Law.',
            'Calculate resistance from the gradient: R = V/I. Compare with the resistor\'s labelled value.',
          ],
          safetyNote:
            'Use low voltages (6 V maximum). Do not leave the circuit connected for long periods — components can overheat.',
        },
      ],
      practiceQuestions: [
        {
          question: 'A 12 V battery is connected to a 4 Ω resistor. What current flows?',
          answer: 'I = V/R = 12 ÷ 4 = 3 A.',
        },
        {
          question: 'Two resistors, 6 Ω and 4 Ω, are connected in series. What is the total resistance?',
          answer: 'Total resistance = 6 + 4 = 10 Ω.',
        },
        {
          question:
            'A kettle operates at 230 V and draws a current of 10 A. What is its power rating?',
          answer: 'P = IV = 10 × 230 = 2300 W (2.3 kW).',
        },
      ],
      funFacts: [
        'The first electricity grid in the Caribbean was installed in Cuba in 1889 — just a decade after Edison opened the first commercial power station in New York.',
        'Lightning bolts carry currents of up to 30,000 Amperes — about 10,000 times the current in a household circuit.',
        'The human heart runs on electrical signals — a tiny current of about 0.001 A keeps your heart beating rhythmically throughout your life.',
        'Smartphones contain hundreds of tiny parallel circuits, allowing different components (screen, camera, speaker) to operate simultaneously at the same voltage.',
      ],
      realWorldConnections: [
        'Caribbean islands like Barbados and Jamaica are investing in solar micro-grids — parallel circuits that allow individual panels to be added or removed without disrupting the whole system.',
        'Hospital equipment (ECGs, defibrillators) depends on precise electrical measurements — doctors essentially read the body\'s electrical circuits.',
        'USB chargers use voltage regulation circuits to ensure your phone always receives exactly 5 V, regardless of the mains voltage (which varies between countries).',
      ],
      quizQuestions: [
        {
          question: 'What is the current through a 20 Ω resistor connected to a 100 V supply?',
          options: ['0.2 A', '5 A', '2000 A', '80 A'],
          correctIndex: 1,
        },
        {
          question: 'In a parallel circuit, what is the same across all branches?',
          options: ['Current', 'Resistance', 'Voltage', 'Power'],
          correctIndex: 2,
        },
        {
          question:
            'A 60 W light bulb is left on for 5 hours. How much energy does it use (in Joules)?',
          options: ['300 J', '12 J', '1,080,000 J', '300,000 J'],
          correctIndex: 2,
        },
      ],
      furtherReading:
        'BBC Bitesize: Electric Circuits; PhET Interactive Simulations — Circuit Construction Kit (free online).',
    },
  ],

  wavesAndSound: [
    {
      title: 'Wave Properties',
      category: 'Waves & Sound',
      level: 'standard',
      objectives: [
        'Describe the key properties of waves: amplitude, frequency, wavelength, and wave speed',
        'Distinguish between transverse and longitudinal waves with examples',
        'Apply the wave speed equation: v = fλ',
      ],
      introduction:
        'Waves transfer energy from one place to another without transferring matter. The ocean waves that crash on Caribbean beaches, the radio waves that carry music to your phone, the light that lets you see — all are waves, each with the same fundamental properties of amplitude, frequency, and wavelength. Learning to describe and calculate these properties unlocks the physics of sound, light, and the electromagnetic spectrum.',
      mainContent: [
        'A wave is a repeating disturbance that transfers energy through a medium (or, for electromagnetic waves, through a vacuum).',
        'Amplitude is the maximum displacement from the rest (equilibrium) position. Greater amplitude = more energy.',
        'Wavelength (λ) is the distance between two identical points on adjacent waves (e.g. crest to crest). Measured in metres.',
        'Frequency (f) is the number of complete waves passing a point per second. Measured in Hertz (Hz). 1 Hz = 1 wave/second.',
        'Period (T) is the time for one complete wave: T = 1/f.',
        'Wave speed (v) is how fast the wave travels through a medium: v = fλ (speed = frequency × wavelength).',
        'Transverse waves: particles oscillate perpendicular to the direction of wave travel (e.g. light, water waves, seismic S-waves). Can be shown as a sine curve.',
        'Longitudinal waves: particles oscillate parallel to the direction of wave travel, creating compressions and rarefactions (e.g. sound waves, seismic P-waves).',
      ],
      keyConceptsAndDefinitions: [
        {
          term: 'Amplitude',
          definition:
            'Maximum displacement of a particle from its rest position; relates to wave energy.',
        },
        {
          term: 'Wavelength (λ)',
          definition:
            'Distance between two successive identical points on a wave (e.g. crest to crest); measured in metres.',
        },
        {
          term: 'Frequency (f)',
          definition:
            'Number of complete oscillations per second; measured in Hertz (Hz).',
        },
        {
          term: 'Wave speed (v)',
          definition: 'Distance travelled by the wave per second: v = fλ. Measured in m/s.',
        },
        {
          term: 'Transverse wave',
          definition:
            'Wave in which particles oscillate at right angles to the direction of energy transfer (e.g. light, water).',
        },
        {
          term: 'Longitudinal wave',
          definition:
            'Wave in which particles oscillate parallel to the direction of energy transfer (e.g. sound).',
        },
      ],
      experiments: [
        {
          name: 'Slinky Spring Wave Investigation',
          description:
            'Use a slinky spring to observe and compare transverse and longitudinal wave properties.',
          steps: [
            'Stretch a slinky spring along a smooth floor between two people (about 2 metres apart). Mark the centre with a sticker.',
            'One person shakes the end side-to-side — observe the transverse wave. Note the amplitude and wavelength.',
            'Now push and pull the end repeatedly in the direction of the spring — observe the longitudinal wave (compressions and rarefactions).',
            'Increase the shake frequency — what happens to the wavelength? Observe how the wave pattern changes.',
            'Sketch both wave types, labelling amplitude, wavelength, compression, and rarefaction.',
          ],
          safetyNote:
            'Keep the slinky stretched on the floor only — avoid tangling or overstretching.',
        },
      ],
      practiceQuestions: [
        {
          question: 'A wave has a frequency of 200 Hz and a wavelength of 1.5 m. What is its wave speed?',
          answer: 'v = fλ = 200 × 1.5 = 300 m/s.',
        },
        {
          question:
            'A wave travels at 340 m/s with a frequency of 680 Hz. What is its wavelength?',
          answer: 'λ = v/f = 340 ÷ 680 = 0.5 m.',
        },
        {
          question: 'State one similarity and one difference between transverse and longitudinal waves.',
          answer:
            'Similarity: both transfer energy. Difference: transverse oscillations are perpendicular to travel direction; longitudinal oscillations are parallel.',
        },
      ],
      funFacts: [
        'Ocean waves in the Caribbean can travel thousands of kilometres across the Atlantic — the energy, not the water, makes the journey.',
        'The speed of sound is about 340 m/s in air, but over 1,400 m/s in water — which is why underwater communication in the Caribbean\'s reefs carries sound so clearly.',
        'Wi-Fi, radio, X-rays, and visible light are all electromagnetic waves — they differ only in their frequency and wavelength.',
        'Earthquakes produce both types of waves: P-waves (longitudinal) travel through the Earth\'s core; S-waves (transverse) cannot, which is how scientists mapped the Earth\'s interior.',
      ],
      realWorldConnections: [
        'Tsunami warning systems in the Caribbean detect unusual wave patterns in the ocean floor and send alerts before waves reach shore.',
        'Ultrasound waves (very high frequency sound) are used in medical scans and by dolphins and bats for echolocation.',
        'Mobile phone networks transmit data as radio waves — electromagnetic transverse waves that carry your calls and messages at nearly the speed of light.',
      ],
      quizQuestions: [
        {
          question: 'Which wave property is measured from crest to crest?',
          options: ['Amplitude', 'Frequency', 'Wavelength', 'Wave speed'],
          correctIndex: 2,
        },
        {
          question: 'Sound is an example of which type of wave?',
          options: ['Transverse', 'Electromagnetic', 'Longitudinal', 'Seismic'],
          correctIndex: 2,
        },
        {
          question: 'A wave has v = 600 m/s and λ = 3 m. What is its frequency?',
          options: ['200 Hz', '1800 Hz', '0.005 Hz', '2 Hz'],
          correctIndex: 0,
        },
      ],
      furtherReading:
        'BBC Bitesize: Waves — Properties and Types; Khan Academy: Introduction to Waves.',
    },
    {
      title: 'Sound and Hearing',
      category: 'Waves & Sound',
      level: 'foundation',
      objectives: [
        'Explain how sound is produced and how it travels through different media',
        'Relate pitch to frequency and loudness to amplitude',
        'Describe the structure of the human ear and how it detects sound',
      ],
      introduction:
        'Sound is all around you — the bass of Caribbean steel pan music, the crash of waves on a beach, the voice of a friend calling your name. But what exactly is sound? It is a longitudinal wave of pressure disturbances, travelling through a medium (usually air) and causing your eardrums to vibrate. Understanding sound connects physics to music, language, medicine, and the natural world.',
      mainContent: [
        'Sound is produced when objects vibrate. These vibrations create pressure waves in the surrounding medium (air, water, or solid).',
        'Sound travels as a longitudinal wave — particles are compressed and stretched in the direction of travel. It CANNOT travel through a vacuum.',
        'Sound travels faster through denser media: fastest in solids (e.g. 5,100 m/s in steel), slower in liquids (1,400 m/s in water), slowest in gases (340 m/s in air).',
        'Pitch is determined by frequency — higher frequency = higher pitch. The human ear detects approximately 20 Hz to 20,000 Hz.',
        'Loudness is determined by amplitude — a larger amplitude wave carries more energy and sounds louder. Measured in decibels (dB).',
        'Echoes occur when sound reflects off a surface. If the surface is far enough away (at least 17 m in air), the echo is heard as a separate sound.',
        'Ultrasound (above 20,000 Hz) is used in medical imaging, sonar, and industrial testing — it is too high a frequency for humans to hear.',
        'The human ear: sound waves enter the ear canal → vibrate the eardrum → three bones (ossicles: hammer, anvil, stirrup) amplify vibrations → cochlea converts to nerve signals → brain interprets as sound.',
      ],
      keyConceptsAndDefinitions: [
        {
          term: 'Frequency',
          definition:
            'Number of vibrations per second (Hz); determines the pitch of a sound — higher frequency = higher pitch.',
        },
        {
          term: 'Amplitude',
          definition:
            'Size of the vibration; determines loudness — greater amplitude = louder sound.',
        },
        {
          term: 'Echo',
          definition:
            'A reflected sound wave that returns after bouncing off a surface; used in sonar and echolocation.',
        },
        {
          term: 'Ultrasound',
          definition:
            'Sound with a frequency above 20,000 Hz — beyond human hearing; used in medical scans and sonar.',
        },
        {
          term: 'Eardrum',
          definition:
            'A thin membrane in the ear that vibrates when struck by sound waves, initiating the hearing process.',
        },
        {
          term: 'Decibel (dB)',
          definition:
            'Unit for measuring sound intensity (loudness). A whisper is about 30 dB; a jet engine is about 140 dB.',
        },
      ],
      experiments: [
        {
          name: 'Sound Through Different Media',
          description:
            'Investigate how well sound travels through air, a table (solid), and water.',
          steps: [
            'Air test: stand 5 metres from a partner. They tap a book quietly. Note how clearly you hear it.',
            'Solid test: place your ear flat on the table while your partner taps the other end of the table gently. Compare loudness.',
            'Water test (if possible): fill a bowl with water. Put one ear just above the surface while your partner gently taps the bowl from underneath.',
            'Record observations: through which medium was the sound clearest? Loudest?',
            'Explain your results using your knowledge of how particle density affects sound speed.',
          ],
          safetyNote: 'No significant hazards. Keep water away from electrical equipment.',
        },
      ],
      practiceQuestions: [
        {
          question: 'Why can you not hear an explosion that occurs on the Moon?',
          answer:
            'Sound is a mechanical wave that needs a medium (particles) to travel through. The Moon has no atmosphere (vacuum), so sound cannot travel.',
        },
        {
          question:
            'A musical note has a frequency of 440 Hz (concert A). What would a note with a frequency of 880 Hz sound like?',
          answer:
            'It would be higher in pitch — exactly one octave above, since doubling the frequency raises pitch by one octave.',
        },
        {
          question:
            'A ship sends an ultrasound pulse and receives the echo 0.4 seconds later. If sound travels at 1500 m/s in water, how deep is the ocean floor?',
          answer:
            'Distance = speed × time = 1500 × 0.4 = 600 m total. The sound travels to the floor and back, so depth = 300 m.',
        },
      ],
      funFacts: [
        'Caribbean humpback whales "sing" at frequencies between 80 Hz and 4,000 Hz — their songs can travel hundreds of kilometres through the ocean.',
        'Steel pan instruments, invented in Trinidad in the 1930s, produce sound by striking different sections of a metal drum — each dent is tuned to a specific frequency (pitch).',
        'Bats use ultrasound (up to 100,000 Hz) to navigate and hunt in complete darkness — a biological sonar system more precise than any we have built.',
        'The loudest sound ever recorded was the 1883 Krakatoa volcanic eruption in Indonesia — heard over 4,800 km away, roughly the distance from London to the Caribbean.',
      ],
      realWorldConnections: [
        'Doctors use ultrasound scans to safely image unborn babies, soft tissues, and organs — it is non-invasive and carries no radiation risk.',
        'SONAR (Sound Navigation and Ranging) is used by ships and submarines to map the ocean floor and detect objects underwater — vital for Caribbean maritime navigation.',
        'Noise-cancelling headphones generate sound waves that are exactly out of phase with background noise, effectively cancelling it — an elegant application of wave principles.',
      ],
      quizQuestions: [
        {
          question: 'Through which medium does sound travel fastest?',
          options: ['Vacuum', 'Air', 'Water', 'Steel'],
          correctIndex: 3,
        },
        {
          question: 'What property of a sound wave determines its pitch?',
          options: ['Amplitude', 'Wavelength', 'Frequency', 'Speed'],
          correctIndex: 2,
        },
        {
          question: 'What is the range of frequencies the human ear can detect?',
          options: [
            '0 Hz to 10,000 Hz',
            '20 Hz to 20,000 Hz',
            '200 Hz to 200,000 Hz',
            '1 Hz to 1,000 Hz',
          ],
          correctIndex: 1,
        },
      ],
      furtherReading:
        'BBC Bitesize: Sound; "Physics for You" by Keith Johnson — Sound and Hearing chapter.',
    },
  ],

  lightAndOptics: [
    {
      title: 'Light and Reflection',
      category: 'Light & Optics',
      level: 'standard',
      objectives: [
        'State and apply the law of reflection (angle of incidence = angle of reflection)',
        'Construct ray diagrams for plane (flat) mirrors, identifying real and virtual images',
        'Explain the difference between specular and diffuse reflection',
      ],
      introduction:
        'Light travels in straight lines at 300,000,000 m/s — the fastest anything can travel in the universe. When light strikes a surface, it bounces back according to a simple rule: the angle of incidence equals the angle of reflection. This law, discovered centuries ago, underpins everything from bathroom mirrors and periscopes to the reflective coatings on satellites orbiting above the Caribbean.',
      mainContent: [
        'Light travels in straight lines (rays) at 3 × 10⁸ m/s in a vacuum. It slows slightly in other media (air, glass, water).',
        'The normal is an imaginary line perpendicular to a surface at the point where a ray strikes it. All angles in optics are measured from the normal.',
        'Law of reflection: angle of incidence (i) = angle of reflection (r). Both angles are measured from the normal.',
        'Specular reflection occurs on smooth, flat surfaces (mirrors). Rays reflect in parallel, producing a clear image.',
        'Diffuse reflection occurs on rough surfaces. Rays scatter in many directions — this is why most objects are visible but not mirror-like.',
        'A plane (flat) mirror produces a virtual, upright, same-size image that appears to be as far behind the mirror as the object is in front.',
        'A virtual image cannot be projected onto a screen — it appears to be behind the mirror where light rays do not actually meet.',
        'Periscopes use two plane mirrors at 45° to redirect light, allowing you to see over or around obstacles — used in submarines and at crowded events.',
      ],
      keyConceptsAndDefinitions: [
        {
          term: 'Normal',
          definition:
            'An imaginary line drawn perpendicular to a surface at the point of incidence; all optical angles are measured from it.',
        },
        {
          term: 'Angle of incidence',
          definition: 'The angle between the incoming ray and the normal at the reflecting surface.',
        },
        {
          term: 'Angle of reflection',
          definition:
            'The angle between the reflected ray and the normal; equals the angle of incidence.',
        },
        {
          term: 'Virtual image',
          definition:
            'An image that cannot be projected onto a screen; appears to come from behind a mirror.',
        },
        {
          term: 'Specular reflection',
          definition:
            'Reflection from a smooth surface where parallel rays remain parallel after reflection, forming a clear image.',
        },
        {
          term: 'Plane mirror',
          definition:
            'A flat, smooth mirror that produces a virtual, upright image the same size as the object.',
        },
      ],
      experiments: [
        {
          name: 'Verifying the Law of Reflection',
          description:
            'Use a ray box (or torch and slit card) and a plane mirror to measure angles of incidence and reflection.',
          steps: [
            'Place a plane mirror upright on a sheet of white paper. Draw a line along the base of the mirror and mark the midpoint — this is your point of incidence.',
            'Draw a normal (perpendicular line) at the midpoint.',
            'Shine a narrow beam of light (use a torch through a slit cut in card) at an angle of about 30° to the normal.',
            'Mark the incident ray and reflected ray on the paper. Use a protractor to measure both angles from the normal.',
            'Repeat for angles of 45° and 60°. Record results in a table. Do the angles match?',
          ],
          safetyNote:
            'Do not shine the torch directly into eyes. Use low-power torches only.',
        },
      ],
      practiceQuestions: [
        {
          question:
            'A ray of light hits a plane mirror at an angle of incidence of 35°. What is the angle of reflection?',
          answer: '35° — the angle of reflection always equals the angle of incidence.',
        },
        {
          question:
            'An object is placed 8 cm in front of a plane mirror. How far does the image appear to be behind the mirror?',
          answer:
            '8 cm — the image in a plane mirror always appears as far behind the mirror as the object is in front.',
        },
        {
          question:
            'Why does a white painted wall not act as a mirror even though it reflects light?',
          answer:
            'The wall reflects light diffusely — its rough surface scatters rays in all directions. A mirror reflects specularly, keeping rays parallel and forming a clear image.',
        },
      ],
      funFacts: [
        'The Moon reflects sunlight towards Earth — without this reflection we would have no moonlight. The Moon\'s surface is actually quite dark (like charcoal), reflecting only 12% of sunlight.',
        'Ancient Caribbean peoples used polished obsidian (volcanic glass) as mirrors — the same principle of specular reflection we use today.',
        'Cats\' eyes on roads are designed using retroreflectors — tiny mirrors that reflect light back to its source, making roads safer in the dark.',
        'The James Webb Space Telescope uses 18 gold-coated hexagonal mirror segments to collect infrared light from the very edges of the observable universe.',
      ],
      realWorldConnections: [
        'Dental mirrors allow dentists to see reflections of surfaces inside your mouth that are not directly visible — a practical application of plane mirror geometry.',
        'Periscopes are used in submarines to observe the surface while remaining submerged — vital in naval operations across the Caribbean Sea.',
        'Solar concentrators use curved mirrors to reflect and focus sunlight onto a collector, generating heat for renewable energy — increasingly used in the Caribbean.',
      ],
      quizQuestions: [
        {
          question: 'A ray hits a mirror with an angle of incidence of 50°. What is the angle between the incident ray and the reflected ray?',
          options: ['50°', '100°', '40°', '25°'],
          correctIndex: 1,
        },
        {
          question: 'Which of the following best describes the image in a plane mirror?',
          options: [
            'Real, inverted, magnified',
            'Virtual, upright, same size',
            'Real, upright, diminished',
            'Virtual, inverted, same size',
          ],
          correctIndex: 1,
        },
        {
          question: 'What type of reflection produces clear images?',
          options: ['Diffuse reflection', 'Specular reflection', 'Total reflection', 'Partial diffusion'],
          correctIndex: 1,
        },
      ],
      furtherReading:
        'BBC Bitesize: Light — Reflection; "GCSE Physics" by CGP — Light and Optics chapter.',
    },
    {
      title: 'Refraction and Lenses',
      category: 'Light & Optics',
      level: 'higher',
      objectives: [
        'Explain refraction as the change in speed (and direction) of light at a boundary between media',
        'Apply Snell\'s Law and explain total internal reflection and its applications',
        'Describe how converging and diverging lenses form images and their practical applications',
      ],
      introduction:
        'When light travels from air into glass or water, it slows down and bends. This is refraction — and it is why a straw in a glass of water appears broken, why diamonds sparkle, and how your eyes and glasses focus light onto your retina. Refraction is also the principle behind optical fibres, the technology carrying internet data across the ocean floor to the Caribbean at the speed of light.',
      mainContent: [
        'Refraction occurs when light passes from one medium to another of different optical density. It changes speed, which causes it to change direction (unless it hits the boundary at 90°).',
        'When light enters a denser medium (e.g. air to glass), it slows down and bends towards the normal. When it enters a less dense medium, it speeds up and bends away from the normal.',
        'The refractive index (n) measures how much a medium slows light: n = c/v (speed of light in vacuum ÷ speed in medium).',
        "Snell's Law: n₁sinθ₁ = n₂sinθ₂. It allows calculation of the angle of refraction when light passes between two media.",
        'Total Internal Reflection (TIR) occurs when light hits a boundary from inside a denser medium at an angle greater than the critical angle — all light is reflected back, none escapes.',
        'TIR is used in optical fibres (internet cables, endoscopes), diamonds (maximising sparkle), and prism periscopes.',
        'A converging (convex) lens is thicker in the middle. It bends parallel rays to meet at a focal point — used in magnifying glasses, cameras, the eye, and telescopes.',
        'A diverging (concave) lens is thinner in the middle. It spreads parallel rays apart as if coming from a focal point — used in glasses for short-sightedness.',
      ],
      keyConceptsAndDefinitions: [
        {
          term: 'Refraction',
          definition:
            'The bending of light (or other waves) as it passes from one medium to another of different optical density.',
        },
        {
          term: 'Refractive index (n)',
          definition:
            'A measure of how much a medium slows light: n = c/v. Glass has n ≈ 1.5; diamond n ≈ 2.4.',
        },
        {
          term: "Snell's Law",
          definition:
            'n₁sinθ₁ = n₂sinθ₂ — relates the angles of incidence and refraction to the refractive indices of the two media.',
        },
        {
          term: 'Total Internal Reflection',
          definition:
            'Complete reflection of light inside a denser medium when the angle of incidence exceeds the critical angle.',
        },
        {
          term: 'Converging lens',
          definition:
            'A convex lens that brings parallel light rays together at a focal point; used in cameras and eyes.',
        },
        {
          term: 'Diverging lens',
          definition:
            'A concave lens that spreads light rays apart; used to correct short-sightedness (myopia).',
        },
      ],
      experiments: [
        {
          name: 'Refraction Through a Glass Block',
          description:
            'Trace light rays through a rectangular glass block to measure the angle of refraction and calculate the refractive index.',
          steps: [
            'Place a rectangular glass block on white paper and trace its outline.',
            'Shine a narrow ray of light at one face at an angle. Mark the incoming ray direction with two dots, and where the ray exits the other side with two dots.',
            'Remove the block. Draw the full ray path through the glass by connecting entry and exit points.',
            'Draw normals at the entry and exit points. Measure the angle of incidence and angle of refraction at the entry face.',
            'Calculate the refractive index: n = sin(angle of incidence) ÷ sin(angle of refraction). Compare with the expected value for glass (≈ 1.5).',
          ],
          safetyNote:
            'Handle glass blocks carefully — edges can be sharp. Do not shine light directly into eyes.',
        },
      ],
      practiceQuestions: [
        {
          question:
            'Light travels from air (n = 1.0) into glass (n = 1.5). Does it bend towards or away from the normal? Explain.',
          answer:
            'It bends towards the normal, because it is entering a denser medium and slowing down.',
        },
        {
          question:
            'Explain why optical fibres can transmit data over very long distances without the light escaping.',
          answer:
            'The light hits the glass-air boundary at an angle greater than the critical angle, causing total internal reflection. It bounces along the fibre without losing energy through the sides.',
        },
        {
          question:
            'A person is long-sighted (hyperopia). Which type of lens would correct this, and how does it work?',
          answer:
            'A converging (convex) lens. It bends incoming light rays towards each other before they enter the eye, so the image forms correctly on the retina rather than behind it.',
        },
      ],
      funFacts: [
        'Optical fibres carrying internet data run across the floor of the Atlantic Ocean — connecting the Caribbean to Europe and North America at nearly the speed of light.',
        'Diamonds are cut to maximise total internal reflection — their high refractive index (n = 2.4) means light bounces around inside, creating the brilliant sparkle.',
        'Caribbean coral reefs are visible from above partly because of refraction — the bending of light as it enters the water creates the vivid blues and greens we see.',
        'The human cornea does most of the eye\'s focusing (about 70%) through refraction; the lens fine-tunes the focus for near and far objects.',
      ],
      realWorldConnections: [
        'Submarine internet cables using optical fibres (total internal reflection) connect Caribbean islands to global networks — enabling education platforms like this one.',
        'Cameras in phones, medical endoscopes, and telescopes all rely on carefully designed lens systems based on the principles of refraction.',
        'Rainbows form when sunlight refracts, reflects, and disperses inside raindrops — each colour bends at a slightly different angle, separating the spectrum.',
      ],
      quizQuestions: [
        {
          question: 'Light passes from air into water. Which way does it bend?',
          options: [
            'Away from the normal',
            'Towards the normal',
            'It does not bend',
            'Parallel to the surface',
          ],
          correctIndex: 1,
        },
        {
          question: 'Total internal reflection can only occur when light travels from…',
          options: [
            'a less dense to a more dense medium',
            'a more dense to a less dense medium',
            'any medium to vacuum',
            'air to glass',
          ],
          correctIndex: 1,
        },
        {
          question: 'Which lens is used to correct short-sightedness (myopia)?',
          options: ['Converging (convex)', 'Diverging (concave)', 'Flat (plane)', 'Bifocal'],
          correctIndex: 1,
        },
      ],
      furtherReading:
        'BBC Bitesize: Refraction and Lenses; "GCSE Physics" by CGP — Optics; Isaac Physics: Snell\'s Law problems.',
    },
  ],

  spaceAndUniverse: [
    {
      title: 'The Solar System',
      category: 'Space & The Universe',
      level: 'foundation',
      objectives: [
        'Name the eight planets in order and describe their key characteristics',
        'Explain how gravity keeps planets in orbit around the Sun',
        'Describe the role of Caribbean and African astronomers in the history of space science',
      ],
      introduction:
        'Our solar system is a family of eight planets, dozens of moons, asteroids, and comets, all held together by the gravitational pull of the Sun — a star containing 99.8% of all the mass in the solar system. For centuries, Caribbean and African peoples observed the night sky long before the invention of telescopes, navigating oceans and marking seasons by the stars. Space science belongs to everyone.',
      mainContent: [
        'The Solar System contains the Sun and everything that orbits it: 8 planets, dwarf planets (like Pluto), moons, asteroids, and comets.',
        'Planets in order from the Sun: Mercury, Venus, Earth, Mars (rocky inner planets), then Jupiter, Saturn, Uranus, Neptune (gas/ice giants).',
        'Gravity is the attractive force between all objects with mass. The Sun\'s enormous mass creates a gravitational field that keeps planets in elliptical orbits.',
        'The further a planet is from the Sun, the weaker the gravitational pull and the slower it orbits. Earth takes 365.25 days; Neptune takes 165 years.',
        'The Moon is Earth\'s natural satellite, held in orbit by Earth\'s gravity. Its gravitational pull causes Earth\'s ocean tides — including the tides on Caribbean beaches.',
        'Moons are natural satellites orbiting planets. Earth has 1; Mars has 2; Jupiter has 95 known moons.',
        'Asteroids are rocky bodies mostly found in the asteroid belt between Mars and Jupiter. Comets are icy bodies with highly elliptical orbits.',
        "Caribbean peoples such as the Taíno used astronomical knowledge for agriculture and navigation — the star Polaris (North Star) was vital for Caribbean sea voyages.",
      ],
      keyConceptsAndDefinitions: [
        {
          term: 'Orbit',
          definition:
            'The curved path of an object around another due to gravity; planets orbit the Sun in ellipses.',
        },
        {
          term: 'Gravitational field',
          definition:
            'The region around a massive object where other masses experience a gravitational force.',
        },
        {
          term: 'Satellite',
          definition:
            'Any object that orbits another; the Moon is a natural satellite; GPS devices use artificial satellites.',
        },
        {
          term: 'Asteroid',
          definition:
            'A rocky body, smaller than a planet, orbiting the Sun — mostly found in the asteroid belt.',
        },
        {
          term: 'Comet',
          definition:
            'An icy body that orbits the Sun in a highly elliptical path; develops a bright tail as it nears the Sun.',
        },
        {
          term: 'Ellipse',
          definition:
            'An oval-shaped closed curve; the actual shape of planetary orbits (Kepler\'s first law).',
        },
      ],
      experiments: [
        {
          name: 'Scale Model of the Solar System',
          description:
            'Build a scale model of the Solar System using toilet paper or a long strip of paper to appreciate the vast distances between planets.',
          steps: [
            'Assign 1 sheet of toilet paper (≈ 22 cm) to represent 50 million km. The Sun goes at position 0.',
            'Mercury: ~1 sheet. Venus: ~2 sheets. Earth: ~3 sheets. Mars: ~4.5 sheets.',
            'Jupiter: ~15 sheets. Saturn: ~28 sheets. Uranus: ~56 sheets. Neptune: ~88 sheets.',
            'Unroll the paper and place a labelled card at each position. Walk the length of the model.',
            'Discuss: how far is the nearest star (Proxima Centauri)? At this scale it would be about 15,000 km away — roughly London to Barbados and back.',
          ],
          safetyNote: 'Use indoors or in a long outdoor space. No hazards.',
        },
      ],
      practiceQuestions: [
        {
          question: 'List the eight planets in order from closest to furthest from the Sun.',
          answer:
            'Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune.',
        },
        {
          question:
            'Why does Neptune take much longer than Earth to complete one orbit of the Sun?',
          answer:
            'Neptune is much further from the Sun, so the gravitational pull is weaker. It travels slower and has a much larger orbit to complete.',
        },
        {
          question: 'How does the Moon cause ocean tides on Earth?',
          answer:
            "The Moon's gravity pulls on Earth's oceans. The side of Earth facing the Moon bulges outward (high tide); the far side also bulges due to inertia. As Earth rotates, coastlines pass through high and low tides.",
        },
      ],
      funFacts: [
        'The Taíno people of the Caribbean named a star formation "The Pleiades" (Seven Sisters) and used it to time planting seasons — sophisticated astronomical knowledge long before European contact.',
        'Saturn could float in water — it is the least dense planet in our solar system, with an average density less than that of water.',
        'A day on Venus is longer than a year on Venus — it rotates so slowly that it completes an orbit of the Sun before completing one full spin.',
        'African astronomer Abd al-Rahman al-Sufi (903–986 CE) created one of the earliest and most accurate star catalogues — influencing astronomy for centuries.',
      ],
      realWorldConnections: [
        'GPS satellites in orbit around Earth make navigation apps on your phone possible — the same gravitational principles that keep planets in orbit keep satellites in place.',
        'Caribbean weather forecasters use data from meteorological satellites in orbit to track hurricanes, saving countless lives each year.',
        'Space telescopes like Hubble and James Webb were designed using the same optics principles you learn in physics — mirrors, lenses, and the electromagnetic spectrum.',
      ],
      quizQuestions: [
        {
          question: 'Which planet is the largest in our Solar System?',
          options: ['Saturn', 'Neptune', 'Jupiter', 'Uranus'],
          correctIndex: 2,
        },
        {
          question: 'What keeps planets in orbit around the Sun?',
          options: ['Magnetic force', 'Nuclear force', 'Gravity', 'Air pressure'],
          correctIndex: 2,
        },
        {
          question: 'Which planet is closest to Earth?',
          options: ['Mars', 'Venus', 'Mercury', 'Jupiter'],
          correctIndex: 1,
        },
      ],
      furtherReading:
        'BBC Bitesize: The Solar System; "Astrophysics for People in a Hurry" by Neil deGrasse Tyson — accessible introduction.',
    },
    {
      title: 'Stars and Galaxies',
      category: 'Space & The Universe',
      level: 'standard',
      objectives: [
        'Describe the life cycle of a star from nebula through to its final stage',
        'Explain what a light year is and use it to describe astronomical distances',
        'Describe red shift as evidence for the expanding universe',
      ],
      introduction:
        'Every atom of carbon in your body was forged inside a star that died billions of years ago. The Sun is a middle-aged star about halfway through its 10-billion-year life. Beyond our Solar System lie hundreds of billions of other stars in our galaxy — the Milky Way — and beyond that, hundreds of billions of other galaxies. Understanding stars and galaxies means understanding our own origins.',
      mainContent: [
        'A star begins as a nebula — a cloud of hydrogen and dust. Gravity pulls the cloud together, heating it until nuclear fusion ignites.',
        'Nuclear fusion: hydrogen nuclei fuse to form helium, releasing enormous amounts of energy (following E = mc²). This is what makes stars shine.',
        'A star\'s life stage depends on its mass. Our Sun is a main sequence star and will remain so for another ~5 billion years.',
        'When a medium-sized star (like the Sun) runs out of hydrogen, it expands into a red giant, then sheds its outer layers to form a planetary nebula, leaving a white dwarf.',
        'A massive star expands into a red supergiant, then explodes as a supernova, leaving either a neutron star or, if massive enough, a black hole.',
        'A light year is the distance light travels in one year ≈ 9.46 × 10¹⁵ m. The nearest star (Proxima Centauri) is 4.24 light years away.',
        'The Milky Way is a spiral galaxy containing about 200–400 billion stars. The Sun is located about two-thirds of the way from the centre.',
        'Red shift: light from distant galaxies is shifted to longer wavelengths (towards red). This indicates galaxies are moving away from us — evidence that the universe is expanding (Big Bang theory).',
      ],
      keyConceptsAndDefinitions: [
        {
          term: 'Nuclear fusion',
          definition:
            'The process by which nuclei combine (fuse) under extreme heat and pressure, releasing enormous energy — powers all stars.',
        },
        {
          term: 'Main sequence',
          definition:
            'The stable phase of a star\'s life when it is fusing hydrogen into helium; the Sun is currently in this stage.',
        },
        {
          term: 'Supernova',
          definition:
            'A massive stellar explosion that occurs when a large star exhausts its fuel; produces elements heavier than iron.',
        },
        {
          term: 'Light year',
          definition:
            'The distance light travels in one year (≈ 9.46 × 10¹⁵ m); used to measure astronomical distances.',
        },
        {
          term: 'Red shift',
          definition:
            'The shift of light from distant galaxies towards longer (redder) wavelengths, indicating they are moving away from us.',
        },
        {
          term: 'Black hole',
          definition:
            'An incredibly dense remnant of a massive star; its gravitational pull is so strong that not even light can escape.',
        },
      ],
      experiments: [
        {
          name: 'Modelling the Expanding Universe with a Balloon',
          description:
            'Use a balloon with dots drawn on it to model how galaxies move apart as the universe expands.',
          steps: [
            'Draw 8–10 dots on an uninflated balloon with a marker. Label each dot with a galaxy name.',
            'Measure the distances between three pairs of dots with a ruler. Record in a table.',
            'Slowly inflate the balloon to about half full. Measure the same three pairs of dots again.',
            'Fully inflate the balloon. Measure the pairs one more time.',
            'Calculate how the distances changed. Which pair increased the most? Note: dots further apart move apart faster — this mirrors the Hubble law.',
          ],
          safetyNote: 'No hazards. Do not inflate the balloon beyond comfortable capacity.',
        },
      ],
      practiceQuestions: [
        {
          question:
            'Describe the life cycle of a star similar in mass to our Sun, starting from a nebula.',
          answer:
            'Nebula → protostar → main sequence star → red giant → planetary nebula → white dwarf.',
        },
        {
          question:
            'The Andromeda Galaxy is approximately 2.5 million light years away. What does this mean?',
          answer:
            'It means the light we see from Andromeda today left that galaxy 2.5 million years ago — we are looking back in time.',
        },
        {
          question: 'How does red shift provide evidence for the Big Bang?',
          answer:
            'Distant galaxies show red-shifted light, meaning they are moving away from us. The further the galaxy, the greater the red shift. This shows the universe is expanding in all directions — consistent with an explosion (Big Bang) at the beginning.',
        },
      ],
      funFacts: [
        'The elements that make up your body — carbon, oxygen, iron — were all created in stellar explosions (supernovae). You are literally made of stardust.',
        'Jamaican-British astrophysicist Dr Jocelyn Bell Burnell discovered pulsars (spinning neutron stars) in 1967 — one of the most significant astronomical discoveries of the 20th century.',
        'There are more stars in the observable universe than grains of sand on all of Earth\'s beaches — estimated at around 10²⁴ stars.',
        'The black hole at the centre of our galaxy (Sagittarius A*) has a mass about 4 million times that of the Sun — yet it is small enough to fit within the orbit of Mercury.',
      ],
      realWorldConnections: [
        'Nuclear fusion — the same process powering the Sun — is being developed as a clean, nearly limitless energy source by scientists worldwide, including research supported by Caribbean nations.',
        'Pulsars (rotating neutron stars) are so precise in their timing that they are used as natural atomic clocks, helping calibrate GPS systems.',
        'Understanding stellar nucleosynthesis (how stars make elements) explains why rare earth metals used in phone batteries exist on Earth — they were produced in ancient stellar explosions.',
      ],
      quizQuestions: [
        {
          question: 'What is the correct order in the life cycle of a star like our Sun after the main sequence?',
          options: [
            'Supernova → neutron star → black hole',
            'Red giant → white dwarf → black hole',
            'Red giant → planetary nebula → white dwarf',
            'Red supergiant → supernova → white dwarf',
          ],
          correctIndex: 2,
        },
        {
          question: 'What does red shift in the light from distant galaxies tell us?',
          options: [
            'Galaxies are rotating',
            'Galaxies are moving towards us',
            'The universe is contracting',
            'Galaxies are moving away from us',
          ],
          correctIndex: 3,
        },
        {
          question: 'What is a light year?',
          options: [
            'The time it takes light to travel from the Sun to Earth',
            'The distance light travels in one year',
            'The brightness of a star at 10 parsecs',
            'One billion kilometres',
          ],
          correctIndex: 1,
        },
      ],
      furtherReading:
        'BBC Bitesize: Stars and Galaxies; "A Brief History of Time" by Stephen Hawking — accessible chapters on stars and the Big Bang.',
    },
  ],
};

export function getAllPhysicsLessons(): {
  lesson: PhysicsLesson;
  category: PhysicsTopicCategory;
}[] {
  const categories = Object.keys(physicsTopics) as PhysicsTopicCategory[];
  return categories.flatMap((category) =>
    physicsTopics[category].map((lesson) => ({ lesson, category })),
  );
}

export const physicsCategoryNames: Record<PhysicsTopicCategory, string> = {
  forcesAndMotion: 'Forces & Motion',
  energyAndElectricity: 'Energy & Electricity',
  wavesAndSound: 'Waves & Sound',
  lightAndOptics: 'Light & Optics',
  spaceAndUniverse: 'Space & The Universe',
};

export const physicsCategoryIcons: Record<PhysicsTopicCategory, string> = {
  forcesAndMotion: '🏹',
  energyAndElectricity: '⚡',
  wavesAndSound: '🌊',
  lightAndOptics: '🔭',
  spaceAndUniverse: '🌌',
};

export const physicsCategoryColors: Record<
  PhysicsTopicCategory,
  { bg: string; border: string; text: string; badge: string }
> = {
  forcesAndMotion: {
    bg: 'from-blue-50 to-blue-100',
    border: 'border-blue-200',
    text: 'text-blue-800',
    badge: 'bg-blue-600',
  },
  energyAndElectricity: {
    bg: 'from-yellow-50 to-yellow-100',
    border: 'border-yellow-200',
    text: 'text-yellow-800',
    badge: 'bg-yellow-600',
  },
  wavesAndSound: {
    bg: 'from-cyan-50 to-cyan-100',
    border: 'border-cyan-200',
    text: 'text-cyan-800',
    badge: 'bg-cyan-600',
  },
  lightAndOptics: {
    bg: 'from-violet-50 to-violet-100',
    border: 'border-violet-200',
    text: 'text-violet-800',
    badge: 'bg-violet-600',
  },
  spaceAndUniverse: {
    bg: 'from-slate-800 to-slate-900',
    border: 'border-slate-600',
    text: 'text-slate-100',
    badge: 'bg-indigo-600',
  },
};
