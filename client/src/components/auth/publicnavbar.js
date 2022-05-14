
import React from "react";
import "../css/publicnavbar.css"
import { Link } from 'react-router-dom'
// import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';


var student_details = JSON.parse(localStorage.getItem("details"));
// console.log(student_details)
// console.log(student_details.name)


function PublicNavbar() {

    // function Facultyuploadfun(){
    //     const navigate = useNavigate();
    //     navigate('/upload')
    // }
    

    function resetuser() {
        localStorage.clear();
    }

    return <div className="PublicNavbar">
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
                        <button className = "nav-dropdown" onClick={resetuser}>{(student_details.islogged) ? "logout" : "login"}</button>
                     </Link>
                    </div>
                </div>

            </Link>
        </div>
    </div>
}

export default PublicNavbar;