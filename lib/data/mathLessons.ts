import { MathTopics } from '@/types';

export const mathTopics: MathTopics = {
  algebra: [
    {
      title: 'Solving Linear Equations',
      objectives: [
        'Solve equations with variables on both sides',
        'Use inverse operations correctly',
        'Check solutions by substitution',
      ],
      warmUp: 'Simplify: 3x + 7 - x + 2',
      mainActivities: [
        'Work through 5 equations starting simple: 2x + 5 = 13',
        'Progress to equations with variables on both sides: 3x + 4 = x + 10',
        'Challenge: equations with brackets: 2(x + 3) = 16',
      ],
      practice: ['4x + 7 = 23', '5x - 3 = 2x + 9', '3(x - 2) = 15', '2x + 5 = x + 12'],
      extension: 'Create your own equation where x = 7',
      homework: 'Complete 10 mixed linear equations from textbook pages 45-46',
    },
    {
      title: 'Expanding Brackets',
      objectives: [
        'Multiply out single brackets',
        'Expand double brackets',
        'Simplify algebraic expressions',
      ],
      warmUp: 'Calculate: 5 × (3 + 2)',
      mainActivities: [
        'Expand: 3(x + 4), 5(2x - 3)',
        'Use grid method for double brackets: (x + 3)(x + 2)',
        'Practice FOIL method for expansion',
      ],
      practice: ['4(x + 5)', '3(2x - 7)', '(x + 4)(x + 1)', '(2x + 3)(x - 2)'],
      extension: 'Expand and simplify: (x + 3)(x + 2) + 2(x - 1)',
      homework: 'Expand 8 expressions, progressing in difficulty',
    },
    {
      title: 'Factorising Expressions',
      objectives: [
        'Find common factors',
        'Factorise simple quadratics',
        'Recognise difference of two squares',
      ],
      warmUp: 'List all factors of 24',
      mainActivities: [
        'Find highest common factor: 6x + 12',
        'Factorise simple quadratics: x² + 5x + 6',
        'Special cases: x² - 9 (difference of two squares)',
      ],
      practice: ['8x + 20', 'x² + 7x + 12', 'x² - 16', '2x² + 10x'],
      extension: 'Factorise fully: 3x² + 9x + 6',
      homework: 'Mixed factorising practice, 12 questions',
    },
  ],
  geometry: [
    {
      title: 'Angles in Parallel Lines',
      objectives: [
        'Identify corresponding angles',
        'Identify alternate angles',
        'Calculate missing angles using parallel line rules',
      ],
      warmUp: 'Name three types of angles you know',
      mainActivities: [
        'Draw parallel lines with transversal, label angle types',
        "Use 'Z' pattern for alternate angles",
        "Use 'F' pattern for corresponding angles",
        'Calculate missing angles in diagrams',
      ],
      practice: ['Find missing angles in 4 different parallel line diagrams'],
      extension: 'Create your own parallel lines problem where one angle is 65°',
      homework: 'Complete angles worksheet with 10 parallel line problems',
    },
    {
      title: "Pythagoras' Theorem",
      objectives: [
        "State Pythagoras' theorem",
        'Calculate missing sides in right-angled triangles',
        'Apply theorem to real-world problems',
      ],
      warmUp: "What makes a triangle 'right-angled'?",
      mainActivities: [
        'Introduce a² + b² = c² with visual proof',
        'Calculate hypotenuse when given two shorter sides',
        'Calculate shorter side when given hypotenuse and one side',
        'Real-world application: ladder problem',
      ],
      practice: [
        'Find c when a=3, b=4',
        'Find a when b=5, c=13',
        'Ladder 6m long, 2m from wall - how high?',
      ],
      extension: 'Use Pythagoras to find diagonal of rectangle 8cm by 6cm',
      homework: 'Complete 8 Pythagoras problems of varying difficulty',
    },
    {
      title: 'Area and Perimeter',
      objectives: [
        'Calculate area of rectangles and triangles',
        'Find perimeter of compound shapes',
        'Solve real-world problems involving area',
      ],
      warmUp: 'What is the perimeter of a square with side 5cm?',
      mainActivities: [
        'Review formulae: rectangle A = l×w, triangle A = ½×b×h',
        'Calculate area of compound shapes by breaking them down',
        'Find missing dimensions when given area',
        'Real problem: How much paint for a room 4m by 3m?',
      ],
      practice: [
        'Area of rectangle 8cm by 5cm',
        'Triangle with base 6cm, height 4cm',
        'Perimeter of L-shape',
      ],
      extension:
        "A rectangular garden is 12m by 8m. A path 1m wide goes around it. What's the path area?",
      homework: 'Complete 10 area and perimeter problems',
    },
  ],
  number: [
    {
      title: 'Fractions, Decimals and Percentages',
      objectives: [
        'Convert between fractions, decimals and percentages',
        'Order FDP values',
        'Calculate percentages of amounts',
      ],
      warmUp: 'Convert ½ to a decimal and percentage',
      mainActivities: [
        'Create conversion table for common fractions',
        'Practice converting: ¾, ⅖, ⅝ to decimals and percentages',
        'Calculate 15% of £80, 35% of 200',
        'Order mixed FDP values from smallest to largest',
      ],
      practice: ['Convert ⅗ to decimal and percentage', 'Find 24% of £150', 'Order: 0.6, 55%, ⅔'],
      extension: "A jumper costs £45. In a sale it's reduced by 20%. What's the sale price?",
      homework: 'Mixed FDP practice, including percentage increase/decrease',
    },
    {
      title: 'Ratio and Proportion',
      objectives: ['Simplify ratios', 'Share amounts in given ratios', 'Solve proportion problems'],
      warmUp: 'Simplify the ratio 6:12',
      mainActivities: [
        'Simplify ratios by dividing by HCF: 15:25, 18:24',
        'Share £60 in ratio 2:3',
        'Recipe problems: scale ingredients up/down',
        'Direct proportion: if 5 pencils cost £2, what do 8 cost?',
      ],
      practice: ['Simplify 20:30', 'Share £45 in ratio 2:7', 'Scale recipe from 4 to 6 people'],
      extension: 'Three friends share £84 in ratio 3:4:5. How much does each get?',
      homework: 'Complete ratio and proportion worksheet, 10 questions',
    },
    {
      title: 'Working with Money',
      objectives: ['Calculate best value deals', 'Work with budgets', 'Understand profit and loss'],
      warmUp: 'Which is better value: 500g for £2 or 750g for £2.70?',
      mainActivities: [
        'Compare unit prices to find best deals',
        'Plan a weekly shopping budget of £50',
        'Calculate profit/loss: bought for £30, sold for £45',
        'Work out sale discounts and final prices',
      ],
      practice: [
        'Best value: 400g for £1.20 or 600g for £1.65?',
        'Budget: cinema £8, food £12, bus £4. Change from £30?',
      ],
      extension:
        'You buy items for £15, £23, £8. You want 20% profit on each. What are your selling prices?',
      homework: 'Create a budget for a day trip to London for 2 people (£100 budget)',
    },
  ],
  statistics: [
    {
      title: 'Mean, Median, Mode and Range',
      objectives: [
        'Calculate mean from a list',
        'Find median from ordered data',
        'Identify mode and range',
        'Choose appropriate average',
      ],
      warmUp: 'Put these in order: 7, 3, 9, 1, 5',
      mainActivities: [
        'Calculate mean of test scores: 67, 82, 74, 91, 86',
        'Find median of ordered and unordered lists',
        'Identify mode in data sets (including bimodal)',
        'Discuss when each average is most useful',
      ],
      practice: ['Find mean, median, mode, range of: 5, 8, 3, 8, 6, 2, 8'],
      extension:
        'Five numbers have mean 12. Four of them are 10, 11, 15, 8. Find the fifth number.',
      homework:
        'Collect data at home (e.g., TV watching times for family) and calculate all averages',
    },
    {
      title: 'Charts and Graphs',
      objectives: [
        'Draw and interpret bar charts',
        'Create pie charts from data',
        'Read information from graphs',
      ],
      warmUp: 'What information can you get from a bar chart?',
      mainActivities: [
        'Draw bar chart of class favourite subjects',
        'Convert data into pie chart (calculate angles)',
        'Interpret line graph showing temperature over a week',
        'Discuss which chart type suits which data',
      ],
      practice: ['Draw bar chart for: Mon-15°, Tue-18°, Wed-12°, Thu-16°, Fri-14°'],
      extension: 'Create a pie chart showing how you spend your 24-hour day',
      homework:
        'Collect data on favorite foods in your household and create 2 different types of charts',
    },
  ],
};
