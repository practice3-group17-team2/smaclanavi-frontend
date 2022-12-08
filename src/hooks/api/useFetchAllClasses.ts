import { useApi } from './useApi';
import { Empty } from '../../types/api/common';
import { Class } from '../../types/api/types';

export const useFetchAllClasses = () => {
  type QueryParams = Empty;
  type Response = Class[];
  const path = 'class_infos';
  const key = `allClasses`;

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
  } = useApi<QueryParams, Response>(key, path, {});

  return { data, isLoading, isError, error };
};
