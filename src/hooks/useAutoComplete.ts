import {useCallback, useEffect, useMemo, useState} from 'react';
import {useDebounce} from './useDebounce';
import {Filter} from '../models/Filter';

export const useAutoComplete = ({
  onSelect,
  list,
}: {
  list: any[];
  onSelect: (text: string) => void;
  onChange: (text: string) => void;
}) => {
  const [text, setText] = useState('יו');
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const autoList = useMemo(
    () => list.filter(el => el.name.match(text)),
    [text],
  );

  const handleSetText = useCallback(
    (text: string) => {
      console.log('Handle Set Text: ', text);
      setText(text);
      setLoading(true);
    },
    [setText],
  );

  const handleSelect = useCallback(
    (item: any) => {
      setText(item);
      onSelect(item);
      setOpen(false);
    },
    [setText, onSelect, setOpen],
  );

  useEffect(() => {
    console.log('AutoList: ', autoList);
    autoList.length > 0 && setLoading(false);
    // setLoading(text.length > 0 ? false : true);
  }, [autoList]);

  return {
    autoList,
    loading,
    open,
    text,
    setOpen,
    handleSelect,
    handleSetText,
  };
};
