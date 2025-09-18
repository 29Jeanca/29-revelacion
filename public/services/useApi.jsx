import { useState, useCallback } from "react";

export function useApi(baseUrl) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const request = useCallback(
    async (endpoint, { method = "GET", body = null, headers = {} } = {}) => {
      setLoading(true);
      setError(null);

      try {
        const options = {
          method,
          headers: {
            "Content-Type": "application/json",
            ...headers,
          },
          body: body ? JSON.stringify(body) : null,
        };

        const response = await fetch(`${baseUrl}${endpoint}`, options);

        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }

        const result = await response.json();
        setData(result);
        return result;
      } catch (err) {
        setError(err.message);
        return null;
      } finally {
        setLoading(false);
      }
    },
    [baseUrl]
  );

  return { data, loading, error, request };
}
