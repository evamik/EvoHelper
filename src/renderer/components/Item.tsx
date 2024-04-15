import Box, { BoxProps } from '@mui/material/Box';
import { EvoItem } from '../../constants/items/item';
import { iconFromId } from '../../icons/icons';
import { evoRarity } from '../../constants/rarity';
import Typography from '@mui/material/Typography';
import { TreeView } from '@mui/x-tree-view/TreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';
import { grey, lightBlue } from '@mui/material/colors';
import { evoItemRestrictions } from '../../constants/restrictions';
import { evoItems } from '../../constants/items';
import Avatar from '@mui/material/Avatar';

interface EvoItemProps extends BoxProps {
  item: EvoItem
}
export function EvoItem(props: EvoItemProps) {
  const {item, sx,...rest} = props;
  const { color } = evoRarity[item.rarity];
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
            {evoItemRestrictions[item.restriction]}
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

function ItemDependenciesTree(props: {item: EvoItem}) {
  const { item } = props;
  if (!item.crafting || item.crafting.length === 0) return null;
  return (
    <Box sx={{ width: '500px', paddingTop: '15px'}}>
      <Typography variant="h6">Crafting</Typography>
      <TreeView sx={{ paddingTop: '15px' }}>
        {
          item.crafting?.map((craftingId: string) => (
            <ItemDependency key={craftingId} index={item.id} id={craftingId} />
          ))
        }
      </TreeView>
    </Box>
  )
}

function ItemDependency(props: {id: string; index: string;}) {
  const { id, index } = props;
  const item = evoItems[id as keyof typeof evoItems];
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
        item.crafting?.map((craftingId, index) => (
          <ItemDependency key={newIndex + craftingId + '_' + index} index={newIndex} id={craftingId} />
        ))
      }
    </TreeItem>
  )
}

export function ItemIconAndTitle (props: {item: EvoItem}) {
  const { item } = props;
  return (
    <Box sx={{display:'flex', flexDirection:'row', alingItems: 'center'}}>
      <Avatar sx={{ bgcolor: grey[500], marginRight: '10px' }} variant="rounded" src={iconFromId(item.icon)}/>
      <Typography variant="body2" sx={{ color: evoRarity[item.rarity] }}>{item.id}</Typography>
    </Box>
  )
}