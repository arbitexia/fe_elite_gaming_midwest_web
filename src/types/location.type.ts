export type LocationType = {
  name: string;
  coordinates: { lat: number; lng: number };
  id: number;
  location: string;
  status: boolean;
  type: string;
  urls: string[];
};

export type GetLocationsParam = {
  filterBy: {
    search: string;
  };
  // cursor: {
  //   page: number;
  //   size: number;
  // };
};

export type GetLocationParam = {
  locationId: number;
};
