import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import * as React from "react";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  navWrapper: {
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
    "& a": {
      color: "inherit",
      textDecoration: "none",
    },
    "& a:visited": {
      color: "inherit",
    },
  },
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  toolbarMain: {
    borderBottom: `1px solid ${theme.palette.grey[300]}`,
  },

}));

const Header: React.FC<{}> = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* <AppBar position="static"> */}
      <Toolbar className={classes.toolbarMain}>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="Menu"
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          TwitHub
        </Typography>
      </Toolbar>
      {/* </AppBar> */}
    </div>
  );
};

export default Header;
