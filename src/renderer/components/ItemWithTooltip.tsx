import Box from '@mui/material/Box';
import { FC } from 'react';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { grey, lightBlue } from '@mui/material/colors';
import { evoItems } from '../../constants/items';
import ItemCard from './ItemCard';
import { ItemIconAndTitle } from './Item';
import { iconFromId } from '../../icons/icons';
import { useNavigate } from 'react-router-dom';

export const EvoItemRenderer: FC<{ id?: string, onClick?: () => void, minimal?: boolean, border?: boolean }> = ({ id, onClick, minimal, border }) => {
  const navigate = useNavigate();
  if (!id) {
    return (
      <Avatar src={iconFromId('EmptySlotIcon')} variant="rounded">
        {' '}
      </Avatar>
    );
  }
  if (!evoItems.hasOwnProperty(id)) {
    return (
      <Tooltip sx={{ boxShadow: 3 }} title={id} placement="right-start">
        <Avatar sx={{ bgcolor: grey[500] }} variant="rounded">
          {id[0]}
        </Avatar>
      </Tooltip>
    );
  }

  const item = evoItems[id as keyof typeof evoItems];

  if (minimal)
    return (
      <Tooltip
        sx={{
          boxShadow: 3
        }}
        title={<ItemCard id={id} item={evoItems[id as keyof typeof evoItems]} />}
        placement="right-start"
      >
        <Avatar
          sx={{ cursor: 'pointer' }}
          variant="rounded"
          src={iconFromId(evoItems[id as keyof typeof evoItems].icon)}
          onClick={() => navigate(`/item/${id}`)}
        />
      </Tooltip>
    );
  else
    return ( 
    <Tooltip
      sx={{
        boxShadow: 3
      }}
      title={<ItemCard id={id} item={item} />}
      placement="top-start"
    >
      <Box sx={{display:'flex', alingItems: 'center', justifyContent: 'space-between', border: border ? 1 : 0, p: 1}}>
        <ItemIconAndTitle item={item} onClick={() => navigate(`/item/${id}`)} />
        { (item.sourceShort || item.source) && <Typography variant="body2" sx={{ color: lightBlue[300] }}>{item.sourceShort ?? item.source}</Typography> }
      </Box>
    </Tooltip>
    );
}
