import React, { useContext } from 'react';

export const AppContext = React.createContext();

export const useSelector = (selectorFn, ...args) => {
  const { state } = useContext(AppContext);
  return selectorFn(state, ...args);
};

export const useDispatch = () => {
  const { dispatch } = useContext(AppContext);
  return dispatch;
};
