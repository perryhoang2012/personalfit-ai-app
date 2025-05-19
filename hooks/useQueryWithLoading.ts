import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { useGeneralStore } from "../store/generalStore";
import { useEffect } from "react";

export function useQueryWithLoading<TData = unknown, TError = Error>(
  options: UseQueryOptions<TData, TError>
) {
  const query = useQuery(options);

  useEffect(() => {
    if (query.isLoading) {
      useGeneralStore.getState().showLoading();
    } else {
      useGeneralStore.getState().hideLoading();
    }
  }, [query.isLoading]);

  return query;
}
