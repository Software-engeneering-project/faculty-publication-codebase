import { useNavigate } from 'react-router-dom';
const Display = (props)=>{
    // console.log(props.myRows)
    const navigate = useNavigate();
    var details = JSON.parse(localStorage.getItem("details"));
    const email = details.email;
    async function recently_access_papers(event){
        const response = await fetch("http://localhost:1337/api/update_recently_access_papers",{
        method: "POST",
        headers:{
            "Content-Type" :"application/json",
        },
        body : JSON.stringify({
            email,
            event 
        }),
        })
    }
    async function savepaper(event){
        console.log("inside api")
        var response = await fetch("http://localhost:1337/api/update_saved_papers",{
        method: "POST",
        headers:{
            "Content-Type" :"application/json",
        },
        body : JSON.stringify({
            email,
            event 
        }),
        })
        response = await response.json()
        console.log(response)
        if (response.status == "success"){
            alert("paper saved")
        }
        else if(response.status == "Already paper saved"){
            alert("Paper already saved")
        }

    }
    function request(p){
    
        details.DOI = p;   
        localStorage.setItem('details',JSON.stringify(details))
        navigate('/Provide_request')
    }
    var componentList = props.myRows.map(paper => 
            <div key = {paper._id} className= "paper--card" >  
                {/* <p>{paper.DOI}</p>
                <p>{paper.area}</p>
                <p>{paper.citation}</p>
                <p>{paper.issuedby}</p>
                <p>{paper.patent}</p>
                <p>{paper.privat}</p>
                <p>{paper.year}</p>
                 */}
                <div className="heading--container">
                <h4>{paper.ptitle} </h4>
                { (details.user_type == "P" && paper.privat == "Yes") ?  (<button onClick={()=>{request(paper.DOI)}}>request</button>)  :  
                (   <div>
                    <a href={paper.paperlink} onClick={()=>{recently_access_papers(paper.DOI)}}>[PDF]</a>
                    <button onClick = {() => {savepaper(paper.DOI)}}>Save paper</button>
                    </div>  
                )}
                </div>
                <div className = "content--container">
                    <h6>{paper.author} - {paper.year} - {paper.issuedby} - {paper.DOI}</h6>
                    
                    <hr/>
                    <p>
                    {(paper.abstract.length < 200) ? paper.abstract : paper.abstract.slice(0,200) + "..."}
                    </p>
                    <div>
                        {(props.citation == true) ?
                            <>
                            <h6>Citation</h6>
                        <a>{paper.citation}</a>
                            </>
                         : <></>}
                    </div>
                </div>                
            </div>
        )

    return (
        <>
            {componentList}
        </>
    )
}


export default Display;