import { signIn } from "next-auth/react";
import React from "react";
import { Button } from "@mui/material";

const SignInButton = () => {
  return (
    <form
      action={async () => {
        // "use server";
        await signIn("github", { redirectTo: "/" });
      }}
    >
      <Button sx={{ p: 2 }} variant="contained" type="submit" fullWidth>
        Sign In (github)
      </Button>
    </form>
  );
};

export default SignInButton;
