import { EvoItemRestictions } from '../../restrictions';
import { EvoRarity } from '../../rarity';
import { EvoItem } from '../item';

export const nagaItems: { [id: string]: EvoItem } = {
  'Death Reaver': {
    id: 'Death Reaver',
    restriction: EvoItemRestictions.MELEE,
    rarity: EvoRarity.RARE,
    icon: 'BTNOrcMeleeUpThree',
    description:
      'This Reaver is forged from the fiery depths of Evergard. Its pure fiery strength is unmatched, even by axes of hardened steel.',
    effects: ['+600 Damage', '+100 Strength'],
    source: 'Naga Ruins',
  },
  'Ghost Armor': {
    id: 'Necklace of Seven Souls',
    restriction: EvoItemRestictions.INT,
    rarity: EvoRarity.RARE,
    icon: 'BTNCloakOfFlames',
    description:
      'Woven from the finest fabric and enchanted with wraith crystals, the ghost armor is the perfect clothing for those seeking melee combat.',
    effects: ['+65 Armor'],
    source: 'Naga Ruins',
  },
  Homunculus: {
    id: 'Homunculus',
    restriction: EvoItemRestictions.INT,
    rarity: EvoRarity.RARE,
    icon: 'BTNBrilliance',
    description:
      "The Homunculus's sheer magical force is enough to break even the most powerful of mages.",
    effects: ['+250 Intelligence'],
    source: 'Naga Ruins',
  },
  'Silver Arrows': {
    id: 'Silver Arrows',
    restriction: EvoItemRestictions.ARCHER,
    rarity: EvoRarity.RARE,
    icon: 'BTNMoonArrow',
    description: 'The refined arrows of an infamous ghost hunter.',
    effects: ['+1000 Damage'],
    source: 'Naga Ruins',
  },
  'Staff of the Naga': {
    id: 'Staff of the Naga',
    restriction: EvoItemRestictions.INT,
    rarity: EvoRarity.RARE,
    icon: 'BTNINV_Wand_09',
    description:
      'The Staff of the Naga is a unique staff; it holds extraordinary power within which, if used properly, could unleash chaos.',
    effects: ['+200 Intelligence', '+1100 Health'],
    source: 'Naga Ruins',
  },
  'Synergy Blade': {
    id: 'Synergy Blade',
    restriction: EvoItemRestictions.MELEE_AGI,
    rarity: EvoRarity.RARE,
    icon: 'BTNMoonStone',
    description:
      'The Synergy Blade is an unusual blade; its past is shrouded in mystery and its craftmanship questioned. But none doubt its battle prowress.',
    effects: ['+700 Damage', '+75 Agility'],
    source: 'Naga Ruins',
  },
  Frostbrand: {
    id: 'Frostbrand',
    restriction: EvoItemRestictions.MELEE,
    rarity: EvoRarity.EPIC,
    icon: 'BTNFrostSword',
    description:
      'Frostbrand may be affliated with the gauntlets, Firebrand, but whatever the truth may be, the Frostbrand is one hell of a sword.',
    effects: ['+400 Damage', 'Passive: Slows the target by 15%.'],
    source: 'Naga Ruins',
    materialFor: ['Song of Ice']

  },
  'The Spirit Shroud': {
    id: 'The Spirit Shroud',
    restriction: EvoItemRestictions.ALL_CLASSES,
    rarity: EvoRarity.EPIC,
    icon: 'BTNWindsCloak',
    description:
      'This ghostly shroud of armor is extremely light yet gives superior defence, making it extremely useful.',
    effects: ['+50 All stats', '+20% Spell resist'],
    source: 'Naga Ruins',
  },
  "Hydra's Bane": {
    id: "Hydra's Bane",
    restriction: EvoItemRestictions.FORGE,
    rarity: EvoRarity.EPIC,
    icon: 'BTNHydraWarStomp',
    description:
      'The tail of the ancient beast, Leviathan. Used in crafting strong weapons due to how sharp and deadly it is.',
    effects: [],
    source: 'Naga Ruins',
    materialFor: ["Contúirteacha", "Emerald Blade", "Feral Totem", "Moonfang", "Hydra's Head", "The Executioner"]
  },
};
