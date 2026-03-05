# Generate Database Migration

Scaffold a database migration file for the Cronx Academy backend.

## Usage

```
/gen-migration <migration-name>
```

**Examples:**
- `/gen-migration create-users-table`
- `/gen-migration add-progress-tracking`
- `/gen-migration seed-lessons`

## What this does

1. Detects the ORM/migration tool in use:
   - **Prisma**: checks for `prisma/schema.prisma` → runs `npx prisma migrate dev --name <migration-name> --create-only`
   - **Drizzle**: checks for `drizzle.config.ts` → runs `npx drizzle-kit generate`
   - **Raw SQL**: creates `migrations/<timestamp>_<migration-name>.sql` with an up/down template
   - **None detected**: scaffolds a raw SQL file and advises on ORM options suited to Next.js + Vercel

2. For Prisma/Drizzle, after generating, opens the migration file and annotates it with comments
   explaining what each section does — useful for learning.

3. Reminds the user to run `npm run build` after schema changes to catch type errors.

## Cronx Academy context

The project currently has **no database** — all data is static TypeScript in `lib/data/`.
If no migration tooling is detected, this skill will:

1. Recommend a stack (Prisma + PostgreSQL via Vercel Postgres, or SQLite for local-only use)
2. Scaffold the migration as a raw SQL file in `migrations/`
3. Output a checklist of setup steps to adopt the chosen ORM

## Prompt

The user ran `/gen-migration $ARGUMENTS`.

Parse `$ARGUMENTS` as `<migration-name>`.

1. Check for `prisma/schema.prisma`, `drizzle.config.ts`, or a `migrations/` directory.
2. Follow the detection logic above.
3. Report the file(s) created and any next steps required.
