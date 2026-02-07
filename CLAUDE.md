# CLAUDE.md - Cronx Academy

## Project Overview

Cronx Academy is an interactive homeschool learning platform built for a parent-child
educational setup (Sheena teaching Thalia, Age 14, Croydon, UK). It provides structured
curriculum modules across history, mathematics, cultural studies, and wellbeing.

## Tech Stack

- **Framework**: Next.js 16.1.1 with App Router
- **Language**: TypeScript (strict mode)
- **UI**: React 19.2.3 + Tailwind CSS 4
- **Build**: npm, PostCSS
- **Linting**: ESLint 9 (flat config) with `next/core-web-vitals`, `next/typescript`, and `eslint-config-prettier`
- **Formatting**: Prettier 3 (config in `.prettierrc`)
- **Testing**: Vitest 4 + React Testing Library + jsdom
- **Database**: None - all data is static TypeScript files, progress stored in localStorage
- **CI/CD**: GitHub Actions (`.github/workflows/ci.yml`) - runs format check, lint, test, and build on every PR
- **Deployment**: Vercel-ready

## Commands

```bash
npm run dev       # Start dev server on port 3000
npm run build     # Production build (catches type errors)
npm run start     # Start production server
npm run lint      # Run ESLint checks
npm test          # Run Vitest test suite
npm run test:watch # Run tests in watch mode
npm run format    # Auto-format all files with Prettier
npm run format:check # Check formatting (used in CI)
```

**Always run `npm test && npm run build` before pushing** to catch regressions and type errors.

## Architecture

### Directory Structure

```
app/                    # Next.js App Router pages
  modules/              # One page.tsx per learning module
  layout.tsx            # Root layout with metadata
  page.tsx              # Home dashboard (~300 lines)
  globals.css           # Theme colors, gradients, module color classes

components/
  ui/ModuleCard.tsx     # Reusable card component
  modules/              # Interactive lesson viewer components (one per module)

lib/data/               # Static lesson content (TypeScript)
  modules.ts            # Module registry (id, title, status, href)
  mathLessons.ts        # 15 maths lessons across 4 topics
  ww2Lessons.ts         # 14 WW2 lessons across 6 topics
  tudorLessons.ts       # Tudor/Caribbean colonization lessons
  piratesLessons.ts     # Pirates of the Caribbean lessons
  revolutionLessons.ts  # American Revolution lessons
  spiritualityLessons.ts # African & Caribbean spirituality lessons

types/index.ts          # All TypeScript interfaces (single file)

__tests__/              # Vitest test suite
  data/                 # Data integrity tests (all lesson files)
  components/           # Component rendering & interaction tests

old-html/               # Original standalone HTML files (archived, do not modify)

.github/workflows/
  ci.yml                # GitHub Actions CI pipeline
```

### Key Patterns

- **All interactive components use `'use client'`** - they depend on useState, useEffect, localStorage
- **Lesson data follows a consistent interface**: title, era, objectives, keyDates, introduction,
  mainContent, primarySources, discussionQuestions, activities, keyFigures, vocabularyTerms, furtherReading
- **MathLesson has a different shape** than history lessons: warmUp, mainActivities, practice, extension, homework
- **Progress tracking** uses localStorage with JSON arrays of completed lesson titles
  (keys: `completedTopics`, `completedWW2Lessons`, etc.)
- **Hydration safety**: localStorage reads use lazy state initializers with `typeof window` guards.
  Date formatting happens in `useEffect` to avoid SSR mismatches. Components show a loading state
  until client-side initialization is complete.
- **Module registry** in `lib/data/modules.ts` controls what appears on the dashboard.
  Status can be `'ready'` or `'coming-soon'`.
- **Path alias**: `@/*` maps to the project root (configured in tsconfig.json)

### Component Pattern for New Modules

Each learning module consists of three parts:

1. **Page route**: `app/modules/<name>/page.tsx` - imports and renders the interactive component
2. **Interactive component**: `components/modules/<Name>Interactive.tsx` - lesson browser UI with
   topic filtering, lesson selection, progress tracking, and completion marking
3. **Data file**: `lib/data/<name>Lessons.ts` - exports typed lesson data organized by topic categories

History module components (WW2, Tudor, Pirates, Revolution, Spirituality) share a nearly
identical component structure. When creating new history modules, use any existing one as a template.

### Styling

- Global gradient background: `linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)`
- Module-specific color classes defined in `globals.css` (e.g., `.module-card.history`, `.module-card.maths`)
- Tailwind CSS utilities for layout, spacing, shadows, transitions
- Responsive design: mobile-first with tablet and desktop breakpoints

## Content Guidelines

This is an educational platform for a 14-year-old learner. All content should be:

- Age-appropriate and engaging
- Culturally sensitive (strong Caribbean and African heritage focus)
- Aligned with UK Key Stage 3/4 curriculum standards
- Supportive of the Whisper Garden module's purpose (selective mutism therapy - gentle, no-pressure)

## Known Issues & Incomplete Work

- ~~No test suite~~ - Vitest is now configured with 761 tests (data integrity + component tests)
- ~~No CI/CD~~ - GitHub Actions pipeline now runs format check, lint, test, and build on PRs
- ~~No Prettier~~ - Prettier 3 is now configured with ESLint integration
- **Wellbeing module** (`/modules/wellbeing`) - still links to old HTML version, not fully migrated
- **Orishas module** (`/modules/orishas`) - may still reference old HTML
- **English & Literature module** - marked as `coming-soon`, not implemented
- **localStorage keys are inconsistent** across modules (e.g., `completedTopics` vs `completedWW2Lessons`)
- **History lesson type interfaces are duplicated** - TudorLesson, PiratesLesson, RevolutionLesson,
  SpiritualityLesson all share the exact same shape and could be unified

## Development Notes

- The project was migrated from standalone HTML files to Next.js. Original files are in `old-html/`.
- Node.js 20+ is required.
- There are no environment variables or secrets needed.
- No external APIs or databases - everything is self-contained.
- Large image assets exist in `assets/` - be mindful of bundle size.
