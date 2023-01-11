import React from "react";
import { useHistory, useLocation } from "react-router-dom";

export const ProfilePage = () => {
  const location = useLocation();
  console.log("this", location);
  return <h1>thisss</h1>;
};
