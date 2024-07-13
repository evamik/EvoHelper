import { EvoItem } from '../item';
import { EvoItemRestictions } from '../../restrictions';
import { EvoRarity } from '../../rarity';

export const championOfChaosItems: { [id: string]: EvoItem } = {
  'Deathgrip': {
    id: 'Deathgrip',
    restriction: EvoItemRestictions.CHUNIN,
    rarity: EvoRarity.MYTHIC,
    icon: 'Deathgrip',
    description: 'Used by S ranked assassins, the Deathgrip is a sleek, black, high-tech accessory designed to enhance stealth and combat efficiency. This glove provides superior grip, enhanced agility, and the ability to scale walls effortlessly. Embedded with cutting-edge sensors and reinforced with lightweight, indestructible material, the Deathgrip ensures unmatched precision and lethal control in every mission.',
    effects: [
      '+1750 Intelligence',
      '+15% Cooldown speed',
      'Passive: Shunpo deals additional 125% damage.'
    ],
    crafting: [
      'Shinigami Yanki',
      'Golden Fragment',
      'Diamond',
      'Prismatic Sigil of Elements',
    ],
    source: 'Champion Of Chaos',
  },

  "Escherion's Helm": {
    id: "Escherion's Helm",
    restriction: EvoItemRestictions.TANK,
    rarity: EvoRarity.MYTHIC,
    icon: 'EscherionsHelm',
    description: 'Worn by the 1st Lord of Chaos, this helm is adorned with jagged, dark metal spikes that radiate an eerir, crimson glow, reflecting the malevolent energies that course through its structure.',
    effects: [
      '+575 Armor',
      'Active: Deals 150 000 Magic Damage within an AoE and stuns for 1 second. Cooldown 35s.'
    ],
    crafting: [
      'Helm of the Overlord',
      'Quicksilver Fragment',
      'Silver',
      'Amethyst',
      'Prismatic Sigil of Elements',
    ],
    source: 'Champion Of Chaos',
  },
  "Holy Crystal": {
    id: "Holy Crystal",
    restriction: EvoItemRestictions.INT,
    rarity: EvoRarity.MYTHIC,
    icon: 'HolyCrystal',
    description: 'The Holy Crystal is kept in the Magic Academy, used as a \'touchstone\' for those who study there. Each year, new Academy members take its trial to test their individual ability.',
    effects: [
      '+1750 Intelligence',
      '+15% Cooldown speed',
      'Passive: Increase Magic Damage up to 16% based on current MP(Min 6.66%)'
    ],
    crafting: [
      "Queen's Agony",
      'Nature Fragment',
      'Emerald',
      'Mystical',
      'Prismatic Sigil of Elements',
    ],
    source: 'Champion Of Chaos',
  },
  "Hyoga's Edge": {
    id: "Hyoga's Edge",
    restriction: EvoItemRestictions.MELEE_AGI,
    rarity: EvoRarity.MYTHIC,
    icon: 'HyogasEdge',
    description: 'Enchanted by the tooth of the dragon and the tail of the demon, The Impaler gains insurmountable power and has evolved to the Ultimate Dragon Blade.',
    effects: [
      '+4600 Damage',
      '+700 Agility',
      '+30% Attack speed',
      'Passive: Second basic attack deals 10 000 bonus Pure damage and heals for 20% of the bonus pure damage dealt. Every 3rd Chaos strike deals [100% damage] bonus Physical Damage and applies on-hit effects.'
    ],
    crafting: [
      "Ultimate Dragon Blade",
      'Lavender Fragment',
      'Amethyst',
      'Blessing of Darkness',
      'Prismatic Sigil of Elements',
    ],
    source: 'Champion Of Chaos',
  },

  "King's Crown of Dictatorship": {
    id: "King's Crown of Dictatorship",
    restriction: EvoItemRestictions.ALL_CLASSES,
    rarity: EvoRarity.MYTHIC,
    icon: 'KingsCrown',
    description: 'This crown pulses with an aura of raw chaos, reflecting the tyrannical rule of its former owner. It grants its wearer formidable power to command and manipulate.',
    effects: [
      '+25 000 HP',
      '+20 000 MP',
      'Active: Blocks all incoming Magic Damage for the next 7 seconds. Cooldown 25s.',
      'Passive: Reduces Magic Damage taken by 12%.'
    ],
    crafting: [
      "King's Royal Crown",
      'Diamond',
      'Prismatic Sigil of Elements',
    ],
    source: 'Champion Of Chaos',
  },

  "Queen's Crown of Dictatorship": {
    id: "Queen's Crown of Dictatorship",
    restriction: EvoItemRestictions.ALL_CLASSES,
    rarity: EvoRarity.MYTHIC,
    icon: 'QueensCrown',
    description: 'This crown pulses with an aura of raw chaos, reflecting the tyrannical rule of its former owner. It grants its wearer formidable power to command and manipulate.',
    effects: [
      '+25 000 HP',
      '+20 000 MP',
      '+15% Cooldown speed',
      'Active: Blocks all incoming Magic Damage for the next 7 seconds. Cooldown 25s.',
    ],
    crafting: [
      "Queens's Royal Crown",
      'Diamond',
      'Prismatic Sigil of Elements',
    ],
    source: 'Champion Of Chaos',
  },

  "Rulers's Crown of Dictatorship": {
    id: "Rulers's Crown of Dictatorship",
    restriction: EvoItemRestictions.ALL_CLASSES,
    rarity: EvoRarity.MYTHIC,
    icon: 'RulersCrown',
    description: 'This crown pulses with an aura of raw chaos, reflecting the tyrannical rule of its former owner. It grants its wearer formidable power to command and manipulate.',
    effects: [
      '+25 000 HP',
      '+20 000 MP',
      'Passive: Increases Damage dealt by 12%.',
    ],
    crafting: [
      "Imperial Royal Crown",
      'Diamond',
      'Prismatic Sigil of Elements',
    ],
    source: 'Champion Of Chaos',
  },

  "Spear of Genocide": {
    id: "Spear of Genocide",
    restriction: EvoItemRestictions.MELEE_AGI,
    rarity: EvoRarity.MYTHIC,
    icon: 'SpearOfGenocide',
    description: 'The most prized treasure of the Dragon Altar that has witnessed thousands of years of history and grats the owner unrivaled power and the responsibility to guard Cadia Riverlands.',
    effects: [
      '+8800 Damage',
      '+40% Splash attack',
      'Active: Next 3 basic attacks deal [20 000 + 100% Agility] magic damage to enemies around the target.',
    ],
    crafting: [
      "Hephaestus",
      'Blood Fragment',
      'Ruby',
      'Dragon Tooth',
      'Prismatic Sigil of Elements',
    ],
    source: 'Champion Of Chaos',
  },
  "Staff of Inversion": {
    id: "Staff of Inversion",
    restriction: EvoItemRestictions.INT,
    rarity: EvoRarity.MYTHIC,
    icon: 'StaffOfInversion',
    description: 'The living staff of the 1st Lord of Chaos. It is known to disobey its owner that do not have enough chaos power and turn its wishes upside down.',
    effects: [
      '+1500 Intelligence',
      '+25% Cooldown speed',
      '+100 Mana regen',
    ],
    crafting: [
      "Descend Reaper",
      'Golden Fragment',
      'Diamond',
      'Prismatic Sigil of Elements',
    ],
    source: 'Champion Of Chaos',
  },
  "Vespermoon": {
    id: "Vespermoon",
    restriction: EvoItemRestictions.INT,
    rarity: EvoRarity.MYTHIC,
    icon: 'Vespermoon',
    description: 'The most elegant ring ever created, resembling the cerulean ocean reflected by the moon\'s lunatic glow.',
    effects: [
      '+1375 Intelligence',
      '+200 Armor',
      '+5% Cooldown speed',
      'Active: Restores [10% max MP + 80% Int] MP and the next spellcast within 2.5s will have +25% Mana Efficiency. Cooldown 12s.',
    ],
    crafting: [
      "Esper's Blood",
      'Ocean Fragment',
      'Sapphire',
      'Prismatic Sigil of Elements',
    ],
    source: 'Champion Of Chaos',
  },
  "Wind of Nature": {
    id: "Wind of Nature",
    restriction: EvoItemRestictions.ARCHER,
    rarity: EvoRarity.MYTHIC,
    icon: 'WindOfNature',
    description: 'In the depths of the Azrya Woodlands, a dazzling green gem was picked up by an Elf who then used it in crafting a long bow. Rich, natural energies run throughout it and across its string, protecting the land alongside the Elves.',
    effects: [
      '+25 000 HP',
      '+20 000 MP',
      'Passive: Increases Damage dealt by 12%.',
    ],
    crafting: [
      "Hatred",
      'Nature Fragment',
      'Emerald',
      'Diamond',
      'Prismatic Sigil of Elements',
    ],
    source: 'Champion Of Chaos',
  },
  "Wings of the Divine": {
    id: "Wings of the Divine",
    restriction: EvoItemRestictions.ALL_CLASSES,
    rarity: EvoRarity.MYTHIC,
    icon: 'WingsOfTheDivine',
    description: 'Made with the feather of the divine angels, this artificially-made wings mimics the power of the gods.',
    effects: [
      '+700 All stats',
      '+35% Attack speed',
      '+140 Movement speed',
      'Active: Teleport to any Inn. Cooldown 30s.',
    ],
    crafting: [
      "Eternal Phoenix",
      'Angel Feather',
      'Prismatic Sigil of Elements',
    ],
    source: 'Champion Of Chaos',
  },
}
