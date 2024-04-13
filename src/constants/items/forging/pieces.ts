import { EvoItem } from '../item';
import { EvoItemRestictions } from '../../restrictions';
import { EvoRarity } from '../../rarity';

export const pieces: { [id: string]: EvoItem } = {
  'Rare Weapon Piece': {
    id: 'Rare Weapon Piece',
    restriction: EvoItemRestictions.FORGE,
    rarity: EvoRarity.RARE,
    icon: 'WeaponPiece',
    description: '',
    effects: [],
    crafting: [],
    source: 'Blacksmith',
    materialFor: ['The Executioner']
  },
  'Mega Weapon Piece': {
    id: 'Mega Weapon Piece',
    restriction: EvoItemRestictions.FORGE,
    rarity: EvoRarity.EPIC,
    icon: 'WeaponPiece',
    description: '',
    effects: [],
    crafting: [],
    source: 'Blacksmith',
    materialFor: ['Moonfang']
  },
  'Ultra Weapon Piece': {
    id: 'Ultra Weapon Piece',
    restriction: EvoItemRestictions.FORGE,
    rarity: EvoRarity.LEGENDARY,
    icon: 'WeaponPiece',
    description: '',
    effects: [],
    crafting: [],
    source: 'Blacksmith',
    materialFor: ["Contúirteacha", "Emerald Blade", "Crystallized Emerald Blade", "Song of Ice", "Windforce", "Paw of Lightning", "Bethrezen's Flame", "Horadric Staff", "Scepter of Mastery", "Mystral Staff", "Blade of Despair"]
  },
  'Mythical Weapon Piece': {
    id: 'Mythical Weapon Piece',
    restriction: EvoItemRestictions.FORGE,
    rarity: EvoRarity.GODLY,
    icon: 'WeaponPiece',
    description: '',
    effects: [],
    crafting: [],
    source: 'Blacksmith',
    materialFor: ["Malevolent", "Soulshot", "Cruel Blade", "Cursed Blade", "Blinding Light of Destiny", "Sword of the Occult", "Mystical"]
  },
  'Rare Armor Piece': {
    id: 'Rare Armor Piece',
    restriction: EvoItemRestictions.FORGE,
    rarity: EvoRarity.RARE,
    icon: 'ArmorPiece',
    description: '',
    effects: [],
    crafting: [],
    source: 'Blacksmith',
    materialFor: ["Ocean Cuirass", "Hades' Artifact"]
  },
  'Mega Armor Piece': {
    id: 'Mega Armor Piece',
    restriction: EvoItemRestictions.FORGE,
    rarity: EvoRarity.EPIC,
    icon: 'ArmorPiece',
    description: '',
    effects: [],
    crafting: [],
    source: 'Blacksmith',
    materialFor: ["Emerald Blade", "Hades' Artifact", "Tremor"]
  },
  'Ultra Armor Piece': {
    id: 'Ultra Armor Piece',
    restriction: EvoItemRestictions.FORGE,
    rarity: EvoRarity.LEGENDARY,
    icon: 'ArmorPiece',
    description: '',
    effects: [],
    crafting: [],
    source: 'Blacksmith',
    materialFor: ["Crystallized Emerald Blade", "Hand of God", "Tainted Neptune's Eye", "Hades' Artifact", "Tremor", "Paw of Lightning", "Darkforge Plate"]
  },
  'Mythical Armor Piece': {
    id: 'Mythical Armor Piece',
    restriction: EvoItemRestictions.FORGE,
    rarity: EvoRarity.GODLY,
    icon: 'ArmorPiece',
    description: '',
    effects: [],
    crafting: [],
    source: 'Blacksmith',
    materialFor: ["Hyperion", "Storm Sanctuary", "Starlight Crystal", "Blinding Light of Destiny", "Dragonforge Plate", "Mystical"]
  },
  'Rare Handle Piece': {
    id: 'Rare Handle Piece',
    restriction: EvoItemRestictions.FORGE,
    rarity: EvoRarity.RARE,
    icon: 'HandlePiece',
    description: '',
    effects: [],
    crafting: [],
    source: 'Blacksmith',
    materialFor: ['The Executioner']
  },
  'Mega Handle Piece': {
    id: 'Mega Handle Piece',
    restriction: EvoItemRestictions.FORGE,
    rarity: EvoRarity.EPIC,
    icon: 'HandlePiece',
    description: '',
    effects: [],
    crafting: [],
    source: 'Blacksmith',
    materialFor: ["Emerald Blade", "Feral Totem", "Hand of God", "Moonfang", "Windtalker", "Horadric Staff"]
  },
  'Ultra Handle Piece': {
    id: 'Ultra Handle Piece',
    restriction: EvoItemRestictions.FORGE,
    rarity: EvoRarity.LEGENDARY,
    icon: 'HandlePiece',
    description: '',
    effects: [],
    crafting: [],
    source: 'Blacksmith',
    materialFor: ["Crystallized Emerald Blade", "Feral Totem", "Song of Ice", "Windforce", "Paw of Lightning", "Bethrezen's Flame", "Mystral Staff", "Blade of Despair"]
  },
  'Mythical Handle Piece': {
    id: 'Mythical Handle Piece',
    restriction: EvoItemRestictions.FORGE,
    rarity: EvoRarity.GODLY,
    icon: 'HandlePiece',
    description: '',
    effects: [],
    crafting: [],
    source: 'Blacksmith',
    materialFor: ["Windtalker", "Eclair La Demes", "Dragon Bow", "Blasting Rod", "Book of Hylia", "Cruel Blade", "Cursed Blade", "Blinding Light of Destiny", "Mystical"]
  },
};
