import { Box, Container } from "@mui/material";
import React, { JSX, ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

const CustomBox = ({ children }: Props): JSX.Element => {
  return (
    <Box
      minHeight={"100vh"}
      maxHeight={"100vh"}
      bgcolor={"black"}
      alignContent={"center"}
    >
      <Container>{children}</Container>
    </Box>
  );
};

export default CustomBox;
