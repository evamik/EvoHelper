import { EvoItemRestictions } from '../../restrictions';
import { EvoRarity } from '../../rarity';
import { EvoItem } from '../item';

export const ancientSoul: { [id: string]: EvoItem } = {
  // Ancient Soul
  Silver: {
    id: 'Silver',
    restriction: EvoItemRestictions.FORGING_MATERIAL,
    rarity: EvoRarity.COMMON,
    icon: 'Silver',
    description: 'A stone that glows in bright quicksilver color.',
    effects: [],
    source: 'Ancient Soul',
  },
  Emerald: {
    id: 'Emerald',
    restriction: EvoItemRestictions.FORGING_MATERIAL,
    rarity: EvoRarity.UNCOMMON,
    icon: 'NatureFragment',
    description: 'A gemstone that shines in viridescent color.',
    effects: [],
    source: 'Ancient Soul',
  },
  Sapphire: {
    id: 'Sapphire',
    restriction: EvoItemRestictions.FORGING_MATERIAL,
    rarity: EvoRarity.RARE,
    icon: 'Sapphire',
    description: 'A bright gemstone that reflects the color of the ocean.',
    effects: [],
    source: 'Ancient Soul',
  },
  Amethyst: {
    id: 'Amethyst',
    restriction: EvoItemRestictions.FORGING_MATERIAL,
    rarity: EvoRarity.EPIC,
    icon: 'Amethyst',
    description: 'A shiny gemstone, mysterious in color.',
    effects: [],
    source: 'Ancient Soul',
  },
  Ruby: {
    id: 'Ruby',
    restriction: EvoItemRestictions.FORGING_MATERIAL,
    rarity: EvoRarity.LEGENDARY,
    icon: 'Ruby',
    description:
      'A very rare gemstone with very high value. Glows in crimson red and shines very brightly.',
    effects: [],
    source: 'Ancient Soul',
  },
  Diamond: {
    id: 'Diamond',
    restriction: EvoItemRestictions.FORGING_MATERIAL,
    rarity: EvoRarity.GODLY,
    icon: 'Diamond',
    description:
      'The rarest gemstone to be ever discovered. It shimmers very brightly and makes light bend on its surface.',
    effects: [],
    source: 'Ancient Soul',
  },
};
