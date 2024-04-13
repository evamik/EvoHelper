import { EvoItemRestictions } from '../../restrictions';
import { EvoRarity } from '../../rarity';
import { EvoItem } from '../item';

export const mysteryItems: { [id: string]: EvoItem } = {
  'Nether Reactor': {
    id: 'Nether Reactor',
    restriction: EvoItemRestictions.FORGE,
    rarity: EvoRarity.GODLY,
    icon: 'NetherReactor',
    description: 'Stabilizes the combination of powerful materials.',
    effects: [],
    source: 'Mystery forging items',
    materialFor: ["Mystery", "Mystical", "Draconic Trinity", "Twilight", "Eve", "Light Synthesis", "Light Synthesis", "Curse of Hell", "Fire Stone", "Crystal of Eternal Flame", "Hellish Behemoth"]
  },
  Mystery: {
    id: 'Mystery',
    restriction: EvoItemRestictions.ULTIMATE_FORGE,
    rarity: EvoRarity.GODLY,
    icon: 'Mystery',
    description: '???',
    effects: [],
    crafting: ['Mantle of Darkness', 'Blessing of Darkness', 'Nether Reactor'],
    source: 'Mystery forging items',
    materialFor: ["Destruction", "Legend of Freya", "Twilight", "Curse of Hell", "Ungodly Reaper of Nulgath"]
  },
  Mystical: {
    id: 'Mystical',
    restriction: EvoItemRestictions.ULTIMATE_FORGE,
    rarity: EvoRarity.GODLY,
    icon: 'Mystical',
    description: 'An unknown force.',
    effects: [],
    crafting: [
      'Mythical Weapon Piece',
      'Mythical Armor Piece',
      'Mythical Handle Piece',
      'Nether Reactor',
    ],
    source: 'Mystery forging items',
    materialFor: ["Claw of Midnight", "Nightshadow", "Curse of Hell", "Ascended Light of Destiny", "Consecration", "Sword of Akasha", "Ungodly Reaper of Nulgath"]
  },
  'Draconic Trinity': {
    id: 'Draconic Trinity',
    restriction: EvoItemRestictions.ULTIMATE_FORGE,
    rarity: EvoRarity.GODLY,
    icon: 'DraconicTrinity',
    description: 'The beacon of all elements.',
    effects: [],
    crafting: [
      'Dragon Tooth',
      'Dragon Egg',
      'Blessing of Dragon',
      'Nether Reactor',
    ],
    source: 'Mystery forging items',
    materialFor: ["Cryocell", "Destruction", "Malevolent", "Storm Sanctuary", "Ancient Dragon Book", "Final Emerald Blade", "Eclair La Demes", "Dragon Totem", "Winter's Soul", "Dragon Bow", "Claw of Midnight", "Nightshadow", "Blasting Rod", "Windspeaker", "Legend of Freya", "Book of Hylia", "Soulshot", "Legendary Dragon Orb", "Cruel Blade", "Cursed Blade", "Starlight Crystal", "Blinding Light of Destiny", "Dragonforge Plate", "Blade of Despair", "Sword of the Occult", "Concentrated Energy", "Twilight", "Curse of Hell", "Titan's Mitt"]
  },
  Twilight: {
    id: 'Twilight',
    restriction: EvoItemRestictions.ULTIMATE_FORGE,
    rarity: EvoRarity.GODLY,
    icon: 'Twilight',
    description: 'The beginning.',
    effects: [],
    crafting: [
      'Mystery',
      'Draconic Trinity',
      'Hellish Behemoth',
      'Nether Reactor',
    ],
    source: 'Mystery forging items',
    materialFor: ["Baptism", "Aerielis", "Blade of Awe", "Cosmos", "Ender", "Fate", "Guardian Force", "Hope", "Kiea's Tale", "Raising Heart", "Reinforce", "Rune Sihill", "Tooth of Belial", "Virtue", "Blessed Aerielis", "Blessed Blade of Awe", "Blessed Cosmos", "Blessed Ender", "Blessed Fate", "Blessed Guardian Force", "Blessed Hope", "Blessed Kiea's Tale", "Blessed Raising Heart", "Blessed Reinforce", "Blessed Rune Sihill", "Blessed Tooth of Belial", "Blessed Virtue"]
  },
  Eve: {
    id: 'Eve',
    restriction: EvoItemRestictions.ULTIMATE_FORGE,
    rarity: EvoRarity.GODLY,
    icon: 'Eve',
    description: 'The end.',
    effects: [],
    crafting: [
      'Blessing of Darkness',
      'Blessing of Dragon',
      'Blessing of Agony',
      'Nether Reactor',
    ],
    source: 'Mystery forging items',
    materialFor: ["Baptism", "Aerielis", "Blade of Awe", "Cosmos", "Ender", "Fate", "Guardian Force", "Hope", "Kiea's Tale", "Raising Heart", "Reinforce", "Rune Sihill", "Tooth of Belial", "Virtue", "Blessed Aerielis", "Blessed Blade of Awe", "Blessed Cosmos", "Blessed Ender", "Blessed Fate", "Blessed Guardian Force", "Blessed Hope", "Blessed Kiea's Tale", "Blessed Raising Heart", "Blessed Reinforce", "Blessed Rune Sihill", "Blessed Tooth of Belial", "Blessed Virtue"]
  },
  Baptism: {
    id: 'Baptism',
    restriction: EvoItemRestictions.ALL_CLASSES,
    rarity: EvoRarity.GODLY,
    icon: 'Baptism',
    description:
      'The Angel of Mystery grants your wishes, creating your Class Godly Item.',
    effects: [],
    crafting: ['Twilight', 'Eve'],
    source: 'Mystery forging items',
  },
  'Light Synthesis': {
    id: 'Light Synthesis',
    restriction: EvoItemRestictions.ULTIMATE_FORGE,
    rarity: EvoRarity.GODLY,
    icon: 'LightSynthesis',
    description: 'Allows the combination of angelic relics.',
    effects: [],
    crafting: ['Nether Reactor', 'Nether Reactor'],
    source: 'Mystery forging items',
    materialFor: ["King's Royal Crown", "Queen's Royal Crownn", 'Imperial Royal Crown', 'Ascended Light of Destiny']
  },
};
