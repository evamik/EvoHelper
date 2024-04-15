import { EvoItemRestictions } from '../../restrictions';
import { EvoRarity } from '../../rarity';
import { EvoItem } from '../item';

export const hell2Items: { [id: string]: EvoItem } = {
  // Hell 3
  "Duriel's Shell": {
    id: "Duriel's Shell",
    restriction: EvoItemRestictions.ALL_CLASSES,
    rarity: EvoRarity.EPIC,
    icon: 'BTNAdvancedReinforcedHides',
    description:
      'This powerful cuirass was made to be able to withstand almost all kinds of attacks and not impede the wearer in any way. It succeeds in this aspect.',
    effects: ['150 Armor'],
    source: 'Abyssal Labyrinth',
    sourceShort: 'h2',
  },
  'Megaton Blades': {
    id: 'Megaton Blades',
    restriction: EvoItemRestictions.MELEE_AGI,
    rarity: EvoRarity.EPIC,
    icon: 'BTNNagaWeaponUp2',
    description:
      "Outlawed throughout the entire land, anyone seen to possess these powerful assassination blades are immediately put down - and for good reason. These blades augment the assassin's skill tenfold with its extremely sharp strikes.",
    effects: [
      '+2350 Damage',
      'Passive: 60% chance to deal 3x Physical Damage.',
    ],
    source: 'Abyssal Labyrinth',
    sourceShort: 'h2',
  },
  'Tome of the Unlife': {
    id: 'Tome of the Unlife',
    restriction: EvoItemRestictions.INT,
    rarity: EvoRarity.EPIC,
    icon: 'BTNBookOfTheDead',
    description:
      "This Book's secrets explain in depth the mysteries of death and the afterlife.",
    effects: ['+500 Intelligence', '+2500 Mana'],
    source: 'Abyssal Labyrinth',
    sourceShort: 'h2',
  },
  "Angel's Sanctuary": {
    id: "Angel's Sanctuary",
    restriction: EvoItemRestictions.MELEE,
    rarity: EvoRarity.LEGENDARY,
    icon: 'BTNArcaneShield',
    description:
      "One of the most powerful spirit shields ever made, the Angel's Sanctuary was famed for the Battle of Emridy Meadows, where it protected an Angel from Zuggtmoy's attacks.",
    effects: ['150 Armor', '+1100 Health'],
    source: 'Abyssal Labyrinth',
    sourceShort: 'h2',
  },
  "Athena's Aim": {
    id: "Athena's Aim",
    restriction: EvoItemRestictions.ARCHER,
    rarity: EvoRarity.LEGENDARY,
    icon: 'BTNINV_Weapon_Rifle_05',
    description:
      'This is the weapon of the goddess Athena. Each time it fires, it quadruples the speed, rate of fire, and impact of the shots, making it an outstanding weapon for any archer.',
    effects: ['+2600 Damage'],
    source: 'Abyssal Labyrinth',
    sourceShort: 'h2',
  },
  Brightstar: {
    id: 'Brightstar',
    restriction: EvoItemRestictions.MELEE_AGI,
    rarity: EvoRarity.LEGENDARY,
    icon: 'BTNShuriken3',
    description:
      'Forged with starlight magic, the Brightstar is a very powerful weapon used by A ranked ninjas when performing dangerous assassinations.',
    effects: ['+650 Agility'],
    source: 'Abyssal Labyrinth',
    sourceShort: 'h2',
  },
  "Dawn's Legacy": {
    id: "Dawn's Legacy",
    restriction: EvoItemRestictions.MELEE,
    rarity: EvoRarity.LEGENDARY,
    icon: 'BTNAbility_Rogue_Sprint',
    description:
      'The Angel Dawn crafted these boots from Angelic Moonsilver and Farcloud wings, making the wielder very swift and agile.',
    effects: [
      '+170 All stats',
      '+15% Attack speed',
      '+80 Movement speed',
      'Active: Teleport to any Inn. Cooldown 30s.',
    ],
    source: 'Abyssal Labyrinth',
    sourceShort: 'h2',
  },
  'Cursed Artifact': {
    id: 'Cursed Artifact',
    restriction: EvoItemRestictions.FORGE,
    rarity: EvoRarity.LEGENDARY,
    icon: 'BTNBoneChimes',
    description:
      'The artifact of the abyssal lord, Anthes. The chimes are very powerful and a symbol of pure hatred and dispersion.',
    effects: [],
    source: 'Abyssal Labyrinth',
    sourceShort: 'h2',
  },
};
