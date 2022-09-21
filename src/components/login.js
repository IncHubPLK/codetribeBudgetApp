import React , {useState} from 'react'

import {useHistory} from 'react-router-dom'
import{Link} from 'react-router-dom'
import {signInWithEmailAndPassword} from 'firebase/auth' 

import {auth} from '../config/firebase'
function Login (){

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState("")

    const btn = {

        width: '100px',
        height: '30px',
        marginTop: '20px'
 }

 let history = useHistory();

 const login  = (()=>{
     
    signInWithEmailAndPassword(auth, email, password).then(()=>{

     history.push('/home');

     
    }).catch((err)=>{
        console.log(err);

    })
 })

    return (
        <div className="container">

            <h1>Login</h1>

            <input type="email" placeholder="Enter your email" onChange={(e)=>setEmail(e.target.value)}></input> <br></br>

            <input type="password" placeholder="Enter your password" onChange={(e)=>setPassword(e.target.value)}></input>

            <button style={btn}  onClick={login}> Login </button>

            <span>Dont have an account?</span>

            <span>
                <Link to="/sign-up">Create new account</Link>

                </span>
            



  
        </div>
    )
}

export default Login;