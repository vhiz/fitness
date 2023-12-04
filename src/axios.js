import axios from "axios";

export const baseUrl = axios.create({
  baseURL: "https://exercisedb.p.rapidapi.com/exercises",
  headers: {
    "X-RapidAPI-Key": "003e1b08a1msha53a9ac2ae1c781p180fa9jsn453efba5e9b4",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
});
