import { EvoItemRestictions } from '../../restrictions';
import { EvoRarity } from '../../rarity';
import { EvoItem } from '../item';

export const sewersItems: { [id: string]: EvoItem } = {
  'Golden Arrows': {
    id: 'Golden Arrows',
    restriction: EvoItemRestictions.ARCHER,
    rarity: EvoRarity.RARE,
    icon: 'BTNAbility_Hunter_AimedShot',
    description:
      'Forged by the Archers of Frostfire, it was intended for only 2 purposes: quick drawing and maximum damage output at the same time. The result was this.',
    effects: ['+1400 Damage'],
    source: 'Forgotten Sewers',
  },
  'Necklace of Seven Souls': {
    id: 'Necklace of Seven Souls',
    restriction: EvoItemRestictions.INT,
    rarity: EvoRarity.RARE,
    icon: 'BTNNecklace',
    description:
      'This necklace bears the signature of the seven souls, a sign of true power.',
    effects: ['+275 Intelligence', '+20 Mana regen'],
    source: 'Forgotten Sewers',
  },
  "Hexfire's Edge": {
    id: "Hexfire's Edge",
    restriction: EvoItemRestictions.MELEE_AGI,
    rarity: EvoRarity.EPIC,
    icon: 'BTNAbility_BackStab',
    description:
      'Used by Hexfire, one of the most notorious assassins in the history of Silvasia, this dagger is his final legacy before his untimely demise in the gorges of Bragar Gor.',
    effects: [
      '+1400 Damage',
      'Passive: 40% chance to deal 3x Physical Damage.',
    ],
    source: 'Forgotten Sewers',
  },
  "Icecrown's Visage": {
    id: "Icecrown's Visage",
    restriction: EvoItemRestictions.MELEE,
    rarity: EvoRarity.EPIC,
    icon: 'BTNRevenant',
    description:
      "Icecrown's Visage reveals the true nature of its wearer - in the most cruelest of ways to the wearer's enemies. Along with fear, this helmet adds on powerful defense in case fear is not enough to save the wearer in battle.",
    effects: ['+75 Armor', '+1100 Health'],
    source: 'Forgotten Sewers',
  },
  'Phoenix Stone': {
    id: 'Phoenix Stone',
    restriction: EvoItemRestictions.ALL_CLASSES,
    rarity: EvoRarity.EPIC,
    icon: 'BTNGMExchange',
    description:
      'This stone was once known for its supreme control over the All-Fire. However, after a century, its power has weakened, but still retains its fiery touch.',
    effects: ['+140 All stats'],
    source: 'Forgotten Sewers',
    materialFor: ['Hell Diamond']
  },
  'Shield of Unending Flame': {
    id: 'Shield of Unending Flame',
    restriction: EvoItemRestictions.MELEE,
    rarity: EvoRarity.EPIC,
    icon: 'BTNSpell_Holy_BlessingOfProtection',
    description:
      'This Shield was forged to defend against even the most powerful of fires, however it turned out it worked equally as well with other sources of magic.',
    effects: ['+90 Armor'],
    source: 'Forgotten Sewers',
  },
  'Staff of the Ages': {
    id: 'Staff of the Ages',
    restriction: EvoItemRestictions.INT,
    rarity: EvoRarity.EPIC,
    icon: 'BTNWandOfManaSteal',
    description:
      "Only those who are worthy ever understand its true purpose. For those who can't however, still become powerful mages due to its powerful innate energies.",
    effects: ['+350 Intelligence'],
    source: 'Forgotten Sewers',
  },
  'Stone of Vsmir': {
    id: 'Stone of Vsmir',
    restriction: EvoItemRestictions.MELEE_AGI,
    rarity: EvoRarity.EPIC,
    icon: 'BTNPeriapt',
    description:
      'The curious stone of Vsmir is said to hold extraordinary powers for the strong-minded - a true gem.',
    effects: ['+1000 Damage', '+100 Agility'],
    source: 'Forgotten Sewers',
  },
  'Black Soul': {
    id: 'Black Soul',
    restriction: EvoItemRestictions.FORGE,
    rarity: EvoRarity.EPIC,
    icon: 'BTNOrbOfDarkness',
    description:
      'An orb coated with the soul of the filthy being, The One. Used in crafting powerful equipments with its tained powers.',
    effects: [],
    source: 'Forgotten Sewers',
    materialFor: ["Contúirteacha", "Hand of God", "The One's Head", "The One's Head", "The One's Head"]
  },
};
