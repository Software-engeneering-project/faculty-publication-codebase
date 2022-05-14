import React from "react";
import "../css/facultynavbar.css"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';



function FacultyNavbar(props) {

    var faculty_details = JSON.parse(localStorage.getItem("details"));

    const navigate = useNavigate();
    function uploadredirect(){
        navigate('/upload');
    }

    function resetuser(){
        localStorage.clear();
    }
   
     return <div className="Navbar">
        <div className="leftSide">
            <a href="/filter">Home</a>
        </div>
        <div className="rightSide">
            <input type="text" placeholder="Search Paper" />
            <button className = "search-btn">Search</button>

            { (faculty_details.user_type === 'S' || faculty_details.user_type === 'P') ? <></> :  <button onClick={uploadredirect} className="upload-btn">Upload</button>  } 
                <div className="dropdown search-btn">
                    <button className="dropbtn">Hi {faculty_details.name}</button>
                    <div className="dropdown-content">
                        <a href="#">Profile</a>
                    <Link
                        to="/"
                        style={{
                            color: 'white',
                        }}>
                        <button className = "nav-dropdown" onClick={resetuser}>{(faculty_details.islogged) ? "logout" : "login"}</button>
                    </Link>
                    </div>
                </div>

               
        
        </div>
    </div>
}

export default FacultyNavbar;