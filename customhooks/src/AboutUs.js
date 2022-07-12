import React, { useEffect, useState } from "react";
import axios from "axios";
import useFetch from "./hooks/useFetch";

const AboutUs = () => {
  const [isLoading, fetchedData, error] = useFetch(
    "https://jsonplaceholder.typicode.com/todos/"
  );
  return (
    <div>
      {isLoading
        ? "Loading...."
        : fetchedData.length > 0
        ? fetchedData.map((todo, index) => {
            return <div key={index}>{todo.title}</div>;
          })
        : null}

        {error && JSON.stringify(error.message)}
    </div>
  );
};

export default AboutUs;
