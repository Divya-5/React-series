import React from "react";
// import { useState } from "react";
// import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

export const Github = () => {
  const data = useLoaderData();
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/Divya-5")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log(data);
  //         setData(data);
  //       });
  //   }, []);
  return (
    <div className="text-center bg-gray-400 text-white p-8 text-3xl">
      Github followers:{data.followers}
      <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/Divya-5");
  return response.json();
};
