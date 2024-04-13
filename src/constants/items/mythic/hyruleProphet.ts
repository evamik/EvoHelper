import { EvoItem } from '../item';
import { EvoItemRestictions } from '../../restrictions';
import { EvoRarity } from '../../rarity';

export const hyruleProphetItems: { [id: string]: EvoItem } = {
  'Angelic Hope': {
    id: 'Angelic Hope',
    restriction: EvoItemRestictions.MELEE,
    rarity: EvoRarity.MYTHIC,
    icon: 'AngelicHope',
    description:
      "The rise of the archangels.",
    effects: [],
    crafting:
    [
      'Angel Creation',
      'Angel Feather',
      'Angel Fire',
      'Angelic Heart',
      'Pure Ignited Incinerator',
      'Pure Light Synthesis',
    ],
    source: 'Cursed Heaven',
    materialFor: ["Ancient Omen", "Calamity", "Celestial Wand", "Everlasting Youth", "Holy Grimoire", "Link to the Past", "Prismatic Barrier", "Sovereign Sword", "Ascended Light of Destiny", "Cane of Byrna", "Crisis Core", "Consecration", "Drakath's Armor", "Eliot", "Moon Pearl", "Necrotic Sword of Doom", "Sinister Staff", "Sword of Akasha", "Titan's Mitt", "Ungodly Reaper of Nulgath"]
  },
  'Angelic Heart': {
    id: 'Angelic Heart',
    restriction: EvoItemRestictions.MELEE,
    rarity: EvoRarity.MYTHIC,
    icon: 'AngelicHeart',
    description:
      "The heart of divine.",
    effects: [],
    source: 'Cursed Heaven',
    materialFor: ['Angelic Hope']
  },
  "Harbinger's Heart": {
    id: "Harbinger's Heart",
    restriction: EvoItemRestictions.MELEE,
    rarity: EvoRarity.MYTHIC,
    icon: 'HarbingersHeart',
    description:
      "The pure essence of Harbinger, his heart itself.",
    effects: [],
    source: 'Cursed Heaven',
    materialFor: ['"Prismatic Barrier", "Crisis Core", "Moon Pearl", "Necrotic Sword of Doom"']
  },
}