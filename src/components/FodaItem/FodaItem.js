import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";

const FodaItem = props => {
  const useStyles = makeStyles(theme => ({
    root: {
      padding: theme.spacing(3, 2)
    }
  }));
  const classes = useStyles();
  const { type, description } = props;
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
        <Typography variant="h5" component="h3">
          {type}
        </Typography>
        <hr />
        <Typography variant="body"> {description} </Typography>
      </Paper>
    </div>
  );
};

FodaItem.propTypes = {
  /* Name of the social network */
  type: PropTypes.string,

  /* Icon of the social network */
  description: PropTypes.string
};

FodaItem.defaultProps = {
  type: "Fortalezas",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam."
};

export default FodaItem;
