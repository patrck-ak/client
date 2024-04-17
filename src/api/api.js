import { Axios } from "axios";

export const api = Axios.create({
  baseUrl: "https://api-connectmed.onrender.com/",
});
