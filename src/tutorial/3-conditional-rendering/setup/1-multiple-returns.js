import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState("default user");

  useEffect(() => {
    async function fetchData() {
      try {
        let response = await fetch(url);
        if (response.status >= 200 && response.status <= 299) {
          response = await response.json();
          setUser(response.login);
          // setIsLoading(false);
        } else {
          // setIsLoading(false);
          setIsError(true);
        }
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  if (isLoading) return <h2>Loading...</h2>;
  if (isError) return <h2>Error...</h2>;
  return <h2>{user}</h2>;
};

export default MultipleReturns;
