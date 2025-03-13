import { Paper, Stack, Typography } from "@mui/material";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  label: string;
}

const FormBox = ({ children, label }: Props) => {
  return (
    <Paper elevation={12} sx={{ p: 5 }}>
      <form>
        <Typography color="primary" align="center" variant="h3" gutterBottom>
          {label}
        </Typography>
        <Stack gap={2} p={2} m={2}>
          {children}
        </Stack>
      </form>
    </Paper>
  );
};

export default FormBox;
