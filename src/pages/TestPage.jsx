import React, { useState } from "react";
import TestForm from "../components/TestForm";
import { calculateMBTI, mbtiDescriptions } from "../utils/mbtiCalculator";
import { createTestResult } from "../api/testResults";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Modal from "react-modal";
import useAuthStore from "../zustand/authsStore";
import { QUERY_KEYS } from "../constants/queryKeys";

const TestPage = () => {
  const { userId, nickname } = useAuthStore((state) => state.user);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const [result, setResult] = useState(null);
  const { mutate } = useMutation({
    mutationFn: createTestResult,
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEYS.TESTRESULTS]);
    },
  });
  const handleTestSubmit = async (answers) => {
    setModalIsOpen(true);
    const mbtiResult = calculateMBTI(answers);
    setResult(mbtiResult);
    const resultObj = {
      nickname: nickname,
      mbtiResult: mbtiResult,
      visibility: true,
      date: new Date(),
      userId: userId,
    };
    mutate(resultObj);
    /* Test 결과는 mbtiResult 라는 변수에 저장이 됩니다. 이 데이터를 어떻게 API 를 이용해 처리 할 지 고민해주세요. */
  };

  const handleNavigateToResults = () => {
    navigate("/results");
    closeModal();
  };
  const closeModal = () => setModalIsOpen(false);

  return (
    <div className="w-full flex flex-col items-center justify-center bg-white">
      <div className="bg-white rounded-lg p-8 max-w-lg w-full h-full overflow-y-auto">
        {!result ? (
          <>
            <h1 className="text-3xl font-bold text-primary-color mb-6">
              MBTI 테스트
            </h1>
            <TestForm onSubmitFunc={handleTestSubmit} />
          </>
        ) : (
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] bg-white p-6 rounded-lg shadow-lg"
          >
            <h1 className="text-3xl font-bold text-primary-color mb-6">
              테스트 결과: {result}
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              {mbtiDescriptions[result] ||
                "해당 성격 유형에 대한 설명이 없습니다."}
            </p>
            <button
              onClick={handleNavigateToResults}
              className="w-full bg-blue-500 text-white py-2 rounded-md font-semibold hover:bg-primary-dark transition duration-300 hover:text-[#FF5A5F]"
            >
              결과 페이지로 이동하기
            </button>
          </Modal>
        )}
      </div>
    </div>
  );
};

export default TestPage;
