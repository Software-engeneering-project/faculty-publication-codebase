// import logo from './logo.svg';

import {useState} from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import '../css/Login.css'
import CryptoAES from 'crypto-js/aes';
import CryptoENC from 'crypto-js/enc-utf8';

async function getuser(email,password) {
  
  const response = await fetch('http://localhost:1337/api/login1', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body : JSON.stringify({
      email,
      password
    }),
  })

  const data = await response.json()
  console.log(data)
  return data
  
}

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [details, userDetails] = useState([])

  const navigate = useNavigate();
  async function inc_co(){
    const response = await fetch("http://localhost:1337/api/increase_count",{
      method: "POST",
      headers:{
        "Content-Type" :"application/json",
      },
      body : JSON.stringify({

      }),
    })
  }
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
    const data = (await response.json())
    // console.log(data)
    // console.log(data.status)

    if(data.status === 'success'){
      // alert('Login successfull') 
      // console.log(34343443) 

      await getuser(email,password).then( data => {
        userDetails(data);
            
        if(details.user_type === 'F') {
          details.islogged = 1;
          localStorage.setItem('details',JSON.stringify(details))
          navigate('/Faculty_Filter')
        }
        else if(details.user_type === 'S'){
          details.islogged = 1;
          localStorage.setItem('details',JSON.stringify(details))
          navigate('/Filter')
        }
        else if(details.user_type === 'P'){
          details.islogged = 1;
          localStorage.setItem('details',JSON.stringify(details))
          navigate("/Filter_public")
        }
        else if(details.user_type === "A"){
          details.islogged = 1;
          localStorage.setItem('details',JSON.stringify(details))
          navigate("/Admin")
        }
    })

      // console.log("++++++++++")
    // .then(data=>{
    //     userDetails(data);
    //     //console.log(details)
    //   })
      // userDetails(getuser(email,password).then(console.log(details)))
      // userDetails(getuser(email,password).User_data_row)
      // console.log(details)
      // async function get_encrypted(details){
      //   let s = details.name + "," + details.user_type+"," + details.password+"," + details.email;
      //   var ciphertext = CryptoAES.encrypt(s, 'secret key 123');
      //   return ciphertext
      // }
      // navigate('/filter/0');
        
        // var ciphertext = await get_encrypted(details)
        
        // console.log(ciphertext);
        
     
    }

    // if(data.status === 'ok'){
    //   alert('Login successfull')
    //   navigate('/filter/0');
    // }
    else{
        alert('Invalid Crednetials')
    }

  }
    
  return (



    <div className = "container" >
     {console.log(`Detials: ${details}`)}
      <form className = "form" onSubmit = {loginUser}>
        <center><h1 className = "heading" >LOGIN</h1> </center>
        <label className = "label">EMAIL</label>
        <input id= "Email" className = "field" type = "email" placeholder = "Email" value = {email} onChange = {(e) => setEmail(e.target.value)}/>
        <label className = "label">PASSWORD</label>
        <input id ="Password" className = "field"  type = "password" placeholder = "Enter Password" value = {password} onChange = {(e) => setPassword(e.target.value)}/>
     
        <input className = "butt" type = "submit" value = "Login" onClick={()=>{inc_co()}} />

        <p className='bottom-cont'>New here? <Link
                to="/register"
                style={{
                    color: 'black',
                }}>Signup</Link> 
            </p>

          <p className='bottom-cont'> 
          <Link to ='/forgotpassword'  style={{
                    color: 'black',
                }}>Forgotpassword ?</Link>
            </p>  
            <p className='bottom-cont'><Link 
                to="/Guest_Filter"
                style={{
                    color: 'black',
                }} onClick={()=>{inc_co()}}>Skip and Visit</Link>
            </p>
      </form>
    </div>
  );
}
 
export default Login;
