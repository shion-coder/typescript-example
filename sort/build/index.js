"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
var CharacterCollection_1 = require("./CharacterCollection");
/* -------------------------------------------------------------------------- */
// const numberCollection = new NumberCollections([1, -2, 3, -4]);
// const sorter = new Sorter(numberCollection);
// sorter.sort();
// console.log(numberCollection.data);
var characterCollection = new CharacterCollection_1.CharacterCollection('XafasyB');
var sorter = new Sorter_1.Sorter(characterCollection);
sorter.sort();
console.log(characterCollection);
