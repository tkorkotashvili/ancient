export interface IBoxOpenings {
  boxOpenings: IPrizeItem[];
}

export interface IOpenBoxResponse {
  openBox: IBoxOpenings;
}

export interface IPrizeItem {
  id: string;
  itemValue: number;
  itemVariant: IPrizeItemVariant;
  itemVariantId: string;
}

export interface IPrizeItemVariant {
  id: string;
  name: string;
  value: number;
  iconUrl: string;
}
