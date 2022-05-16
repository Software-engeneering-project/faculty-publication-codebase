
import {useState, useEffect} from 'react'
import '../css/requestaccess.css'


function RequestAccess(){
    var details = JSON.parse(localStorage.getItem("details"));
    const [content, setContent] = useState([])
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
            setContent(response.status)
            
        }
    }

    useEffect(()=>{
        Getdetails()
    }, []);
    
    console.log(content)

    if(content.length === 0) {
        return (
            <>
            <br/>
            <h2 className='accessrequest-header'>Request Access</h2>
            <h5 className='req-empty'>No Requests yet ...</h5>
            </>
        )
    }

    else{
        return <>
            <br />
            <h2 className='accessrequest-header'>Request Access </h2>
            <hr/>

            {
                content.map((content,idx) => {
                    return (
                        <div key={idx} className = 'req-item'>
                            <h5 className='req-from'>{content.email}</h5>
                            <h6 className='req-reason'>{content.reason}</h6>
                        </div>
                    )
                })
            }
        </>

    }
}

export default RequestAccess