import { createContext, useContext, useReducer } from "react";
import serviceReducer from "./ServiceControllers/serviceReducers";
export const ContextProvider = createContext();

const initalState = {
  loading: true,
  error: "",
  user: null,
  services: [],
};

const ContextApi = ({ children }) => {
  const [serviceState, serviceDisPatch] = useReducer(
    serviceReducer,
    initalState
  );
  return (
    <ContextProvider.Provider value={{ serviceState, serviceDisPatch }}>
      {children}
    </ContextProvider.Provider>
  );
};

export const Context = () => {
  return useContext(ContextProvider);
};

export default ContextApi;
