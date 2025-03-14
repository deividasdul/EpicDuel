"use client";

import React, { JSX } from "react";
import { Stack } from "@mui/material";
import CustomButton from "./components/CustomButton";
import CustomBox from "./components/CustomBox";
import SignOutButton from "./components/SignOutButton";
import { useSession } from "next-auth/react";

const Home = (): JSX.Element => {
  const { data: session } = useSession();

  if (!session) {
    return (
      <CustomBox>
        <Stack gap={2} p={2} m={2}>
          <CustomButton label="Login" variant="outlined" href="/login" />
          <CustomButton label="Register" href="/register" variant={undefined} />
        </Stack>
      </CustomBox>
    );
  }

  return (
    <CustomBox>
      <Stack gap={2} p={2} m={2}>
        <CustomButton
          label="Character menu"
          variant="outlined"
          href="/dashboard"
        />
        <SignOutButton />
      </Stack>
    </CustomBox>
  );
};

export default Home;
