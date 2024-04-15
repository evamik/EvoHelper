import { EvoItemRestictions } from '../../restrictions';
import { EvoRarity } from '../../rarity';
import { EvoItem } from '../item';

export const hell3Items: { [id: string]: EvoItem } = {
  // Hell 3
  'Dark Bow': {
    id: 'Dark Bow',
    restriction: EvoItemRestictions.ARCHER,
    rarity: EvoRarity.LEGENDARY,
    icon: 'BTNTheBlackArrow',
    description:
      'The legendary tainted dark bow, used for punishing ruthless criminals.',
    effects: ['+500 Agility', '+15% Attack speed'],
    source: "Death's Realm",
    sourceShort: 'h3',
  },
  'Dusk Orb': {
    id: 'Dusk Orb',
    restriction: EvoItemRestictions.ALL_CLASSES,
    rarity: EvoRarity.LEGENDARY,
    icon: 'BTNMetalEnergy',
    description:
      'The pure tainted orb rumored to give the wielder tremendous evil powers.',
    effects: ['+8800 Health', '+6600 Mana'],
    source: "Death's Realm",
    sourceShort: 'h3',
  },
  'Hand of Blessed Light': {
    id: 'Hand of Blessed Light',
    restriction: EvoItemRestictions.ARCHER,
    rarity: EvoRarity.LEGENDARY,
    icon: 'BTNINV_Wand_05',
    description:
      'Legend has it that it was forged from the azure tears of Winter herself when she sacrificed herself to defeat the Lord of the Undying Sun and bring balance back to the world of Silvasia.',
    effects: ['+550 Intelligence', '+40 Mana Regen', '+5% Cooldown reduction'],
    source: "Death's Realm",
    sourceShort: 'h3',
  },
  'Scepter of Oblivion': {
    id: 'Scepter of Oblivion',
    restriction: EvoItemRestictions.INT,
    rarity: EvoRarity.LEGENDARY,
    icon: 'BTNINV_Sword_09',
    description: 'A very powerful weapon furnished by dark powers.',
    effects: [
      '+600 Intelligence',
      '+30 Mana Regen',
      'Active: Hex target for 1 second. Cooldown 20s.',
    ],
    source: "Death's Realm",
    sourceShort: 'h3',
  },
  Soulcutter: {
    id: 'Soulcutter',
    restriction: EvoItemRestictions.MELEE_AGI,
    rarity: EvoRarity.LEGENDARY,
    icon: 'BTNDryadDispelMagic',
    description:
      'A blade that is so sharp that it cuts through the soul of its prey.',
    effects: ['+2300 Damage', '+15% Attack speed'],
    source: "Death's Realm",
    sourceShort: 'h3',
  },
  'Soul Crystal': {
    id: 'Soul Crystal',
    restriction: EvoItemRestictions.ALL_CLASSES,
    rarity: EvoRarity.LEGENDARY,
    icon: 'BTNEnchantedGemstone',
    description:
      "A very powerful crystal with a soul stored inside it. It is said to glow very bright on the brink of the owner's death, protecting the wielder.",
    effects: ['+7150 Health', '+25% Spell resist'],
    source: "Death's Realm",
    sourceShort: 'h3',
  },
  'Time Sabres': {
    id: 'Time Sabres',
    restriction: EvoItemRestictions.MELEE,
    rarity: EvoRarity.LEGENDARY,
    icon: 'BTNTimeSabres',
    description:
      'Crafted beyond human time, the Time Sabres has proven to be one of the most powerful weapons used in ancient history.',
    effects: ['+2400 Damage', '+4400 Health'],
    source: "Death's Realm",
    sourceShort: 'h3',
  },
  'Sealed Demise': {
    id: 'Sealed Demise',
    restriction: EvoItemRestictions.FORGE,
    rarity: EvoRarity.LEGENDARY,
    icon: 'BTNFrozenDeath',
    description:
      'The sealed skull of Death. It was back then when he was a mere mortal and his body had to be sealed to prevent abusive power.',
    effects: [],
    source: "Death's Realm",
    sourceShort: 'h3',
  },
};
