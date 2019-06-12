import React from "react";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
// import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing.unit * 8,
    padding: `${theme.spacing.unit * 6}px 0`,
    "& a": {
      textDecoration: "none",
      color: "inherit"
    },
    "& a:hover": {
      color: "#6f2c2cd9"
    }
  },
  divider: {
    width: "30%",
    borderTop: "5px solid grey",
    marginTop: "20px",
    marginBottom: "20px"
  }
});

const Footer = props => {
  const { classes } = props;
  return (
    <footer className={classes.footer}>
      <hr className={classes.divider} />
      <Typography
        variant="subtitle1"
        align="center"
        color="textSecondary"
        component="p"
      >
        Dom Muldoon |{" "}
        <a href="mailto:dommuldoon@gmail.com">dommuldoon@gmail.com</a> |{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/dommuldoon/"
        >
          linkedin
        </a>
      </Typography>
    </footer>
    // <div>
    //   <AppBar position="static" color="primary">
    //     <Toolbar variant="dense">
    //       <Container>
    //         <Typography variant="title" color="inherit">
    //           Copyright © Dom Muldoon | dommuldoon@gmail.com | linkedin | github
    //         </Typography>
    //       </Container>
    //     </Toolbar>
    //   </AppBar>
    // </div>
  );
};

export default withStyles(styles)(Footer);
