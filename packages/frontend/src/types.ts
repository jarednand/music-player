import { Dispatch, SetStateAction } from 'react';

export type AppContextData = {
  isError: boolean;
  setIsError: Dispatch<SetStateAction<boolean>>,
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>,
};

export type Song = {
  id: number;
  name: string;
  coverPath: string;
  audioPath: string;
};