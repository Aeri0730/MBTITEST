import { jsonApi } from "../axio/api";

export const getTestResults = async () => {
  const response = await jsonApi.get("/");
  console.log(response);
  return response.data;
};
export const createTestResult = async (resultData) => {
  const response = await jsonApi.post("/",resultData);
  return response.data;
};
export const updateTestResultVisibility = async ({id,visibility}) => {
  if (!id) throw new Error("업데이트할 ID가 없습니다.");
  const response = await jsonApi.patch(`/${id}`, {
    visibility
  });
  return response.data;
};
export const deleteTestResult = async (id) => {
  if (!id) throw new Error("삭제할 ID가 없습니다.");
  const response = await jsonApi.delete(`/${id}`);
  return response.data;
};
