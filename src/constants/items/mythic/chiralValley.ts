import { EvoItemRestictions } from '../../restrictions';
import { EvoRarity } from '../../rarity';
import { EvoItem } from '../item';

export const chiralValleyItems: { [id: string]: EvoItem } = {
  'Bow of Awe': {
    id: 'Bow of Awe',
    restriction: EvoItemRestictions.ARCHER,
    rarity: EvoRarity.GODLY,
    icon: 'BowOfAwe',
    description:
      "Crafted by the renowned elven bowyers in the hidden glades of the Enchanted Woods, the Bow of Awe is said to embody the harmonious relationship between nature and the celestial realms.",
    effects: [
      '+4000 Damage',
      '+600 Agility',
      '+25% Base damage',
      'Passive: Increase damage done by basic attacks by 4%',
    ],
    source: 'Chiral Valley',
    sourceShort: 'm2',
  },
  'Burning Blade': {
    id: 'Burning Blade',
    restriction: EvoItemRestictions.MELEE,
    rarity: EvoRarity.GODLY,
    icon: 'BurningBlade',
    description:
     "Forged in the legendary Smith's Forge, a place said to be at the crossroads of the mortal realm and the Elemental plane of Fire, the Burning Blade is a creation of both artistry and devastation. Imbued with the essence of flames that dance in eternal fury, this weapon has been wielded by warriors who crave the searing touch of power.",
    effects: [
      '+7500 Damage',
      'Passive: Deals 22000 magic damage per second for 5s.',
    ],
    source: 'Chiral Valley',
    sourceShort: 'm2',
  },
  'Earthen Core': {
    id: 'Earthen Core',
    restriction: EvoItemRestictions.TANK,
    rarity: EvoRarity.GODLY,
    icon: 'EarthenCore',
    description:
     "Forged by skilled blacksmiths who delved into the hidden depths of the world, the Earthen Core is a relic believed to contain the essence of a primordial earth elemental. Legends spear of the smiths, working in harmony with the earth's heartbeat, to create an armor that harmonized with the very core of existence.",
    effects: [
      '+500 Armor',
      'Passive: Reduces physical damage taken by 1% per 1000 Str',
    ],
    source: 'Chiral Valley',
    sourceShort: 'm2',
  },
  'Rift Singularity': {
    id: 'Rift Singularity',
    restriction: EvoItemRestictions.ALL_CLASSES,
    rarity: EvoRarity.GODLY,
    icon: 'RiftSingularity',
    description: "The eternal mystery of the void of the universe.",
    effects: [
      '+750 All stats',
      '+5% Cooldown speed',
    ],
    source: 'Chiral Valley',
    sourceShort: 'm2',
  },
  'Soulreaper': {
    id: 'Soulreaper',
    restriction: EvoItemRestictions.MELEE_AGI,
    rarity: EvoRarity.GODLY,
    icon: 'Soulreaper',
    description: "The Soulreaper is a creation born from the malevolent ambitions of dark sorcerers. Legends speak of its insatiable hunger for souls, a thirst that grows with each life extingushed by its razor-sharp edge. As the blade reaps through the living, it leaves behind a wake of tormented spirits, forever bound to the Soulreaper's shadowy legacy.",
    effects: [
      '+1000 Damage',
      '+1500 Agility',
      '+15% Cooldown speed',
    ],
    source: 'Chiral Valley'
  },
  'Tear of the Goddess': {
    id: 'Tear of the Goddess',
    restriction: EvoItemRestictions.INT,
    rarity: EvoRarity.GODLY,
    icon: 'TearOfTheGoddess',
    description: "Radiating an ethereal luminescence, the Tear of the Goddess is a necklace that embodies the divine essence of untarnished virtue.",
    effects: [
      '+1400 Intelligence',
      '+15% Cooldown speed',
      '+5% Mana efficiency'
    ],
    source: 'Chiral Valley',
    sourceShort: 'm2',
  },
  'Impure Sigil': {
    id: 'Impure Sigil',
    restriction: EvoItemRestictions.ULTIMATE_FORGE,
    rarity: EvoRarity.MYTHIC,
    icon: 'ImpureSigil',
    description: "A corrupted power.",
    source: 'Chiral Valley',
    sourceShort: 'm2',
    effects: []
  },
  'Mirror Sigil': {
    id: 'Mirror Sigil',
    restriction: EvoItemRestictions.ULTIMATE_FORGE,
    rarity: EvoRarity.MYTHIC,
    icon: 'MirrorSigil',
    description: "A reflective power.",
    source: 'Chiral Valley',
    sourceShort: 'm2',
    effects: []
  },
  'Pure Sigil': {
    id: 'Pure Sigil',
    restriction: EvoItemRestictions.ULTIMATE_FORGE,
    rarity: EvoRarity.MYTHIC,
    icon: 'PureSigil',
    description: "A glowing power.",
    source: 'Chiral Valley',
    sourceShort: 'm2',
    effects: []
  },
}
