import { EvoItemRestictions } from '../../restrictions';
import { EvoRarity } from '../../rarity';
import { EvoItem } from '../item';

export const imp2Items: { [id: string]: EvoItem } = {
  "Atalanta's Speed": {
    id: "Atalanta's Speed",
    restriction: EvoItemRestictions.ARCHER,
    rarity: EvoRarity.LEGENDARY,
    icon: 'BTNINV_Weapon_Crossbow_10',
    description: '',
    effects: ['+4000 Damage', '+400 Agility'],
    source: 'Dragon Fortress',
    sourceShort: 'Imp 2',
    materialFor: ['Hatred']
  },
  "Blaze's Touch": {
    id: "Blaze's Touch",
    restriction: EvoItemRestictions.MELEE_AGI,
    rarity: EvoRarity.LEGENDARY,
    icon: 'BTNCleavingAttack',
    description: '',
    effects: [
      '+4800 Damage',
      'Passive: Deals 40% damage to the enemies around the target.',
    ],
    source: 'Dragon Fortress',
    sourceShort: 'Imp 2',
    materialFor: ['Hephaestus']
  },
  'Dragon Steel': {
    id: 'Dragon Steel',
    restriction: EvoItemRestictions.MELEE,
    rarity: EvoRarity.LEGENDARY,
    icon: 'BTNAdvancedCreatureCarapace',
    description: '',
    effects: ['+1000 Damage', '+275 Armor'],
    source: 'Dragon Fortress',
    sourceShort: 'Imp 2',
    materialFor: ["Titan's Mitt"]
  },
  "Hannah's Legend": {
    id: "Hannah's Legend",
    restriction: EvoItemRestictions.INT,
    rarity: EvoRarity.LEGENDARY,
    icon: 'BTNINV_Wand_04',
    description: '',
    effects: [
      '+975 Intelligence',
      '+5000 Mana',
      '+5% Cooldown reduction',
      'Passive: Block a spell. Cooldown 30s.',
    ],
    source: 'Dragon Fortress',
    sourceShort: 'Imp 2',
  },
  // keeping both currently. Might delete Helm later.
  'Helm of Domination': {
    id: 'Helm of Domination',
    restriction: EvoItemRestictions.TANK,
    rarity: EvoRarity.LEGENDARY,
    icon: 'BTNKingArthas',
    description: '',
    effects: ['+340 Armor'],
    source: 'Dragon Fortress',
    sourceShort: 'Imp 2',
    materialFor: ['Helm of the Overlord']
  },
  'Wrath of the Lich King': {
    id: 'Wrath of the Lich King',
    restriction: EvoItemRestictions.TANK,
    rarity: EvoRarity.LEGENDARY,
    icon: 'BTNKingArthas',
    description: '',
    effects: ['+340 Armor'],
    source: 'Dragon Fortress',
    sourceShort: 'Imp 2',
  },
  "Megaera's Edge": {
    id: "Megaera's Edge",
    restriction: EvoItemRestictions.MELEE,
    rarity: EvoRarity.LEGENDARY,
    icon: 'BTNSpell_Holy_SealOfFury',
    description: '',
    effects: [
      '+5000 Damage',
      "Passive: Reduce enemy's AS by 8% and deals 8,000 Magic DPS.",
    ],
    source: 'Dragon Fortress',
    sourceShort: 'Imp 2',
    materialFor: ['Demon Blade']
  },
  'The Impaler': {
    id: 'The Impaler',
    restriction: EvoItemRestictions.MELEE_AGI,
    rarity: EvoRarity.LEGENDARY,
    icon: 'BTNDark',
    description: '',
    effects: [
      '+2000 Damage',
      '+400 Agility',
      '+20% Attack speed',
      'Passive: Second basic attack deals bonus 5,500 Pure Damage.',
    ],
    source: 'Dragon Fortress',
    sourceShort: 'Imp 2',
    materialFor: ['Ultimate Dragon Blade']
  },
  'Blessing of Dragon': {
    id: 'Blessing of Dragon',
    restriction: EvoItemRestictions.FORGE,
    rarity: EvoRarity.GODLY,
    icon: 'BTNdeathwing',
    description: '',
    effects: [],
    source: 'Dragon Fortress',
    sourceShort: 'Imp 2',
    materialFor: ["Draconic Trinity", "Eve", "Blessing of Fire", "Holy Grimoire", "Crisis Core"]
  },
  'Dragon Egg': {
    id: 'Dragon Egg',
    restriction: EvoItemRestictions.FORGE,
    rarity: EvoRarity.GODLY,
    icon: 'BTNSorceressRuby',
    description: '',
    effects: [],
    source: 'Dragon Fortress',
    sourceShort: 'Imp 2',
    materialFor: ["Draconic Trinity", "Imp's Tail", "Ancient Omen"]
  },
  'Dragon Tooth': {
    id: 'Dragon Tooth',
    restriction: EvoItemRestictions.FORGE,
    rarity: EvoRarity.GODLY,
    icon: 'BTNSpiderFangDH',
    description: '',
    effects: [],
    source: 'Dragon Fortress',
    sourceShort: 'Imp 2',
    materialFor: ["Dragon Bow", "Draconic Trinity", "Demonic Flame", "Calamity", "Cane of Byrna", "Eliot"]
  },
  'Dragon Stone': {
    id: 'Dragon Stone',
    restriction: EvoItemRestictions.FORGE,
    rarity: EvoRarity.GODLY,
    icon: 'Dragonstone',
    description: 'A stone of a mythical creature.',
    effects: [],
    source: 'Dragon Fortress',
    materialFor: ["Ancient Omen", "Calamity", "Celestial Wand", "Everlasting Youth", "Holy Grimoire", "Link to the Past", "Prismatic Barrier", "Sovereign Sword", "Cane of Byrna", "Crisis Core", "Consecration", "Eliot", "Moon Pearl", "Sword of Akasha"]
  },
};
