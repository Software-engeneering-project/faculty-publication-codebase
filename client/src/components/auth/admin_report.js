
import {useEffect,useState} from 'react'

import '../css/adminreport.css'

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
            setReport(data.data)
        }

    useEffect(()=>{
        getdetails()
    },[])
    console.log(reportdetails)
    return (<>
        <div className='reports'>
            <div className='report-item'>
                <span> <i class="fa-solid fa-user"></i> Visitors</span>
                <center><h6 className='report-val'>{reportdetails.count_users}</h6></center>
            </div>
            <div className='report-item'>
                <span> <i class="fa-solid fa-user"></i> Papers </span>
                <center><h6 className='report-val'>{reportdetails.number_paper}</h6></center>
            </div>
            <div className='report-item'>
                <span> <i class="fa-solid fa-user"></i> Patents </span>
                <center><h6 className='report-val'>{reportdetails.number_patent}</h6></center>
            </div>
            <div className='report-item'>
                <span> <i class="fa-solid fa-user"></i> Private </span>
                <center><h6 className='report-val'>{reportdetails.number_privat}</h6></center>
            </div>
            <div className='report-item'>
                <span> <i class="fa-solid fa-user"></i> Faculties </span>
                <center><h6 className='report-val'>{reportdetails.users_F}</h6></center>
            </div>
            <div className='report-item'>
                <span> <i class="fa-solid fa-user"></i> Students </span>
                <center> <h6 className='report-val'>{reportdetails.users_S}</h6></center>
            </div>
            <div className='report-item'>
                <span> <i class="fa-solid fa-user"></i> Guests </span>
                <center><h6 className='report-val'>{reportdetails.users_P}</h6></center>
               
            </div>
        </div>
        </>)
}

export default Admin_report

