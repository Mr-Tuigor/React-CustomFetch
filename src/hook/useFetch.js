import React from 'react';
import { useState, useEffect } from 'react';

const useFetch = (url) => {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() =>  {
    async function fetchData() {

      setLoading(true);

      try {
        const responses = await fetch(url);
        console.log(responses);

        const results = await responses.json();
        console.log(results.length);
        console.log(results);
        setData(results);
        setError(null);

      } catch (err) {

        setError(err.message);
        setData(null);

      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return {
     data, loading, error 
    };
};

export default useFetch;