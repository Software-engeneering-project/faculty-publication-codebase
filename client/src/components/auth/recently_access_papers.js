import { useEffect, useState, useMemo } from 'react'

import '../css/recently_accessed.css'




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
            console.log(data.paper_data)
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


    if (paperList.length === 0) {
        return (

            <>
                <br/>
                <h2 className='recent-header'>Recently Accessed</h2>
                {/* <hr className='hori-line'></hr> */}
                <h5 className='recent-empty-res'>No Recently Accessed Papers</h5>
            </>
            
           
        )
    }

    else{
        return(<> 
            {/* {paperList.length > 0 && componentList} */}
            <br/>
            <h2 className='recent-header'>Recently Accessed</h2>
            <hr className='hori-line'></hr>
            {
                paperList.map((paper,idx) => {
                    return <div key={idx} className = 'recent-card'>
                        <div className='recent-card-left'>
                        <h5 className='paper-title'> {paper.ptitle}</h5>  
                        <h6 className='paper-details'>{paper.author} - {paper.year} - {paper.issuedby} - {paper.DOI}</h6>
                        </div>
                        <div className = 'recent-card-right'>
                           <a href= {paper.paperlink}> <button className='linkbut'>PDF</button></a> 
                        </div>

                        
                    </div>
                })
            }
        </>)
    }
}

export default Recently_access_papers

