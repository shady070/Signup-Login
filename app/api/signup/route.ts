import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'data', 'users.json');

export async function POST(req: NextRequest) {
  const { username, password } = await req.json();

  const users = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

  const userExists = users.some((user: any) => user.username === username);

  if (userExists) {
    return NextResponse.json({ message: 'User already exists' }, { status: 400 });
  } else {
    users.push({ username, password });
    fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
    return NextResponse.json({ message: 'Account successfully created' }, { status: 201 });
  }
}
