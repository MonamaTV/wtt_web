import axios from "@/axios/axios";

export const getUser = async () => {
  const response = await axios.get("/users/me");
  return JSON.parse(response.data);
};

export const updateUser = async (name: string, surname: string) => {
  const response = await axios.put(
    "/users",
    JSON.stringify({
      first_name: name,
      last_name: surname,
    })
  );

  if (response.status !== 200) {
    throw new Error(JSON.parse(response.data).detail);
  }
  return JSON.parse(response.data);
};

// export const getUserScores = async () => {
//     const response = await axios.get("/scores");
//     return JSON.parse(response.data);
// }
