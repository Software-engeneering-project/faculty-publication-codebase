// import logo from './logo.svg';

import {useState} from 'react'


function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
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
  }
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit = {loginUser}>
        <input type = "email" placeholder = "Email" value = {email} onChange = {(e) => setEmail(e.target.value)}/>
        <input type = "password" placeholder = "Enter Password" value = {password} onChange = {(e) => setPassword(e.target.value)}/>
        <input type = "submit" value = "Login" />
      </form>
    </div>
  );
}
 
export default Login;
