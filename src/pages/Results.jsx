import { useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { getTestResults } from "../api/testResults";
import { mbtiDescriptions } from "../utils/mbtiCalculator";

const Results = () => {
  const {
    data: testResults,
    isPending,
    isError,
  } = useQuery({
    queryKey: ["testResults"],
    queryFn: getTestResults,
  });

  console.log("뭐야=> ", testResults);
  if (isPending) {
    return <div>로딩중입니다...</div>;
  }

  if (isError) {
    return <div>데이터 조회 중 오류가 발생했습니다.</div>;
  }
  return (
    <div>
      {testResults.map((result, idx) => {
        return (
          <div
            key={`result-${result.id}${idx}`}
            className="p-8 m-8 border-2 border-solid rounded-xl"
          >
            <p className="p-2 border-b-2 border-solid">{result.id}</p>
            <div>
              <h1 className="text-3xl font-bold text-primary-color mb-2 p-2">
                {result.mbtiResult}
              </h1>
              <p className="p-2">{mbtiDescriptions[result.mbtiResult]}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Results;
