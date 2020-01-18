import React, { useState } from "react";
import InstagramCard from "./InstagramCard";
import { Input } from "@material-ui/core";

export default {
  title: "InstagramCard"
};

export const defaultCard = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [userName, setUsername] = useState("ay_is_god");
  const handleOnChange = event => {
    console.log(event.target.value);
    setUsername(event.target.value);
  };
  return (
    <>
      <Input placeholder="username" onChange={event => handleOnChange(event)} />
      <InstagramCard username={userName} />
    </>
  );
};
