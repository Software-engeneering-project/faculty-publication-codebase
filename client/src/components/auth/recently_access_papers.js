import { useEffect, useState, useMemo } from 'react'

import { useNavigate, useParams } from 'react-router-dom';
function Recently_access_papers(){
    const [paperList, setPaperDetails] = useState([])
    async function getrecent_papers(){
        var details = JSON.parse(localStorage.getItem("details"));
        const email = details.email;
        const response = await fetch("http://localhost:1337/api/get_recently_access_papers",{
            method: "POST",
            headers:{
                "Content-Type" :"application/json",
            },
            body : JSON.stringify({
                email,
            }),
            })
            const data = await response.json()
            setPaperDetails(data.paper_data)
        }
    
    useEffect(()=>{
        getrecent_papers()
    }, []);

    // var componentList = paperList.map(paper=>{
    //     <div>
    //          <h6 key = {0} > {paper.email} </h6>
    //     </div>
       
    // })
    // console.log(paperList,componentList)


    return(<ul> 
        {/* {paperList.length > 0 && componentList} */}
        {
            paperList.map((paper,idx) => {
                return <li key={idx}>
                    <h6> {paper.ptitle}</h6>
                </li>
            })
        }

    </ul>)
}

export default Recently_access_papers