/**
 * lib/prisma.ts
 *
 * Shared Prisma client singleton for the Next.js app.
 * Instantiated once and re-used across hot reloads in development.
 *
 * Usage:
 *   import { prisma } from '@/lib/prisma'
 *   const users = await prisma.user.findMany()
 */

import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from './generated/prisma/client';

function createPrismaClient() {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    throw new Error('DATABASE_URL environment variable is not set');
  }
  const adapter = new PrismaPg({ connectionString });
  return new PrismaClient({ adapter });
}

// In development, attach the client to the global object so it survives
// Next.js hot-module replacement. In production, always create a fresh instance.
const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };

export const prisma = globalForPrisma.prisma ?? createPrismaClient();

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}

// Re-export the generated types for convenience
export type { PrismaClient } from './generated/prisma/client';
