type RowObj = {
  id: number;
  productId: string;
  itemName: string
  batch: string;
  logisticArea: string;
  expectedQuantity: number;
  countedQuantity: number;
  variance: number;
  discrepancyStatus: string;
  date: string;
};

const tableRecon: RowObj[] = [
  {
      id: 5632,
      productId: "PID-001",
      itemName: "Smartphones",
      batch: "456876",
      logisticArea: "LA0012",
      expectedQuantity: 450,
      countedQuantity: 445,
      variance: 5,
      date: "23/06/2023",
      discrepancyStatus: "Error"
  },
  {
      id: 5632,
      productId: "PID-002",
      itemName: "Laptops",
      batch: "412876",
      logisticArea: "LA0012",
      expectedQuantity: 450,
      countedQuantity: 450,
      variance: 0,
      date: "23/06/2023",
      discrepancyStatus: "Null"
  },
  {
      id: 5632,
      productId: "PID-003",
      itemName: "iPads",
      batch: "356898",
      logisticArea: "LA0008",
      expectedQuantity: 450,
      countedQuantity: 450,
      variance: 0,
      date: "23/06/2023",
      discrepancyStatus: "Null"
  },
  {
      id: 5632,
      productId: "PID-004",
      itemName: "Radios",
      batch: "456876",
      logisticArea: "LA0019",
      expectedQuantity: 450,
      countedQuantity: 450,
      variance: 0,
      date: "23/06/2023",
      discrepancyStatus: "Null"
  },
];

export default tableRecon;