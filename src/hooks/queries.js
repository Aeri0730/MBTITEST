import { useQuery } from "@tanstack/react-query";
import { getTodos } from "../services";
import { QUERY_KEYS } from "../contansts/queryKeys";

export const useTodos = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.TODOS],
    queryFn: getTodos,
  });
};
