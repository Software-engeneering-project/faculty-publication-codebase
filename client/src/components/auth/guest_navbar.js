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
   
     return <div className="Navbar">
        <div className="leftSide">
            <a href="/Guest_Filter">Home</a>
        </div>
        <div className="rightSide">
            <input type="text" placeholder="Search Paper" />
            <button className = "search-btn">Search</button>
            <h1 >Hi Guest</h1>
        
        </div>
    </div>
}

export default GuestNavbar;