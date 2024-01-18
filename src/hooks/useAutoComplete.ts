import {useCallback, useMemo, useState} from 'react';

export const useAutoComplete = ({
  onSelect,
  list,
}: {
  list: any[];
  onSelect: (text: string) => void;
  onChange: (text: string) => void;
}) => {
  const [text, setText] = useState('');
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const autoList = useMemo(
    () => list.filter(el => el.name.match(text)),
    [text, list],
  );

  const handleSetText = useCallback(
    (text: string) => {
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
