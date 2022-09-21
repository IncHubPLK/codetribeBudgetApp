import logo from './logo.svg';
import './App.css';  



import React ,{useEffect, useState} from 'react'
import Home from './components/home'
import Login from './components/login';
import Signup from './components/signup';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import {collection, getDocs} from 'firebase/firestore';

function App() {

  const [transaction, setTransaction] = useState([]);

  useEffect(()=>{

  })

useEffect(()=>{
  console.log(transaction);

}, [transaction]);

  const addTransaction = ((amout, name, transactionType)=>{

    setTransaction((item)=> [...item, {

      uid:transaction.length,
      amount: amout,
      name: name,
      transactionType:transactionType
    }])


  })

  return (
   

    <Router>

      <Switch>
        
       <Route exact path="/" component={Login}></Route> 
       <Route path="/sign-up" component={Signup}></Route>


       <Route path="/home">
       <Home list = {transaction} add={addTransaction} > </Home>
       </Route>
      </Switch> 
 

     

    </Router>

  );
}

export default App;
