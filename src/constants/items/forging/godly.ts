import { EvoItem } from '../item';
import { EvoItemRestictions } from '../../restrictions';
import { EvoRarity } from '../../rarity';

const godlyItemsNew: { [id: string]: EvoItem } = {
  Aerielis: {
    id: 'Aerielis',
    restriction: EvoItemRestictions.ARCHER,
    rarity: EvoRarity.FORGED,
    icon: 'Aerielis',
    description:
      "The bow of the fallen goddess, Aerielis. This legendary bow was once an augmented version of Atalanta's Speed, then blessed by the fallen angel, granting unmatched grace and power.",
    effects: [
      '+8000 Damage',
      '+1500 Agility',
      '+35% Attack Speed',
      'Passive: Basic attack deals [60 000 + 300% Agi] Pure Damage in an AOE. Cooldown 4s.',
    ],
    crafting: ['Twilight', 'Eve'],
    source: 'Mystery craft',
  },
  'Blade of Awe': {
    id: 'Blade of Awe',
    restriction: EvoItemRestictions.NOBLE,
    rarity: EvoRarity.FORGED,
    icon: 'BladeOfAwe',
    description:
      'By merging all five legendary artifacts scattered across the world of Silvasia, the Blade of Awe is formed. The Blade of Awe is a legendary magical weapon and perhaps even the strongest weapon in the land of Silvasia.',
    effects: [
      '+4500 Damage',
      '+375 Armor',
      '+1500 Strength',
      'Active: Grants 99,999 Armor for 2.5 seconds but puts Spiral Carve in a 14 second CD. Cooldown 65s.',
      'Passive: Spiral Carve. Basic attack deals [40 000 + 200% Str] Pure Damage in an AOE and heals 8% Max HP. Cooldown 4s.',
    ],
    crafting: ['Twilight', 'Eve'],
    source: 'Mystery craft',
  },
  Cosmos: {
    id: 'Cosmos',
    restriction: EvoItemRestictions.FAIRY,
    rarity: EvoRarity.FORGED,
    icon: 'Cosmos',
    description: 'The origin of the universe.',
    effects: [
      '+4500 Damage',
      '+1500 Intelligence',
      '+20% Cooldown Reduction',
      'Passive: Basic attack(M)/Spellcast(SG) deals [60 000 + 300% Int] Pure Damage in a line. Cooldown 4s.',
    ],
    crafting: ['Twilight', 'Eve'],
    source: 'Mystery craft',
  },
  Ender: {
    id: 'Ender',
    restriction: EvoItemRestictions.DI,
    rarity: EvoRarity.FORGED,
    icon: 'Ender',
    description:
      'The ultimate form of hatred by mankind, manifested by the devils to unleash their cruel desires against those who oppose evil',
    effects: [
      '+6000 Damage',
      '+250 Armor',
      '+1500 Strength',
      'Active: Consumes 36% Current HP to deal (66,666 + 100% Consumed HP) Pure Damage in a huge AOE around him. Cooldown 36s.',
      'Passive:  Damaging enemy deals (55,000 + 275% Str) Pure Damage in an AOE. Cooldown 4s.',
    ],
    crafting: ['Twilight', 'Eve'],
    source: 'Mystery craft',
  },
  Fate: {
    id: 'Fate',
    restriction: EvoItemRestictions.TEMPLAR,
    rarity: EvoRarity.FORGED,
    icon: 'Fate',
    description:
      'Named after Fate Testarossa, also known as Fate T. Harlaown, this powerful energy blade is her Bardiche Assault in Zanber Form.',
    effects: [
      '+10 000 Damage',
      '+30 000 Mana',
      '+1500 Main stat',
      '+10% Cooldown Reduction',
      'Passive:  Basic attack(DAT)/spellcast(GT) deals (60,000 + 300% Main Stat) Pure Damage in a huge line. Cooldown 4s.',
    ],
    crafting: ['Twilight', 'Eve'],
    source: 'Mystery craft',
  },
  'Guardian Force': {
    id: 'Guardian Force',
    restriction: EvoItemRestictions.SWORDSMAN,
    rarity: EvoRarity.FORGED,
    icon: 'GuardianForce',
    description:
      'From the realms of God, the Guardian Force is a relic that oaths to protect its wielder and destroy evil for good.',
    effects: [
      '+4000 Damage',
      '+400 Armor',
      '+1500 Strength',
      'Passive: Basic attack deals (45,000 + 225% Str) Pure Damage in an AOE. Cooldown 4s.',
    ],
    crafting: ['Twilight', 'Eve'],
    source: 'Mystery craft',
  },
  Hope: {
    id: 'Hope',
    restriction: EvoItemRestictions.ACOLYTE,
    rarity: EvoRarity.FORGED,
    icon: 'Hope',
    description:
      'A long forgotten Ancient book which is said to grant the wielder the power to guide the light and purify the dark and to bring hope to humanity.',
    effects: [
      '+1500 Intelligence',
      '+15 000 Health',
      '+25 000 Mana',
      '+10% Cooldown Reduction',
      "Passive:  Spellcast heal allies' HP for (5,000 + 25% Int) winthin an AOE. Cooldown 4s.",
      "Salvation. Heals allies'HP for (5,000 + 25% Int), increase nearby allies' Armor by 200 and heals them for (5,000 + 25% Int) over 4 seconds.",
    ],
    crafting: ['Twilight', 'Eve'],
    source: 'Mystery craft',
  },
  "Kiea's Tale": {
    id: "Kiea's Tale",
    restriction: EvoItemRestictions.NINJA,
    rarity: EvoRarity.FORGED,
    icon: 'KieasTale',
    description:
      'The lost weapon of Kiea, the great ninja. She was known as the legendary assassin who was able to take down multiple foes singlehandedly.',
    effects: [
      '+8000 Damage',
      '+1500 Agility',
      '+25% Evasion',
      '+10% Cooldown Reduction',
      'Passive: Basic attack(A)/Damaging an enemy(J) deals (60,000 + 300% Agi) Pure Damage in an AOE Cooldown 4s.',
    ],
    crafting: ['Twilight', 'Eve'],
    source: 'Mystery craft',
  },
  'Raising Heart': {
    id: 'Raising Heart',
    restriction: EvoItemRestictions.INITIATE,
    rarity: EvoRarity.FORGED,
    icon: 'RaisingHeart',
    description:
      'Used by Takamachi Nanoha, this intelligent magical device has helped her win countless battles for years.',
    effects: [
      '+1500 Intelligence',
      '+37 500 Mana',
      '+10% Cooldown Reduction',
      'Passive: Spellcast deals (60,000 + 300% Int) Pure Damage in a huge line. Cooldown 4s.',
    ],
    crafting: ['Twilight', 'Eve'],
    source: 'Mystery craft',
  },
  Reinforce: {
    id: 'Reinforce',
    restriction: EvoItemRestictions.DRUID,
    rarity: EvoRarity.FORGED,
    icon: 'Reinforce',
    description:
      'Once used by Yagami Hayate, a good friend of Nanoha and Fate, the Blessed Wind Reinforce is capable of casting devastating S Rank spells.',
    effects: [
      '+4000 Damage',
      '+300 Armor',
      '+1500 Intelligence',
      '+0.5% HP regen',
      '+10% Cooldown reduction',
      'Passive: Basic attack(RM)/spellcast(S) has a chance to deal (60,000 + 300% Int) Pure Damage in a huge line. Cooldown 4s.',
    ],
    crafting: ['Twilight', 'Eve'],
    source: 'Mystery craft',
  },
  'Rune Sihill': {
    id: 'Rune Sihill',
    restriction: EvoItemRestictions.WH,
    rarity: EvoRarity.FORGED,
    icon: 'RuneSihill',
    description:
      'This Mahakaman Rune Sihill is known as the best steel sword ever used in Witcher Fighting Styles. Because of its light weight and sharp edge, it can cut through just about anything and enables the user to move and attack as gracefully as a swan.',
    effects: [
      '+6000 Damage',
      '+1500 Main stat',
      '+60% Attack speed',
      '+10% Cooldown reduction',
      'Passive: Spellcast has a chance to provide 45% Damage Buff and 30% AS Buff to all allies for 5 seconds.',
    ],
    crafting: ['Twilight', 'Eve'],
    source: 'Mystery craft',
  },
  'Tooth of Belial': {
    id: 'Tooth of Belial',
    restriction: EvoItemRestictions.THIEF,
    rarity: EvoRarity.FORGED,
    icon: 'ToothOfBelial',
    description:
      'Used by the famed Guild Assassin, James Akida, the Tooth of Belial is known to be the "Angel of Death", because of its superior speed adjustments, godly damage outputs, and powerful enchantments that makes the wielder nearly impossible to hit.',
    effects: [
      '+8000 Damage',
      '+1500 Agility',
      '+35% Attack speed',
      'Passive: Basic attack deals (60,000 + 300% Agi) Pure Damage in an AOE. Cooldown 4s.',
    ],
    crafting: ['Twilight', 'Eve'],
    source: 'Mystery craft',
  },
  Virtue: {
    id: 'Virtue',
    restriction: EvoItemRestictions.CASTER,
    rarity: EvoRarity.FORGED,
    icon: 'Virtue',
    description:
      'The forbidden weapon of the Seven Sages, this wand can cast unbreakable seals and channel mysterious forces.',
    effects: [
      '+1500 Intelligence',
      '+15 000 Health',
      '+25 000 Mana',
      "Passive:  Spellcast deals (55,000 + 275% Int) Pure Damage to enemies and heals allies' HP for (5,000 + 25% Int) in a line. Cooldown 4s.",
    ],
    crafting: ['Twilight', 'Eve'],
    source: 'Mystery craft',
  },
};

const blessedGodly = {
  'Blessed Aerielis': {
      ...godlyItemsNew.Aerielis,
      id: 'Blessed Aerielis'
  },
  'Blessed Blade of Awe': {
    ...godlyItemsNew['Blade of Awe'],
    id: 'Blessed Blade of Awe'
  },
  'Blessed Cosmos': {
    ...godlyItemsNew.Cosmos,
    id: 'Blessed Cosmos'
  },
  'Blessed Ender': {
    ...godlyItemsNew.Ender,
    id: 'Blessed Ender'
  },
  'Blessed Fate': {
    ...godlyItemsNew.Fate,
    id: 'Blessed Fate'
  },
  'Blessed Guardian Force': {
    ...godlyItemsNew['Guardian Force'],
    id: 'Blessed Guardian Force'
  },
  'Blessed Hope': {
    ...godlyItemsNew.Hope,
    id: 'Blessed Hope'
  },
  "Blessed Kiea's Tale": {
    ...godlyItemsNew["Kiea's Tale"],
    id: "Blessed Kiea's Tale"
  },
  'Blessed Raising Heart': {
    ...godlyItemsNew['Raising Heart'],
    id: 'Blessed Raising Heart'
  },
  'Blessed Reinforce': {
    ...godlyItemsNew.Reinforce,
    id: 'Blessed Reinforce'
  },
  'Blessed Rune Sihill': {
    ...godlyItemsNew['Rune Sihill'],
    id: 'Blessed Rune Sihill',
  },
  'Blessed Tooth of Belial': {
    ...godlyItemsNew['Tooth of Belial'],
    id: 'Blessed Tooth of Belial',
  },
  'Blessed Virtue': {
    ...godlyItemsNew.Virtue,
    id: 'Blessed Virtue',
  },
};

export const godlyItems = {
  ...godlyItemsNew,
  ...blessedGodly,
};
