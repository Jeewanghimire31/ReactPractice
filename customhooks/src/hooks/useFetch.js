import React, { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [fetchedData, setFetchedData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setFetchedData(response.data);
        setLoading(false);
      }).catch((err)=>setError(err));
  }, []);
  return [isLoading, fetchedData, error];
};

export default useFetch;
