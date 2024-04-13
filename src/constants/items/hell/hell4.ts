import { EvoItemRestictions } from '../../restrictions';
import { EvoRarity } from '../../rarity';
import { EvoItem } from '../item';

export const hell4Items: { [id: string]: EvoItem } = {
  // Hell 4
  'Black Hades': {
    id: 'Black Hades',
    restriction: EvoItemRestictions.MELEE,
    rarity: EvoRarity.LEGENDARY,
    icon: 'BTNLeatherUpgradeThree',
    description:
      'The Black Hades is a powerful chaos armor forged by Hades himself, hence the name.',
    effects: ['+250 Armor'],
    source: 'Tristram',
    sourceShort: 'h4',
    materialFor: ['Darkforge Plate']
  },
  Doombringer: {
    id: 'Doombringer',
    restriction: EvoItemRestictions.MELEE,
    rarity: EvoRarity.LEGENDARY,
    icon: 'BTNArcaniteRanged',
    description:
      'Forged by Doom himself, the Doombringer Champion Sword is a force to behold.',
    effects: ['+850 Agility', '+5% Cooldown speed'],
    source: 'Tristram',
    sourceShort: 'h4',
    materialFor: ["Nightshadow", "Sword of the Occult"]
  },
  'Eagle Eye': {
    id: 'Eagle Eye',
    restriction: EvoItemRestictions.ARCHER,
    rarity: EvoRarity.LEGENDARY,
    icon: 'BTNINV_Weapon_Bow_09',
    description:
      'During the First Great War, the Sephax crafted this bow for their best marksman, with the intention of striking down their enemies with it. However, the bow, too fast for its own good, struck down the wielder and the Sephax themselves, wiping them out. How ironic - they created it to defeat their enemies, but got defeated instead.',
    effects: ['+4000 Damage'],
    source: 'Tristram',
    sourceShort: 'h4',
    materialFor: ['Windforce']
  },
  'Energy Wand': {
    id: 'Energy Wand',
    restriction: EvoItemRestictions.INT,
    rarity: EvoRarity.LEGENDARY,
    icon: 'BTNINV_Wand_08',
    description:
      'The magical blade of the lost battlemage Zan. After being reforged by the High Wizard Council, the blade is once again back to its purest form.',
    effects: [
      '+550 Intelligence',
      'Active: Restores 10% of Max Mana. Cooldown 15s.',
    ],
    source: 'Tristram',
    sourceShort: 'h4',
    materialFor: ["Esper's Ring"]
  },
  Hellmouth: {
    id: 'Hellmouth',
    restriction: EvoItemRestictions.MELEE,
    rarity: EvoRarity.LEGENDARY,
    icon: 'BTNGhoulFrenzy',
    description:
      'The Hellmouth was forged for sinister purposes. Unfortunately, whoever forged it is probably dead, now that it is in your hands. Shame.',
    effects: ['+200 Armor', '+4400 Health'],
    source: 'Tristram',
    sourceShort: 'h4',
  },
  'Phantom Dancer': {
    id: 'Phantom Dancer',
    restriction: EvoItemRestictions.MELEE_AGI,
    rarity: EvoRarity.LEGENDARY,
    icon: 'BTNAAA_PhantomDancer',
    description:
      'Twin blades crafted using thin air, light enough to have the swiftness of the shadows.',
    effects: ['+500 Agility', '+25% Attack Speed'],
    source: 'Tristram',
    sourceShort: 'h4',
    materialFor: ['Malevolent']
  },
  'The Ark Royal': {
    id: 'The Ark Royal',
    restriction: EvoItemRestictions.MELEE,
    rarity: EvoRarity.LEGENDARY,
    icon: 'BTNSoulSword',
    description:
      'The Ark Royal, named after the powerful Templar Carrier, is an energy blade. It can cut through almost anything, making it the perfect killing machine.',
    effects: ['+4000 Damage'],
    source: 'Tristram',
    sourceShort: 'h4',
    materialFor: ['Blade of Despair']
  },
  "Harbinger's Essence": {
    id: "Harbinger's Essence",
    restriction: EvoItemRestictions.FORGE,
    rarity: EvoRarity.LEGENDARY,
    icon: 'BTNEssenceDrain4',
    description:
      'Possessed by Doomsday himself, he is able to crush everyone with the power imbued in this essence.',
    effects: [],
    source: 'Tristram',
    sourceShort: 'h4',
    materialFor: ["Crystallized Emerald Blade", "Runic Bow", "Paw of Lightning", "Windtalker", "Magic Mirror", "Tainted Neptune's Eye", "Scepter of Mastery", "Paw of Lightning", "Darkforge Plate", "Vagabond", "Destruction", "Storm Sanctuary", "Deathgazer", "Windspeaker", "Legendary Dragon Orb", "Sword of the Occult", "Concentrated Energy", "Sinister Staff"]
  },
};
