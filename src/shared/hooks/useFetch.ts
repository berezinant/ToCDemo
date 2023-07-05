import { useEffect, useState } from 'react';

export type UseFetchResult<T> = {
  data: T | null;
  error: Error | null;
  loading: boolean;
};

export type Transport<T> = (transportParams: unknown) => Promise<T>;

export function useFetch<T>(transport: Transport<T>, transportParams?: unknown): UseFetchResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    setLoading(true);
    setError(null);
    transport(transportParams)
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [transport, transportParams]);
  return { data, error, loading };
}
