import {mixArray} from "../utils/util.js";

const BOXES_MAX = 6;

/**
 * @description Array of objects.
 * Object has structure:
 * {
 * id: String
 * name: String,
 * img: String,
 * }
 */

const allLootboxes = [
  {
    id: 1001,
    name: `Аркана Crystal Maiden`,
    img: `img/crystal-maiden-arcana.jpg`,
  },
  {
    id: 1002,
    name: `Аркана Lina`,
    img: `img/lina-arcana.jpg`,
  },
  {
    id: 1003,
    name: `Аркана Legion Commander`,
    img: `img/legion-commander-arcana.jpg`,
  },
  {
    id: 1004,
    name: `Аркана Phantom Assasin`,
    img: `img/phantom-assasin-arcana.jpg`,
  },
  {
    id: 1005,
    name: `Аркана Shadow Fiend`,
    img: `img/shadow-fiend-arcana.jpg`,
  },
  {
    id: 1006,
    name: `Аркана Terrorblade`,
    img: `img/terrorblade-arcana.jpg`,
  },
  {
    id: 1007,
    name: `Аркана Crystal Maiden`,
    img: `img/crystal-maiden-arcana.jpg`,
  },
  {
    id: 1008,
    name: `Аркана Lina`,
    img: `img/lina-arcana.jpg`,
  },
];

export const lootboxes =  mixArray(allLootboxes).slice(0, BOXES_MAX);
