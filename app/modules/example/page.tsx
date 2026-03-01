import type { Metadata } from 'next';
import ExampleModuleInteractive from '@/components/modules/ExampleModuleInteractive';

export const metadata: Metadata = {
  title: 'WW2 Causes — Example | Cronx Academy',
  description:
    'A demonstration of SectionLearningTools: Read Aloud, Simplify, and listening-progress tracking.',
};

/**
 * Thin page wrapper — all logic lives in ExampleModuleInteractive.
 * Route: /modules/example
 */
export default function ExampleModulePage() {
  return <ExampleModuleInteractive />;
}
