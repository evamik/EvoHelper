import { EvoItemRestictions } from '../restrictions';
import { EvoRarity } from '../rarity';
import { Icon } from '../../icons/icons';

export interface EvoItem {
  id: string;
  restriction: EvoItemRestictions;
  rarity: EvoRarity;
  icon: Icon;
  description?: string;
  effects: string[];
  source: string;
  sourceShort?: string;
  crafting?: string[];
}
