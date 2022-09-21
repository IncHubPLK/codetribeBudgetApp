import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import{Link} from 'react-router-dom';

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import {auth} from '../config/firebase'
function Signup (){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState("");

    let history = useHistory();

    const Register  = ()=>{

     createUserWithEmailAndPassword(auth, email, password).then(()=>{
        history.push('/home');

     }).catch((error) => {
        console.log(error);
      });
  
        
    };
   

    return (
        <div className="container">

            <h1>Register</h1>

            <input type="email" placeholder="Enter your email"  onChange={(e)=>setEmail(e.target.value)}></input>
            {""}
            <br></br>

            <input type="password" placeholder="Enter your password"  onChange={(e)=>setPassword(e.target.value)}></input>

            <button onClick={Register}>Sign Up</button>


  
        </div>
    )
}

export default Signup; 