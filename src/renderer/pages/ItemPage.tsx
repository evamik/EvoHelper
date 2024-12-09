import { Link, useParams } from 'react-router-dom';
import { EvoItem } from '../components/Item';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { useItemContext } from '../contexts/itemsContext';

export function ItemPage() {
  const { id } = useParams();
  const { items } = useItemContext();
  if (!id || !items.hasOwnProperty(id)) {
    return <h2>How did you end up here?</h2>
  }
  
  const navigate = useNavigate();

  return (
    <div>
      <IconButton style={{ left: -10 }} onClick={() => navigate(-1)}>
        <ArrowBackIcon />
        <Typography variant="caption"/>
      </IconButton>
      <EvoItem item={items[id]}/>
    </div>
  );
}