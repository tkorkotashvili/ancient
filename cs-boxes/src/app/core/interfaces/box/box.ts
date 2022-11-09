export interface IBox {
  id: string;
  name: string;
  iconUrl: string;
  cost: number;
}

export interface INode {
  node: IBox;
}

export interface IBoxes {
  edges: INode[];
}

export interface IBoxResponse {
  boxes: IBoxes;
}
