export declare namespace AssetType {
  enum AssetType {
    IMAGE = 'IMAGE',
    VIDEO = 'VIDEO',
    DOCUMENT = 'DOCUMENT',
  }

  type Gallery = {
    id: number;
    assetId: number;
    victimId: number;
    model: number;
    asset?: Asset;
  };

  type Asset = {
    name: string;
    id: number;
    desc?: string;
    type: string;
    url: string;
  };
}
