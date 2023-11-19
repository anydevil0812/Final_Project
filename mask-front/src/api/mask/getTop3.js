import React from "react";
import axios from "axios";

export const getTop3 = async ({ setTopMask }) => { //setTopMask는 MainPage.js에서 useState로 선언한 topMask를 set해주는 함수
  // const response = await axios.get("http://localhost:8080/mask/top3");
  const response = await axios.get("http://34.64.75.217:8080/health");
  console.log(response.data);

  // console.log(response.data);
  setTopMask(response.data.result);
};
