import { createContext } from 'react';
import { AppContextData } from './types';

export const AppContext = createContext<AppContextData>({
  isError: false,
  setIsError: (): void => {},
  isLoading: false,
  setIsLoading: (): void => {},
});