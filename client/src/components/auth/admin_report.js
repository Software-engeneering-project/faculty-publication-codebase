
import {useEffect,useState} from 'react'
function Admin_report(){
    const [reportdetails, setReport] = useState([])
    async function getdetails(){
        var details = JSON.parse(localStorage.getItem("details"));
        // const email = details.email;
        const response = await fetch("http://localhost:1337/api/get_report",{
            method: "POST",
            headers:{
                "Content-Type" :"application/json",
            },
            body : JSON.stringify({
            }),
            })
            const data = await response.json()
            setReport(data)
        }

    useEffect(()=>{
        getdetails()
    },[])
    console.log(reportdetails)
    return (<></>)
}

export default Admin_report