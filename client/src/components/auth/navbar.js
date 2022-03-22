import React from 'react'

import {useState} from 'react'
import { useNavigate } from 'react-router-dom';

function Navbar(){
    const [sitem, Setitem] = useState('')
    const [svalue, SetField] = useState('F')
    const navigate = useNavigate();
    async function searchnav(event)
    {
        event.preventDefault();
        const response = await fetch("http://localhost:1337/api/navbar",{
            method: "POST",
      headers:{
        "Content-Type" :"application/json",
      },
      body : JSON.stringify({
        sitem,
        svalue
      }),
    })
    const data = await response.json()
    console.log(data)
    }
    return (
        <div>
            <form onSubmit={searchnav}>
                <label>Find Paper</label>
                    <select value = {svalue} onChange = {(e) => SetField(e.target.value)}>
                        <option value = "F" >Faculty Name</option>
                        <option value = "T">Title</option>
                    </select>
                    <input type = "text" placeholder = "Search here" value = {sitem} onChange = {(e) => Setitem(e.target.value)} />
                <input type = "submit" value = "Submit" />
            </form>
        </div>
    );
}

export default Navbar;