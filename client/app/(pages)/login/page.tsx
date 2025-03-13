"use client";

import React, { JSX, useState } from "react";
import FormBox from "@/app/components/FormBox";
import { Button, Link, TextField } from "@mui/material";
import CustomBox from "@/app/components/CustomBox";

interface Input {
  email: string;
  password: string;
}

const Login = (): JSX.Element => {
  const [input, setInput] = useState<Input>({
    email: "",
    password: "",
  });

  const onChange = (e: { target: { value: string; name: string } }) => {
    const { value, name } = e.target;

    setInput({
      ...input,
      [name]: value,
    });
  };

  return (
    <CustomBox>
      <FormBox label="Sign in to your account">
        <TextField
          name="email"
          value={input.email}
          onChange={onChange}
          label="Email"
          placeholder="email@gmail.com"
          type="email"
          required
          // error={isError.email}
          // helperText={isError.email && errorMessage.email}
        />
        <TextField
          name="password"
          value={input.password}
          onChange={onChange}
          label="Password"
          placeholder="password"
          type="passord"
          required
          // error={isError.email}
          // helperText={isError.email && errorMessage.email}
        />
        <Button
          onClick={() => {
            validateFields();
          }}
          variant="contained"
          size="large"
          sx={{ p: 2 }}
        >
          Log In
        </Button>
        <Link variant="button" align="center" href={"/register"}>
          Don&apos;t have an account? Create one
        </Link>
      </FormBox>
    </CustomBox>
  );
};

export default Login;
