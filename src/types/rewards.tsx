import { ProductType } from './product.type';

export interface RewardsDetailProps {
  rewardsItem: ProductType;
}

export type RewardItemType = {
  id: number;
  name: string;
  url: string[];
  location: string;
  point: number;
  specifications: object;
};
