import { useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { getTestResults } from "../api/testResults";
import { mbtiDescriptions } from "../utils/mbtiCalculator";
import useAuthStore from "../zustand/authsStore";
import Button from "../components/Button";

const Results = () => {
  const { userId } = useAuthStore((state) => state.user);
  
  const {
    data: testResults,
    isPending,
    isError,
  } = useQuery({
    queryKey: ["testResults"],
    queryFn: getTestResults,
  });
  //
  const handleToPublicResult = () => {};

  const handleDeleteResult = () => {};
  if (isPending) {
    return <div>로딩중입니다...</div>;
  }

  if (isError) {
    return <div>데이터 조회 중 오류가 발생했습니다.</div>;
  }


  return (
    <div>
      {testResults.map((result) => {
        return (
          (result.visibility || result.userId == userId) && (
            <div
              key={`result-${result.id}`}
              className="p-8 m-8 border-2 border-solid rounded-xl"
            >
              <div className="flex justify-between items-center border-b-2 border-solid">
                <p className="p-2 ">{result.nickname}</p>
                <p className="p-2 ">{result.date}</p>
              </div>
              <div>
                <h1 className="text-3xl font-bold text-primary-color mb-2 p-2">
                  {result.mbtiResult}
                </h1>
                <p className="p-2">{mbtiDescriptions[result.mbtiResult]}</p>
              </div>
              {result.userId === userId && (
                <div>
                  <Button
                    primary="true"
                    text="공개로 전환"
                    onClickFunc={handleToPublicResult}
                  />
                  <Button
                    primary="false"
                    text="삭제"
                    onClickFunc={handleDeleteResult}
                  />
                </div>
              )}
            </div>
          )
        );
      })}
    </div>
  );
};

export default Results;
