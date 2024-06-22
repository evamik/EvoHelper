import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import Divider from '@mui/material/Divider';
import { ItemIconAndTitle } from './Item';
import { lightBlue } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import { evoItems } from '../../constants/items';
import { useMemo, useState } from 'react';
import { DependencyObj, getItemArrFlatDependenciesObject } from '../util/crafting';
import { godlyItems } from "../../constants/items/forging/godly";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export const GodlyProgress = ({ items }: { items: Array<any>}) => {
  const [expanded, setExpanded] = useState(false);

  const isGodlyFinished = useMemo(() => {
    if (!items || !Array.isArray(items)) {
      return true;
    }

    for (const item of items) {
      if (godlyItems.hasOwnProperty(item)) {
        return true;
      }
    }

    return false;
  }, [items]);

  const [missingForGodly, _] = useMemo (() => {
    if (!items || !Array.isArray(items) || isGodlyFinished) {
      return [{ }, []] as [DependencyObj, string[]];
    } else {
      return getItemArrFlatDependenciesObject(
        ['Twilight', 'Eve'],
        items
      )
    }
  }, [items, isGodlyFinished]);


  const handleExpandClick = () => {
    setExpanded((prev) => !prev);
  };

  if (isGodlyFinished) {
    return null;
  }
  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
        <Typography>Godly progress</Typography>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </Box>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        {
          Object.keys(missingForGodly).map((key) => {
            return (
              <MissingItem id={key} amount={missingForGodly[key]} key={key} />
            );
          })
        }
      </Collapse>
      <Divider sx={{ marginTop: '10px', marginBottom: '10px' }}/>

    </>
  )
}


function MissingItem(props: {id: string, amount: number}) {
  const { id, amount } = props;
  const item = evoItems[id as keyof typeof evoItems];

  if (!item) {
    return (
      <Typography>
        {amount} x {id}
      </Typography>
    );
  }
  return (
    <Box sx={{display:'flex', flexDirection:'row', alignItems: 'center', justifyContent: 'space-between'}}>
      <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
        <Typography sx={{ width: '30px'}}>{amount}  </Typography>
        <ItemIconAndTitle item={item} />
      </Box>
      { item.sourceShort && <Typography variant="body2" sx={{ color: lightBlue[300] }}>{item.sourceShort}</Typography> }
    </Box>
  )
}