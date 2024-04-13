import { ChangeEvent, useMemo, useRef, useState } from 'react';
import Box from '@mui/material/Box';
import { Input, InputProps } from '@mui/material';
import { evoItems } from '../../constants/items';
import { EvoItemRenderer } from '../components/ItemWithTooltip';

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
export function ItemsPage() {
  const [filter, setFilter] = useState<string>('');

  const filteredItems = useMemo(() => {
    return Object.keys(evoItems).filter((id) =>
      id.toLowerCase().includes(filter.toLowerCase()),
    );
  }, [filter]);

  return (
    <Box>
      <DebounceInput
        placeholder="Filter"
        debounceTimeout={500}
        handleDebounce={(value: string) => setFilter(value)}
      />
      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', columnGap: 2, paddingTop: '20px' }}>
        {filteredItems.map((id) => (
          <EvoItemRenderer key={id} id={id} border={true} />
        ))}
      </Box>
    </Box>
  );
}
