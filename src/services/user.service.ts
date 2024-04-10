import axios from "@/axios/axios";

export const getUser = async () => {
    const response = await axios.get("/users/me");
    return JSON.parse(response.data);
}


// export const getUserScores = async () => {
//     const response = await axios.get("/scores");
//     return JSON.parse(response.data);
// }