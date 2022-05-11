// import React from 'react'

// import {useState} from 'react'
// import { useNavigate } from 'react-router-dom';

// function Navbar(){
//     const [sitem, Setitem] = useState('')
//     const [svalue, SetField] = useState('F')
//     const navigate = useNavigate();
//     async function searchnav(event)
//     {
//         event.preventDefault();
//         const response = await fetch("http://localhost:1337/api/navbar",{
//             method: "POST",
//       headers:{
//         "Content-Type" :"application/json",
//       },
//       body : JSON.stringify({
//         sitem,
//         svalue
//       }),
//     })
//     const data = await response.json()
//     console.log(data)
//     }
//     return (
//         <div>
//             <form onSubmit={searchnav}>
//                 <label>Find Paper</label>
//                     <select value = {svalue} onChange = {(e) => SetField(e.target.value)}>
//                         <option value = "F" >Faculty Name</option>
//                         <option value = "T">Title</option>
//                     </select>
//                     <input type = "text" placeholder = "Search here" value = {sitem} onChange = {(e) => Setitem(e.target.value)} />
//                 <input type = "submit" value = "Submit" />
//             </form>
//         </div>
//     );
// }

// export default Navbar;

import React from "react";
import "../css/Navbar.css"
import { Link } from 'react-router-dom'
// import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';


var student_details = JSON.parse(localStorage.getItem("details"));
// console.log(student_details)
// console.log(student_details.name)




function Navbar() {

    // function Facultyuploadfun(){
    //     const navigate = useNavigate();
    //     navigate('/upload')
    // }
    

    function resetuser() {
        localStorage.clear();
    }

    return <div className="Navbar">
        <div className="leftSide">
            <a href="/filter">Home</a>
        </div>
        <div className="rightSide">
            <input type="text" placeholder="Search Paper" />
            <button className = "search-btn">Search</button>
          
            <Link
                to="/"
                style={{
                    color: 'white',
                }}>

            <div className="dropdown search-btn">
                    <button className="dropbtn">Account</button>
                    <div className="dropdown-content">
                        <a href="#">Profile</a>
                    <Link
                        to="/"
                        style={{
                            color: 'white',
                        }}>
                        <button className = "nav-dropdown" onClick={resetuser}>{(student_details.islogged== 1) ? "logout" : "login"}</button>
                     </Link>
                    </div>
                </div>

            </Link>
        </div>
    </div>
}

export default Navbar;