import { EvoItemRestictions } from '../../restrictions';
import { EvoRarity } from '../../rarity';
import { EvoItem } from '../item';

export const bobBuilderItems: { [id: string]: EvoItem } = {
  'Ocean Cuirass': {
    id: 'Ocean Cuirass',
    restriction: EvoItemRestictions.ALL_CLASSES,
    rarity: EvoRarity.FORGED,
    icon: 'BTNSea_Heavy_Armor',
    description:
      'The Lunar Cuirass, forged with sapphire to greatly protect the wielder at all cost.',
    effects: ['+50 Armor', '+1650 Health', '+1250 Mana'],
    crafting: ['Lunar Cuirass', 'Rare Armor Piece', 'Ocean Fragment'],
    source: 'Bob the Builder',
  },
  "Hades' Artifact": {
    id: "Hades' Artifact",
    restriction: EvoItemRestictions.ALL_CLASSES,
    rarity: EvoRarity.FORGED,
    icon: 'BTNArcaniteArmor',
    description:
      'This artifact was forged by Hades himself to aid him against fighting Zeus in the Age of Mythology. However, to make sure that the artifact would live on even if he was defeated, he made it as light as a feather, so anyone could use it.',
    effects: ['+280 All stats'],
    crafting: [
      'Ultra Armor Piece',
      'Mega Armor Piece',
      'Rare Armor Piece',
      'Dull Armor Piece',
      'Ruby',
    ],
    source: 'Bob the Builder',
    materialFor: ['Magic Mirror']
  },
  Tremor: {
    id: 'Tremor',
    restriction: EvoItemRestictions.INQUISITOR,
    rarity: EvoRarity.FORGED,
    icon: 'BTNStoneShield',
    description:
      'Result of the fusion reaction of eternal fire and earthstone essence, this shield is crafted to protect the world from harm.',
    effects: [
      '+150 Armor',
      '+3300 Mana',
      '+10% Cooldown reduction',
      'Passive: Provides 25 Armor to all allies within 1000 AOE',
    ],
    crafting: [
      'Mega Armor Piece',
      'Ultra Armor Piece',
      "Duriel's Shell",
      'Diabolic Orb',
      'Sealed Demise',
      'Diamond',
    ],
    source: 'Bob the Builder',
    materialFor: ['Rising Ash']
  },
};
