import { EvoItemRestictions } from '../../restrictions';
import { EvoRarity } from '../../rarity';
import { EvoItem } from '../item';

export const headItems: { [id: string]: EvoItem } = {
  "Hydra's Head": {
    id: "Hydra's Head",
    restriction: EvoItemRestictions.FORGE,
    rarity: EvoRarity.EPIC,
    icon: 'BTNGreenHydra',
    description: 'The head of the Leviathan.',
    effects: [],
    crafting: [
      "Hydra's Bane",
      "Hydra's Bane",
      "Hydra's Bane",
    ],
    source: 'Heads merchant',
  },
  "The One's Head": {
    id: "The One's Head",
    restriction: EvoItemRestictions.FORGE,
    rarity: EvoRarity.EPIC,
    icon: 'TheOnesHead',
    description: 'The head of the Leviathan.',
    effects: [],
    crafting: [
      "Black Soul",
      "Black Soul",
      "Black Soul",
    ],
    source: 'Heads merchant',
  },
  "Diablo's Head": {
    id: "Diablo's Head",
    restriction: EvoItemRestictions.FORGE,
    rarity: EvoRarity.LEGENDARY,
    icon: 'BTNEredarWarlockPurple',
    description: 'The head of the Leviathan.',
    effects: [],
    crafting: [
      "Diabolic Orb",
      "Diabolic Orb",
      "Diabolic Orb",
    ],
    source: 'Heads merchant',
  },
  "Arthas' Head": {
    id: "Arthas' Head",
    restriction: EvoItemRestictions.FORGE,
    rarity: EvoRarity.LEGENDARY,
    icon: 'BTNHeroDeathKnight',
    description: 'The head of the Leviathan.',
    effects: [],
    crafting: [
      "Cursed Artifact",
      "Cursed Artifact",
      "Cursed Artifact",
    ],
    source: 'Heads merchant',
  },
  "Death's Head": {
    id: "Death's Head",
    restriction: EvoItemRestictions.FORGE,
    rarity: EvoRarity.LEGENDARY,
    icon: 'BTNMetamorphosis',
    description: 'The head of the Leviathan.',
    effects: [],
    crafting: [
      "Sealed Demise",
      "Sealed Demise",
      "Sealed Demise",
    ],
    source: 'Heads merchant',
  },
  "Essence of Nightmare": {
    id: "Essence of Nightmare",
    restriction: EvoItemRestictions.FORGE,
    rarity: EvoRarity.EPIC,
    icon: 'BTNOrbOfDarkness',
    description: 'Lucid.',
    effects: [],
    crafting: [
      "Hydra's Head",
      "The One's Head",
      "Golden Fragment",
      "Diamond"
    ],
    source: 'Heads merchant',
  },
  "Essence of Hell": {
    id: "Essence of Hell",
    restriction: EvoItemRestictions.FORGE,
    rarity: EvoRarity.LEGENDARY,
    icon: 'BTNOrbOfFire',
    description: 'The power of hell.',
    effects: [],
    crafting: [
      "Diablo's Head",
      "Arthas' Head",
      "Death's Head",
      "Golden Fragment",
      "Diamond"
    ],
    source: 'Heads merchant',
  },
}