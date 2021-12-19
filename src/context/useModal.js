import React, { useState, createContext, useContext } from 'react';

const modalContext = createContext();

export const UserModalProvider = ({ children }) => {
  const [show, setShow] = useState(false);

  return (
    <modalContext.Provider
      value={{
        show,
        setShow,
      }}
    >
      {children}
    </modalContext.Provider>
  );
};

export const UseModal = () => {
  return useContext(modalContext);
};
