type RowObj = {
  warehouse: string;
  productId: string;
  itemDescription: string;
  uom: string;
  ctnsSize: string;
  costPrice: string;
  countedQuantity: number;
  stockPositionQty: number;
  variance: number;
};

const tableRecon: RowObj[] = [
  {
    warehouse: "Ojo Major Stores",
    productId: "FG-001",
    itemDescription: "EMGYL (METRONIDAZOLE) 400MG TABLETS (10*10)",
    uom: "Pack",
    ctnsSize: "100",
    costPrice: "45,000",
    countedQuantity: 445,
    stockPositionQty: 555,
    variance: 5,
  },
  {
    warehouse: "Ikeja Warehouse Ltd.",
    productId: "FG-041",
    itemDescription:
      "EMPRIN (ACETYL -SALICYLIC ACID) 75MG BLISTER TABLETS (10*10)",
    uom: "Bottle",
    ctnsSize: "100",
    costPrice: "85,000",
    countedQuantity: 545,
    stockPositionQty: 458,
    variance: 15,
  },
  {
    warehouse: "Ikeja Warehouse Ltd.",
    productId: "FG-041",
    itemDescription: "EMCILLIN (AMPICILLIN 125MG/5ML BP) SUSPENSION *100ML",
    uom: "Bottle",
    ctnsSize: "100",
    costPrice: "85,000",
    countedQuantity: 545,
    stockPositionQty: 458,
    variance: 15,
  },
  {
    warehouse: "Ikeja Warehouse Ltd.",
    productId: "FG-041",
    itemDescription: "EM-VIT-C (VITAMIN C 100MG) TABLETS WHITE * 1000",
    uom: "Bottle",
    ctnsSize: "100",
    costPrice: "85,000",
    countedQuantity: 545,
    stockPositionQty: 458,
    variance: 15,
  },
];

export default tableRecon;
