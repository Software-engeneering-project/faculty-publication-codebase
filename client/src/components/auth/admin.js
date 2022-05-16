
import {useEffect,useState} from 'react'
import React from 'react'
import '../css/admin.css'
import Admin_report from './admin_report'
import RequestAccess from './RequestAccess'

function  Admin() {

    const [navflag, setnavflag] = React.useState(true)

    // useEffect(()=>{
    //    function setnav(){
    //        setnavflag()
    //    }
    // })

    return (
        <div className='admin-container'>
            <div className='admin-left-pane'> 
                <br/>
                <h3 className='dashboard-title'>Dashboard</h3>
                <br/>
                <ul>
                    <li ><i  onClick={()=>{setnavflag(true)}} className="fa-solid fa-house"></i> {'\u00A0'}Home </li>
                    <li> <i onClick={()=>{setnavflag(false)}} className="fa-solid fa-clipboard-check"></i>{'\u00A0'} {'\u00A0'} Request Access</li>
                </ul>
                <div className='logout-bottom'>
                    <h6 > {'\u00A0'} {'\u00A0'} {'\u00A0'}<i class="fa-solid fa-right-from-bracket"></i>Logout</h6>
                </div>

            </div>
            <div className='admin-right-pane'>
                { (navflag === true) ?   <Admin_report /> : <RequestAccess />}
            </div>
        </div>
    )
}
export default Admin


