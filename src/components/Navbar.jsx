import { AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";

const Navbar = () => {
  return (
    <AppBar>
      <Toolbar>
        <Typography variant="h6">PicPost</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
