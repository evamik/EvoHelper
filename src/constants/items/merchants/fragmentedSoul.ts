import { EvoItemRestictions } from '../../restrictions';
import { EvoRarity } from '../../rarity';
import { EvoItem } from '../item';

export const fragmentedSoul: { [id: string]: EvoItem } = {
  // Fragmented Soul
  'Quicksilver Fragment': {
    id: 'Quicksilver Fragment',
    restriction: EvoItemRestictions.FORGING_MATERIAL,
    rarity: EvoRarity.COMMON,
    icon: 'QuicksilverFragment',
    description: 'A fragment that glows in pure gray.',
    effects: [],
    source: 'Fragmented Soul',
    materialFor: ['The Executioner']
  },
  'Nature Fragment': {
    id: 'Nature Fragment',
    restriction: EvoItemRestictions.FORGING_MATERIAL,
    rarity: EvoRarity.UNCOMMON,
    icon: 'NatureFragment',
    description: 'A fragment that glows in the color bright green.',
    effects: [],
    source: 'Fragmented Soul',
    materialFor: ["Emerald Blade", "Feral Totem", "Summoning Codex", "Horadric Staff", "Scepter of Mastery", "Deathgazer", "Dragon Totem", "Ancient Omen", "Calamity", "Cane of Byrna"]
  },
  'Ocean Fragment': {
    id: 'Ocean Fragment',
    restriction: EvoItemRestictions.FORGING_MATERIAL,
    rarity: EvoRarity.RARE,
    icon: 'OceanFragment',
    description: 'A fragment that glows in bright aqua.',
    effects: [],
    source: 'Fragmented Soul',
    materialFor: ["Moonfang", "Song of Ice", "Summoning Codex", "Tainted Neptune's Eye", "Ocean Cuirass", "Winter's Soul", "Book of Hylia", "Legendary Dragon Orb", "Concentrated Energy", "Celestial Wand"]
  },
  'Lavender Fragment': {
    id: 'Lavender Fragment',
    restriction: EvoItemRestictions.FORGING_MATERIAL,
    rarity: EvoRarity.EPIC,
    icon: 'LavenderFragment',
    description: 'A fragment that glows in the color of bright magenta.',
    effects: [],
    source: 'Fragmented Soul',
    materialFor: ["Contúirteacha", "Soulshot", "Cruel Blade"]
  },
  'Blood Fragment': {
    id: 'Blood Fragment',
    restriction: EvoItemRestictions.FORGING_MATERIAL,
    rarity: EvoRarity.LEGENDARY,
    icon: 'BloodFragment',
    description: 'A fragment that glows in bright crimson.',
    effects: [],
    source: 'Fragmented Soul',
    materialFor: ["Hell Diamond", "Bethrezen's Flame", "Legendary Dragon Orb"]
  },
  'Golden Fragment': {
    id: 'Golden Fragment',
    restriction: EvoItemRestictions.FORGING_MATERIAL,
    rarity: EvoRarity.GODLY,
    icon: 'GoldenFragment',
    description: 'A fragment that glows in bright golden color.',
    effects: [],
    source: 'Fragmented Soul',
    materialFor: ["Runic Bow", "Windforce", "Magic Mirror", "Hyperion", "Starlight Crystal", "Essence of Nightmare", "Essence of Hell", "Everlasting Youth", "Holy Grimoire", "Ascended Light of Destiny", "Eliot"]
  },
};
