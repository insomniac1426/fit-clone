import axios from "axios";

const BASE_URL_HOME_FITNESS_BASIC = "http://localhost:8080/";

/**
 * Adding support for instance so that later if any interceptors
 * need to be added can be added easily.
 */
export const AI = axios.create({
  baseURL: process.env.HF_BASE_URL || BASE_URL_HOME_FITNESS_BASIC,
  headers: {
    "Content-Type": "application/json",
  },
  //   headers: { "X-Custom-Header": "foobar" },
});
