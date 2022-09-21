import React, {useState, useEffect} from 'react'

import AddItem from './addItem'
import DisplayTransaction from './displayTransaction'
import {BudgetBalance} from './balance'


function Home (props) {

    const [expense, setExpense] = useState(0);

    const [income, setIncome] = useState(0);

    useEffect(()=>{

        let expenses = 0;
        let incomes = 0;

        for (let index = 0; index < props.list.length; index++){
             if (props.list[index].transactionType == 'Expense'){

                expenses = expenses + parseInt(props.list [index].amount);
                

             }else {
                incomes = incomes + parseInt(props.list [index].amount);

             }
        }
        setIncome(incomes);
        setExpense(expenses);
    }, [props.list.length])

    return (
      
        <div className="container">

            <BudgetBalance expense = {expense}  income={income}/>

            <DisplayTransaction list = {props.list}/>

            <AddItem add = {props.add}/>

        
        </div>

    )
}

export default Home; 