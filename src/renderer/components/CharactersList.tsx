import { Class } from '../../main/load';
import Box from '@mui/material/Box';
import { CharacterCard } from './CharacterCard';
import { useMemo } from 'react';
import { tier4Classes } from '../../constants/classes';
import { useSettingsContext } from '../../settingsContext';

interface CharactersListProps {
  list: Class[]
}

export function CharactersList({ list }: CharactersListProps) {
  const { onlyT4Classes, favouriteClasses } = useSettingsContext();
  const favouriteClassList = useMemo(() => {
    return list.filter((character) => {
        const filteredByT4 = onlyT4Classes && !tier4Classes.includes(character.hero);
        const isFavourite = favouriteClasses.includes(character.hero);
        return isFavourite && !filteredByT4
      }
    );
  }, [list, onlyT4Classes, favouriteClasses]);

  const restClassesList = useMemo(() => {
      return list.filter((character) => {
          const filteredByT4 = onlyT4Classes && !tier4Classes.includes(character.hero);
          const isFavourite = favouriteClasses.includes(character.hero);
          return !isFavourite && !filteredByT4
        }
      );
    }, [list, onlyT4Classes, favouriteClasses]
  )
  return (
    <Box>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', paddingBottom: '30px' }}>
        {favouriteClassList.map((character) => (
          <CharacterCard
            key={`${character.hero}_${character.level}`}
            character={character}
            favourite={true}
          />
        ))}
      </Box>
      <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
        {restClassesList.map((character) => (
          <CharacterCard
            key={`${character.hero}_${character.level}`}
            character={character}
          />
        ))}
      </Box>
    </Box>
  )
}