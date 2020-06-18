import { Sorter } from './Sorter';
import { NumberCollections } from './NumberCollections';
import { CharacterCollection } from './CharacterCollection';

/* -------------------------------------------------------------------------- */

// const numberCollection = new NumberCollections([1, -2, 3, -4]);
// const sorter = new Sorter(numberCollection);

// sorter.sort();

// console.log(numberCollection.data);

const characterCollection = new CharacterCollection('XafasyB');
const sorter = new Sorter(characterCollection);

sorter.sort();

console.log(characterCollection);
