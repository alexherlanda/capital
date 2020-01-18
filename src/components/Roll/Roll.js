import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import LocationCityIcon from "@material-ui/icons/LocationCity";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";

const Roll = props => {
  const useStyles = makeStyles(theme => ({
    root: {
      padding: theme.spacing(3, 2)
    }
  }));
  const classes = useStyles();
  const { roll } = props;
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
        <LocationCityIcon />
        <Typography variant="h5" component="h3">
          Padrón
        </Typography>
        <Typography variant="h2" component="h3">
          {roll}
        </Typography>
      </Paper>
    </div>
  );
};

Roll.propTypes = {
  /* Correspondig roll*/
  roll: PropTypes.number
};

Roll.defaultProps = {
  roll: 0
};

export default Roll;
