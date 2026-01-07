import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

function generateRandomName() {
  const firstNames = ['张三', '李四', '王五', '赵六', '钱七', '孙八', '周九', '吴十'];
  const lastName = ['', '', '', '', '', '', '', '', '', ''];
  return firstNames[Math.floor(Math.random() * firstNames.length)] + lastName[Math.floor(Math.random() * lastName.length)];
}

function generateRandomEmail() {
  const domains = ['example.com', 'test.com', 'demo.com', 'sample.com'];
  const username = Math.random().toString(36).substring(2, 10);
  return `${username}@${domains[Math.floor(Math.random() * domains.length)]}`;
}

export async function POST() {
  try {
    const name = generateRandomName();
    const email = generateRandomEmail();

    const user = await prisma.user.create({
      data: {
        name,
        email,
      },
    });

    return NextResponse.json(user, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create user' }, { status: 500 });
  }
}
