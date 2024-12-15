import path from 'path';
import fs from 'fs/promises';

export function createBuildsService(
  getPath: (type: 'userData' | 'documents') => string,
) {
  const getDefaultBuilds = () => {
    return {};
  };

  const getDefaultSelectedBuilds = () => {
    return {};
  };

  const getBuildsFilePath = () => path.join(getPath('userData'), 'builds.json');
  const getSelectedBuildsFilePath = () =>
    path.join(getPath('userData'), 'selectedBuilds.json');
  const getBuildIdFilePath = () =>
    path.join(getPath('userData'), 'buildId.json');

  const readNextBuildId = async () => {
    try {
      const buildIdData = await fs.readFile(getBuildIdFilePath(), 'utf-8');
      const buildId = JSON.parse(buildIdData);
      return buildId.nextId;
    } catch (e) {
      console.log(e);
      const initialBuildId = { nextId: 1 };
      await fs.writeFile(getBuildIdFilePath(), JSON.stringify(initialBuildId));
      return initialBuildId.nextId;
    }
  };

  const incrementBuildId = async () => {
    try {
      const buildIdData = await fs.readFile(getBuildIdFilePath(), 'utf-8');
      const buildId = JSON.parse(buildIdData);
      buildId.nextId += 1;
      await fs.writeFile(getBuildIdFilePath(), JSON.stringify(buildId));
    } catch (e) {
      console.log(e);
    }
  };

  return {
    async getBuilds() {
      try {
        const builds = await fs.readFile(getBuildsFilePath(), 'utf-8');
        return JSON.parse(builds);
      } catch (e) {
        console.log(e);
        return getDefaultBuilds();
      }
    },
    async getNextBuildId() {
      return await readNextBuildId();
    },
    async saveBuild(build: any) {
      try {
        const builds = await this.getBuilds();
        builds[build.id] = build;
        await fs.writeFile(getBuildsFilePath(), JSON.stringify(builds));
        await incrementBuildId();
        return 0;
      } catch (e) {
        console.log(e);
        return 1;
      }
    },
    async deleteBuild(buildId: number) {
      try {
        const builds = await this.getBuilds();
        delete builds[buildId];
        await fs.writeFile(getBuildsFilePath(), JSON.stringify(builds));
        return 0;
      } catch (e) {
        console.log(e);
        return 1;
      }
    },
    async getSelectedBuilds() {
      try {
        const selectedBuilds = await fs.readFile(
          getSelectedBuildsFilePath(),
          'utf-8',
        );
        return JSON.parse(selectedBuilds);
      } catch (e) {
        console.log(e);
        return getDefaultSelectedBuilds();
      }
    },
    async saveSelectedBuild(
      playerName: string,
      playerClass: string,
      buildId: number,
    ) {
      try {
        const selectedBuilds = (await this.getSelectedBuilds()) ?? {};
        selectedBuilds[playerName] = selectedBuilds[playerName] ?? {};
        selectedBuilds[playerName][playerClass] = buildId;
        await fs.writeFile(
          getSelectedBuildsFilePath(),
          JSON.stringify(selectedBuilds),
        );
        return 0;
      } catch (e) {
        console.log(e);
        return 1;
      }
    },
    async getSelectedBuild(playerName: string, playerClass: string) {
      try {
        const selectedBuilds = await this.getSelectedBuilds();
        return selectedBuilds[playerName]?.[playerClass] || null;
      } catch (e) {
        console.log(e);
        return null;
      }
    },
  };
}
