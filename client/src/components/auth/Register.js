// import logo from './logo.svg';

import {useState} from 'react';
import { useNavigate } from 'react-router-dom';


function Register() {
  const [name, SetName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [user_type, SetuserType]  = useState('P')
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
        password,
        user_type
        // cpassword
      }),
    })

    console.log('hi')
    const data = await response.json()
    console.log('hii')
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
    <div>
      <h1>Register</h1>
      { <form onSubmit = {registerUser} action = 'Login'>
        <input type = "text" placeholder = "Name" value = {name} onChange = {(e) => SetName(e.target.value)} />
        <input type = "email" placeholder = "Email" value = {email} onChange = {(e) => setEmail(e.target.value)}/>
        <input type = "password" placeholder = "Enter Password" value = {password} onChange = {(e) => setPassword(e.target.value)}/>
        <select value = {user_type} onChange = {(e) => SetuserType(e.target.value)}>
                        <option value = "F" >Faculty</option>
                        <option value = "S">Student</option>
                        <option value = "P">Public</option>
                    </select>
        {/* <input type = "password" placeholder = "Confirm Password" value = {cpassword} onChange = {(e) => setPassword(e.target.value)}/> */}
        <input type = "submit" value = "Submit" />
      </form>}
    </div>
  );
}
 
export default Register;
