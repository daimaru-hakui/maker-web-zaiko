export type DaimaruData = {
  品番: string;
  商品名: string;
  サイズ: string;
  在庫数: string;
  徳島在庫: string;
  外部在庫: string;
  TOTAL: string;
  受注残: string;
  予約: string;
  仕掛: string;
};

export type TombowData = {
  id: string;
  row: number;
  jan: string | null;
  productNumber: string | null;
  size: string | null;
  color: string | null;
  stock: number | null;
  createdAt: Date;
};

export type ChikumaData = {
  id: string;
  row: number;
  jan: string | null;
  productNumber: string | null;
  size: string | null;
  stock: number | null;
  inspectStock: number | null;
  nextTimeStock: number | null;
  nextTimeDate: string | null;
  nextTimeStock2: number | null;
  nextTimeDate2: string | null;
  createdAt: Date;
};

export type ChitoseData = {
  id: string;
  row: number;
  jan: string | null;
  productNumber: string | null;
  productName: string | null;
  color: string | null;
  size: string | null;
  stock: number | null;
  externalStock: number | null;
  nextTimeDate: string | null;
  nextTimeStock: number | null;
  nextTimeDate2: string | null;
  nextTimeStock2: number | null;
  nextTimeDate3: string | null;
  nextTimeStock3: number | null;
  createdAt: Date;
};

export type BonmaxData = {
  id: string;
  row: number;
  jan: string | null;
  productNumber: string | null;
  productName: string | null;
  color: string | null;
  size: string | null;
  stock: number | null;
  externalStock: number | null;
  nextTimeStock: number | null;
  nextTimeDate: string | null;
  leadTime: string | null;
  createdAt: Date;
};

export type SeleryData = {
  id: string;
  row: number;
  jan: string | null;
  stock: number | null;
  productNumber: string | null;
  productName: string | null;
  color: string | null;
  size: string | null;
  nextTimeStock: number | null;
  nextTimeDate: string | null;
  createdAt: Date;
};

export type KarseeData = {
  id: string;
  row: number;
  jan: string | null;
  productNumber: string | null;
  productName: string | null;
  color: string | null;
  size: string | null;
  stock: number | null;
  nextTimeDate: string | null;
  nextTimeStock: number | null;
  nextTimeDate2: string | null;
  nextTimeStock2: number | null;
  nextTimeDate3: string | null;
  nextTimeStock3: number | null;
  brand: string | null;
  createdAt: Date;
};

export type ServoData = {
  id: string;
  row: number;
  jan: string | null;
  productNumber: string | null;
  productName: string | null;
  color: string | null;
  size: string | null;
  stock: number | null;
  nextTimeDate: string | null;
  nextTimeStock: number | null;
  nextTimeDate2: string | null;
  nextTimeStock2: number | null;
  createdAt: Date;
};

export type BurtleData = {
  id: string;
  row: number;
  jan: string | null;
  productNumber: string | null;
  productName: string | null;
  color: string | null;
  size: string | null;
  stock: number | null;
  externalStock: number | null;
  nextTimeDate: string | null;
  nextTimeStock: number | null;
  nextTimeDate2: string | null;
  nextTimeStock2: number | null;
  createdAt: Date;
};

export type JoieData = {
  id: string;
  row: number;
  productNumber: string | null;
  color: string | null;
  size: string | null;
  stock: number | null;
  nextTimeDate: string | null;
  nextTimeStock: number | null;
  nextTimeDate2: string | null;
  nextTimeStock2: number | null;
  nextTimeDate3: string | null;
  nextTimeStock3: number | null;
  createdAt: Date;
};
export type SevenData = {
  id: string;
  row: number;
  productNumber: string | null;
  productName: string | null;
  color: string | null;
  size: string | null;
  stock: number | null;
  jan: string | null;
  createdAt: Date;
};

export type CocosData = {
  id: string;
  row: number;
  productNumber: string | null;
  productName: string | null;
  color: string | null;
  size: string | null;
  stock: number | null;
  nextTimeDate: string | null;
  nextTimeStock: number | null;
  jan: string | null;
  createdAt: Date;
};

export type AitozData = {
  id: string;
  row: number;
  productNumber: string | null;
  productName: string | null;
  color: string | null;
  size: string | null;
  stock: number | null;
  jan: string | null;
  createdAt: Date;
};

export type YagiData = {
  id: string;
  row: number;
  jan?: string | null;
  productNumber: string | null;
  productName: string | null;
  color: string | null;
  size: string | null;
  stock: number;
  brand: string | null;
  createdAt: Date;
};

export type AllData =
  | {
      id: string;
      row: number;
      jan?: string | null;
      productNumber: string | null;
      size: string | null;
      stock: number | null;
      inspectStock?: number | null;
      externalStock?: number | null;
      nextTimeStock?: number | null;
      nextTimeDate?: string | null;
      nextTimeStock2?: number | null;
      nextTimeDate2?: string | null;
      nextTimeStock3?: number | null;
      nextTimeDate3?: string | null;
      createdAt: Date;
    }
  | DaimaruData;

export type Maker = {
  daimaru: boolean;
  tombow: boolean;
  bonmax: boolean;
  burtle: boolean;
  chikuma: boolean;
  chitose: boolean;
  karsee: boolean;
  joie: boolean;
  selery: boolean;
  servo: boolean;
  seven: boolean;
  cocos: boolean;
  aitoz: boolean;
  yagi: boolean;
  toms: boolean;
};
