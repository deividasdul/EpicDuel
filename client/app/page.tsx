import React, { JSX } from "react";
import { Stack } from "@mui/material";
import CustomButton from "./components/CustomButton";
import CustomBox from "./components/CustomBox";

const Home = (): JSX.Element => {
  return (
    <CustomBox>
      <Stack gap={2} p={2} m={2}>
        <CustomButton label={"Login"} variant="outlined" href="/login" />
        <CustomButton label={"Register"} variant={undefined} href="/register" />
      </Stack>
    </CustomBox>
  );
};

export default Home;
