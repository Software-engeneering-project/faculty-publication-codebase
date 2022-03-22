// import logo from './logo.svg';

import {useState} from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import '../css/Login.css'




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
    <div className = "container" >
     
      <form className = "form" onSubmit = {loginUser}>
        <center><h1 className = "heading" >LOGIN</h1> </center>
        <label className = "label">EMAIL</label>
        <input className = "field" type = "email" placeholder = "Email" value = {email} onChange = {(e) => setEmail(e.target.value)}/>
        <label className = "label">PASSWORD</label>
        <input className = "field"  type = "password" placeholder = "Enter Password" value = {password} onChange = {(e) => setPassword(e.target.value)}/>
        <input className = "butt" type = "submit" value = "Login" />

        <p className='bottom-cont'>New here? <Link 
                to="/register"
                style={{
                    color: 'white',
                }}>Signup</Link>
            </p>

      </form>
    </div>
  );
}
 
export default Login;
