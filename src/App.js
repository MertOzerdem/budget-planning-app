import { useState } from "react";
import ExpenseItem from "./components/ExpenseItem";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
	const [expenses, setExpenses] = useState([
		{
			id: 0,
			date: "Tue Nov 09 2021 17:57:30 GMT+0300 (GMT+03:00)",
			title: "RENOVIZE",
			amount: 6860,
		},
		{
			id: 1,
			date: "Tue Nov 09 2021 17:57:30 GMT+0300 (GMT+03:00)",
			title: "EXERTA",
			amount: 985,
		},
		{
			id: 2,
			date: "Tue Nov 09 2021 17:57:30 GMT+0300 (GMT+03:00)",
			title: "GRAINSPOT",
			amount: 4522,
		},
		{
			id: 3,
			date: "Tue Nov 09 2021 17:57:30 GMT+0300 (GMT+03:00)",
			title: "ANARCO",
			amount: 3966,
		},
		{
			id: 4,
			date: "Tue Nov 09 2021 17:57:30 GMT+0300 (GMT+03:00)",
			title: "DIGITALUS",
			amount: 9723,
		},
		{
			id: 5,
			date: "Tue Nov 09 2021 17:57:30 GMT+0300 (GMT+03:00)",
			title: "EGYPTO",
			amount: 7613,
		},
		{
			id: 6,
			date: "Tue Nov 09 2021 17:57:30 GMT+0300 (GMT+03:00)",
			title: "UTARA",
			amount: 1339,
		},
		{
			id: 7,
			date: "Tue Nov 09 2021 17:57:30 GMT+0300 (GMT+03:00)",
			title: "ECSTASIA",
			amount: 4669,
		},
		{
			id: 8,
			date: "Tue Nov 09 2021 17:57:30 GMT+0300 (GMT+03:00)",
			title: "PHOLIO",
			amount: 7634,
		},
		{
			id: 9,
			date: "Tue Nov 09 2021 17:57:30 GMT+0300 (GMT+03:00)",
			title: "UBERLUX",
			amount: 9495,
		},
		{
			id: 10,
			date: "Tue Nov 09 2021 17:57:30 GMT+0300 (GMT+03:00)",
			title: "SPHERIX",
			amount: 4609,
		},
		{
			id: 11,
			date: "Tue Nov 09 2021 17:57:30 GMT+0300 (GMT+03:00)",
			title: "JUNIPOOR",
			amount: 6939,
		},
		{
			id: 12,
			date: "Tue Nov 09 2021 17:57:30 GMT+0300 (GMT+03:00)",
			title: "PHARMACON",
			amount: 3464,
		},
		{
			id: 13,
			date: "Tue Nov 09 2021 17:57:30 GMT+0300 (GMT+03:00)",
			title: "IMAGEFLOW",
			amount: 7086,
		},
		{
			id: 14,
			date: "Tue Nov 09 2021 17:57:30 GMT+0300 (GMT+03:00)",
			title: "COMTEXT",
			amount: 4230,
		},
		{
			id: 15,
			date: "Tue Nov 09 2021 17:57:30 GMT+0300 (GMT+03:00)",
			title: "KAGGLE",
			amount: 4578,
		},
		{
			id: 16,
			date: "Tue Nov 09 2021 17:57:30 GMT+0300 (GMT+03:00)",
			title: "LETPRO",
			amount: 5078,
		}
	]);

	const NewExpenseDataHandler = (data) => {
		const newExpense = {
			...data,
			id: expenses.length
		};
		
		setExpenses((prevExpenses) => {
			// prevExpenses.push(newExpense)
			return [newExpense, ...prevExpenses];
		});
	}

	return (
		<div>
			<NewExpense onExpenseFormSubmit={NewExpenseDataHandler}/>
			{expenses.length === 0 ? <p>No expenses can be found sry :(</p> : expenses.map((expense) => {
				return (
					<ExpenseItem
						key={expense.id}
						date={expense.date}
						title={expense.title}
						amount={expense.amount}
					>
					</ExpenseItem>
				);
			})}
		</div>
	);
}

export default App;
