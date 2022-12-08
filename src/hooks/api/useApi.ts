import assert from 'assert';
import { useQuery } from '@tanstack/react-query';

export const useApi = <
  QueryParams extends Record<never, never>,
  Response extends Record<never, never>,
>(
  key: string,
  path: string,
  params: QueryParams,
  selector: (data: Response) => Response = (data) => data,
) => {
  const API_ROOT = process.env.NEXT_PUBLIC_API_ROOT;
  assert(API_ROOT, 'API_ROOT is not defined');

  const fetcher = async () => {
    const query = new URLSearchParams(params).toString();
    const url = `${API_ROOT}/${path}/${query ? `?${query}` : ''}/`;

    const response = await fetch(url, { method: 'GET' });
    assert(response.status === 200, response.status.toString());

    return response.json();
  };

  const {
    data,
    isLoading,
    isError,
    error,
  }: {
    data: Response | undefined;
    isLoading: boolean;
    isError: boolean;
    error: Error | null;
  } = useQuery([key, params], fetcher, {
    select: selector,
  });

  return { data, isLoading, isError, error };
};
