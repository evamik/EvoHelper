import { EvoItemRestictions } from '../../restrictions';
import { EvoRarity } from '../../rarity';
import { EvoItem } from '../item';

export const imp3matsItems: { [id: string]: EvoItem } = {
  'Fire Rising': {
    id: 'Fire Rising',
    restriction: EvoItemRestictions.ULTIMATE_FORGE,
    rarity: EvoRarity.GODLY,
    icon: 'FireRising',
    description: 'Blinding fire.',
    effects: [],
    crafting: [],
    source: 'Imp3Mats',
    materialFor: ['Crystal of Eternal Flame', 'Blessing of Agony', "Drakath's Armor"]
  },
  'Incinerator': {
    id: 'Incinerator',
    restriction: EvoItemRestictions.ULTIMATE_FORGE,
    rarity: EvoRarity.GODLY,
    icon: 'Incinerator',
    description: 'Universe fire.',
    effects: [],
    crafting: [
      'Fire Demon',
      'Fire Lotus',
    ],
    source: 'Imp3Mats',
    materialFor: ['Curse of Hell', 'Fire Stone']
  },
  'Curse of Hell': {
    id: 'Curse of Hell',
    restriction: EvoItemRestictions.ULTIMATE_FORGE,
    rarity: EvoRarity.GODLY,
    icon: 'CurseOfHell',
    description: 'Too much suffering.',
    effects: [],
    crafting: [
      'Incinerator',
      'Mystery',
      'Mystical',
      'Draconic Trinity',
      'Nether Reactor',
    ],
    source: 'Imp3Mats',
    materialFor: ['Fire Stone']
  },
  'Fire Stone': {
    id: 'Fire Stone',
    restriction: EvoItemRestictions.ULTIMATE_FORGE,
    rarity: EvoRarity.GODLY,
    icon: 'FireStone',
    description: 'Encapsulates hell.',
    effects: [],
    crafting: [
      'Incinerator',
      'Curse of Hell',
      'Nether Reactor',
    ],
    source: 'Imp3Mats',
    materialFor: ["Demon Blade", "Ultimate Dragon Blade", "Hephaestus", "Hatred", "Tiger Claw", "Demonforge Plate", "Rising Ash", "Ring of the Hell Lord", "Queen's Agony", "Heart of Behemoth", "Remorse", "Eternal Phoenix", "Esper's Blood", "Shinigami Yanki", "Dreaded Totem", "Royal Crown", "Uranus", "Scarlet Phantom", "Descend Reaper", "Helm of the Overlord", "Crystal of Eternal Flame", "Calamity", "Celestial Wand", "Everlasting Youth", "Holy Grimoire", "Link to the Past", "Prismatic Barrier", "Sovereign Sword", "Ascended Light of Destiny", "Consecration", "Eliot", "Moon Pearl", "Necrotic Sword of Doom", "Sinister Staff", "Sword of Akasha", "Titan's Mitt", "Ungodly Reaper of Nulgath"]
  },
  'Crystal of Eternal Flame': {
    id: 'Crystal of Eternal Flame',
    restriction: EvoItemRestictions.ULTIMATE_FORGE,
    rarity: EvoRarity.GODLY,
    icon: 'CrystalOfEternalFlame',
    description: 'Burn in hell.',
    effects: [],
    crafting: [
      'Fire Rising',
      'Fire Stone',
      'Nether Reactor',
    ],
    source: 'Imp3Mats',
    materialFor: ['Demonic Flame', "Imp's Tail", 'Blessing of Fire']
  },
  'Demonic Flame': {
    id: 'Demonic Flame',
    restriction: EvoItemRestictions.ULTIMATE_FORGE,
    rarity: EvoRarity.GODLY,
    icon: 'DemonicFlame',
    description: "The fire from the demonic fiend's mouth.",
    effects: [],
    crafting: [
      'Dragon Tooth',
      'Crystal of Eternal Flame',
    ],
    source: 'Imp3Mats',
    materialFor: ['Hellish Behemoth']
  },
  "Imp's Tail": {
    id: "Imp's Tail",
    restriction: EvoItemRestictions.ULTIMATE_FORGE,
    rarity: EvoRarity.GODLY,
    icon: 'ImpsTail',
    description: 'Cut from the tail of the demonic fiend.',
    effects: [],
    crafting: [
      'Dragon Egg',
      'Crystal of Eternal Flame',
    ],
    source: 'Imp3Mats',
    materialFor: ['Hellish Behemoth']
  },
  "Blessing of Fire": {
    id: 'Blessing of Fire',
    restriction: EvoItemRestictions.ULTIMATE_FORGE,
    rarity: EvoRarity.GODLY,
    icon: 'BlessingOfFire',
    description: 'The blessing of the ferocious Demonic Fiend.',
    effects: [],
    crafting: [
      'Blessing of Dragon',
      'Crystal of Eternal Flame',
    ],
    source: 'Imp3Mats',
    materialFor: ['Hellish Behemoth']
  },
  "Hellish Behemoth": {
    id: 'Hellish Behemoth',
    restriction: EvoItemRestictions.ULTIMATE_FORGE,
    rarity: EvoRarity.GODLY,
    icon: 'HellishBehemoth',
    description: 'The definition of incineration.',
    effects: [],
    crafting: [
      'Demonic Flame',
      "Imp's Tail",
      'Blessing of Fire',
      'Nether Reactor',
    ],
    source: 'Imp3Mats',
    materialFor: ['Twilight']
  },
}