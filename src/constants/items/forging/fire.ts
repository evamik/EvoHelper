import { EvoItem } from '../item';
import { EvoItemRestictions } from '../../restrictions';
import { EvoRarity } from '../../rarity';

export const fireItems: { [id: string]: EvoItem } = {
  'Demon Blade': {
    id: 'Demon Blade',
    restriction: EvoItemRestictions.MELEE,
    rarity: EvoRarity.FORGED,
    icon: 'DemonBlade',
    description:
      "The legendary blade of the demon warlord. Rumors say that whoever gets cut by the blade erupts the sins stored by the victim's spirit, burning it in hell.",
    effects: [
      '+6400 Damage',
      "Passive: Reduces enemy's AS by 15%, deals 12,000 Magic DPS, and increase your damage dealt by 10%",
    ],
    crafting: ["Megaera's Edge", 'Fire Stone'],
    source: 'Fire merchant',
  },
  'Ultimate Dragon Blade': {
    id: 'Ultimate Dragon Blade',
    restriction: EvoItemRestictions.MELEE_AGI,
    rarity: EvoRarity.FORGED,
    icon: 'UltimateDragonBlade',
    description:
      'Enchanted by the tooth of the dragon and the tail of the demon, The Impaler gains insurmountable power and has evolved to the Ultimate Dragon Blade.',
    effects: [
      '+3300 Damage',
      '+500 Agility',
      '+25% Attack Speed',
      'Passive: Second basic attack deals 7000 bonus Pure Damage and heals for 20% of the bonus Pure Damage dealt.',
    ],
    crafting: ['The Impaler', 'Fire Stone'],
    source: 'Fire merchant',
  },
  Hephaestus: {
    id: 'Hephaestus',
    restriction: EvoItemRestictions.TEMPLAR_NINJA,
    rarity: EvoRarity.FORGED,
    icon: 'Hephaestus',
    description:
      'Known as the Embodiment of Magma, this blade is the ultimate weapon of Fire used by the God of Fire. It is rumored to burn thousands of wicked sinners with a single strike.',
    effects: [
      '+6400 Damage',
      'Active: Next 3 basic attacks will deal [15000 + 75% Agi] Magic Damage to enemies around the target. Cooldown 20s.',
      'Passive: Deals 35% damage to tshe enemies around the target.',
    ],
    crafting: ["Blaze's Touch", 'Fire Stone'],
    source: 'Fire merchant',
  },
  Hatred: {
    id: 'Hatred',
    restriction: EvoItemRestictions.ARCHER,
    rarity: EvoRarity.FORGED,
    icon: 'Hatred',
    description:
      'Fueled by rage, the Bow of the Devil unleashes its full power by manifesting the hatred of hell.',
    effects: [
      '+4400 Damage',
      '+600 Agility',
      'Active: Increases basic attacks by [6666 + 33% Agi] bonus Magic Damage for 10 seconds. Cooldown 25s.',
    ],
    crafting: ["Atalanta's Speed", 'Fire Stone'],
    source: 'Fire merchant',
  },
  'Tiger Claw': {
    id: 'Tiger Claw',
    restriction: EvoItemRestictions.SHAPESHIFTER,
    rarity: EvoRarity.FORGED,
    icon: 'TigerClaw',
    description:
      'Cut from the hand of the behemoth, it resembles the claw of a deadly tiger of hell.',
    effects: [
      '+1250 Intelligence',
      '+30% Attack Speed',
      'Passive: 35% chance to deal 15,000 Magic Damage a in huge AOE.',
    ],
    crafting: ['Claw of Midnight', 'Fire Stone'],
    source: 'Fire merchant',
  },
  'Demonforge Plate': {
    id: 'Demonforge Plate',
    restriction: EvoItemRestictions.MELEE,
    rarity: EvoRarity.FORGED,
    icon: 'DemonforgePlate',
    description:
      'The plate of the demon lord. Forged by incinerating the Dragon Plate and infusing it with the core of hell.',
    effects: [
      '+400 Armor',
      'Passive: -15% Damage Taken from Attacks.',
      'Passive: Gains immolation that deals 10000 Magic DPS to all nearby enemies.',
    ],
    crafting: ['Dragonforge Plate', 'Fire Stone'],
    source: 'Fire merchant',
  },
  'Rising Ash': {
    id: 'Rising Ash',
    restriction: EvoItemRestictions.INQUISITOR,
    rarity: EvoRarity.FORGED,
    icon: 'RisingAsh',
    description:
      'Infused with the burning ashes of the phoenix, the elements of stored in Tremor react and gain tremendous power.',
    effects: [
      '+200 Armor',
      '+5000 Mana',
      '+15% Cooldown Reduction',
      'Passive: Provide 25 Armor to all allies and 10% Damage to all allies within 1,000 AOE.',
    ],
    crafting: ['Tremor', 'Fire Stone'],
    source: 'Fire merchant',
    materialFor: ['Ancient Omen']
  },
  'Ring of the Hell Lord': {
    id: 'Ring of the Hell Lord',
    restriction: EvoItemRestictions.INT,
    rarity: EvoRarity.FORGED,
    icon: 'RingOfTheHellLord',
    description:
      'The pain of burned demons infused into a ring that glows in devil energy.',
    effects: [
      '+1300 Intelligence',
      '+45 Mana regeneration',
      '+10% Cooldown Reduction',
      'Active: Deals [44,444 + 44% Max MP] Pure Damage in an AOE. Cooldown 30s.',
    ],
    crafting: ['Vagabond', 'Fire Stone'],
    source: 'Fire merchant',
  },
  "Queen's Agony": {
    id: "Queen's Agony",
    restriction: EvoItemRestictions.INT,
    rarity: EvoRarity.FORGED,
    icon: 'QueensAgony',
    description:
      "As the battle between heaven and hell rage, the queen of the royal watchers served treason for betraying the angels in exchange for hell's offer for more power. Her power has been tainted and now is filled with agony.",
    effects: [
      '+1350 Intelligence',
      '+10% Cooldown Reduction',
      'Passive: Increase Magic Damage up to 13.32% based on current MP(Min: 6.66%).',
    ],
    crafting: ['Demon Chanter', 'Fire Stone'],
    source: 'Fire merchant',
  },
  'Heart of Behemoth': {
    id: 'Heart of Behemoth',
    restriction: EvoItemRestictions.ALL_CLASSES,
    rarity: EvoRarity.FORGED,
    icon: 'HeartOfTheBehemoth',
    description:
      'By concentrating the fiery element of the orb of the dragon, the power of hell is unleashed.',
    effects: ['+500 All stats', '+20% Cooldown Reduction'],
    crafting: ['Legendary Dragon Orb', 'Fire Stone'],
    source: 'Fire merchant',
    materialFor: ['Crisis Core']
  },
  Remorse: {
    id: 'Remorse',
    restriction: EvoItemRestictions.ARCHER,
    rarity: EvoRarity.FORGED,
    icon: 'Remorse',
    description:
      'The bow used to deliver the death sentence to demonic creatures.',
    effects: [
      '+6800 Damage',
      '+10% Cooldown Reduction',
      'Active: Gains 4,200 Damage for 10 seconds. Cooldown 25s.',
    ],
    crafting: ['Dragon Bow', 'Fire Stone'],
    source: 'Fire merchant',
  },
  'Eternal Phoenix': {
    id: 'Eternal Phoenix',
    restriction: EvoItemRestictions.ALL_CLASSES,
    rarity: EvoRarity.FORGED,
    icon: 'EternalPhoenix',
    description:
      'Raised from the ashes, the wings of the phoenix are regarded to burn everything along its path.',
    effects: [
      '+500 All stats',
      '+30% Attack Speed',
      '+120 Movement Speed',
      'Active: Teleport to a target location. Cooldown 30s.',
    ],
    crafting: ['Wings of Hell', 'Fire Stone'],
    source: 'Fire merchant',
  },
};
