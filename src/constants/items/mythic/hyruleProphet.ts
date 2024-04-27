import { EvoItem } from '../item';
import { EvoItemRestictions } from '../../restrictions';
import { EvoRarity } from '../../rarity';

export const hyruleProphetItems: { [id: string]: EvoItem } = {
  'Angelic Hope': {
    id: 'Angelic Hope',
    restriction: EvoItemRestictions.FORGING_MATERIAL,
    rarity: EvoRarity.MYTHIC,
    icon: 'AngelicHope',
    description:
      "The rise of the archangels. Requires 16 Mysterious Notes.",
    effects: [],
    crafting:
    [
      'Fabled Armor Piece',
      'Angelic Heart',
      'Pure Ignited Incinerator',
      'Pure Light Synthesis',
    ],
    source: 'Hyrule Prophet',
  },
  'Angelic Heart': {
    id: 'Angelic Heart',
    restriction: EvoItemRestictions.FORGING_MATERIAL,
    rarity: EvoRarity.MYTHIC,
    icon: 'AngelicHeart',
    description:
      "The heart of divine. Requires 12 Mysterious Notes.",
    effects: [],
    crafting: [
      'Angel Creation',
      'Angel Feather',
      'Angel Fire',
      'Harbinger\'s Heart',
      'Pure Light Synthesis'
    ],
    source: 'Hyrule Prophet',
  },
  "Harbinger's Heart": {
    id: "Harbinger's Heart",
    restriction: EvoItemRestictions.FORGING_MATERIAL,
    rarity: EvoRarity.MYTHIC,
    icon: 'HarbingersHeart',
    description:
      "The pure essence of Harbinger, his heart itself. Requires 6 Mysterious Notes.",
    effects: [],
    crafting: [
      "Harbinger's Essence",
      "Harbinger's Essence",
      "Harbinger's Essence",
    ],
    source: 'Hyrule Prophet',
  },
  "Disenchant Triforce Relics": {
    id: "Disenchant Triforce Relics",
    restriction: EvoItemRestictions.FORGING_MATERIAL,
    rarity: EvoRarity.MYTHIC,
    icon: 'DisenchantTriforceRelics',
    description:
      "Disenchants your ancient Triforce Relics in your Hero's First Inventory Slot into:",
    effects: [],
    crafting: [
      'Unpurified Triforce Fragment = 3 Cursed Heaven Prestige',
      'Unpurified Triforce Shard = 6 Cursed Heaven Prestige',
      'Triforce Shard = 6 Cursed Heaven Prestige + Light Synthesis',
      'Triforce Piece = 12 Cursed Heaven Prestige + Pure Light Synthesis',
      'Inspirit = 12 Cursed Heaven Prestige',
      'Triforce = 36 Cursed Heaven Prestige + 3 Pure Light Synthesis',
    ],
    source: 'Hyrule Prophet',
  },
  "Pure Light Synthesis": {
    id: "Pure Light Synthesis",
    restriction: EvoItemRestictions.FORGING_MATERIAL,
    rarity: EvoRarity.MYTHIC,
    icon: 'PureLightSynthesis',
    description:
      'A stronger binding material for angelic relics.',
    effects: [],
    crafting: [
      'Light Synthesis',
      'Light Synthesis',
    ],
    source: 'Hyrule Prophet'
  },
  "Ignited Incinerator": {
    id: "Ignited Incinerator",
    restriction: EvoItemRestictions.FORGING_MATERIAL,
    rarity: EvoRarity.MYTHIC,
    icon: 'IgnitedIncinerator',
    description:
      "The true incineration. Requires 9 Mysterious Notes.",
    effects: [],
    crafting: [
      'Incinerator',
      'Nether Reactor',
    ],
    source: 'Hyrule Prophet'
  },
  "Pure Ignited Incinerator": {
    id: "Pure Ignited Incinerator",
    restriction: EvoItemRestictions.FORGING_MATERIAL,
    rarity: EvoRarity.MYTHIC,
    icon: 'PureIgnitedIncinerator',
    description:
      "The pure incineration. Requires 10 Mysterious Notes.",
    effects: [],
    crafting: [
      'Ignited Incinerator',
      'Pure Light Synthesis',
    ],
    source: 'Hyrule Prophet'
  },
}