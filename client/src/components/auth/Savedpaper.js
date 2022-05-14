import { useEffect, useState } from 'react'

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

        return (
            <div>
                <h1>Hello</h1>
            </div>
        )
}

export default Savedpaper