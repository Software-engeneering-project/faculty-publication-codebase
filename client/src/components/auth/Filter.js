// import logo from './logo.svg';

import { useEffect, useState, useMemo } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Display from './display';
import Papers from "./temp_data";
import "./../css/home.css"
import Navbar from './navbar'

const inputStyle = {
  marginLeft: '50%',
  padding: '30px'
}


const reset  = {
  pointerEvents: 'none',
  padding : '10px',
  backgroundColor: '#557B83',
  width : '30%'
}

function Filter() {

  let {islogged} = useParams();

  const [area, setArea] = useState('none')
  const [issuedby, setIssueby] = useState('none')
  const [year, setYear] = useState("none")
  const [citation, setCitation] = useState(false)
  const [patent, setPatent] = useState(false)
  const [privat, setPrivat] = useState(false)
  const [typep, setypep] = useState("none")
  const [listItems, setlistItems] = useState([])
  const [details, setDetails] = useState([])
  const navigate = useNavigate();
  const [myRows, setMyRows] = useState([]);

function handlereset() {
  setArea("none");
  setIssueby("none");
  setYear("none");
  setCitation(false);
  setPatent(false);
  setPrivat(false);
  setypep("none")
}

  const calculation = useMemo(() => { }, [myRows]);



  useEffect(() => {

    async function getpaper() {
      const response = await fetch('http://localhost:1337/api/paperdata', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })

      const data = await response.json()
      setDetails(data.paperList)
    }

    getpaper();
  }, [])


  useEffect(() => {
    console.log("got details")
    console.log(typep)
    var num_documents = details.length
    var rows = details.filter(x => ((area == "none" || x.area == area) && (issuedby == "none" || x.issuedby == issuedby) && ( typep == "none" || typep == x.typep) && (year == "none" || year == x.year) && (citation == false || "" != x.citation) && (patent == false || "" != x.patent) && (privat == false || "" != x.privat)));
    console.log("filtered data")
    console.log(rows, "rows")
    // for (var i = 0; i < num_documents; i++) {
    //   console.log(details[i],"det",console.log(year))
    //   if ((parseInt(details[i].year) == parseInt(year)) ) {
    //     rows.push(details[i])
    //   }
    // }
    console.log([area, issuedby, year, citation, patent, privat], "filter data")
    setMyRows(rows)
    console.log("updated rows")
    console.log(myRows)


  }, [area, issuedby, year, citation, patent, privat, details, typep]);



  const options = ["none",...new Set(details.map(details => details.area))];

  const oyear = ["none",... new Set(details.map(details => details.year))];
  const oib = ["none",... new Set(details.map(details => details.issuedby))];
  const otyp = ["none",... new Set(details.map(details => details.typep))];

  const optionsItems = options.map((dept) => <option key={dept} value={dept} >{dept}</option>)
  const optionsyears = oyear.map((cyear) => <option key={cyear} value={cyear} >{cyear}</option>)
  const optionsoib = oib.map((coibr) => <option key={coibr} value={coibr} >{coibr}</option>)
  const optionsotyp = otyp.map((coiotp) => <option key={coiotp} value={coiotp} >{coiotp}</option>)


  return (
    <>
      <Navbar islogged = {islogged}/>
      <div className='wrapper'>
      <div className='wrapper--left'>
        <form className='filter--container'>
          <label>Field</label>
          <select value={area} onChange={(e) => { setArea(e.target.value) }}>
            {optionsItems}
          </select>
          <label>Year</label>
          <select value={year} onChange={(e) => setYear(e.target.value)}>
            {optionsyears}
          </select>
          <label>Issued By</label>
          <select value={issuedby} onChange={(e) => setIssueby(e.target.value)}>
            {optionsoib}
          </select>
          <br/>
          <label>type</label>
          <select value={typep} onChange={(e) => setypep(e.target.value)}>
            {optionsotyp}
          </select>
          <br/>
          <div className="checkbox--container">
            <input type='checkbox' id="p1" value={citation} onChange={() => setCitation(!citation)} />
            <label>Include Citations</label>
          </div>
          <div className="checkbox--container">
            <input type='checkbox' id="p2" value={patent} onChange={(e) => { setPatent(!patent) }} />
            <label>Include Patents</label>
          </div>
          <div className="checkbox--container">
            <input type='checkbox' id="p3" value={privat} onChange={(e) => { setPrivat(!privat) }} />
            <label>Include Private Papers</label>
          </div>
          <a onClick={handlereset}  >reset</a>
        </form>
      </div>

      <div className='wrapper--right'>
      {myRows.length > 0 && <Display citation = {citation} patent = {patent} privat = {privat} myRows={myRows} />}
        
      </div>
    </div>
    </>
    


  );
}

export default Filter;
