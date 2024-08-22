import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'data', 'users.json');

export async function POST(req: NextRequest) {
  const { username, password } = await req.json();

  const users = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

  const user = users.find((user: any) => user.username === username && user.password === password);

  if (user) {
    return NextResponse.json({ message: 'You are logged in' }, { status: 200 });
  } else {
    return NextResponse.json({ message: 'Invalid username or password' }, { status: 400 });
  }
}