"use client";

import CustomBox from "@/app/components/CustomBox";
import { createAccount } from "@/app/utils/usersUtils";
import { Button, Stack, TextField, Link } from "@mui/material";
import React, { useState } from "react";
import FormBox from "@/app/components/FormBox";
import {
  isEmpty,
  isMatching,
  isShort,
  isValidEmail,
} from "@/app/utils/validation";
import { redirect } from "next/navigation";

interface Input {
  email: string;
  password: string;
  confirmPassword: string;
}

const Register = () => {
  const [input, setInput] = useState<Input>({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [isError, setIsError] = useState({
    email: false,
    password: false,
    confirmPassword: false,
  });

  const [errorMessage, setErrorMessage] = useState<Input>({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const onChange = (e: { target: { value: string; name: string } }) => {
    const { value, name } = e.target;

    setInput({
      ...input,
      [name]: value,
    });
  };

  const setError = (fieldType: string, errorMessage: string) => {
    setIsError((prevState) => ({
      ...prevState,
      [fieldType]: true,
    }));
    setErrorMessage((prevState) => ({
      ...prevState,
      [fieldType]: errorMessage,
    }));
  };

  const clearError = (fieldType: string) => {
    setIsError((prevState) => ({
      ...prevState,
      [fieldType]: false,
    }));
  };

  const validateFields = async () => {
    let isInvalid = false;
    const { email, password, confirmPassword } = input;

    // Email validation
    if (isEmpty(email)) {
      setError("email", "The email field should not be empty");
      isInvalid = true;
    } else if (!isValidEmail(email)) {
      setError("email", "Email field in wrong format");
      isInvalid = true;
    } else {
      clearError("email");
      isInvalid = false;
    }

    // Password validation
    if (isEmpty(password)) {
      setError("password", "The password field should not be empty");
      isInvalid = true;
    } else if (isShort(password)) {
      setError("password", "The password field must be more than 8 characters");
      isInvalid = true;
    } else if (!isMatching(password, confirmPassword)) {
      setError("password", "The password fields should match");
      setError("confirmPassword", "The password fields should match");
      isInvalid = true;
    } else {
      clearError("password");
      isInvalid = false;
    }

    // Confirm password validation
    if (isEmpty(confirmPassword)) {
      setError(
        "confirmPassword",
        "The confirm password field should not be empty"
      );
      isInvalid = true;
    } else if (isShort(confirmPassword)) {
      setError(
        "confirmPassword",
        "The confirm password field must be more than 8 characters"
      );
    } else if (!isMatching(password, confirmPassword)) {
      setError("password", "The password fields should match");
      setError("confirmPassword", "The password fields should match");
      isInvalid = true;
    } else {
      clearError("confirmPassword");
      isInvalid = false;
    }

    if (!isInvalid) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const res: any = await createAccount(input);

      if (res?.message === "Email already taken")
        setError("email", "Email already taken");
      else {
        redirect("/login");
      }
    }
  };

  return (
    <CustomBox>
      <FormBox label={"Register a New Account"}>
        <TextField
          name="email"
          value={input.email}
          onChange={onChange}
          label="Email"
          placeholder="email@gmail.com"
          type="email"
          required
          error={isError.email}
          helperText={isError.email && errorMessage.email}
        />
        <Stack gap={2} direction={"row"}>
          <TextField
            name="password"
            value={input.password}
            onChange={onChange}
            label="Password"
            placeholder="password"
            type="password"
            fullWidth
            required
            error={isError.password}
            helperText={isError.password && errorMessage.password}
          />
          <TextField
            name="confirmPassword"
            value={input.confirmPassword}
            onChange={onChange}
            label="Confirm Password"
            placeholder="Confirm Password"
            type="password"
            fullWidth
            required
            error={isError.confirmPassword}
            helperText={isError.confirmPassword && errorMessage.confirmPassword}
          />
        </Stack>
        <Button
          onClick={() => {
            validateFields();
          }}
          variant="contained"
          size="large"
          sx={{ p: 2 }}
        >
          Create a New Account
        </Button>
        <Link variant="button" align="center" href={"/login"}>
          Already have an account? Sign in
        </Link>
      </FormBox>
    </CustomBox>
  );
};

export default Register;
