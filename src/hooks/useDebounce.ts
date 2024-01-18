import {useCallback, useEffect, useState} from 'react';
import {Filter} from '../models/Filter';

export const useDebounce = <T extends unknown>({
  filters,
  onFinish,
  fetch,
  delay,
}: {
  filters: Filter;
  onFinish: (list: ArrayLike<T>[]) => void;
  fetch?: (page: number) => Promise<any>;
  delay?: number;
}) => {
  const [debounceLoading, setDebounceLoading] = useState(false);
  const [list, setList] = useState<Array<any>>([]);
  const [page, setPage] = useState(2);

  const handleSetDebounce = useCallback(
    (val: boolean) => {
      setDebounceLoading(val);
    },
    [setDebounceLoading],
  );

  useEffect(() => {
    // console.log("Debounce: ", filters, debounceLoading);

    if (filters.text === '') {
      setDebounceLoading(false);
      setList([]);
    } else {
      const search = setTimeout(async () => {
        if (debounceLoading) {
          let res;

          // if (fetch) {
          //   res = await fetch(page);
          //   console.log("Fetch: ", res);
          //   setPage((p) => p + 1);
          // } else {
          //   res = await FilterService(filters).filter();
          // }

          // res && setDebounceLoading(false);
          // onFinish(res);
          // setList(res);
        }
      }, delay);

      return () => {
        clearTimeout(search);
      };
    }
  }, [filters, debounceLoading, setList, delay]);

  return {debounceLoading, list, filters, handleSetDebounce};
};
