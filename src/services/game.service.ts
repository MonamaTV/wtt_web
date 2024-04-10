import axios from "@/axios/axios";
import { Score } from "./types";

export const postScore = async (score: Score) => {
  const response = await axios.post("/scores", JSON.stringify(score));

  if (response.status !== 200) {
    throw new Error(JSON.parse(response.data).detail);
  }

  return JSON.parse(response.data);
};

export const getUserScores = async () =>  {
  const response = await axios.get("/scores");
    return JSON.parse(response.data);
};
