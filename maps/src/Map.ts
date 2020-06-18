export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  makerContent(): string;
}

export class Map {
  private googleMap: google.maps.Map;

  constructor(divId) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

  addMaker(mappable: Mappable): void {
    const maker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });

    maker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.makerContent(),
      });

      infoWindow.open(this.googleMap, maker);
    });
  }
}
