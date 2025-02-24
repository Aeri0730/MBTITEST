import useAuthStore from "../zustand/authsStore";
import { mbtiDescriptions } from "../utils/mbtiCalculator";
import { getTestResults } from "../api/testResults";
import { useQuery } from "@tanstack/react-query";
import TestResultList from "./TestResultList";

const TestResultItem = () => {
  const { userId } = useAuthStore((state) => state.user);
  const {
    data: testResults,
    isPending,
    isError,
  } = useQuery({
    queryKey: ["testResults"],
    queryFn: getTestResults,
  });

  if (isPending) {
    return <div>로딩중입니다...</div>;
  }

  if (isError) {
    return <div>데이터 조회 중 오류가 발생했습니다.</div>;
  }
  return (
    <div>
      {testResults
        .filter((result) => result.visibility || result.userId == userId)
        .map((result) => {
          return (
            <div
              key={`result-${result.id}`}
              className="p-8 m-8 border-2 border-solid rounded-xl"
            >
              <div className="flex justify-between items-center border-b-2 border-solid">
                <p className="p-2">{result.nickname}</p>
                <p className="p-2">{result.date}</p>
              </div>
              <div>
                <h1 className="text-3xl font-bold text-primary-color mb-2 p-2">
                  {result.mbtiResult}
                </h1>
                <p className="p-2">{mbtiDescriptions[result.mbtiResult]}</p>
              </div>
              <TestResultList key={result.id} result={result} />
            </div>
          );
        })}
    </div>
  );
};
export default TestResultItem;
