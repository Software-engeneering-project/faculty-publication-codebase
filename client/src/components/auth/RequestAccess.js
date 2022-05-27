
import {useState, useEffect} from 'react'
import '../css/requestaccess.css'
import { useNavigate } from 'react-router-dom';



function RequestAccess(){
    const navigate = useNavigate()
    const [content, setContent] = useState([])
    var details = JSON.parse(localStorage.getItem("details"));
   
    async function Getdetails(){
        var resp = (await fetch("http://localhost:1337/api/fetchrequestpapers",{
            method: "POST",
            headers:{
                "Content-Type" :"application/json",
            },
            body : JSON.stringify({
            }),
            }))
            var response = await resp.json()
            // console.log(response)
            // console.log(response.status)
        if(response.status != "error"){
            setContent(response.data)
            
        }
    }

    useEffect(()=>{
        Getdetails()
    }, []);
    
    console.log(content)

    if( content === []) {
        return (
            <>
            <br/>
            <h2 className='accessrequest-header'>No Request Access</h2>
            {/* <h5 className='req-empty'>No Requests yet ...</h5> */}
            </>
        )
    }

    else{
         async function send_mail(DOI,email,reason,c){
            var res = (await fetch("http://localhost:1337/api/accept_paper",{
            method: "POST",
            headers:{
                "Content-Type" :"application/json",
            },
            body : JSON.stringify({
                email : email,
                DOI:DOI,
                reason:reason,
                c : c
            }),
            
            }))
            window.location.reload(false);
            // useEffect(()=>{
            //     Getdetails()
            // }, []);
            // console.log(response)
            // console.log(response.status)
            
        }
        
        return <>

        <div className='Request-Access-container'>
            <br />
            <h2 className='accessrequest-header'>Request Access </h2>
            <hr className='hr-line-req'/>

            {
                content.map((content,idx) => {
                    return (
                        <div key={idx} className = 'req-item'>
                            <h5 className='req-from'>From: {content.email}</h5>
                            <h6 className='req-reason'>Reason : {content.reason}</h6>
                        <div className='req-res'>
                            <button className='acc-req' onClick={()=>{send_mail(content.DOI,content.email,content.reason,1)}} >Accept Req</button>
                            <button className='rej-req' onClick={()=>{send_mail(content.DOI,content.email,content.reason,0)}}>Reject Req</button>
                        </div>
                        </div>
                    )
                })
            }

        </div>
        </>

    }

}

export default RequestAccess