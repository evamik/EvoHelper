import { EvoItem } from '../item';
import { EvoItemRestictions } from '../../restrictions';
import { EvoRarity } from '../../rarity';

export const flameItems: { [id: string]: EvoItem } = {
  "Esper's Blood": {
    id: "Esper's Blood",
    restriction: EvoItemRestictions.INT,
    rarity: EvoRarity.FORGED,
    icon: 'EspersBlood',
    description:
      'The sacred ring of Esper, enchanted with his blood that unlocks the stored powers within it.',
    effects: [
      '+175 Armor',
      '+1000 Intelligence',
      'Active: Restores (10% Max MP + 65% Int) MP. Cooldown 12s.',
    ],
    crafting: ["Esper's Ring", 'Fire Stone'],
    source: 'Flame merchant',
  },
  'Shinigami Yanki': {
    id: 'Shinigami Yanki',
    restriction: EvoItemRestictions.CHUNIN,
    rarity: EvoRarity.FORGED,
    icon: 'ShinigamiYanki',
    description:
      "Named after the beast of fiery death, these claws inflicts burning pain to the prey's wounds.",
    effects: [
      '+1300 Agility',
      '+10% Cooldown Reduction',
      'Passive: Shunpo deals additional 100% damage.',
    ],
    crafting: ['Wind Glove', 'Fire Stone'],
    source: 'Flame merchant',
  },
  'Dreaded Totem': {
    id: 'Dreaded Totem',
    restriction: EvoItemRestictions.INT,
    rarity: EvoRarity.FORGED,
    icon: 'DreadedTotem',
    description:
      'Known as the Embodiment of Magma, this blade is the ultimate weapon of flame used by the God of Fire. It is rumored to burn thousands of wicked sinners with a single strike.',
    effects: [
      '+1000 Intelligence',
      '+95 HP regen',
      '+75 HP regen',
      '+10% Cooldown Reduction',
      "Active: Heals target's HP for (12,500 +10% Max HP) and provide 125 Armor for 5 seconds. Heals and buffs nearby allies for 50% of the amount. Cooldown 15s.",
    ],
    crafting: ['Dragon Totem', 'Fire Stone'],
    source: 'Flame merchant',
    materialFor: ['Cane of Byrna']
  },
  'Royal Crown': {
    id: 'Royal Crown',
    restriction: EvoItemRestictions.ALL_CLASSES,
    rarity: EvoRarity.FORGED,
    icon: 'RoyalCrown',
    description:
      'The crown of the Silvasian Royalty who ruled the world for over a millennnium, possessing majestic powers that enhances the spirit of its owner.',
    effects: [
      '+18 750 Health',
      '+14 000 Mana',
      'Active: Blocks all incoming Magic Damage for the next 6 seconds. Cooldown 30s.',
    ],
    crafting: ["Tainted Neptune's Eye", 'Fire Stone'],
    source: 'Flame merchant',
    materialFor: ["King's Royal Crown", "Queen's Royal Crownn", 'Imperial Royal Crown']
  },
  "King's Royal Crown": {
    id: "King's Royal Crown",
    restriction: EvoItemRestictions.ALL_CLASSES,
    rarity: EvoRarity.FORGED,
    icon: 'KingsRoyalCrown',
    description:
      'The crown of the Silvasian Royalty who ruled the world for over a millennnium, possessing majestic powers that enhances the spirit of its owner.',
    effects: [
      '+18 750 Health',
      '+14 000 Mana',
      'Active: Blocks all incoming Magic Damage for the next 6 seconds. Cooldown 30s.',
      'Passive: Reduces Magic Damage taken by 8%.',
    ],
    crafting: ['Royal Crown', 'Light Synthesis'],
    source: 'Flame merchant',
  },
  "Queen's Royal Crown": {
    id: "Queen's Royal Crownn",
    restriction: EvoItemRestictions.ALL_CLASSES,
    rarity: EvoRarity.FORGED,
    icon: 'QueensRoyalCrown',
    description:
      'The crown of the Silvasian Royalty who ruled the world for over a millennnium, possessing majestic powers that enhances the spirit of its owner.',
    effects: [
      '+18 750 Health',
      '+14 000 Mana',
      'Active: Blocks all incoming Magic Damage for the next 6 seconds. Cooldown 30s.',
      'Passive: +10% Cooldown reduction.',
    ],
    crafting: ['Royal Crown', 'Light Synthesis'],
    source: 'Flame merchant',
  },
  'Imperial Royal Crown': {
    id: 'Imperial Royal Crown',
    restriction: EvoItemRestictions.ALL_CLASSES,
    rarity: EvoRarity.FORGED,
    icon: 'ImperialRoyalCrown',
    description:
      'The crown of the Silvasian Royalty who ruled the world for over a millennnium, possessing majestic powers that enhances the spirit of its owner.',
    effects: [
      '+18 750 Health',
      '+14 000 Mana',
      'Active: Blocks all incoming Magic Damage for the next 6 seconds. Cooldown 30s.',
      'Passive: Increases Damage Dealt by 8%.',
    ],
    crafting: ['Royal Crown', 'Light Synthesis'],
    source: 'Flame merchant',
  },
  Uranus: {
    id: 'Uranus',
    restriction: EvoItemRestictions.ALL_CLASSES,
    rarity: EvoRarity.FORGED,
    icon: 'Uranus',
    description:
      "Crafted from the artifacts left by Uranus, the God of Sky, the plate made from his son's remains becomes unbreakable.",
    effects: [
      '+200 Armor',
      '+900 Agility',
      'Passive: Prevents the wielder from taking Physical Damage above 35% of Max HP.',
    ],
    crafting: ['Hyperion', 'Fire Stone'],
    source: 'Flame merchant',
  },
  'Scarlet Phantom': {
    id: 'Scarlet Phantom',
    restriction: EvoItemRestictions.ALL_CLASSES,
    rarity: EvoRarity.FORGED,
    icon: 'ScarletPhantom',
    description:
      'The fully manifested gemstone sword, also known as the Ruby Blade by coating the emerald with a more powerful gemstone..',
    effects: [
      '+3500 Damage',
      '+350 All stats',
      'Active: Gains 75% AS for 10 seconds. Cooldown 25s.',
    ],
    crafting: ['Final Emerald Blade', 'Ruby', 'Fire Stone'],
    source: 'Flame merchant',
  },
  'Descend Reaper': {
    id: 'Descend Reaper',
    restriction: EvoItemRestictions.INT,
    rarity: EvoRarity.FORGED,
    icon: 'DescendReaper',
    description:
      'The demonic staff at its reaping form. It carves the soul of its victim, burning the spirit from within.',
    effects: [
      '+1100 Intelligence',
      '+80 Mana regeneration',
      '+20% Cooldown Reduction',
    ],
    crafting: ['Blasting Rod', 'Fire Stone'],
    source: 'Flame merchant',
  },
  'Helm of the Overlord': {
    id: 'Helm of the Overlord',
    restriction: EvoItemRestictions.SWORDSMAN,
    rarity: EvoRarity.FORGED,
    icon: 'HelmOfTheOverlord',
    description:
      'Crafted using the horns of the behemoth, this helmet manifests the soul of the wielder with insatiable destruction.',
    effects: [
      '+425 Armor',
      'Active: Deals 100,000 Magic Damage within an AOE and stuns for 1 second. Cooldown 45s.',
    ],
    crafting: ['Helm of Domination', 'Fire Stone'],
    source: 'Flame merchant',
  },
};
