import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useSettingsContext } from './settingsContext';
import { Class } from './main/load';

const WC3_CHUNK_SIZE = 120;

/**
 * 
 * @param loadCode The raw TEVE load code saved in wc3 documents.
 * @returns An array of strings, each containing a chunk of the load code. Handles load codes no matter the length.
 */
function splitIntoChunks(loadCode: string): string[] {
  const result: string[] = [];
    
  for (let i = 0; i < loadCode.length; i += WC3_CHUNK_SIZE) {
      result.push(loadCode.slice(i, i + WC3_CHUNK_SIZE));
  }
  
  return result;
}

interface CharacterContext {
  allClasses: {[account: string]: Class[]};
  setAllClasses: (classes: {[account: string]: Class[]}) => void;
  onLoadClick: (character: Class, legacy?: boolean) => void;
  loadClasses: () => void;
  getCharacter: (account?: string, id?: string) => Class | undefined;
}
export const CharacterContext = createContext({} as CharacterContext);
export const CharacterProvider: FC<PropsWithChildren> = ({ children }) => {
  const { wc3path, extraLines } = useSettingsContext();
  const [allClasses, setAllClasses] = useState<{[account: string]: Class[]}>({});
  const loadClasses = () => {
    window.electron.ipcRenderer.sendMessage(
      'loadData',
      // probably should get rid of contant path parts in 'frontend'
      [
        wc3path,
        'CustomMapData',
        "Twilight's Eve Evo"
      ]
    );
  };
  const getCharacter = (account?: string, id?: string) => {
    if (!account || !id) {
      return undefined;
    }
    const formattedAccount = account.indexOf('$') !== -1 ? account.replace('$', '#') : account;

    return allClasses[formattedAccount]?.find((character) => character.hero === id);
  };
  const onLoadClick = (character: Class, legacy?: boolean) => {
    if (character && character.code) {
      const loadCodeChunks = splitIntoChunks(character.code);

      window.electron.ipcRenderer.sendMessage(
        'load',
        [
          '-rp',
          '-lc',
          ...loadCodeChunks,
          '-le',
          ...extraLines.split('\n'),
        ],
        legacy,
      );
    }
  };
  const value = {
    allClasses,
    setAllClasses,
    onLoadClick,
    loadClasses,
    getCharacter,
  };
  useEffect(() => {
    window.electron.ipcRenderer.on('loadData', (arg: any) => {
      // @ts-ignore
      setAllClasses(arg);
    });
  }, []);

  return (
    <CharacterContext.Provider value={value}>
      {children}
    </CharacterContext.Provider>
  );
};
export const useCharacterContext = () => useContext(CharacterContext);
