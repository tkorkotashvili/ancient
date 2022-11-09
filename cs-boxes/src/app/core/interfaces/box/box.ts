export interface IBox {
  cost: number;
  currency: string;
  iconUrl: string;
  id: string;
  name: string;
}

export interface IBoxes {
  edges: INode[];
}

export interface IBoxDetails {
  currency: string;
  iconUrl: string;
  id: string;
  name: string;
  price: number;
}

export interface IBoxDetailsResponse {
  box: IBoxDetails;
}

export interface IBoxResponse {
  boxes: IBoxes;
}

export interface INode {
  node: IBox;
}
