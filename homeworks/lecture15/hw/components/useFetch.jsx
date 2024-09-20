import { useState, useEffect } from 'react';
import axios from 'axios';

// UseFetch is a custom hook that accepts a URL and returns the fetched data.
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url, {
          headers: {
            Authorization:
              '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',
          },
        });
        setData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
