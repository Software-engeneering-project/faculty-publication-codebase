function FacultyPaperItem(props) {
    var componentList = props.myRows.map(paper =>
        <div key={paper._id} className="paper--card" >
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
                <a href={paper.paperlink}>[PDF]</a>
                </div>
                <div className = "content--container">
                    <h6>{paper.author} - {paper.year} - {paper.issuedby} - {paper.DOI}</h6>
                    
                    <hr/>
                    <p>
                    {(paper.abstract.length < 200) ? paper.abstract : paper.abstract.slice(0,200) + "..."}
                    </p>
                    <div>
                        <h6>Citation</h6>
                        <a>{paper.citation}</a>
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

export default FacultyPaperItem