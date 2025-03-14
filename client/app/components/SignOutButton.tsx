import { Button } from "@mui/material";
import { signOut } from "next-auth/react";
import React from "react";

const SignOutButton = () => {
  return (
    <form
      action={async () => {
        // "use server";
        await signOut();
      }}
    >
      <Button sx={{ p: 2 }} variant="contained" type="submit" fullWidth>
        Sign Out
      </Button>
    </form>
  );
};

export default SignOutButton;
