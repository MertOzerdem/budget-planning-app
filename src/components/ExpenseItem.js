import './ExpenseItem.css'
import {useState} from 'react'

function ExpenseItem(props) {
	const [title, setTitle] = useState(props.title);

	const clickHandler = () => {
		setTitle('abc')
	}

	return (
		<div className="expense-item">
			<div>{props.date}</div>
			<div className="expense-item__description">
				<h2>{title}</h2>
				<div className="expense-item__price">{props.amount}</div>
			</div>
			<button onClick={clickHandler}>YES</button>
			{props.children}
		</div>
	);
}

export default ExpenseItem;
