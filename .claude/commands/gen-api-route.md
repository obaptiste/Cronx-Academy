# Generate Next.js API Route

Scaffold a typed Next.js App Router API route handler for the Cronx Academy backend.

## Usage

```
/gen-api-route <route-name> [method]
```

**Examples:**
- `/gen-api-route progress` — creates GET+POST handler for progress tracking
- `/gen-api-route lessons GET` — creates read-only lessons endpoint

## What this does

1. Reads any existing route at `app/api/<route-name>/route.ts` if it exists
2. Creates or extends `app/api/<route-name>/route.ts` with:
   - Zod schema validation for request bodies (POST/PUT/PATCH)
   - Typed `NextRequest` / `NextResponse` signatures
   - Standard error response shape `{ error: string, details?: unknown }`
   - HTTP 400 for validation errors, 500 for unexpected errors
   - JSDoc comment describing the endpoint
3. Creates or updates `__tests__/api/<route-name>.test.ts` with basic happy-path and error-path tests using Vitest

## Conventions

- Route handlers live in `app/api/<route-name>/route.ts`
- Zod schemas are defined inline in the route file (no separate schema file unless shared)
- All responses use `NextResponse.json()`
- Follow existing patterns in the codebase — check `app/api/` for examples first

## Prompt

The user ran `/gen-api-route $ARGUMENTS`.

Parse `$ARGUMENTS` as `<route-name> [method]`. If method is omitted, scaffold both GET and POST.

1. Check whether `app/api/<route-name>/route.ts` already exists. If it does, read it first.
2. Scaffold the route file following the conventions above.
3. Scaffold the test file.
4. Report what was created/modified and remind the user to run `npm test && npm run build` to verify.
