import { useEffect, useState } from "react";
import { getApiHealth } from "../services/api";

export function useApiHealth() {
  const [status, setStatus] = useState<string>();
  const [error, setError] = useState<string>();

  useEffect(() => {
    let active = true;

    getApiHealth()
      .then(() => {
        if (active) setStatus("Online");
      })
      .catch(() => {
        if (active) {
          setStatus("Unavailable");
          setError("Could not reach the API");
        }
      });

    return () => {
      active = false;
    };
  }, []);

  return { status, error };
}
