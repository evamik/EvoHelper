import Box, { BoxProps } from '@mui/material/Box';
import { iconFromId } from '../icons/icons';
import Typography from '@mui/material/Typography';
import { TreeView } from '@mui/x-tree-view/TreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';
import { grey, lightBlue } from '@mui/material/colors';

import Avatar from '@mui/material/Avatar';
import { useItemContext } from '../contexts/itemsContext';
import { TItem } from '../../types';

interface EvoItemProps extends BoxProps {
  item: TItem
}

export function EvoItem(props: EvoItemProps) {
  const { item, sx,...rest } = props;
  const { color } = item.rarity;

  return (
    <Box {...rest} sx={{ maxWidth: '600px'}}>
      <Box sx={{ display: 'flex', flexDirection: 'row', paddingBottom: '10px' }}>
        <img
          src={iconFromId(item.icon)} width={64} height={64}
        />
        <Box sx={{ paddingLeft: '10px' }}>
          <Typography variant="subtitle1" color={color}>
            {item.id}
          </Typography>
          <Typography variant="subtitle2" color={lightBlue[300]}>
            {item.restriction}
          </Typography>
        </Box>
      </Box>
      <Typography variant="body2">{item.description}</Typography>
      <br />
      {item.effects.map((effect, index) => (
        <Typography key={effect + index} variant="body2">
          {effect}
        </Typography>
      ))}
      <ItemDependenciesTree item={item} />
    </Box>
  )
}

function ItemDependenciesTree(props: {item: TItem}) {
  const { item } = props;
  if (item.recipe.length === 0) return null;
  return (
    <Box sx={{ width: '500px', paddingTop: '15px'}}>
      <Typography variant="h6">Crafting</Typography>
      <TreeView sx={{ paddingTop: '15px' }}>
        {
          item.recipe.map((craftingId: string) => (
            <ItemDependency key={craftingId} index={item.id} id={craftingId} />
          ))
        }
      </TreeView>
    </Box>
  )
}

function ItemDependency(props: {id: string; index: string;}) {
  const { items } = useItemContext();
  const { id, index } = props;
  const item = items[id];
  const newIndex = index + '_' + id;

  if (!item) {
    return (
      <TreeItem nodeId={newIndex} label={
        <Box sx={{display:'flex', flexDirection:'row', alignContent: 'center'}}>
          <Avatar sx={{ bgcolor: grey[500], marginRight: '10px' }} variant="rounded">
            {id[0]}
          </Avatar>
          <Typography variant="body2">{id}</Typography>
        </Box>
      }/>
    );
  }
  return (
    <TreeItem
      nodeId={newIndex}
      label={
        <Box sx={{display:'flex', flexDirection:'row', alingItems: 'center', justifyContent: 'space-between'}}>
          <ItemIconAndTitle item={item} />
          { item.sourceShort && <Typography variant="body2" sx={{ color: lightBlue[300] }}>{item.sourceShort}</Typography> }
        </Box>
      }>
      {
        item.recipe.map((id, index) => (
          <ItemDependency key={newIndex + id + '_' + index} index={newIndex} id={id} />
        ))
      }
    </TreeItem>
  )
}

export function ItemIconAndTitle (props: {item: TItem}) {
  const { item } = props;
  return (
    <Box sx={{display:'flex', flexDirection:'row', alingItems: 'center'}}>
      <Avatar sx={{ bgcolor: grey[500], marginRight: '10px' }} variant="rounded" src={iconFromId(item.icon)}/>
      <Typography variant="body2" sx={{ color: item.rarity.color }}>{item.id}</Typography>
    </Box>
  )
}