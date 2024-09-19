import axios from "@/axios/axios";
import { Competition, Score } from "./types";

export const postScore = async (score: Score, competition: string | null) => {
  const url = competition ? `/scores/${competition}` : "/scores";
  const response = await axios.post(url, JSON.stringify(score));

  if (response.status !== 200) {
    throw new Error(JSON.parse(response.data).detail);
  }

  return JSON.parse(response.data);
};

export const getUserScores = async (
  limit: number,
  orderBy: number,
  pageNumner: number
) => {
  const response = await axios.get(
    `/scores?limit=${limit}&sort=${orderBy}&page=${pageNumner}`
  );
  return JSON.parse(response.data);
};

export const createNewCompetition = async (competition: Competition) => {
  const response = await axios.post(
    "/competitions",
    JSON.stringify(competition)
  );
  if (response.status !== 200) {
    throw new Error(JSON.parse(response.data).detail);
  }
  return JSON.parse(response.data);
};

export const getCompetitions = async () => {
  const response = await axios.get("/competitions");
  if (response.status !== 200) {
    throw new Error(JSON.parse(response.data).detail);
  }
  return JSON.parse(response.data);
};

export const deleteCompetition = async (competitionID: string) => {
  const response = await axios.delete(`/competitions/${competitionID}`);
  console.log(response);
  if (response.status !== 200) {
    throw new Error(JSON.parse(response.data).detail);
  }
  return JSON.parse(response.data);
};

export const leaveCompetition = async (competitionID: string) => {
  const response = await axios.delete(`/competitions/remove/${competitionID}`);
  if (response.status !== 200) {
    throw new Error(JSON.parse(response.data).detail);
  }
  return JSON.parse(response.data);
};

export const getLeaderboard = async () => {
  const response = await axios.get("/scores/leaderboard");
  if (response.status !== 200) {
    throw new Error(JSON.parse(response.data).detail);
  }
  return JSON.parse(response.data);
};

export const getCompetitionDetails = async (
  competitionID: string | undefined
) => {
  const response = await axios.get(`/competitions/${competitionID}`);
  if (response.status !== 200) {
    throw new Error(JSON.parse(response.data).detail);
  }
  return JSON.parse(response.data);
};

export const getCompetitionInformation = async (
  competitionID: string | undefined
) => {
  const response = await axios.get(`/competitions/info/${competitionID}`);
  if (response.status !== 200) {
    throw new Error(JSON.parse(response.data).detail);
  }
  return JSON.parse(response.data);
};


export const getCompetitorList = async (
  competitionID: string | undefined
) => {
  const response = await axios.get(`/competitions/${competitionID}/competitors`);
  if (response.status !== 200) {
    throw new Error(JSON.parse(response.data).detail);
  }
  return JSON.parse(response.data);
};
