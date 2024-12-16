type Loadout = string[];

export interface IClassLoad {
  hero: string;
  gold: string;
  level?: string;
  powerShards: string;
  inventory: Loadout;
  stashes: Loadout[];
  code: string;
}

type TItem = {
  integerId: number;
  id: string;
  name: string;
  icon: string;
  legacyItem: boolean;
  description: string;
  effects: string[];
  restriction: string;
  rarity: TRarity;
  source?: string;
  sourceShort?: string;
  recipe: string[];
  partOf: string[];
  godlyCraft: boolean;
}

type TRarity = {
  id: number;
  name: string;
  color: string;
}