import { FC, useEffect, useRef, useState } from 'react';
import Grid from '@mui/material/Grid';
import { useParams } from 'react-router-dom';
import {
  Autocomplete,
  Button,
  IconButton,
  TextField,
  Tooltip,
  Box,
  Typography,
  Divider,
} from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import { useCharacterContext } from '../contexts/characterContext';
import { EvoStash } from '../components/Stash';
import { GodlyProgress } from '../components/GodlyProgress';
import { BackButton } from '../components/BackButton';
import { TBuild, useBuildsContext } from '../contexts/buildsContext';
import { BuildCard } from '../components/BuildCard';
import { BuildDropdownElement } from '../components/BuildDropdownElement';
import theme from '../theme';
import { BuildProgress } from '../components/BuildProgress';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import { ExportBuildButton } from '../components/ExportBuildButton';

export const CharacterPage: FC = () => {
  const { getCharacter, onLoadClick } = useCharacterContext();
  const { builds, selectedBuilds, saveSelectedBuild } = useBuildsContext();
  const { accountURL, id } = useParams();
  const [selectedBuild, setSelectedBuild] = useState<number | null>(null);

  const character = getCharacter(accountURL, id);
  if (!accountURL || !id || !character) {
    return null;
  }

  useEffect(() => {
    if (selectedBuilds[accountURL]?.[character.hero]) {
      setSelectedBuild(selectedBuilds[accountURL][character.hero]);
    }
  }, [selectedBuilds, accountURL, character]);

  const items = character
    ? [...character.inventory, ...character.stashes.flat()]
    : null;

  useEffect(() => {
    console.log('CharacterPage items:', items);
  }, [items]);

  const handleSelectBuild = (buildId: number) => {
    setSelectedBuild(buildId);
    saveSelectedBuild(accountURL, character.hero, buildId);
  };

  return (
    <div>
      <BackButton />
      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
        <Box sx={{ minWidth: '300px' }}>
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
        </Box>
        <BuildComponent
          builds={builds}
          selectedBuild={selectedBuild}
          items={items}
          handleSelectBuild={handleSelectBuild}
        />
      </Box>
      <ExportBuildButton
        name={character.hero}
        items={character.inventory}
        tooltipTitle="Export inventory as build (copy to clipboard)"
      />

      <Divider sx={{ marginTop: '10px', marginBottom: '10px' }} />

      {items && <GodlyProgress itemIdsList={items} />}

      <BuildProgress
        itemIdsList={items || []}
        buildItems={selectedBuild ? builds[selectedBuild].items : []}
      />

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <Button variant="contained" onClick={() => onLoadClick(character)}>
          Load
        </Button>
        <Tooltip
          sx={{ marginLeft: '15px' }}
          title={
            <Box>
              <Typography variant="body2">
                Press Load - it will set hotkey for A button.
              </Typography>
              <Typography variant="body2">Head to wc3 and press A.</Typography>
              <Typography variant="body2">Let it do its thing.</Typography>
              <Typography variant="caption">
                Tip: remember to turn off caps lock and switch to English
              </Typography>
            </Box>
          }
        >
          <InfoIcon color="primary" />
        </Tooltip>
      </Box>
    </div>
  );
};

interface BuildComponentProps {
  builds: { [id: number]: TBuild };
  selectedBuild: number | null;
  items: string[] | null;
  handleSelectBuild: (buildId: number) => void;
}

const BuildComponent: FC<BuildComponentProps> = ({
  builds,
  selectedBuild,
  items,
  handleSelectBuild,
}) => {
  useEffect(() => {
    console.log(items);
  }, [items]);
  return (
    <>
      {builds && (
        <Box sx={{ paddingLeft: '36px', justifyContent: 'start' }}>
          <Autocomplete
            value={selectedBuild}
            options={Object.keys(builds).map((key) => Number(key))}
            getOptionLabel={(option) => builds[option].name}
            style={{ width: 300 }}
            renderInput={(params) => (
              <TextField {...params} label="Select Build" />
            )}
            renderOption={(props, option) => (
              <li {...props} key={option} style={{ padding: 0 }}>
                <BuildDropdownElement build={builds[option]} />
              </li>
            )}
            PaperComponent={({ children }) => (
              <Box
                sx={{
                  width: 'fit-content',
                  background: theme.palette.grey[800],
                }}
              >
                {children}
              </Box>
            )}
            onChange={(_, value) => {
              if (value) {
                const build = builds[value];
                if (build) {
                  handleSelectBuild(build.id);
                }
              }
            }}
          />
          {selectedBuild && (
            <BuildCard build={builds[selectedBuild]} playerItems={items} />
          )}
        </Box>
      )}
    </>
  );
};
