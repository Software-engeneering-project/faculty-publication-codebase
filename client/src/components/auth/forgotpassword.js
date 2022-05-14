import {useState} from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

function Forgotpassword(){
    const [password, setPassword] = useState('')
  const [cpassword, setcPassword] = useState('')
  const [email, setEmail] = useState('')
  const navigate = useNavigate();


  async function fgpassw(event)
  {
    event.preventDefault()
    const response = await fetch("http://localhost:1337/api/forgotpassword",{
      method: "POST",
      headers:{
        "Content-Type" :"application/json",
      },
      body : JSON.stringify({
        email,
        password,
        cpassword
      }),
    })
    const data = await response.json()
    console.log(data)

    if(data.status === 'success'){
      alert('Update successfull')
      navigate('/');
    }
    else{
        alert('Invalid Password')
    }

  }

  return (
      <div>
      <form onSubmit = {fgpassw}>
      <input type = "email" placeholder = "Email" value = {email} onChange = {(e) => setEmail(e.target.value)}/>
        <input type = "password" placeholder = "Enter Password" value = {password} onChange = {(e) => setPassword(e.target.value)}/>
        <input type = "password" placeholder = "Confirm Password" value = {cpassword} onChange = {(e) => setcPassword(e.target.value)}/>
        <input type = "submit" value = "Reset" />
      </form>
      </div>
  )
}



export default Forgotpassword;