import { FC } from 'react';
import Grid from '@mui/material/Grid';
import { Link, useParams } from 'react-router-dom';
import { Button } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { useCharacterContext } from '../contexts/characterContext';
import { EvoStash } from '../components/Stash';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Tooltip from '@mui/material/Tooltip';
import { GodlyProgress } from '../components/GodlyProgress';

export const CharacterPage: FC = () => {
  const { getCharacter, onLoadClick } = useCharacterContext();
  const { accountURL, id } = useParams();

  const character = getCharacter(accountURL, id);
  if (!accountURL || !id || !character) {
    return null;
  }

  const items = character ? [...character.inventory, ...character.stashes.flat()] : null;

  return (
    <div>
      <IconButton style={{ left: -10 }} component={Link} to={`/characters/${accountURL}`}>
        <ArrowBackIcon />
        <Typography variant="caption">Go back</Typography>
      </IconButton>
      <Typography variant="h6">
        {character.hero} {character.level && ` - ${character.level} level`}
      </Typography>
      <Typography variant="caption">Gold: {character.gold}</Typography>
      <br />
      <Typography variant="caption">
        PowerShards: {character.powerShards}
      </Typography>
      <Grid container>
        <Grid item sx={{ marginRight: '20px' }}>
          <EvoStash itemIds={character.inventory} />
        </Grid>
        <Grid item>
          <EvoStash itemIds={character.stashes[0]} />
        </Grid>
        <Grid item>
          <EvoStash itemIds={character.stashes[1]} />
        </Grid>
        <Grid item>
          <EvoStash itemIds={character.stashes[2]} />
        </Grid>
        <Grid item>
          <EvoStash itemIds={character.stashes[3]} />
        </Grid>
        <Grid item>
          <EvoStash itemIds={character.stashes[4]} />
        </Grid>
        <Grid item>
          <EvoStash itemIds={character.stashes[5]} />
        </Grid>
      </Grid>

      <Divider sx={{ marginTop: '10px', marginBottom: '10px' }}/>

      {items && <GodlyProgress itemIdsList={items} />}

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <Button
          variant="contained"
          onClick={() => onLoadClick(character)}
        >
          Load
        </Button>
        <Tooltip
          sx={{ marginLeft: '15px'}}
          title={
          <Box>
            <Typography variant="body2">Press Load - it will set hotkey for A button.</Typography>
            <Typography variant="body2">Head to wc3 and press A.</Typography>
            <Typography variant="body2">Let it do its thing.</Typography>
            <Typography variant="caption">
              Tip: remember to turn off caps lock and switch to English
            </Typography>
        </Box>
        }>
          <InfoIcon color="primary"/>
        </Tooltip>
      </Box>
    </div>
  );
};
