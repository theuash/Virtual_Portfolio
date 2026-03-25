import { useState, useEffect } from 'react';

/**
 * useFetch — tries the API first, falls back to static data on error/timeout.
 *
 * @param {string}   apiUrl      - Backend endpoint (e.g. '/api/team')
 * @param {*}        staticData  - Imported static data to use as fallback
 * @param {number}   timeout     - Milliseconds before giving up on API (default 3000)
 */
export const useFetch = (apiUrl, staticData, timeout = 3000) => {
  const [data, setData]       = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState(null);
  const [source, setSource]   = useState(null); // 'api' | 'static'

  useEffect(() => {
    let cancelled = false;

    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const controller = new AbortController();
        const timer = setTimeout(() => controller.abort(), timeout);

        const res = await fetch(apiUrl, { signal: controller.signal });
        clearTimeout(timer);

        if (!res.ok) throw new Error(`HTTP ${res.status}`);

        const json = await res.json();
        if (!cancelled) {
          // Support { success, data: [...] } or plain array
          const payload = Array.isArray(json) ? json : (json.data ?? json);
          setData(payload);
          setSource('api');
        }
      } catch {
        // Fall back to static data silently
        if (!cancelled) {
          setData(staticData);
          setSource('static');
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    fetchData();
    return () => { cancelled = true; };
  }, [apiUrl, staticData, timeout]);

  return { data, loading, error, source };
};

export default useFetch;
