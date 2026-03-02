/**
 * POST /api/simplify
 * ──────────────────
 * Accepts a section of educational text and returns a simplified version
 * targeted at a reading age of 11–12 years.
 *
 * Why an API route rather than a Server Action?
 * ─────────────────────────────────────────────
 * 1. The client needs to cache the response in local React state — a Server
 *    Action's return value goes through a different serialisation path that
 *    makes per-section caching awkward.
 * 2. A plain `fetch('/api/simplify', ...)` keeps the component agnostic of
 *    Next.js-specific primitives and is trivially testable/mockable.
 * 3. API routes are the natural extension point for streaming (just swap the
 *    response for a `ReadableStream`) or for adding auth headers later.
 *
 * Environment variable required:
 *   ANTHROPIC_API_KEY — set in .env.local or your deployment secrets.
 */

import { NextRequest, NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';

// Initialise the client once at module level so it is reused across requests.
const anthropic = new Anthropic();

const MAX_TEXT_LENGTH = 4_000; // characters — generous but prevents abuse

export async function POST(request: NextRequest) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  const { text } = body as Record<string, unknown>;

  if (typeof text !== 'string' || text.trim().length === 0) {
    return NextResponse.json({ error: 'Missing or empty "text" field' }, { status: 400 });
  }

  if (text.length > MAX_TEXT_LENGTH) {
    return NextResponse.json(
      { error: `Text exceeds maximum length of ${MAX_TEXT_LENGTH} characters` },
      { status: 400 },
    );
  }

  try {
    const message = await anthropic.messages.create({
      // Haiku: fastest, cheapest, sufficient for summarisation tasks.
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 1024,
      messages: [
        {
          role: 'user',
          content: [
            {
              type: 'text',
              text: `You are helping a 14-year-old student understand educational content.

Rewrite the following text so it is easy to understand for someone aged 11–12.
Use shorter sentences and simpler vocabulary. Keep all the key facts and ideas.
Do not add bullet points, headers, or extra formatting — just plain paragraphs.
Do not add introductory phrases like "Here is a simplified version:".

Text to simplify:
${text}`,
            },
          ],
        },
      ],
    });

    const simplified = message.content[0].type === 'text' ? message.content[0].text : '';

    return NextResponse.json({ simplified });
  } catch (err) {
    // Log server-side so developers can diagnose; never expose raw errors to
    // the client to avoid leaking API keys or internal details.
    console.error('[/api/simplify] Anthropic API error:', err);
    return NextResponse.json(
      { error: 'Failed to simplify text. Please try again.' },
      { status: 500 },
    );
  }
}
