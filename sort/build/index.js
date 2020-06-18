"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumberCollections_1 = require("./NumberCollections");
/* -------------------------------------------------------------------------- */
var numberCollection = new NumberCollections_1.NumberCollections([1, -2, 3, -4]);
numberCollection.sort();
console.log(numberCollection.data);
