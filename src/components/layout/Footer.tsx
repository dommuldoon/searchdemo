import { Theme, withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import * as React from "react";

const styles = (theme: Theme) => ({
  divider: {
    borderTop: "5px solid grey",
    marginBottom: "20px",
    marginTop: "20px",
    width: "30%",
  },
  footer: {
    "& a": {
      color: "inherit",
      textDecoration: "none",
    },
    "& a:hover": {
      color: "#6f2c2cd9",
    },
    "backgroundColor": theme.palette.background.paper,
    "marginTop": 8 * 8,
    "padding": `${8 * 6}px 0`,
  },
});

export interface IFooterProps {
  classes: {
    footer: string;
    divider: string;
  };
}

const Footer: React.FC<IFooterProps> = (props) => {
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
  );
};

export default withStyles(styles)(Footer);
