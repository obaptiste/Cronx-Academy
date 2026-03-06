export type PoolModule = {
  id: string;
  title: string;
  duration: string;
  objective: string;
  lesson: string;
  procedure: string[];
  regulations: string[];
  quiz: {
    question: string;
    options: string[];
    answer: string;
    explanation: string;
  };
};

export const poolModules: PoolModule[] = [
  {
    id: 'pump-room-foundations',
    title: 'Pump Room Foundations',
    duration: '30 min',
    objective: 'Understand core circulation equipment and routine checks.',
    lesson:
      'Every safe pool starts in the plant room. Operators must identify pumps, strainers, valves, and flow direction before carrying out any intervention. A strong handover process reduces downtime and protects water quality.',
    procedure: [
      'Confirm lockout/tagout status before opening any equipment.',
      'Inspect pump basket and pressure gauges for abnormal readings.',
      'Record flow rates, back pressure, and motor noise in daily log.',
      'Report drips, overheating, or unusual vibration immediately.',
    ],
    regulations: ['PWTAG Code of Practice', 'Electricity at Work Regulations 1989'],
    quiz: {
      question: 'What is the first step before opening a pump strainer?',
      options: ['Check chlorine level', 'Apply lockout/tagout controls', 'Increase circulation rate'],
      answer: 'Apply lockout/tagout controls',
      explanation: 'Isolation controls are essential to prevent electrical or mechanical injury.',
    },
  },
  {
    id: 'filtration-operations',
    title: 'Filtration Operations',
    duration: '35 min',
    objective: 'Operate media filters efficiently and safely.',
    lesson:
      'Filtration removes suspended solids and supports disinfectant performance. Operators should monitor differential pressure and perform backwash cycles based on trend data, not guesswork.',
    procedure: [
      'Track clean-bed and operating pressure each shift.',
      'Initiate backwash when pressure rise hits local threshold.',
      'Rinse to waste until sight glass runs clear.',
      'Re-open valves to service mode and confirm stable flow.',
    ],
    regulations: ['HSE HSG179', 'PWTAG Technical Notes'],
    quiz: {
      question: 'Which reading indicates a likely backwash requirement?',
      options: ['Stable pH', 'Rising filter differential pressure', 'Low air temperature'],
      answer: 'Rising filter differential pressure',
      explanation: 'A pressure rise indicates loading within the media bed.',
    },
  },
  {
    id: 'water-chemistry-control',
    title: 'Water Chemistry Control',
    duration: '45 min',
    objective: 'Maintain pH, free chlorine, alkalinity, and combined chlorine targets.',
    lesson:
      'Balanced chemistry protects bathers, plant equipment, and reputation. Operators should understand the relationship between pH and chlorine efficacy and react quickly to trend movement.',
    procedure: [
      'Calibrate dosing and testing equipment at start of shift.',
      'Collect representative sample from designated sampling point.',
      'Record pH, free chlorine, combined chlorine, and alkalinity.',
      'Apply controlled dose adjustments and re-test after circulation period.',
    ],
    regulations: ['PWTAG Code of Practice', 'COSHH Regulations 2002'],
    quiz: {
      question: 'Why is pH control critical for chlorination?',
      options: ['It changes pool depth', 'It affects chlorine disinfection efficiency', 'It controls bather numbers'],
      answer: 'It affects chlorine disinfection efficiency',
      explanation: 'Disinfectant effectiveness falls sharply outside optimal pH range.',
    },
  },
  {
    id: 'chemical-handling-coshh',
    title: 'Chemical Handling & COSHH',
    duration: '40 min',
    objective: 'Store, dose, and transport pool chemicals under COSHH controls.',
    lesson:
      'Pool chemicals are essential but hazardous. Safe operators rely on risk assessment, segregation, ventilation, and PPE to avoid burns, inhalation injury, and reactive incidents.',
    procedure: [
      'Review COSHH assessment and SDS before task.',
      'Verify PPE: gloves, eye protection, and chemical-resistant apron.',
      'Check containers, labels, and bund integrity.',
      'Never mix incompatible chemicals or decant into unlabelled vessels.',
    ],
    regulations: ['COSHH Regulations 2002', 'PPE at Work Regulations 1992'],
    quiz: {
      question: 'What should you check first before dosing chemicals?',
      options: ['Lighting level', 'COSHH assessment and PPE', 'Customer feedback'],
      answer: 'COSHH assessment and PPE',
      explanation: 'Task-specific control measures must be confirmed before handling starts.',
    },
  },
  {
    id: 'microbiological-risk',
    title: 'Microbiological Risk Management',
    duration: '30 min',
    objective: 'Reduce pathogen risk with prevention and rapid response actions.',
    lesson:
      'Incidents involving contamination can escalate quickly. Operators need robust closure, shock treatment, and communication protocols for blood, vomit, and faecal contamination events.',
    procedure: [
      'Isolate affected area and halt bather access.',
      'Follow contamination matrix for dosing and turnover times.',
      'Test and document microbiological control parameters.',
      'Re-open only once quality standards are re-established.',
    ],
    regulations: ['HSE HSG179', 'PWTAG Technical Notes'],
    quiz: {
      question: 'When should a pool re-open after contamination treatment?',
      options: ['After one hour regardless of results', 'Only after required treatment and verified test compliance', 'When bather demand is high'],
      answer: 'Only after required treatment and verified test compliance',
      explanation: 'Verification protects users and demonstrates due diligence.',
    },
  },
  {
    id: 'electrical-and-plant-safety',
    title: 'Electrical and Plant Safety',
    duration: '35 min',
    objective: 'Work safely around electrical systems and rotating equipment.',
    lesson:
      'Wet environments and electrical equipment are a high-risk combination. Operators should apply permit controls, safe isolation, and fault escalation pathways.',
    procedure: [
      'Visually inspect control panels for damage or moisture ingress.',
      'Use permit-to-work for non-routine maintenance.',
      'Confirm isolation with test equipment before intervention.',
      'Escalate exposed wiring or hot spots to competent engineer.',
    ],
    regulations: ['Electricity at Work Regulations 1989', 'HSE HSG179'],
    quiz: {
      question: 'Who should repair exposed wiring in the plant room?',
      options: ['Any lifeguard', 'A competent authorised engineer', 'The front desk team'],
      answer: 'A competent authorised engineer',
      explanation: 'Electrical repair must only be performed by competent persons.',
    },
  },
  {
    id: 'hvac-and-air-quality',
    title: 'HVAC & Air Quality',
    duration: '25 min',
    objective: 'Maintain healthy natatorium air and condensation control.',
    lesson:
      'Good air handling limits chloramine exposure and protects the building envelope. Operators should understand extraction, fresh air ratios, and temperature balancing.',
    procedure: [
      'Check humidity, pool hall air temp, and water temp relationship.',
      'Inspect supply and extract operation for balanced airflow.',
      'Report condensation or corrosion hotspots promptly.',
      'Coordinate HVAC set points with occupancy profile.',
    ],
    regulations: ['PWTAG Code of Practice', 'HSE HSG179'],
    quiz: {
      question: 'Why is balanced ventilation important in indoor pools?',
      options: ['It improves parking', 'It reduces chloramine build-up and condensation', 'It lowers chlorine use to zero'],
      answer: 'It reduces chloramine build-up and condensation',
      explanation: 'Airflow and humidity control are key to bather and staff comfort.',
    },
  },
  {
    id: 'incident-response-riddor',
    title: 'Incident Response & RIDDOR',
    duration: '30 min',
    objective: 'Handle incidents, document facts, and report where legally required.',
    lesson:
      'Timely incident response protects people and organisations. Clear chronology, witness details, and escalation pathways are required for legal compliance and trend reduction.',
    procedure: [
      'Secure scene and provide immediate first response.',
      'Capture factual record: who, what, where, when, controls applied.',
      'Assess reportability threshold under RIDDOR 2013.',
      'Submit notifications and internal corrective actions.',
    ],
    regulations: ['RIDDOR 2013', 'HSE HSG179'],
    quiz: {
      question: 'What is essential in an incident record?',
      options: ['Personal opinions', 'Factual chronology and actions taken', 'Social media posts'],
      answer: 'Factual chronology and actions taken',
      explanation: 'Objective records support compliance and investigations.',
    },
  },
  {
    id: 'environmental-drainage-compliance',
    title: 'Environmental & Drainage Compliance',
    duration: '35 min',
    objective: 'Dispose of backwash and drained water in line with environmental controls.',
    lesson:
      'Discharge events can create environmental harm and regulatory enforcement. Operators must understand consent conditions, neutralisation, and approved discharge routes.',
    procedure: [
      'Review local discharge consent and Environment Agency guidance.',
      'Dechlorinate water before release where required.',
      'Use approved foul sewer routes, never surface water drains unless authorised.',
      'Log volume, quality, and release timing.',
    ],
    regulations: ['Environment Agency discharge guidance', 'Building Regulations Part H'],
    quiz: {
      question: 'Where should chlorinated backwash normally be discharged?',
      options: ['Nearest river', 'Approved foul sewer route under consent', 'Any storm drain'],
      answer: 'Approved foul sewer route under consent',
      explanation: 'Unauthorised discharge risks pollution and penalties.',
    },
  },
  {
    id: 'bather-load-hygiene',
    title: 'Bather Load & Hygiene Management',
    duration: '20 min',
    objective: 'Control bather impact through hygiene messaging and capacity checks.',
    lesson:
      'Pre-swim hygiene and occupancy controls directly influence water quality and comfort. Operators should enforce showering and monitor high-load periods.',
    procedure: [
      'Track occupancy against design bather load limits.',
      'Promote pre-swim shower compliance with clear signage.',
      'Increase sampling during peak periods and lessons.',
      'Coordinate lifeguard and plant-room communication.',
    ],
    regulations: ['PWTAG Code of Practice', 'HSE HSG179'],
    quiz: {
      question: 'What is a practical way to reduce combined chlorine?',
      options: ['Reduce filtration hours', 'Improve pre-swim hygiene compliance', 'Turn off extraction fans'],
      answer: 'Improve pre-swim hygiene compliance',
      explanation: 'Cleaner bathers reduce organic load and chloramine formation.',
    },
  },
  {
    id: 'preventive-maintenance-planning',
    title: 'Preventive Maintenance Planning',
    duration: '30 min',
    objective: 'Build daily, weekly, and monthly routines that prevent failures.',
    lesson:
      'A structured maintenance schedule prevents reactive shutdowns. Operators should assign ownership, define tolerances, and review overdue tasks each week.',
    procedure: [
      'Maintain checklist for daily critical controls.',
      'Schedule weekly deep inspections and calibration checks.',
      'Plan monthly servicing with contractors and permits.',
      'Close out actions with evidence and supervisor sign-off.',
    ],
    regulations: ['PWTAG Technical Notes', 'HSE HSG179'],
    quiz: {
      question: 'What is the main benefit of preventive maintenance?',
      options: ['More unplanned closures', 'Reduced failures and safer operation', 'No need for logs'],
      answer: 'Reduced failures and safer operation',
      explanation: 'Planned maintenance improves reliability and compliance.',
    },
  },
  {
    id: 'leadership-and-audit-readiness',
    title: 'Leadership & Audit Readiness',
    duration: '25 min',
    objective: 'Prepare teams and records for internal and external audits.',
    lesson:
      'Audit-ready facilities maintain consistent standards, complete records, and clear accountability. Leaders should coach teams, review non-conformances, and track corrective action closure.',
    procedure: [
      'Run monthly document quality check across logs and permits.',
      'Spot-check competency records and refresher training dates.',
      'Review previous audit findings and closure evidence.',
      'Conduct short toolbox talks to reinforce expectations.',
    ],
    regulations: ['PWTAG Code of Practice', 'HSE HSG179'],
    quiz: {
      question: 'What demonstrates strong audit readiness?',
      options: ['Missing records', 'Up-to-date logs and closed corrective actions', 'Verbal-only procedures'],
      answer: 'Up-to-date logs and closed corrective actions',
      explanation: 'Evidence-based records show active control of risk.',
    },
  },
];
