import 'dotenv/config';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../lib/generated/prisma/client';
import { FaultSeverity, QuestionType } from '../lib/generated/prisma/enums';
import { faults, learningArticles, symptoms, trees } from '../lib/fault-path/data';

const connectionString = process.env.DATABASE_URL;
if (!connectionString) throw new Error('DATABASE_URL is not set');

const prisma = new PrismaClient({ adapter: new PrismaPg({ connectionString }) });

const severityMap: Record<string, FaultSeverity> = {
  low: FaultSeverity.LOW,
  caution: FaultSeverity.MEDIUM,
  high: FaultSeverity.HIGH,
  urgent: FaultSeverity.URGENT,
};

const questionTypeMap: Record<string, QuestionType> = {
  single_choice: QuestionType.SINGLE_CHOICE,
  multi_choice: QuestionType.MULTI_CHOICE,
  boolean: QuestionType.BOOLEAN,
  info: QuestionType.INFO,
};

async function main() {
  for (const fault of faults) {
    await prisma.fault.upsert({
      where: { slug: fault.slug },
      update: {
        title: fault.title,
        summary: fault.summary,
        description: fault.description,
        severity: severityMap[fault.severity],
        dangerNotes: fault.dangerNotes,
        likelyCauses: fault.likelyCauses,
        safeChecks: fault.safeChecks,
        electricianTestsNext: fault.electricianTestsNext,
        tags: fault.tags,
      },
      create: {
        slug: fault.slug,
        title: fault.title,
        summary: fault.summary,
        description: fault.description,
        severity: severityMap[fault.severity],
        dangerNotes: fault.dangerNotes,
        likelyCauses: fault.likelyCauses,
        safeChecks: fault.safeChecks,
        electricianTestsNext: fault.electricianTestsNext,
        tags: fault.tags,
      },
    });
  }

  for (const symptom of symptoms) {
    await prisma.symptom.upsert({
      where: { slug: symptom.slug },
      update: { title: symptom.title, description: symptom.description },
      create: symptom,
    });
  }

  for (const article of learningArticles) {
    await prisma.learningArticle.upsert({
      where: { slug: article.slug },
      update: { title: article.title, body: article.title, relatedFaultSlugs: article.relatedFaultSlugs },
      create: { slug: article.slug, title: article.title, body: article.title, relatedFaultSlugs: article.relatedFaultSlugs },
    });
  }

  for (const tree of trees) {
    const treeRecord = await prisma.decisionTree.upsert({
      where: { slug: tree.slug },
      update: { title: tree.title, symptomSlug: tree.symptomSlug, startNodeId: tree.startNodeKey },
      create: { slug: tree.slug, title: tree.title, symptomSlug: tree.symptomSlug, startNodeId: tree.startNodeKey },
    });

    for (const node of Object.values(tree.nodes)) {
      const nodeRecord = await prisma.decisionNode.upsert({
        where: { treeId_key: { treeId: treeRecord.id, key: node.key } },
        update: {
          question: node.question,
          explanation: node.explanation,
          questionType: questionTypeMap[node.questionType],
          severity: FaultSeverity.MEDIUM,
          safetyGate: node.safetyGate ?? false,
          stopReason: node.stopReason,
          educationalNote: node.educationalNote,
          recommendedAction: node.recommendedAction,
        },
        create: {
          treeId: treeRecord.id,
          key: node.key,
          question: node.question,
          explanation: node.explanation,
          questionType: questionTypeMap[node.questionType],
          severity: FaultSeverity.MEDIUM,
          safetyGate: node.safetyGate ?? false,
          stopReason: node.stopReason,
          educationalNote: node.educationalNote,
          recommendedAction: node.recommendedAction,
        },
      });

      await prisma.decisionOption.deleteMany({ where: { nodeId: nodeRecord.id } });
      await prisma.decisionOption.createMany({
        data: node.options.map((option) => ({
          nodeId: nodeRecord.id,
          label: option.label,
          value: option.value,
          nextNodeKey: option.nextNodeKey,
          faultWeightAdjustments: option.scoreAdjustments,
        })),
      });
    }
  }

  console.log('Fault Path UK seed complete.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => prisma.$disconnect());
