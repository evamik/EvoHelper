import { EvoItemRestictions } from '../../restrictions';
import { EvoRarity } from '../../rarity';
import { EvoItem } from '../item';

export const agonyItems: { [id: string]: EvoItem } = {
  "Agony": {
    id: "Agony",
    restriction: EvoItemRestictions.FORGE,
    rarity: EvoRarity.GODLY,
    icon: 'Agony',
    description: 'How can you reach this far?',
    effects: [],
    source: 'Agony merchant',
    sourceShort: '4M gold, 2k shards',
    materialFor: ['Blessing of Agony']
  },
  "Blessing of Agony": {
    id: "Blessing of Agony",
    restriction: EvoItemRestictions.ULTIMATE_FORGE,
    rarity: EvoRarity.FORGED,
    icon: 'BlessingOfAgony',
    description: 'Sleepless nights.',
    effects: [],
    crafting: [
      'Essence of Nightmare',
      'Essence of Hell',
      'Fire Rising',
      'Agony',
    ],
    source: 'Agony merchant',
    materialFor: ['Eve']
  },
}