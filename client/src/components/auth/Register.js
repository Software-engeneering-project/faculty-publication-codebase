// import logo from './logo.svg';

import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Register.css'

function Register() {
  const [name, SetName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  // const cpassword = undefined('')
  const navigate = useNavigate();
  async function registerUser(event)
  {
    event.preventDefault();
    
    

    const response = await fetch("http://localhost:1337/api/register",{
      method: "POST",
      headers:{
        "Content-Type" :"application/json",
      },
      body : JSON.stringify({
        name,
        email,
        password
        // cpassword
      }),
    })
    const data = await response.json()
    console.log(data)

    if(data.status === 'ok'){
      alert('Registration successfull')
      navigate('/login');
    }
    else{
        alert('Invalid Crednetials')
    }

  }
  return (
    <div className = "container" >
      { <form className = "form" onSubmit = {registerUser} action = 'Login'>
        <h1 className = "heading" >Register</h1>
        <label className = "label">NAME</label>
        <input  className = "field" type = "text" placeholder = "Enter Name" value = {name} onChange = {(e) => SetName(e.target.value)} />
        <label className = "label">EMAIL</label>
        <input  className = "field" type = "email" placeholder = "Enter Email" value = {email} onChange = {(e) => setEmail(e.target.value)}/>
        <label className = "label">PASSWORD</label>
        <input  className = "field" type = "password" placeholder = "Enter Password" value = {password} onChange = {(e) => setPassword(e.target.value)}/>
        {/* <input type = "password" placeholder = "Confirm Password" value = {cpassword} onChange = {(e) => setPassword(e.target.value)}/> */}
        <input className = "butt" type = "submit" value = "Submit" />
      </form>}
    </div>
  );
}
 
export default Register;
