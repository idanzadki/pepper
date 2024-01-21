import {useCallback} from 'react';

export const callBackWrapper = (func: Function, arr = []) => {
  return useCallback(func, [...arr]);
};
