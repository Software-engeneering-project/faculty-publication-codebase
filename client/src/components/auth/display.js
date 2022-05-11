const Display = (props)=>{
    // console.log(props.myRows)
    var details = JSON.parse(localStorage.getItem("details"));
    const email = details.email;
    async function recently_access_papers(event){
        event.preventDefault();
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
                <a href={paper.paperlink} onClick={recently_access_papers(paper.DOI)}>[PDF]</a>
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