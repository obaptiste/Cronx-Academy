import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { prisma } from '@/lib/prisma';
import { Role } from '@/lib/generated/prisma/enums';

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  if (!body) {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }

  const { name, email, password, role } = body as Record<string, string>;

  if (!name?.trim() || !email?.trim() || !password || !role) {
    return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
  }

  if (!['PARENT', 'LEARNER'].includes(role)) {
    return NextResponse.json({ error: 'Role must be PARENT or LEARNER' }, { status: 400 });
  }

  if (password.length < 8) {
    return NextResponse.json(
      { error: 'Password must be at least 8 characters' },
      { status: 400 },
    );
  }

  const existing = await prisma.user.findUnique({ where: { email: email.trim().toLowerCase() } });
  if (existing) {
    return NextResponse.json({ error: 'An account with that email already exists' }, { status: 409 });
  }

  const passwordHash = await bcrypt.hash(password, 12);

  const user = await prisma.user.create({
    data: {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      passwordHash,
      role: role as Role,
    },
    select: { id: true, name: true, email: true, role: true },
  });

  return NextResponse.json(user, { status: 201 });
}
