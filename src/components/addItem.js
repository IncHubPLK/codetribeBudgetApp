
import React, {useState} from "react";
import "../css/add.css"

import {db} from '../config/firebase'

import {addDoc, collection} from 'firebase/firestore'
function AddItem (props){

    const [amout, setAmount] = useState('')
    const [name, setItem] = useState("");
    const [transactionType, settransactionType] = useState("");

    const add = (()=>{
        
        const collectionRef = collection(db, "transaction");

        const transaction = {
            name: name,
            amout:amout,
            transactionType: transactionType,
        };

        addDoc(collectionRef, transaction).then(()=>{
            alert('Added Successfully')
        }).catch((err)=>{
            console.log(err)
        })

        props.add(amout, name, transactionType);
    })
    
    return(
         
        <div>

            <h1 style={{paddingTop:"5px"}}>Add Transactions</h1>
           
           <input placeholder="Enter Item" onChange={(e)=> setItem(e.target.value)}></input>{""}<br></br>
           <input placeholder="Enter Amount"  onChange={(e)=> setAmount(e.target.value)}></input>{""}<br></br>

           <select onChange={(e)=> settransactionType(e.target.value)}>
              <option value="Income">Income</option>
              <option value="Expense">Expense</option>
           </select>{""}
           <br></br>

            <button id="btn" onClick={add} >add</button>
        </div>
    )
}

export default AddItem;