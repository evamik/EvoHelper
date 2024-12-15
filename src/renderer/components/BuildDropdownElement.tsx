import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { EvoStash } from './Stash';
import { TBuild } from '../contexts/buildsContext';

interface BuildCardProps {
  build: TBuild;
}
export function BuildDropdownElement({ build }: BuildCardProps) {
  return (
    <Box sx={{ padding: '1px', margin: '3px' }}>
      <Card sx={{ paddingY: '5px', paddingX: '15px', cursor: 'pointer' }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingBottom: '1px',
          }}
        >
          <Typography variant="body1">{build.name}</Typography>
        </Box>
        <Box sx={{ paddingBottom: '2px' }}>
          <EvoStash
            sx={{ display: 'flex', flexDirection: 'row', gap: '2px' }}
            itemIds={build.items}
          />
        </Box>
      </Card>
    </Box>
  );
}
