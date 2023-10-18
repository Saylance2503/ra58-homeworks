import { useState, useEffect } from 'react';

function useJsonFetch(url, opts) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        let isMounted = true;
        setLoading(true);
        setError(null);

        fetch(url, opts)
            .then(async (response) => {
                if (!isMounted) return;

                if (!response.ok) {
                    setError(`HTTP Error: ${response.status}`);
                } else {
                    const jsonData = await response.json();
                    setData(jsonData);
                }

                setLoading(false);
            })
            .catch((err) => {
                if (isMounted) {
                    setError(err.message);
                    setLoading(false);
                }
            });

        return () => {
            isMounted = false;
        };
    }, [url, opts]);

    return [data, loading, error];
}

export default useJsonFetch;
