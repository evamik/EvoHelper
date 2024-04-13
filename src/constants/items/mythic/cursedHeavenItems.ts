import { EvoItemRestictions } from '../../restrictions';
import { EvoRarity } from '../../rarity';
import { EvoItem } from '../item';

export const cursedHeavenItems: { [id: string]: EvoItem } = {
  Angelslayer: {
    id: 'Angelslayer',
    restriction: EvoItemRestictions.MELEE,
    rarity: EvoRarity.GODLY,
    icon: 'Angelslayer',
    description:
      "Once wielded by the Demon of Hatred, the Angelslayer is a divine weapon used to pierce through an angel's heart with ease.",
    effects: ['+5000 Damage', '+30% Attack Speed'],
    source: 'Cursed Heaven',
    sourceShort: 'M1',
  },
  'Book of Mudora': {
    id: 'Book of Mudora',
    restriction: EvoItemRestictions.AC_CA_FA,
    rarity: EvoRarity.GODLY,
    icon: 'BookOfMudora',
    description:
      'The Book of Mudora is a collection of ancient Hylian lore and stories, as well as a guide to translating the ancient Hylian Language that appears throughout the land of Hyrule.',
    effects: [
      '+1100 Intelligence',
      '+90 Mana Regeneration',
      '+10% Cooldown Reduction',
      'Passive: Increase healing from spells by 7.5%',
    ],
    source: 'Cursed Heaven',
    sourceShort: 'M1',
  },
  'Cane of Somaria': {
    id: 'Cane of Somaria',
    restriction: EvoItemRestictions.INT,
    rarity: EvoRarity.GODLY,
    icon: 'CaneOfSomaria',
    description:
      'The origins of the Cane of Somaria are unknown. It is rumored to have been carried by a Hero during the Battle of a Thousand Heroes and later discovered by the vampires of Redwater Den. ',
    effects: [
      '+1250 Intelligence',
      '+12% Cooldown Reduction',
      'Passive: Increase Magic Damage dealt to bosses by 15%',
    ],
    source: 'Cursed Heaven',
    sourceShort: 'M1',
  },
  'Golden Sun': {
    id: 'Golden Sun',
    restriction: EvoItemRestictions.ARCHER,
    rarity: EvoRarity.GODLY,
    icon: 'GoldenSun',
    description:
      "Once just the Bow of the Hero, the Golden Bow was enchanted in the Mysterious Pond by the Cursed Fairy to help with the hero's final battle against the Ruler of the Golden Land.",
    effects: [
      '+6500 Damage',
      'Passive: Increase damage done by basic attacks by 10.5%.',
    ],
    source: 'Cursed Heaven',
    sourceShort: 'M1',
  },
  Inspirit: {
    id: 'Inspirit',
    restriction: EvoItemRestictions.ALL_CLASSES,
    rarity: EvoRarity.GODLY,
    icon: 'Inspirit',
    description:
      'An orb that grants omnipotence, forged from the power of the gods and crafted by angels.',
    effects: ['+800 All Stats', '+200 Armor', '+12% Cooldown Reduction'],
    source: 'Cursed Heaven',
    sourceShort: 'M1',
  },
  'Master Sword': {
    id: 'Master Sword',
    restriction: EvoItemRestictions.MELEE,
    rarity: EvoRarity.GODLY,
    icon: 'MasterSword',
    description:
      "Known as the Blade of Evil's Bane, originally crafted by the goddess Hylia as the Goddess Sword, and was later forged into the Master Sword by the Goddess's chosen hero and its spirit.",
    effects: [
      '+6500 Damage',
      'Passive:  Increase damage done by basic attacks by 10.5%.',
    ],
    source: 'Cursed Heaven',
    sourceShort: 'M1',
  },
  'Mirror Shield': {
    id: 'Mirror Shield',
    restriction: EvoItemRestictions.MELEE,
    rarity: EvoRarity.GODLY,
    icon: 'MirrorShield',
    description:
      'A mirror-like shield found in the Spirit Temple. It is an amazing work of art, and there are few who would argue that it is not one of the finest shields in Hyrule. It is said that its surface reflects not only light but hostile intent as well.',
    effects: [
      '+425 Armor',
      'Passive: Reflects 15% Damage back to the attacker.',
    ],
    source: 'Cursed Heaven',
    sourceShort: 'M1',
  },
  'Angel Creation': {
    id: 'Angel Creation',
    restriction: EvoItemRestictions.FORGING_MATERIAL,
    rarity: EvoRarity.GODLY,
    icon: 'AngelCreation',
    description: 'A fragment of creation.',
    effects: [],
    source: 'Cursed Heaven',
    sourceShort: 'M1',
    materialFor: ['Angelic Hope']
  },
  'Angel Feather': {
    id: 'Angel Feather',
    restriction: EvoItemRestictions.FORGING_MATERIAL,
    rarity: EvoRarity.GODLY,
    icon: 'AngelFeather',
    description: 'A feather of a fallen angel.',
    effects: [],
    source: 'Cursed Heaven',
    sourceShort: 'M1',
    materialFor: ['Angelic Hope']
  },
  'Angel Fire': {
    id: 'Angel Fire',
    restriction: EvoItemRestictions.FORGING_MATERIAL,
    rarity: EvoRarity.GODLY,
    icon: 'AngelFire',
    description: 'The birth of pure fire.',
    effects: [],
    source: 'Cursed Heaven',
    sourceShort: 'M1',
    materialFor: ['Angelic Hope']
  },
};
