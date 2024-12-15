import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

export interface TBuild {
  id: number;
  name: string;
  items: string[];
}

interface SelectedBuilds {
  [account: string]: {
    [hero: string]: number;
  };
}

interface BuildsContext {
  builds: {
    [id: number]: TBuild;
  };
  selectedBuilds: SelectedBuilds;
  saveBuild: (build: TBuild) => void;
  saveSelectedBuild: (
    playerName: string,
    hero: string,
    buildId: number,
  ) => void;
}

export const BuildsContext = createContext({} as BuildsContext);

export const BuildsProvider: FC<PropsWithChildren> = ({ children }) => {
  const [builds, setBuildsState] = useState<{ [id: number]: TBuild }>({});
  const [selectedBuilds, setSelectedBuilds] = useState<SelectedBuilds>({});

  useEffect(() => {
    window.electron.ipcRenderer.on('get_all_builds', (arg: any) => {
      setBuildsState(arg || {});
    });

    window.electron.ipcRenderer.on('get_selected_builds', (arg: any) => {
      setSelectedBuilds(arg || {});
    });

    loadBuilds();
  }, []);

  const loadBuilds = () => {
    window.electron.ipcRenderer.sendMessage('get_all_builds');
    window.electron.ipcRenderer.sendMessage('get_selected_builds');
  };

  const saveBuild = (build: TBuild) => {
    window.electron.ipcRenderer.sendMessage('save_build', build);
    setBuildsState({
      ...builds,
      [build.id]: build,
    });
  };

  const saveSelectedBuild = (
    playerName: string,
    hero: string,
    buildId: number,
  ) => {
    window.electron.ipcRenderer.sendMessage('save_selected_build', {
      playerName,
      playerClass: hero,
      buildId,
    });
    setSelectedBuilds({
      ...selectedBuilds,
      [playerName]: {
        ...selectedBuilds[playerName],
        [hero]: buildId,
      },
    });
  };

  const value = useMemo(
    () => ({
      builds,
      selectedBuilds,
      saveBuild,
      saveSelectedBuild,
    }),
    [builds, selectedBuilds, saveBuild, saveSelectedBuild],
  );

  return (
    <BuildsContext.Provider value={value}>{children}</BuildsContext.Provider>
  );
};

export const useBuildsContext = () => useContext(BuildsContext);
