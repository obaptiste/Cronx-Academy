# Audit Authentication & Authorization Code

Review auth-related code in the Cronx Academy codebase for security issues before pushing.

## Usage

```
/audit-auth [path]
```

**Examples:**
- `/audit-auth` — audit all auth-related code in the project
- `/audit-auth app/api/` — audit only API routes
- `/audit-auth middleware.ts` — audit the Next.js middleware file

## What this does

1. Locates auth-related files by scanning for:
   - `middleware.ts` / `middleware.js` at the project root
   - Files importing `next-auth`, `@auth/`, `jose`, `jsonwebtoken`, `bcrypt`, `argon2`
   - API routes that read cookies, headers, or session data
   - Files referencing `process.env` for secrets
   - Any file matching the optional `[path]` argument

2. Reviews each file for the following issues:

   **Authentication**
   - [ ] Passwords hashed with a strong algorithm (bcrypt/argon2 — not MD5/SHA1)
   - [ ] JWT secrets are sufficiently long and stored in env vars (not hardcoded)
   - [ ] Session tokens use `httpOnly`, `secure`, `sameSite` cookie flags
   - [ ] Token expiry is set to a reasonable duration
   - [ ] Refresh token rotation is implemented if using long-lived sessions

   **Authorization**
   - [ ] Every protected API route verifies the session/token before acting
   - [ ] User input is never trusted to determine role or permissions
   - [ ] Parent (Sheena) and learner (Thalia) roles are enforced server-side
   - [ ] No sensitive data returned to unauthenticated requests

   **Input validation**
   - [ ] All request bodies are validated with Zod (or equivalent) before use
   - [ ] Path parameters and query strings are validated and sanitized
   - [ ] No SQL/NoSQL injection vectors (parameterized queries only)

   **Secrets & environment**
   - [ ] No secrets committed to source (check for `.env` in git history)
   - [ ] `.env.local` is in `.gitignore`
   - [ ] `NEXTAUTH_SECRET` / JWT secret meets minimum entropy requirements

3. Produces a structured report:
   - **PASS** items (green checkmarks)
   - **WARN** items (advisory, not blocking)
   - **FAIL** items (must fix before pushing)
   - Suggested code fixes for each FAIL/WARN

4. If no auth code is found, outputs a checklist of auth decisions to make before
   implementing authentication (e.g. session strategy, provider choice, role model).

## Cronx Academy context

This is a parent-child homeschool platform. The two roles are:
- **Parent / Teacher** (Sheena): full access, can mark lessons complete, view all progress
- **Learner** (Thalia, age 14): lesson access only, cannot modify curriculum data

Keep this role model in mind when reviewing authorization logic.

## Prompt

The user ran `/audit-auth $ARGUMENTS`.

Parse `$ARGUMENTS` as an optional `[path]`. Default to the full project if omitted.

1. Locate auth-related files as described above.
2. Read each file carefully.
3. Produce the structured audit report.
4. If issues are found, offer to fix them immediately.
