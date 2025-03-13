import { Button, ButtonProps } from "@mui/material";
import React, { JSX } from "react";

const CustomButton = ({
  label,
  variant = "contained",
  href,
}: {
  label: string;
  variant: ButtonProps["variant"];
  href: string;
}): JSX.Element => {
  return (
    <Button sx={{ p: 2 }} variant={variant} href={href}>
      {label}
    </Button>
  );
};

export default CustomButton;
