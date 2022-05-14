
import {useState, useEffect} from 'react'



function Admin(){
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
            setContent(response.status)
        }
    }

    useEffect(()=>{
        Getdetails()
    }, []);
    
    console.log(content)
    return (<div></div>)
}

export default Admin