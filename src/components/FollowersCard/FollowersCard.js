import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FacebookIcon from "@material-ui/icons/Facebook";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";

const FollowersCard = props => {
  const useStyles = makeStyles(theme => ({
    root: {
      padding: theme.spacing(3, 2)
    }
  }));
  const classes = useStyles();
  const { label, icon, followers } = props;
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
        {icon}
        <Typography variant="h5" component="h3">
          {label}
        </Typography>
        <Typography variant="h2" component="h3">
          {followers}
        </Typography>
      </Paper>
    </div>
  );
};

FollowersCard.propTypes = {
  /* Name of the social network */
  label: PropTypes.string,

  /* Icon of the social network */
  icon: PropTypes.node,

  /* Number of followers  of the social network */
  followers: PropTypes.number
};

FollowersCard.defaultProps = {
  label: "SocialNetwork",
  icon: <FacebookIcon />,
  followers: 0
};

export default FollowersCard;
