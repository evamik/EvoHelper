import Box from '@mui/material/Box';
import { BoxProps } from '@mui/material';
import { EvoItemRenderer } from './ItemWithTooltip';

interface EvoStashProps extends BoxProps {
  itemIds: string[];
  onItemClick?: (id: number) => void;
  playerItems?: string[] | null;
}

export function EvoStash(props: EvoStashProps) {
  const { itemIds, onItemClick, playerItems, ...rest } = props;
  return (
    <Box {...rest}>
      {itemIds.map((id, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <EvoItemRenderer
          key={id + index}
          id={id}
          onClick={onItemClick ? () => onItemClick(index) : undefined}
          playerItems={playerItems}
        />
      ))}
    </Box>
  );
}
