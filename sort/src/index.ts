import { NumberCollections } from './NumberCollections';

/* -------------------------------------------------------------------------- */

const numberCollection = new NumberCollections([1, -2, 3, -4]);
numberCollection.sort();
console.log(numberCollection.data);
