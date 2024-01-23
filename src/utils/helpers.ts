import {useCallback} from 'react';

export const callBackWrapper = (func: Function, arr: any = []) => {
  return useCallback(func, [...arr]);
};
