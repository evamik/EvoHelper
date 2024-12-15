import { FC, useCallback } from 'react';
import { CompactItem } from '../../../components/CompactItem';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { TItem } from '../../../../types';
import { useItemContext } from '../../../contexts/itemsContext';
import { ItemIconAndTitle } from './ItemIconAndTitle';

interface CraftsIntoProps {
  item: TItem;
  onItemSelect?: (id: string) => void;
}

export const CraftsInto: FC<CraftsIntoProps> = (props) => {
  const { item, onItemSelect } = props;
  const { items } = useItemContext();

  const usedForItemsArr = item.partOf.map((id) => items[id]);

  if (usedForItemsArr.length === 0) return null;

  return (
    <Box sx={{ width: '500px', paddingTop: '5px' }}>
      <Typography variant="h6">Used for</Typography>
      {usedForItemsArr.length > 4 ? (
        <TiledItems items={usedForItemsArr} onItemSelect={onItemSelect} />
      ) : (
        <ListedItems items={usedForItemsArr} />
      )}
    </Box>
  );
};

function TiledItems({
  items,
  onItemSelect,
}: {
  items: TItem[];
  onItemSelect?: (id: string) => void;
}) {
  if (!items || items.length === 0) return null;

  const handleClick = useCallback(
    (item: TItem) => {
      if (onItemSelect) {
        onItemSelect(item.id);
      }
    },
    [onItemSelect],
  );
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', paddingTop: '5px' }}>
      {items.map((item) => (
        <CompactItem
          key={`used_for_${item.id}`}
          id={item.id}
          onClick={onItemSelect ? () => handleClick(item) : undefined}
        />
      ))}
    </Box>
  );
}

function ListedItems({
  items,
  onItemSelect,
}: {
  items: TItem[];
  onItemSelect?: (id: string) => void;
}) {
  if (items.length === 0) return null;
  const navigate = useNavigate();

  const handleClick = useCallback(
    (item: TItem) => {
      if (onItemSelect) {
        onItemSelect(item.id);
      } else {
        navigate(`/item/${item.id}`);
      }
    },
    [onItemSelect],
  );

  return (
    <Box sx={{ paddingTop: '5px' }}>
      {items.map((item) => (
        <ItemIconAndTitle
          key={item.id}
          sx={{
            paddingLeft: '30px',
            cursor: 'pointer',
            '&:hover': {
              background: '#2b2b2b',
            },
          }}
          onClick={() => handleClick(item)}
          item={item}
        />
      ))}
    </Box>
  );
}
