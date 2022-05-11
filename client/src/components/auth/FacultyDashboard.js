import { useEffect, useState, useMemo } from 'react'
import FacultyPaperItem from './FacultyPaperItem';
import "./../css/FacultyDashboard.css"
import Navbar from './navbar';
import Upload from './upload';

function FacultyDashboard(props) {
    // const [typep, setypep] = useState(false)
    const [listItems, setlistItems] = useState([])
    const [details, setDetails] = useState([])

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
            setDetails(data.paperList)
            return data.paperList
        }

        getpaper();
    }, [])
    // const otyp = [... new Set(details.map(details => details.typep))];

    return (

        <div className='fwrapper'>
            <Navbar islogged={0} />
            <div className='wrapper'>
                <div className='fwrapper--left'>
                    <Upload/>
                </div>
                <div className='fwrapper--right'>

                    <FacultyPaperItem myRows={details} />
                </div>
            </div>

        </div>

    )
}


export default FacultyDashboard