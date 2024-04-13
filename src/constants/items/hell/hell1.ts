import { EvoItemRestictions } from '../../restrictions';
import { EvoRarity } from '../../rarity';
import { EvoItem } from '../item';

export const hell1Items: { [id: string]: EvoItem } = {
  // Hell 1
  "Atma's Ring": {
    id: "Atma's Ring",
    restriction: EvoItemRestictions.ALL_CLASSES,
    rarity: EvoRarity.EPIC,
    icon: 'BTNINV_Jewelry_Ring_10',
    description:
      "Favoured by Mages and non-mages alike, Atma's Ring provides solid protection against both might and magic, along with an innate bonus to boot.",
    effects: ['+25% Spell resist'],
    source: 'Oblivion',
    sourceShort: 'h1',
  },
  'Battle Gauntlets': {
    id: 'Battle Gauntlets',
    restriction: EvoItemRestictions.ALL_CLASSES,
    rarity: EvoRarity.EPIC,
    icon: 'BTNGauntletsOfOgrePower',
    description:
      'Made for the sole purpose for battle, its strength has been refined to the max.',
    effects: ['+800 Damage', '+75 Armor'],
    source: 'Oblivion',
    sourceShort: 'h1',
  },
  Infernostride: {
    id: 'Infernostride',
    restriction: EvoItemRestictions.ALL_CLASSES,
    rarity: EvoRarity.EPIC,
    icon: 'BTNWirtsLeg',
    description:
      'Famous for the Great Heist, its speed is unmatched, save for the most legendary of boots.',
    effects: ['+140 All stats', '+70 Move speed'],
    source: 'Oblivion',
    sourceShort: 'h1',
  },
  'The Pendant of Nagre': {
    id: 'The Pendant of Nagre',
    restriction: EvoItemRestictions.INT,
    rarity: EvoRarity.EPIC,
    icon: 'BTNPendantOfMana',
    description:
      'Nagre was one of the most mighty sages studying the mysteries of the Rite of Passage, but the mysteries of the heavens were never meant to be understood, so before he went insane, he left behind his pendant as his final legacy.',
    effects: ['+400 Intelligence', '+1650 Mana'],
    source: 'Oblivion',
    sourceShort: 'h1',
  },
  'Double-Barrel Rifle': {
    id: 'Double-Barrel Rifle',
    restriction: EvoItemRestictions.ARCHER,
    rarity: EvoRarity.LEGENDARY,
    icon: 'BTNINV_Weapon_Rifle_08',
    description:
      'This rifle has a double barrel, designed for more firepower with every shot, with no effect on reload times.',
    effects: ['+2000 Damage'],
    source: 'Oblivion',
    sourceShort: 'h1',
  },
  'The Heart of Evo': {
    id: 'The Heart of Evo',
    restriction: EvoItemRestictions.ALL_CLASSES,
    rarity: EvoRarity.LEGENDARY,
    icon: 'BTNHeartOfAszune',
    description:
      'The Heart of Evo, crystallized after his downfall at the Battle of Emerald Hills. It still retains much of his vitality, even after so long.',
    effects: ['+5500 Health', '+4125 Mana'],
    source: 'Oblivion',
    sourceShort: 'h1',
  },
  'The Psionic Razor': {
    id: 'The Psionic Razor',
    restriction: EvoItemRestictions.MELEE_AGI,
    rarity: EvoRarity.LEGENDARY,
    icon: 'BTNNagaWeaponUp3',
    description:
      'Fashioned in a way similar to an assassin\'s weapon, this weapon has been nicknamed "The Razor", because of its fast paced strikes with the firepower to match.',
    effects: ['+2000 Damage'],
    source: 'Oblivion',
    sourceShort: 'h1',
  },
  'Diabolic Orb': {
    id: 'Diabolic Orb',
    restriction: EvoItemRestictions.FORGE,
    rarity: EvoRarity.LEGENDARY,
    icon: 'BTNOrbofSlowness',
    description:
      'The orb of pure evil powers. Fused with the powers of Diablo, this stone is stored with demonic powers. Used in forging hell equipments.',
    effects: [],
    source: 'Oblivion',
    sourceShort: 'h1',
    materialFor: ["Blade of the Ruined King", "Runic Bow", "Hell Diamond", "Tremor", "Destruction", "Diablo's Head", "Diablo's Head", "Diablo's Head"]
  },
};
