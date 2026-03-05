# Seed Database from Static Lesson Data

Generate or run a database seed script derived from the existing static lesson TypeScript files.

## Usage

```
/db-seed [module]
```

**Examples:**
- `/db-seed` — scaffold seeds for all lesson modules
- `/db-seed ww2` — scaffold seed for WW2 lessons only
- `/db-seed math` — scaffold seed for Maths lessons only

## Source data files

The static lesson data lives in `lib/data/`:

| File | Module | Lesson type |
|------|--------|-------------|
| `mathLessons.ts` | Maths | `MathLesson` |
| `ww2Lessons.ts` | WW2 History | `HistoryLesson` |
| `tudorLessons.ts` | Tudor History | `HistoryLesson` |
| `piratesLessons.ts` | Pirates | `HistoryLesson` |
| `revolutionLessons.ts` | American Revolution | `HistoryLesson` |
| `spiritualityLessons.ts` | Spirituality | `HistoryLesson` |
| `englishLessons.ts` | English & Literature | `HistoryLesson` |

## What this does

1. Reads the relevant lesson data file(s) from `lib/data/`
2. Reads `types/index.ts` to understand the lesson interfaces
3. Detects the ORM/DB in use (Prisma, Drizzle, or raw SQL)
4. Generates a seed script at `prisma/seed.ts` (Prisma), `scripts/seed.ts` (Drizzle/raw),
   or `scripts/seed.sql` (raw SQL) that:
   - Imports or inlines the lesson data
   - Upserts each lesson record (idempotent — safe to re-run)
   - Groups lessons by module and topic
   - Preserves all structured fields (objectives, keyDates, vocabularyTerms, etc.)
5. If no DB is detected, outputs the seed script as a dry-run preview and advises on next steps

## Prompt

The user ran `/db-seed $ARGUMENTS`.

Parse `$ARGUMENTS` as an optional `[module]` name. If omitted, process all modules.

1. Read `lib/data/modules.ts` to get the module registry.
2. Read the relevant lesson data file(s).
3. Read `types/index.ts` to understand the data shape.
4. Detect ORM/DB tooling as described above.
5. Generate the seed script(s).
6. Report what was created and how to run the seed (e.g. `npx prisma db seed` or `npx ts-node scripts/seed.ts`).
