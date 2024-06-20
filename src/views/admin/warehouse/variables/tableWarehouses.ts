type RowObj = {
  whNumber: string;
  name: string;
  location: string;
  status: string;
  responsiblePerson: string;
};

const tableWarehouses: RowObj[] = [
  {
    name: "Pen Avenue Warehouse",
    location: "Ojo, Lagos",
    whNumber: "WH2342",
    status: "active",
    responsiblePerson: "Tobi Oladele",
  },
  {
    name: "Raven Stores",
    location: "Ikeja, Lagos",
    whNumber: "WH2142",
    status: "active",
    responsiblePerson: "John Doe",
  },
  {
    name: "Pen Stores",
    location: "Ikorodu, Lagos",
    whNumber: "WH2352",
    status: "active",
    responsiblePerson: "Mary Doe",
  },
  {
    name: "Raven Stores",
    location: "Ikeja, Lagos",
    whNumber: "WH2842",
    status: "active",
    responsiblePerson: "Emily Doe",
  },
];

export default tableWarehouses;
