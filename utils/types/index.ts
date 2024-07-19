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
