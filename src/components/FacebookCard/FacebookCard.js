import React, { useState, useEffect } from "react";
import FollowersCard from "../FollowersCard";
import axios from "axios";
import PropTypes from "prop-types";

const InstagramCard = props => {
  const { username } = props;
  const [followersNumber, setFollowersNumber] = useState(0);
  let url = `https://www.instagram.com/${username}/?__a=1`;
  let followers_response;
  useEffect(() => {
    axios.get(url).then(response => {
      followers_response = response.data.graphql.user.edge_followed_by.count;
      setFollowersNumber(followers_response);
    });
  });
  return <FollowersCard label="Facebook" followers={followersNumber} />;
};

InstagramCard.propTypes = {
  /* Username to be consulted */
  username: PropTypes.string
};

InstagramCard.defaultProps = {
  username: "alexisherlanda"
};

export default InstagramCard;
