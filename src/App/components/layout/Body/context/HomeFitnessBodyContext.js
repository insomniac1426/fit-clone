import React, { useState } from "react";
import { getHomeFitnessData } from "API/getHomeFitnessData";
import { useQuery } from "react-query";
import { GET_HOME_FITNESS_DATA } from "Constants/queryKeys";

const getData = async () => {
  /**
   * Lets assume we have not overriden
   * the response schema set by axios
   */
  const homeFitnessResponse = await getHomeFitnessData();
  return homeFitnessResponse;
};

export const useGetHomeFitness = () => {
  /**
   * The query key needs to be unique
   * across the project for an API
   * as this is hashed by the library to provide features like caching etc.
   * https://react-query.tanstack.com/guides/query-keys
   */
  const { isLoading, error, data } = useQuery(GET_HOME_FITNESS_DATA, getData, {
    /**
     * Automatically refetches the data
     * out of the box feature
     * https://react-query.tanstack.com/reference/useQuery  - #refetchInterval
     */
    refetchInterval: 5000,
    refetchIntervalInBackground: true,
  });

  return { isLoading, error, data };
};

const HFBodyContext = React.createContext({});

HFBodyContext.displayName = "HFBodyContext"; // used for devtools

/**
 *
 * @param {*} Component
 * @returns HOC // component wrapped with the provider
 */
export const useHBContext = (Component) => {
  return (props) => {
    const homeFitnessData = useGetHomeFitness();

    return (
      <HFBodyContext.Provider
        value={{
          ...homeFitnessData,
        }}
      >
        <Component {...props} />
      </HFBodyContext.Provider>
    );
  };
};

export default HFBodyContext;
