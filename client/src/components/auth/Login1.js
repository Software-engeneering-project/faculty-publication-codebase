// import logo from './logo.svg';

import { useNavigate } from 'react-router-dom';



const inputStyle = {
  marginLeft:'50%',
  padding:'30px'
}


function Login1() {

  const navigate = useNavigate();

  async function loginUser1(event)
  {
    event.preventDefault()
    const response = await fetch("http://localhost:1337/api/Login1",{
      method: "POST",
      headers:{
        "Content-Type" :"application/json",
      },
    })
    const data = await response.json()
    console.log(data)

    if(data.status === 'ok'){
      alert('Login successfull')
      navigate('/Login');
    }
    else{
        alert('Invalid Crednetials')
    }



  }
  return (
    <div >
      <form onSubmit = {loginUser1}>
        <img src = 'http://cdn.onlinewebfonts.com/svg/img_311846.png' />
        <input style = {inputStyle} type = "submit" value = "Login" />
      </form>
    </div>
  );
}
 
export default Login1;
