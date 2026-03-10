import type { DecisionTree, Fault, Symptom } from '@/lib/fault-path/types';

export const safetyBanner =
  'Electricity can cause shock, burns, fire, and serious injury. This tool does not replace a qualified electrician.';

export const symptoms: Symptom[] = [
  ['mcb-trips-under-load', 'MCB trips under load'],
  ['rcd-trips-immediately', 'RCD trips immediately'],
  ['rcbo-trips-one-circuit', 'RCBO trips on one circuit'],
  ['partial-socket-failure', 'Some sockets dead, others live'],
  ['whole-socket-circuit-dead', 'Whole socket circuit dead'],
  ['partial-lighting-failure', 'Lights not working on one floor'],
  ['lights-flicker-under-load', 'Lights flicker or dim'],
  ['hot-socket-or-switch', 'Socket or switch feels hot / shows burn marks'],
  ['appliance-causes-trip', 'Appliance causes trip when plugged in'],
  ['two-way-switching-miswire', 'Two-way switching behaves strangely'],
  ['low-insulation-resistance', 'Low insulation resistance suspected'],
  ['loose-connection-high-resistance-joint', 'Loose connection / overheating suspected'],
  ['borrowed-neutral', 'Borrowed neutral suspected'],
  ['broken-ring-final', 'Broken ring final suspected'],
  ['damaged-cable-or-unenclosed-connection', 'Damaged cable / exposed cores / unenclosed connection'],
].map(([slug, title]) => ({ slug, title, description: `Start a guided triage path for: ${title.toLowerCase()}.` }));

const fault = (slug: string, title: string, severity: Fault['severity'], tags: string[]): Fault => ({
  slug,
  title,
  summary: `${title} can interrupt normal operation and may indicate a safety issue if ignored.`,
  description: `${title} is a common UK domestic fault pattern. This guide helps learners spot clues without invasive work.`,
  severity,
  dangerNotes:
    severity === 'urgent'
      ? 'Potential immediate fire or shock risk. Isolate use and seek qualified help now.'
      : 'Can worsen if left unresolved; continue only with safe observation.',
  commonSymptoms: ['Protective device operation', 'Partial loss of power', 'Intermittent or load-related behaviour'],
  likelyCauses: ['Loose terminations', 'Accessory or cable damage', 'Appliance defects', 'Circuit design or installation faults'],
  safeChecks: ['Identify exactly what has tripped', 'Unplug portable appliances', 'Look for visible damage, heat, smell, or cracking'],
  escalationGuidance:
    'If signs of heat, burning, repeated tripping, exposed damage, or uncertainty are present, stop and contact a qualified electrician.',
  electricianTestsNext: [
    'Safe isolation and proving dead procedures',
    'Continuity, polarity, and insulation resistance testing',
    'Targeted circuit and accessory inspection at board and terminations',
  ],
  tags,
  educationalExplanation:
    'Protective devices trip for a reason. The diagnostic logic separates appliance issues, circuit faults, and dangerous overheating indicators.',
});

export const faults: Fault[] = [
  fault('mcb-trips-under-load', 'MCB trips under load', 'high', ['protection devices', 'sockets']),
  fault('rcd-trips-immediately', 'RCD trips immediately', 'high', ['protection devices', 'insulation']),
  fault('rcbo-trips-one-circuit', 'RCBO trips on one circuit', 'high', ['protection devices']),
  fault('partial-socket-failure', 'Partial socket failure', 'high', ['sockets', 'ring final']),
  fault('whole-socket-circuit-dead', 'Whole socket circuit dead', 'high', ['sockets']),
  fault('partial-lighting-failure', 'Partial lighting failure', 'caution', ['lighting']),
  fault('lights-flicker-under-load', 'Lights flicker under load', 'high', ['lighting', 'overheating']),
  fault('hot-socket-or-switch', 'Hot socket or switch', 'urgent', ['overheating', 'sockets']),
  fault('appliance-causes-trip', 'Appliance causes trip', 'high', ['appliance fault', 'protection devices']),
  fault('two-way-switching-miswire', 'Two-way switching miswire', 'caution', ['lighting']),
  fault('low-insulation-resistance', 'Low insulation resistance', 'high', ['insulation']),
  fault('loose-connection-high-resistance-joint', 'Loose connection / high resistance joint', 'urgent', ['overheating']),
  fault('borrowed-neutral', 'Borrowed neutral', 'urgent', ['protection devices', 'lighting']),
  fault('broken-ring-final', 'Broken ring final', 'high', ['ring final', 'sockets']),
  fault('damaged-cable-or-unenclosed-connection', 'Damaged cable or unenclosed connection', 'urgent', ['insulation', 'overheating']),
];

export const learningArticles = [
  { slug: 'why-rcds-trip', title: 'Why RCDs trip', relatedFaultSlugs: ['rcd-trips-immediately', 'appliance-causes-trip'] },
  { slug: 'ring-final-basics', title: 'Ring final basics', relatedFaultSlugs: ['broken-ring-final', 'partial-socket-failure'] },
  { slug: 'overheating-warning-signs', title: 'Overheating warning signs', relatedFaultSlugs: ['hot-socket-or-switch'] },
];

const baseTree = (slug: string, title: string): DecisionTree => ({
  slug,
  title,
  symptomSlug: slug,
  startNodeKey: 'q1',
  defaultFaults: [slug],
  nodes: {},
});

export const trees: DecisionTree[] = [
  {
    ...baseTree('rcd-trips-immediately', 'RCD trips immediately'),
    defaultFaults: ['rcd-trips-immediately', 'appliance-causes-trip', 'low-insulation-resistance'],
    nodes: {
      q1: { key: 'q1', question: 'Does it trip with everything still plugged in?', questionType: 'boolean', explanation: 'Portable appliances are a frequent source of leakage.', options: [{ label: 'Yes', value: 'yes', nextNodeKey: 'q2', scoreAdjustments: { 'appliance-causes-trip': 2 } }, { label: 'No', value: 'no', nextNodeKey: 'q3' }] },
      q2: { key: 'q2', question: 'Does it reset with all portable appliances unplugged?', questionType: 'boolean', explanation: 'If it resets after unplugging, one appliance is suspect.', options: [{ label: 'Yes', value: 'yes', nextNodeKey: 'end', scoreAdjustments: { 'appliance-causes-trip': 4 } }, { label: 'No', value: 'no', nextNodeKey: 'q3', scoreAdjustments: { 'low-insulation-resistance': 2 } }] },
      q3: { key: 'q3', question: 'Is only one circuit involved?', questionType: 'boolean', explanation: 'Single-circuit faults point to local leakage rather than whole-installation issues.', options: [{ label: 'Yes', value: 'yes', nextNodeKey: 'q4', scoreAdjustments: { 'rcbo-trips-one-circuit': 2 } }, { label: 'No', value: 'no', nextNodeKey: 'q4', scoreAdjustments: { 'borrowed-neutral': 2 } }] },
      q4: { key: 'q4', question: 'Has there been damp or moisture recently?', questionType: 'boolean', explanation: 'Moisture can lower insulation resistance and trigger RCDs.', options: [{ label: 'Yes', value: 'yes', nextNodeKey: 'q5', scoreAdjustments: { 'low-insulation-resistance': 3 } }, { label: 'No', value: 'no', nextNodeKey: 'q5' }] },
      q5: { key: 'q5', question: 'Are there visible signs of cable or flex damage?', questionType: 'boolean', explanation: 'Visible damage can indicate immediate shock risk.', options: [{ label: 'Yes', value: 'yes', nextNodeKey: 'end', urgentTrigger: true, scoreAdjustments: { 'damaged-cable-or-unenclosed-connection': 4 } }, { label: 'No', value: 'no', nextNodeKey: 'end' }] },
    },
  },
  {
    ...baseTree('partial-socket-failure', 'Some sockets dead, others live'),
    defaultFaults: ['partial-socket-failure', 'broken-ring-final', 'loose-connection-high-resistance-joint'],
    nodes: {
      q1: { key: 'q1', question: 'Are dead sockets mainly in one area?', questionType: 'boolean', explanation: 'Localised failures often indicate one leg or branch issue.', options: [{ label: 'Yes', value: 'yes', nextNodeKey: 'q2', scoreAdjustments: { 'broken-ring-final': 2 } }, { label: 'No', value: 'no', nextNodeKey: 'q2' }] },
      q2: { key: 'q2', question: 'Did this happen suddenly?', questionType: 'boolean', explanation: 'Sudden change can indicate a failed connection or damaged accessory.', options: [{ label: 'Yes', value: 'yes', nextNodeKey: 'q3', scoreAdjustments: { 'partial-socket-failure': 2 } }, { label: 'No', value: 'no', nextNodeKey: 'q3' }] },
      q3: { key: 'q3', question: 'Is the breaker still on?', questionType: 'boolean', explanation: 'Power loss with breaker on can suggest open circuit or loose termination.', options: [{ label: 'Yes', value: 'yes', nextNodeKey: 'q4', scoreAdjustments: { 'broken-ring-final': 2 } }, { label: 'No', value: 'no', nextNodeKey: 'end', scoreAdjustments: { 'rcbo-trips-one-circuit': 2 } }] },
      q4: { key: 'q4', question: 'Are any sockets warm, cracked, or discoloured?', questionType: 'boolean', explanation: 'Heat damage is a critical warning sign.', options: [{ label: 'Yes', value: 'yes', nextNodeKey: 'q5', urgentTrigger: true, scoreAdjustments: { 'hot-socket-or-switch': 4 } }, { label: 'No', value: 'no', nextNodeKey: 'q5' }] },
      q5: { key: 'q5', question: 'Has recent DIY been done nearby?', questionType: 'boolean', explanation: 'Recent changes can introduce loose terminations or cable damage.', options: [{ label: 'Yes', value: 'yes', nextNodeKey: 'end', scoreAdjustments: { 'damaged-cable-or-unenclosed-connection': 2 } }, { label: 'No', value: 'no', nextNodeKey: 'end' }] },
    },
  },
  {
    ...baseTree('lights-flicker-under-load', 'Lights flicker or dim'),
    defaultFaults: ['lights-flicker-under-load', 'loose-connection-high-resistance-joint', 'partial-lighting-failure'],
    nodes: {
      q1: { key: 'q1', question: 'Is it only one fitting or multiple fittings?', questionType: 'single_choice', explanation: 'Single-point issues differ from wider circuit issues.', options: [{ label: 'One fitting', value: 'one', nextNodeKey: 'q2', scoreAdjustments: { 'partial-lighting-failure': 2 } }, { label: 'Multiple', value: 'multiple', nextNodeKey: 'q2', scoreAdjustments: { 'loose-connection-high-resistance-joint': 2 } }] },
      q2: { key: 'q2', question: 'Does it happen when heavy loads run (kettle/shower)?', questionType: 'boolean', explanation: 'Load-related dimming can indicate high resistance or supply issues.', options: [{ label: 'Yes', value: 'yes', nextNodeKey: 'q3', scoreAdjustments: { 'loose-connection-high-resistance-joint': 3 } }, { label: 'No', value: 'no', nextNodeKey: 'q3' }] },
      q3: { key: 'q3', question: 'Any buzzing, heat, or smell?', questionType: 'boolean', explanation: 'Buzzing/heat/smell can indicate overheating or arcing.', options: [{ label: 'Yes', value: 'yes', nextNodeKey: 'q4', urgentTrigger: true, scoreAdjustments: { 'loose-connection-high-resistance-joint': 4 } }, { label: 'No', value: 'no', nextNodeKey: 'q4' }] },
      q4: { key: 'q4', question: 'Recent lamp replacement or fitting changes?', questionType: 'boolean', explanation: 'Recent changes can narrow likely causes.', options: [{ label: 'Yes', value: 'yes', nextNodeKey: 'q5', scoreAdjustments: { 'partial-lighting-failure': 2 } }, { label: 'No', value: 'no', nextNodeKey: 'q5' }] },
      q5: { key: 'q5', question: 'Is the switch also affected?', questionType: 'boolean', explanation: 'Switch clues help differentiate fitting vs circuit path faults.', options: [{ label: 'Yes', value: 'yes', nextNodeKey: 'end', scoreAdjustments: { 'two-way-switching-miswire': 2 } }, { label: 'No', value: 'no', nextNodeKey: 'end' }] },
    },
  },
  {
    ...baseTree('appliance-causes-trip', 'Appliance causes trip'),
    defaultFaults: ['appliance-causes-trip', 'damaged-cable-or-unenclosed-connection', 'rcd-trips-immediately'],
    nodes: {
      q1: { key: 'q1', question: 'Does it trip immediately or only when switched on?', questionType: 'single_choice', explanation: 'Timing indicates whether plug-in leakage or operation fault is likely.', options: [{ label: 'Immediately', value: 'immediate', nextNodeKey: 'q2', scoreAdjustments: { 'appliance-causes-trip': 3 } }, { label: 'When switched on', value: 'on', nextNodeKey: 'q2', scoreAdjustments: { 'appliance-causes-trip': 2 } }] },
      q2: { key: 'q2', question: 'Does the same happen on another socket?', questionType: 'boolean', explanation: 'Across sockets suggests appliance fault over socket-specific issue.', options: [{ label: 'Yes', value: 'yes', nextNodeKey: 'q3', scoreAdjustments: { 'appliance-causes-trip': 3 } }, { label: 'No', value: 'no', nextNodeKey: 'q3', scoreAdjustments: { 'partial-socket-failure': 2 } }] },
      q3: { key: 'q3', question: 'Does another appliance work in that same socket?', questionType: 'boolean', explanation: 'Comparison avoids invasive tests.', options: [{ label: 'Yes', value: 'yes', nextNodeKey: 'q4', scoreAdjustments: { 'appliance-causes-trip': 2 } }, { label: 'No', value: 'no', nextNodeKey: 'q4', scoreAdjustments: { 'partial-socket-failure': 2 } }] },
      q4: { key: 'q4', question: 'Any visible flex damage?', questionType: 'boolean', explanation: 'Damaged flex can expose live conductors or leakage paths.', options: [{ label: 'Yes', value: 'yes', nextNodeKey: 'q5', urgentTrigger: true, scoreAdjustments: { 'damaged-cable-or-unenclosed-connection': 4 } }, { label: 'No', value: 'no', nextNodeKey: 'q5' }] },
      q5: { key: 'q5', question: 'Any moisture exposure?', questionType: 'boolean', explanation: 'Moisture can trigger insulation leakage in appliances.', options: [{ label: 'Yes', value: 'yes', nextNodeKey: 'end', scoreAdjustments: { 'low-insulation-resistance': 2 } }, { label: 'No', value: 'no', nextNodeKey: 'end' }] },
    },
  },
  {
    ...baseTree('hot-socket-or-switch', 'Socket or switch hot / burn marks'),
    defaultFaults: ['hot-socket-or-switch', 'loose-connection-high-resistance-joint', 'damaged-cable-or-unenclosed-connection'],
    nodes: {
      q1: { key: 'q1', question: 'Is there visible discolouration?', questionType: 'boolean', explanation: 'Discolouration often means long-term heat stress.', options: [{ label: 'Yes', value: 'yes', nextNodeKey: 'q2', urgentTrigger: true, scoreAdjustments: { 'hot-socket-or-switch': 4 } }, { label: 'No', value: 'no', nextNodeKey: 'q2' }] },
      q2: { key: 'q2', question: 'Can you smell burning?', questionType: 'boolean', explanation: 'A burning smell is an urgent fire risk indicator.', options: [{ label: 'Yes', value: 'yes', nextNodeKey: 'q3', urgentTrigger: true, scoreAdjustments: { 'loose-connection-high-resistance-joint': 4 } }, { label: 'No', value: 'no', nextNodeKey: 'q3' }] },
      q3: { key: 'q3', question: 'Does it happen under heavy load only?', questionType: 'boolean', explanation: 'Load-dependence often indicates high resistance joints.', options: [{ label: 'Yes', value: 'yes', nextNodeKey: 'q4', scoreAdjustments: { 'loose-connection-high-resistance-joint': 3 } }, { label: 'No', value: 'no', nextNodeKey: 'q4' }] },
      q4: { key: 'q4', question: 'Is it one accessory or multiple?', questionType: 'single_choice', explanation: 'One accessory suggests local fault; multiple suggests wider circuit issue.', options: [{ label: 'Single accessory', value: 'single', nextNodeKey: 'q5', scoreAdjustments: { 'hot-socket-or-switch': 2 } }, { label: 'Multiple accessories', value: 'multiple', nextNodeKey: 'q5', scoreAdjustments: { 'borrowed-neutral': 2 } }] },
      q5: { key: 'q5', question: 'Is there a loose plug connection?', questionType: 'boolean', explanation: 'Loose contact can cause heating and arcing.', options: [{ label: 'Yes', value: 'yes', nextNodeKey: 'end', urgentTrigger: true, scoreAdjustments: { 'hot-socket-or-switch': 2 } }, { label: 'No', value: 'no', nextNodeKey: 'end' }] },
    },
  },
];

export const fallbackSafeChecks = [
  'Do not remove covers or expose wiring.',
  'Note what still works and what does not.',
  'Unplug portable appliances and monitor if tripping changes.',
];
