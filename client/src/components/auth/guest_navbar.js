import React from "react";
import "../css/facultynavbar.css"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';



function GuestNavbar() {

    // var faculty_details = JSON.parse(localStorage.getItem("details"));

    const navigate = useNavigate();
    // function uploadredirect(){
    //     navigate('/upload');
    // }

    // function resetuser(){
    //     localStorage.clear();
    // }

    function routelogin(){
        navigate('/')
    }
   
     return <div className="Navbar">
        <div className="leftSide">
            <a href="/Guest_Filter"> <h5>Home</h5></a>
        </div>
        <div className="rightSide">
            <input type="text" placeholder="Search Paper" />
            <button className = "search-btn">Search</button> 
            <button className = "search-btn" onClick={routelogin}> Login</button> 
        </div>
    </div>
}

export default GuestNavbar;