import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [loginStatus, setLoginStatus] = useState(false);
  const [totalSteps, setTotalSteps] = useState(0);
  const [currentSteps, setCurrentSteps] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [userDetails, setUserDetails] = useState(null);
  const [setUpDetails, setSetUpDetails] = useState({});
  const [stepData, setStepData] = useState([]);
  const [apiCalled, setAPICalled] = useState(false);
  const [pedoReset, setPedoReset] = useState(true)


  return (
    <AppContext.Provider value={{ currentSteps, setCurrentSteps, totalSteps, setTotalSteps, seconds, setSeconds, loginStatus, setLoginStatus, userDetails, setUserDetails, setUpDetails, setSetUpDetails, stepData, setStepData, apiCalled, setAPICalled, pedoReset, setPedoReset }}>
      {children}
    </AppContext.Provider>
  );
};
