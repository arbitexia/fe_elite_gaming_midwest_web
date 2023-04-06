import { AssetType } from './asset.type';
import { CommonType } from './common.type';

export type LocationType = {
  id: number;
  name: string;
  coords: { lat: number; lng: number };
  address: CommonType.Address;
  status: string;
  type: string;
  description?: string;
  updatedAt?: string;
  createdAt?: string;
  gallery: AssetType.Gallery[];
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
