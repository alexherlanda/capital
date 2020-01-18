import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2)
  }
}));

export default function SvgIconsColor() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper
        className={classes.root}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <InstagramIcon />
        <Typography variant="h5" component="h3">
          {" "}
          Instagram{" "}
        </Typography>
        <Typography variant="h2" component="h3">
          {" "}
          998{" "}
        </Typography>
      </Paper>
      <br />
      <Paper
        className={classes.root}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <TwitterIcon />
        <Typography variant="h5" component="h3">
          {" "}
          Twitter{" "}
        </Typography>
        <Typography variant="h2" component="h3">
          {" "}
          23{" "}
        </Typography>
      </Paper>
      <br />
      <Paper
        className={classes.root}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <FacebookIcon />
        <Typography variant="h5" component="h3">
          {" "}
          Facebook{" "}
        </Typography>
        <Typography variant="h2" component="h3">
          {" "}
          200k{" "}
        </Typography>
      </Paper>
      <br />
    </div>
  );
}
