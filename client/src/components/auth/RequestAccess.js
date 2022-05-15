
import {useState, useEffect} from 'react'
import '../css/requestaccess.css'


function RequestAccess(){
    var details = JSON.parse(localStorage.getItem("details"));
    const [content, setContent] = useState({})
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
        if(response.status != "error"){
            setContent(response.data)
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
            <h2 className='accessrequest-header'>Recently Accessed</h2>
            <h5 className='req-empty'>No Recently Accessed Papers</h5>
            </>
        )
    }

    else{
        return <>
        
            <br />
            <h2 className='accessrequest-header'>Recently Accessed</h2>
            <h5 className='req-empty'>No Recently Accessed Papers</h5>

            {
                content.map( (request,idx) => {
                    return (
                        <div key={idx} className = 'req-item'>
                            <h5 className='req-from'>{request}</h5>
                            <h6 className='req-reason'>{request.re}</h6>
                        </div>
                    )
                })
            }
            


        </>
    }
}

export default RequestAccess