import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getTestResults } from "../api/testResults";
import { QUERY_KEYS } from "../constants/queryKeys";

export const useGetResults = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.TESTRESULTS],
    queryFn: getTestResults,
  });
};

export const EditResults = (ApiFunc) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ApiFunc,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.TESTRESULTS] });
    },
  });
};
