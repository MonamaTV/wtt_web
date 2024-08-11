import axios from "@/axios/axios";

export const getUser = async () => {
  const response = await axios.get("/users/me");
  return JSON.parse(response.data);
};

export const updateUser = async (
  name: string,
  surname: string,
  bio: string
) => {
  const response = await axios.put(
    "/users",
    JSON.stringify({
      first_name: name,
      last_name: surname,
      bio: bio,
    })
  );

  if (response.status !== 200) {
    throw new Error(JSON.parse(response.data).detail);
  }
  return JSON.parse(response.data);
};

export const checkUserInCompetition = async (competitionID: string | null) => {
  const response = await axios.get(`/competitions/check/${competitionID}`);
  if (response.status !== 200) {
    throw new Error(JSON.parse(response.data).detail);
  }
  return JSON.parse(response.data);
};

export const getUserStats = async (username: string | undefined) => {
  const response = await axios.get(`/users/stats/${username}`);
  if (response.status !== 200) {
    throw new Error(JSON.parse(response.data).detail);
  }
  return JSON.parse(response.data);
};

export const getUserByUsername = async (username: string | undefined) => {
  const response = await axios.get(`/users/username/${username}`);
  if (response.status !== 200) {
    throw new Error(JSON.parse(response.data).detail);
  }
  return JSON.parse(response.data);
};

export const verifyUser = async (token: string) => {
  const response = await axios.post(
    `/users/verify`,
    JSON.stringify({
      token,
    })
  );
  if (response.status !== 200) {
    throw new Error(JSON.parse(response.data).detail);
  }
  return response;
};
