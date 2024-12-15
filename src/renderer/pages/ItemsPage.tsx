import { ChangeEvent, useEffect, useMemo, useRef, useState } from 'react';
import Box from '@mui/material/Box';
import { Input, InputProps } from '@mui/material';
import { EvoItemRenderer } from '../components/ItemWithTooltip';
import { useItemContext } from '../contexts/itemsContext';

type DebounceProps = {
  handleDebounce: (value: string) => void;
  debounceTimeout: number;
};

function DebounceInput(props: InputProps & DebounceProps) {
  const { handleDebounce, debounceTimeout, ...rest } = props;

  const timerRef = useRef<number>();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = window.setTimeout(() => {
      handleDebounce(event.target.value);
    }, debounceTimeout);
  };

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Input {...rest} onChange={handleChange} />;
}

type ItemsPageProps = {
  onItemSelect?: (id: string) => void;
};

export function ItemsPage(props: ItemsPageProps) {
  const { onItemSelect } = props;
  const { items } = useItemContext();
  const [filter, setFilter] = useState<string>('');
  const [visibleItems, setVisibleItems] = useState<string[]>([]);
  const [renderIndex, setRenderIndex] = useState<number>(0);

  const filteredItems = useMemo(() => {
    return Object.keys(items).filter((id) =>
      id.toLowerCase().includes(filter.toLowerCase()),
    );
  }, [filter, items]);

  useEffect(() => {
    setVisibleItems([]);
    setRenderIndex(0);
  }, [filter]);

  useEffect(() => {
    if (renderIndex < filteredItems.length) {
      const timer = setTimeout(() => {
        const nextIndex = Math.min(renderIndex + 10, filteredItems.length);
        setVisibleItems((prevVisibleItems) => [
          ...prevVisibleItems,
          ...filteredItems.slice(renderIndex, nextIndex),
        ]);
        setRenderIndex(nextIndex);
      }, 1);

      return () => clearTimeout(timer);
    }
  }, [renderIndex, filteredItems]);

  return (
    <Box>
      <DebounceInput
        placeholder="Filter"
        debounceTimeout={500}
        handleDebounce={(value: string) => setFilter(value)}
      />
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          paddingTop: '20px',
        }}
      >
        {visibleItems.map((id) => (
          <EvoItemRenderer key={id} id={id} onClick={onItemSelect} />
        ))}
      </Box>
    </Box>
  );
}
