import {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import '../css/provide_request.css'


function Provide_request(){
    var details = JSON.parse(localStorage.getItem("details"));
    var email = details.email
    var DOI  = details.DOI
    const [reason, setReason] = useState('')
    const navigate = useNavigate()
    async function send_request(event){
        event.preventDefault() 
        const response = await fetch("http://localhost:1337/api/sendrequest",{
            method: "POST",
            headers:{
                "Content-Type" :"application/json",
            },
            body : JSON.stringify({
                email,
                DOI,
                reason
            }),
            })
            const res = (await response.json())
            if (res.status == "success"){
                delete details["DOI"]
                alert("Request Sent wait for respone")
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
            }
            else if(res.status == "error"){
                alert("request not sent")
            }
    }
    return (<div className='request-form-container'>
    <form onSubmit = {send_request} className='request-form'>
    <h1>Request Access</h1>
    <textarea className = "req-field" type = "text" placeholder = "Enter Reason" value = {reason} onChange = {(e) => setReason(e.target.value)}></textarea>
        <button className='req-but' type="submit">Send Request</button>
    </form>
    </div>)
}
export default Provide_request