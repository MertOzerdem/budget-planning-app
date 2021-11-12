import { useState } from 'react';
import './NewExpense.css';

const NewExpense = (props) => {
    // const [enteredTitle, setEnteredTitle] = useState('');
    // const [enteredAmount, setEnteredAmount] = useState('');
    // const [enteredDate, setEnteredDate] = useState('');

    // const titleChangeHandler = (event) => {
    //     setEnteredTitle(event.target.value);
    // };

    // const amountChangeHandler = (event) => {
    //     setEnteredAmount(event.target.value);
    // }

    // const dateChangeHandler = (event) => {
    //     setEnteredDate(event.target.value);
    //     console.log(event.target.value);
    // }

    const[userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    })

    const titleChangeHandler = (event) => {
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value
        // })

        setUserInput((previousState) => {
            return {
                ...previousState,
                enteredTitle: event.target.value
            }
        })
    }

    const amountChangeHandler = (event) => {
        setUserInput((previousState) => {
            return {
                ...previousState,
                enteredAmount: event.target.value
            }
        })
    }

    const dateChangeHandler = (event) => {
        setUserInput((previousState) => {
            return {
                ...previousState,
                enteredDate: event.target.value
            }
        })
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseDate = {
            date: new Date(userInput.enteredDate).toISOString(),
            title: userInput.enteredTitle,
            amount: userInput.enteredAmount,
        }

        props.onExpenseFormSubmit(expenseDate);

        setUserInput({
            enteredTitle: '',
            enteredAmount: '',
            enteredDate: ''
        })
    }


    return (
        <div className="new-expense">
            <form onSubmit={submitHandler}>
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label>Title</label>
                        <input type="text" value={userInput.enteredTitle} onChange={titleChangeHandler}/>
                    </div>
                    <div className="new-expense__control">
                        <label>Amount</label>
                        <input type="number" min="0.01" step="0.01" value={userInput.enteredAmount} onChange={amountChangeHandler}/>
                    </div>
                    <div className="new-expense__control">
                        <label>Date</label>
                        <input type="date" value={userInput.enteredDate} onChange={dateChangeHandler}/>
                    </div>
                </div>
                <div className="new-expense__actions">
                    <button type="submit" >Add Expense</button>
                </div>
            </form>
        </div>
    );
}

export default NewExpense;