import React, { useState, createContext, useContext } from 'react';

const restauantsContext = createContext();

export const UserRestauantsProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);

  return (
    <restauantsContext.Provider
      value={{
        restaurants,
        setRestaurants,
      }}
    >
      {children}
    </restauantsContext.Provider>
  );
};

export const UseRestauants = () => {
  return useContext(restauantsContext);
};
