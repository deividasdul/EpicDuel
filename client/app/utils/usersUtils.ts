export async function createAccount(input: {
  email: string;
  password: string;
}): Promise<unknown> {
  try {
    const res = await fetch("http://localhost:3000/api/users", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(input),
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
}

export async function login() {
  console.log("hello world");
}
