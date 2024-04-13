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
    materialFor: ['The Executioner']
  },
  Emerald: {
    id: 'Emerald',
    restriction: EvoItemRestictions.FORGING_MATERIAL,
    rarity: EvoRarity.UNCOMMON,
    icon: 'NatureFragment',
    description: 'A gemstone that shines in viridescent color.',
    effects: [],
    source: 'Ancient Soul',
    materialFor: ["Emerald Blade", "Crystallized Emerald Blade", "Pandora", "Horadric Staff", "Scepter of Mastery", "Final Emerald Blade", "Dragon Totem", "Windspeaker", "Cane of Byrna"]
  },
  Sapphire: {
    id: 'Sapphire',
    restriction: EvoItemRestictions.FORGING_MATERIAL,
    rarity: EvoRarity.RARE,
    icon: 'Sapphire',
    description: 'A bright gemstone that reflects the color of the ocean.',
    effects: [],
    source: 'Ancient Soul',
    materialFor: ["Song of Ice", "Pandora", "Esper's Ring", "Cryocell", "Winter's Soul", "Windspeaker", "Book of Hylia", "Concentrated Energy", "Celestial Wand"]
  },
  Amethyst: {
    id: 'Amethyst',
    restriction: EvoItemRestictions.FORGING_MATERIAL,
    rarity: EvoRarity.EPIC,
    icon: 'Amethyst',
    description: 'A shiny gemstone, mysterious in color.',
    effects: [],
    source: 'Ancient Soul',
    materialFor: ["Hand of God", "Pandora", "Summoning Codex", "Tainted Neptune's Eye", "Mystral Staff", "Vagabond", "Soulshot", "Cruel Blade", "Drakath's Armor"]
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
    materialFor: ["Blade of the Ruined King", "Pandora", "Hell Diamond", "Summoning Codex", "Hades' Artifact", "Bethrezen's Flame", "Esper's Ring", "Darkforge Plate", "Glow Orb", "Destruction", "Blasting Rod", "Sword of the Occult", "Scarlet Phantom", "Ancient Omen", "Sinister Staff"]
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
    materialFor: ["Windforce", "Windtalker", "Magic Mirror", "Tainted Neptune's Eye", "Tremor", "Paw of Lightning", "Esper's Ring", "Hyperion", "Glow Orb", "Vagabond", "Deathgazer", "Eclair La Demes", "Starlight Crystal", "Blinding Light of Destiny", "Dragonforge Plate", "Blade of Despair", "Essence of Nightmare", "Essence of Hell", "Link to the Past", "Prismatic Barrier", "Sovereign Sword", "Consecration", "Titan's Mitt"]
  },
};
