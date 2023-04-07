import { LocationType, ProductType } from '@/types';

export declare namespace RewardType {
  type Data = {
    id?: number;
    locationId?: number;
    productId?: number;
    location?: LocationType;
    product: ProductType.Data;
    createdAt?: string;
    updatedAt?: string;
  };

  type Param = { id: number };

  type Filter = {
    filterBy: {
      locationId?: number;
      fromPoint?: number;
      toPoint?: number;
    };
  };

  type FilterLocation = {
    filterBy: {
      locationId?: number;
    };
    cursor: {
      page: number;
      size: number;
    };
  };

  type DataList = LocationType & {
    reward: RewardType.Data & { product: ProductType.Data }[];
  };
}
