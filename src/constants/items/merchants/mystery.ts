import { EvoItemRestictions } from '../../restrictions';
import { EvoRarity } from '../../rarity';
import { EvoItem } from '../item';

export const mysteryItems: { [id: string]: EvoItem } = {
  'Nether Reactor': {
    id: 'Nether Reactor',
    restriction: EvoItemRestictions.FORGE,
    rarity: EvoRarity.GODLY,
    icon: 'NetherReactor',
    description: 'Stabilizes the combination of powerful materials.',
    effects: [],
    source: 'Mystery forging items',
  },
  Mystery: {
    id: 'Mystery',
    restriction: EvoItemRestictions.ULTIMATE_FORGE,
    rarity: EvoRarity.GODLY,
    icon: 'Mystery',
    description: '???',
    effects: [],
    crafting: ['Mantle of Darkness', 'Blessing of Darkness', 'Nether Reactor'],
    source: 'Mystery forging items',
  },
  Mystical: {
    id: 'Mystical',
    restriction: EvoItemRestictions.ULTIMATE_FORGE,
    rarity: EvoRarity.GODLY,
    icon: 'Mystical',
    description: 'An unknown force.',
    effects: [],
    crafting: [
      'Mythical Weapon Piece',
      'Mythical Armor Piece',
      'Mythical Handle Piece',
      'Nether Reactor',
    ],
    source: 'Mystery forging items',
  },
  'Draconic Trinity': {
    id: 'Draconic Trinity',
    restriction: EvoItemRestictions.ULTIMATE_FORGE,
    rarity: EvoRarity.GODLY,
    icon: 'DraconicTrinity',
    description: 'The beacon of all elements.',
    effects: [],
    crafting: [
      'Dragon Tooth',
      'Dragon Egg',
      'Blessing of Dragon',
      'Nether Reactor',
    ],
    source: 'Mystery forging items',
  },
  Twilight: {
    id: 'Twilight',
    restriction: EvoItemRestictions.ULTIMATE_FORGE,
    rarity: EvoRarity.GODLY,
    icon: 'Twilight',
    description: 'The beginning.',
    effects: [],
    crafting: [
      'Mystery',
      'Draconic Trinity',
      'Hellish Behemoth',
      'Nether Reactor',
    ],
    source: 'Mystery forging items',
  },
  Eve: {
    id: 'Eve',
    restriction: EvoItemRestictions.ULTIMATE_FORGE,
    rarity: EvoRarity.GODLY,
    icon: 'Eve',
    description: 'The end.',
    effects: [],
    crafting: [
      'Blessing of Darkness',
      'Blessing of Dragon',
      'Blessing of Agony',
      'Nether Reactor',
    ],
    source: 'Mystery forging items',
  },
  Baptism: {
    id: 'Baptism',
    restriction: EvoItemRestictions.ALL_CLASSES,
    rarity: EvoRarity.GODLY,
    icon: 'Baptism',
    description:
      'The Angel of Mystery grants your wishes, creating your Class Godly Item.',
    effects: [],
    crafting: ['Twilight', 'Eve'],
    source: 'Mystery forging items',
  },
  'Light Synthesis': {
    id: 'Light Synthesis',
    restriction: EvoItemRestictions.ULTIMATE_FORGE,
    rarity: EvoRarity.GODLY,
    icon: 'LightSynthesis',
    description: 'Allows the combination of angelic relics.',
    effects: [],
    crafting: ['Nether Reactor', 'Nether Reactor'],
    source: 'Mystery forging items',
  },
};