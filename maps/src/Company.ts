import faker from 'faker';

import { Mappable } from './Map';

/* -------------------------------------------------------------------------- */

export class Company implements Mappable {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  makerContent(): string {
    return `
      <div>
        <h1>Company name: ${this.companyName}</h1>
        <h3>Catch phrase: ${this.catchPhrase}</h3>
      </div>
    `;
  }
}
