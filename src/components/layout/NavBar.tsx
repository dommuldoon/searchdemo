import React from "react";
import { Toolbar, Typography, Button, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const NavBar = () => {
  return (
    <Toolbar>
      <Button size="small">Subscribe</Button>
      <Typography
        component="h2"
        variant="h5"
        color="inherit"
        align="center"
        noWrap
      >
        Blog
      </Typography>
      <IconButton>
        <SearchIcon />
      </IconButton>
      <Button variant="outlined" size="small">
        Sign up
      </Button>
    </Toolbar>
  );
};

export default NavBar;
