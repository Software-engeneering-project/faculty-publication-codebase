import { useParams } from "react-router-dom";

function PaperDetails () {
    let { id } = useParams();
    console.log(id);
    return (
        <div>
            <h1>Paper details</h1>
            <h2>{id}</h2>
        </div>
    )
}

export default PaperDetails