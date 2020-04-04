import React, { useState, useEffect } from "react";
import yelp from "../api/yelp";

export default () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [results, setResults] = useState([]);

  const searchApi = async (searchTerm) => {
    try {
      const result = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "san jose",
        },
      });
      setResults(result.data.businesses);
      setErrorMessage("");
    } catch (err) {
      setErrorMessage("Somthing went wrong.");
    }
  };

  useEffect(() => {
    searchApi("pasta");
  }, []);

  return [searchApi, errorMessage, results];
};
