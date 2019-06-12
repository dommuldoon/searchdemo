import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import logo from "../../assets/chill-insurance.png"; // with import
import Container from "@material-ui/core/Container";

const NavBar = () => {
  return (
    <Toolbar className={classes.toolbarMain}>
            <Button size="small">Subscribe</Button>
            <Typography
              component="h2"
              variant="h5"
              color="inherit"
              align="center"
              noWrap
              className={classes.toolbarTitle}
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
