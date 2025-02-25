import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import useAuthStore from "../zustand/authsStore";
import {
  deleteTestResult,
  updateTestResultVisibility,
} from "../api/testResults";
import Button from "./Button";
import { QUERY_KEYS } from "../constants/queryKeys";

const TestResultList = ({ result }) => {
  const queryClient = useQueryClient();
  const { userId } = useAuthStore((state) => state.user);

  const { mutate: visibleToggleMutation } = useMutation({
    mutationFn: updateTestResultVisibility,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.TESTRESULTS] });
    },
  });

  const { mutate: deleteMutation } = useMutation({
    mutationFn: deleteTestResult,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.TESTRESULTS] });
    },
  });
  return (
    <>
      {" "}
      {result.userId === userId && (
        <div className="flex flex-row-reverse">
          <Button
            primary=""
            text="삭제"
            onClickFunc={() => deleteMutation(result.id)}
          />
          <Button
            primary="true"
            text={result.visibility ? "비공개로 전환" : "공개로 전환"}
            onClickFunc={() =>
              visibleToggleMutation.mutate({
                id: result.id,
                visibility: !result.visibility,
              })
            }
          />
        </div>
      )}
    </>
  );
};

export default TestResultList;
