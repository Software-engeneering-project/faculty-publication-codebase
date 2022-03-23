// import logo from './logo.svg';

import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Papers from "./temp_data";



const inputStyle = {
  marginLeft: '50%',
  padding: '30px'
}


function Filter({callMeFun}) {
  const [area, setArea] = useState('CSE')
  const [issuedby, setIssueby] = useState('IEEE')
  const [year, setYear] = useState(new Date().getFullYear())
  const [citation, setCitation] = useState(false)
  const [patent, setPatent] = useState(false)
  const [privat, setPrivat] = useState(false)
  const navigate = useNavigate();

  useEffect(()=>{
    callMeFun({
      area, issuedby, year,citation, patent, privat
    })
    // function createPaperItem(Papers) {
    //   return (
    //     <Paperitem
    //       key={Papers.id}
    //       area={Papers.area}
    //       DOI={Papers.DOI}
    //       year={Papers.year}
    //       citations={Papers.citation}
    //     />
    //   );
    // }
  },[area, issuedby, year,citation, patent, privat]);

  async function filtercontent(event) {
    event.preventDefault();
    const response = await fetch("http://localhost:1337/api/filter", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        area,
        issuedby,
        year,
        citation,
        patent,
        privat
      }),
    })
    const data = await response.json()
    console.log(data)

    if (data.status === 'ok') {
      navigate('/Filter');
    }
    else {
      console.log("error")
    }
  }

   const options = ["CSE", "Mech", "EEE","AI"]
   const optionsItems = options.map((dept) => <option key={dept} value = {dept} >{dept}</option>)
   const oyear = [year,year-1,year-2,year-3]
   const optionsyears = oyear.map((cyear) => <option key={cyear} value = {cyear} >{cyear}</option>)

  return (
    <div >
      <form >
        <label>Area</label>
        <select value={area} onChange={(e) => {setArea(e.target.value)}}>
          {optionsItems}
        </select><br />
        <label>Year</label>
        <select value={year} onChange={(e) => setYear(e.target.value)}>
            {optionsyears}
        </select><br/>
        <input type = 'checkbox' id = "p1" value = {citation}         onChange={() => setCitation(!citation)}
  />
        <label>Include Citations</label><br/>
        <input type = 'checkbox' id = "p2" value = {patent} onClick={(e) => {setPatent(!patent)}}/>
        <label>Include Patents</label><br />
        <input type = 'checkbox' id = "p3" value = {privat} onClick={(e) => {setPrivat(!privat)}}/>
        <label>Include Private Papers</label>
      </form>
    </div>
  );
}

export default Filter;
