import { AI } from "../common/utils/getAxios";

const HOME_FITNESS_REQUEST_PATH = "/";

export const getHomeFitnessData = async () => {
  const { data: response } = await AI.get(HOME_FITNESS_REQUEST_PATH);
  return response;
};
