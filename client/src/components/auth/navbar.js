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

function Navbar(props) {
    return <div className="Navbar">
        <div className="leftSide">
            <a href="/filter">Home</a>
        </div>
        <div className="rightSide">
            <input type="text" placeholder="Search Paper" />
            <button>Search</button>
            <Link
                to="/"
                style={{
                    color: 'white',
                }}>

                <button>{(props.islogged == 0) ? "logout" : "login"}</button>

            </Link>
        </div>
    </div>
}

export default Navbar;