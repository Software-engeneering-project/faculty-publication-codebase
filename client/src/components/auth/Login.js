// import logo from './logo.svg';

import {useState} from 'react'
import { useNavigate } from 'react-router-dom';



const inputStyle = {
  marginLeft:'50%',
  padding:'30px'
}


function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate();

  async function loginUser(event)
  {
    event.preventDefault()
    const response = await fetch("http://localhost:1337/api/login",{
      method: "POST",
      headers:{
        "Content-Type" :"application/json",
      },
      body : JSON.stringify({
        email,
        password
      }),
    })
    const data = await response.json()
    console.log(data)

    if(data.status === 'ok'){
      alert('Login successfull')
      navigate('/Home');
    }
    else{
        alert('Invalid Crednetials')
    }



  }
  return (
    <div style={{backgroundColor: "#5885AF",width:'70%',margin:'auto'}}>
      <h1>Login</h1>
      <form onSubmit = {loginUser}>
        <input style = {inputStyle} type = "email" placeholder = "Email" value = {email} onChange = {(e) => setEmail(e.target.value)}/>
        <input style = {inputStyle} type = "password" placeholder = "Enter Password" value = {password} onChange = {(e) => setPassword(e.target.value)}/>
        <input style = {inputStyle} type = "submit" value = "Login" />
      </form>
    </div>
  );
}
 
export default Login;
