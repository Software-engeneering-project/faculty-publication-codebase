import { useEffect, useState } from 'react'
import '../css/savedpaper.css'

function Savedpaper(){
    const [paperList, setPaperDetails] = useState([])
    async function getsaved_papers(){
        var details = JSON.parse(localStorage.getItem("details"));
        const email = details.email;
        const response = await fetch("http://localhost:1337/api/get_saved_papers",{
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
        getsaved_papers()
    }, []);
    console.log(paperList)
    if (paperList.length === 0) {
        return (

            <>
                <br/>
                <h2>Saved Papers</h2>
                {/* <hr className='hori-line'></hr> */}
                <h5>No Saved Papers</h5>
            </>
            
           
        )
    }

    else{
        return(<> 
            {/* {paperList.length > 0 && componentList} */}
            <br/>
            <h2>Saved Papers</h2>
            <hr className='horiz-line'></hr>
           
            {
                paperList.map((paper,idx) => {
                    return <div key={idx} className = 'savedpaper-card'>
                        <div className='savedpaper-card-left'>
                        <h5 className='savedpaper-title'> {paper.ptitle}</h5>  
                        <h6 className='savedpaper-details'>{paper.author} - {paper.year} - {paper.issuedby} - {paper.DOI}</h6>
                        </div>
                        <div className = 'savedpaper-card-right'>
                           <a href= {paper.paperlink}> <button className='linkbutton'>PDF</button></a> 
                        </div>

                        
                    </div>
                })
            }
        </>)
    }
    
}

export default Savedpaper