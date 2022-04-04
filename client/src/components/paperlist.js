import Paperitem from './paperitem'
import { useState, useEffect } from 'react'

function PaperList() {
    const [listItems, setlistItems] = useState([])

    useEffect(() => {
        async function getpaper() {
            const response = await fetch('http://localhost:1337/api/paperdata', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            const data = await response.json()
            setlistItems(data.paperList)
            console.log(data.paperList)
        }

        getpaper();
    }, [])
    //moviedata.movieList.map((paperinfo) => <Paperitem key = {paperinfo.id} paperinfo={paperinfo} />)
    //moviedata.movieList.map((paperinfo) => console.log(paperinfo))
    return (
        <>
{ listItems.length > 0 && listItems.map((paperinfo) => <Paperitem key={paperinfo.DOI} paperinfo={paperinfo} />) }
        </>
    )
}






export default PaperList