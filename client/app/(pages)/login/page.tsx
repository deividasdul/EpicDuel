"use client";

import React, { JSX, Suspense, useState } from "react";
import { Button, Link, TextField } from "@mui/material";
import CustomBox from "@/app/components/CustomBox";
import {
  clearError,
  isEmpty,
  isShort,
  isValidEmail,
  setError,
} from "@/app/utils/validation";
import FormBox from "@/app/components/FormBox";
import { useSession } from "next-auth/react";
import SignInButton from "@/app/components/SignInButton";

interface Input {
  email: string;
  password: string;
}

const Login = (): JSX.Element => {
  const { data: session, status } = useSession();

  console.log("Session Data:", session);
  console.log("Auth Status:", status);

  const [input, setInput] = useState<Input>({
    email: "",
    password: "",
  });

  const [isError, setIsError] = useState<Record<string, boolean>>({
    email: false,
    password: false,
  });
  const [errorMsg, setErrorMsg] = useState<Record<string, string>>({
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

  const validateFields = () => {
    let isInvalidEmail = true;
    let isInvalidPassword = true;

    const { email, password } = input;

    if (isEmpty(email)) {
      setError(
        "email",
        "The email field should not be empty",
        setIsError,
        setErrorMsg
      );
    } else if (!isValidEmail(email)) {
      setError("email", "Email field in wrong format", setIsError, setErrorMsg);
    } else {
      clearError("email", setIsError);
      isInvalidEmail = false;
    }

    if (isEmpty(password)) {
      setError(
        "password",
        "The password field should not be empty",
        setIsError,
        setErrorMsg
      );
    } else if (isShort(password)) {
      setError(
        "password",
        "The password field must be more than 8 characters",
        setIsError,
        setErrorMsg
      );
    } else {
      clearError("password", setIsError);
      isInvalidPassword = false;
    }

    if (!isInvalidEmail && !isInvalidPassword) {
      console.log("Worked");
    }
  };

  return (
    <CustomBox>
      <Suspense>
        <FormBox label="Sign in to your account">
          <TextField
            name="email"
            value={input.email}
            onChange={onChange}
            label="Email"
            placeholder="email@gmail.com"
            type="email"
            required
            error={isError.email}
            helperText={isError.email && errorMsg.email}
          />
          <TextField
            name="password"
            value={input.password}
            onChange={onChange}
            label="Password"
            placeholder="password"
            type="password"
            required
            error={isError.password}
            helperText={isError.password && errorMsg.password}
          />
          <Button
            onClick={(e) => {
              e.preventDefault();
              validateFields();
            }}
            variant="contained"
            size="large"
            sx={{ p: 2 }}
            color="error"
          >
            Log In (regular)
          </Button>
          <SignInButton />

          <Link variant="button" align="center" href={"/register"}>
            Don&apos;t have an account? Create one
          </Link>
        </FormBox>
      </Suspense>
    </CustomBox>
  );
};

export default Login;
