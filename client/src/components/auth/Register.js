// import logo from './logo.svg';

import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Register.css'


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
      navigate('/');
    }
    else{
        alert('Invalid Crednetials')
    }

  }
  return (

    <div className="body-register">
      <div className="container--form-register">
        <form className="form-register" onSubmit={registerUser} action='Login'>
          <h1 className="heading-register">Register</h1>
          <label className="label-register">Name</label>
          <input className="field" type="text" placeholder="Name" value={name} onChange={(e) => SetName(e.target.value)} />
          <label className="label">Email</label>
          <input className="field" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <label className="label">Password</label>
          <input className="field" type="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <div className='dropdown'>
        <select value={user_type} onChange={(e) => SetuserType(e.target.value)}  className='dropdown-select'>
            <option value="F" >Faculty</option>
            <option value="S">Student</option>
            <option value="P">Public</option>
          </select>
        </div>
         
          {/* <input type = "password" placeholder = "Confirm Password" value = {cpassword} onChange = {(e) => setPassword(e.target.value)}/> */}
          <input className="butt" type="submit" value="Submit" />
        </form>
      </div>
    </div>
    
  );
}


export default Register;
