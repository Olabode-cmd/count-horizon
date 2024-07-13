type RowObj = {
	id: number;
  name: string;
  status: string;
  closeSession: string;
  date: string;
};

const tableSession: RowObj[] = [
  {
    name: "March W1 Sessions",
    status: "Ongoing",
    date: "22/06/2023",
    id: 2642,
    closeSession: ""
  },
  {
    name: "March W1 Session",
    status: "Closed",
    date: "22/06/2023",
    id: 2992,
    closeSession: ""
  },
  {
    name: "March W2 Sessions",
    status: "Upcoming",
    date: "22/06/2023",
    id: 2387,
    closeSession: ""
  },
  {
    name: "March W2 Sessions",
    status: "Completed",
    date: "22/06/2023",
    id: 4142,
    closeSession: ""
  },
];

export default tableSession;
