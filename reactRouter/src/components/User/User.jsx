import React from "react";
import { useParams } from "react-router-dom";

export const User = () => {
  const { userid } = useParams();
  return (
    <div className="bg-gray-800 text-white p-8 text-2xl">User:{userid}</div>
  );
};

//to take data dynamically from url
