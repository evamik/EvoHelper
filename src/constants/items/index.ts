import { weaponsMasterItems } from './forging/weaponsMaster';
import { armorsmithItems } from './merchants/armorsmith';
import { icyHighlandItems } from './easy/icyHighland';
import { hell4Items } from './hell/hell4';
import { imp1Items } from './imp/imp1';
import { angelCloudsItems } from './forging/angelClouds';
import { weaponsDealerItems } from './merchants/weaponsDealer';
import { imp2Items } from './imp/imp2';
import { magicWizardItems } from './forging/magicWizard';
import { ancientSoulItems } from './forging/ancientSoul';
import { bobBuilderItems } from './forging/bobBuilder';
import { hell3Items } from './hell/hell3';
import { hell2Items } from './hell/hell2';
import { hell1Items } from './hell/hell1';
import { nagaItems } from './nightmare/naga';
import { sewersItems } from './nightmare/sewers';
import { goldmineItems } from './hard/goldmine';
import { centaurItems } from './hard/centaur';
import { puzzleItems } from './hard/puzzle';
import { imp3Items } from './imp/imp3';
import { fragmentedSoul } from './merchants/fragmentedSoul';
import { ancientSoul } from './merchants/ancientSoul';
import { banditLordItems } from './merchants/banditLord';
import { pieces } from './forging/pieces';
import { angelNature } from './forging/angelNature';
import { angelSunItems } from './forging/angelSun';
import { mysteryItems } from './merchants/mystery';
import { godlyItems } from './forging/godly';
import { fireItems } from './forging/fire';
import { flameItems } from './forging/flame';
import { forgottenCryptItems } from './easy/forgottenCrypt';
import { fishingItems } from './fishing';
import { cursedHeavenItems } from './mythic/cursedHeavenItems';
import { imp3matsItems } from './merchants/imp3mats';
import { headItems } from './merchants/heads';
import { agonyItems } from './merchants/agony';
import { aghanimItems } from './mythic/aghanim';
import { alterEgoItems } from './mythic/alterEgoItems';
import { EvoItemRestictions } from '../restrictions';
import { EvoRarity } from '../rarity';
import { EvoItem } from './item';
import { hyruleProphetItems } from './mythic/hyruleProphet';
import { chiralValleyItems } from './mythic/chiralValley';

export const evoItems: {[id: string]: EvoItem} = {
  ...fishingItems,
  ...pieces,
  // vendors
  ...weaponsDealerItems,
  ...armorsmithItems,
  ...fragmentedSoul,
  ...ancientSoul,
  ...banditLordItems,

  ...weaponsMasterItems,
  ...ancientSoulItems,
  ...bobBuilderItems,
  ...magicWizardItems,
  ...angelCloudsItems,
  ...angelNature,
  ...angelSunItems,
  ...mysteryItems,
  ...fireItems,
  ...flameItems,
  ...godlyItems,
  //
  ...icyHighlandItems,
  ...forgottenCryptItems,

  ...goldmineItems,
  ...centaurItems,
  ...puzzleItems,

  ...nagaItems,
  ...sewersItems,
  ...hell1Items,
  ...hell2Items,
  ...hell3Items,
  ...hell4Items,
  ...imp1Items,
  ...imp2Items,
  ...imp3Items,
  ...cursedHeavenItems,
  ...chiralValleyItems,
  ...imp3matsItems,
  ...headItems,
  ...agonyItems,
  ...aghanimItems,
  ...alterEgoItems,
  ...hyruleProphetItems,
  'Spark of Joy': {
    id: 'Spark of Joy',
    restriction: EvoItemRestictions.ALL_CLASSES,
    rarity: EvoRarity.GODLY,
    icon: 'SparkOfJoy',
    description: 'rip M1 dungeon',
    effects:[],
    source: 'engame nubs',
  }
};
