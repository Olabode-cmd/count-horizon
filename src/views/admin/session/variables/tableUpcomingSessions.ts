type RowObj = {
	id: number;
  name: string;
  warehouse: string;
  countLead: string;
  date: string;
};

const tableUpcomingSession: RowObj[] = [
	{
		name: "March W1 Sessions",
		warehouse: "Pen Avenue Warehouse",
		countLead: 'John Doe',
		date: "23/06/2023",
		id: 2342
	},
	{
		name: "March W1 Session",
		warehouse: "Raven Avenue Warehouse",
		countLead: 'Mary Doe',
		date: "23/06/2023",
		id: 2342,
	},
	{
		name: "March W2 Sessions",
		warehouse: "Pen Avenue Warehouse",
		countLead: 'John Doe',
		date: "24/06/2023",
		id: 2342,
	},
	{
		name: "March W2 Sessions",
		warehouse: "Pen Avenue Warehouse",
		countLead: 'John Doe',
		date: "23/06/2023",
		id: 2342,
	}
];

export default tableUpcomingSession;
