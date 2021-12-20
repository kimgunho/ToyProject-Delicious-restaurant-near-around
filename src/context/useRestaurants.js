import React, { useState, createContext, useContext } from 'react';

const restauantsContext = createContext();

export const UserRestauantsProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [restaurantTitle, setRestaurantTitle] = useState(null);
  return (
    <restauantsContext.Provider
      value={{
        restaurants,
        setRestaurants,
        restaurantTitle,
        setRestaurantTitle,
      }}
    >
      {children}
    </restauantsContext.Provider>
  );
};

export const UseRestauants = () => {
  return useContext(restauantsContext);
};
