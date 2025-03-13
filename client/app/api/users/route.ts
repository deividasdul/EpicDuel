import pool from "@/app/db";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

interface Input {
  email: string;
  password: string;
}

export async function GET() {
  try {
    const res = await pool.query("SELECT * FROM users");
    const users = res.rows;
    return NextResponse.json(users);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: `${error}` });
  }
}

export async function POST(req: Request) {
  const { email, password }: Input = await req.json();

  try {
    const res = await pool.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);
    const users = res.rows[0];

    if (users) {
      return NextResponse.json({ message: "Email already taken" });
    }

    bcrypt.hash(password, 10, async (err, hash) => {
      await pool.query("INSERT INTO users (email, password) VALUES ($1, $2)", [
        email,
        hash,
      ]);
    });
    return NextResponse.json({ message: "Successful registration" });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: `${error}` });
  }
}
