import { FC } from 'react';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import { grey } from '@mui/material/colors';
import ItemCard from './ItemCard';
import { iconFromId } from '../icons/icons';
import { useNavigate } from 'react-router-dom';
import { useItemContext } from '../contexts/itemsContext';

export const EvoItemRenderer: FC<{ id?: string, onClick?: () => void }> = ({ id, onClick }) => {
  const { items } = useItemContext();
  const navigate = useNavigate();
  if (!id) {
    return (
      <Avatar src={iconFromId('EmptySlotIcon')} variant="rounded">
        {' '}
      </Avatar>
    );
  }
  if (!items.hasOwnProperty(id)) {
    return (
      <Tooltip sx={{ boxShadow: 3 }} title={id} placement="right-start">
        <Avatar sx={{ bgcolor: grey[500] }} variant="rounded">
          {id[0]}
        </Avatar>
      </Tooltip>
    );
  }
  return (
    <Tooltip
      sx={{
        boxShadow: 3
      }}
      title={<ItemCard id={id} item={items[id]} />}
      placement="right-start"
    >
      <Avatar
        sx={{ cursor: 'pointer' }}
        variant="rounded"
        src={iconFromId(items[id].icon)}
        onClick={() => navigate(`/item/${id}`)}
      />
    </Tooltip>
  );
};
