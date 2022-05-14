// import logo from './logo.svg';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Tagsinput from './tagsinput'

import '../css/tagsinput.css'

function Upload() {
    const [email, setEmail] = useState('')
    const [area, setArea] = useState('')
    const [DOI, setDOI] = useState('')
    const [issuedby, setIssueby] = useState('')
    const [year, setYear] = useState('')
    const [citation, setCitation] = useState('')
    const [patent, setPatent] = useState('')
    const [privat, setPrivat] = useState('')
    const [typep, setTypep] = useState('')
    const [ptitle, setPtitle] = useState('')
    const [paperlink, setPaperlink] = useState('')
    const [abstract, setAbstract] = useState('')
    const [author, setAuthor] = useState('')

    // const cpassword = undefined('')
    const navigate = useNavigate();
    async function uploadpaper(event) {
        event.preventDefault();



        const response = await fetch("http://localhost:1337/api/upload", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email,
                area,
                issuedby,
                year,
                citation,
                patent,
                privat,
                DOI,
                typep,
                paperlink,
                ptitle,
                abstract,
                author
                // cpassword
            }),
        })

        console.log('hi')
        const data = await response.json()
        console.log('hii')
        console.log(data)

        if (data.status === 'ok') {
            alert('Upload successfull')
            navigate('/facultydashboard');
        }
        else {
            alert('Invalid Form details')
        }
    }
    return (
        <div className="upload--container">
            <h1 className="upload--heading">Upload Paper</h1>
            <form className="upload--form" onSubmit={uploadpaper} action='Login'>
                <div className='upload--form--left'>
                    <label className='upload--label'>Email</label>
                    <input className="upload--field" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} /><br />
                    <label className='upload--label'>Author</label>
                    <input className="upload--field" type="text" placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} /><br />
                    <label className='upload--label'>Field</label>
                    <input className="upload--field" type="text" placeholder="Field" value={area} onChange={(e) => setArea(e.target.value)} /><br />
                    <label className='upload--label'>issued by</label>
                    <input className="upload--field" type="text" placeholder="issuedby" value={issuedby} onChange={(e) => setIssueby(e.target.value)} /><br />
                    <label className='upload--label'>year</label>
                    <input className="upload--field" type="text" placeholder="year" value={year} onChange={(e) => setYear(e.target.value)} /><br />
                    <label className='upload--label'>citation</label>
                    <input className="upload--field" type="text" placeholder="citation" value={citation} onChange={(e) => setCitation(e.target.value)} /><br />
                    <label className='upload--label'>DOI number</label>
                    {/* <i className = "field"nput type="text" placeholder="Paper type" value={typep} onChange={(e) => setTypep(e.target.value)} /><br /> */}
                    <input className="upload--field" type="text" placeholder="DOI Number" value={DOI} onChange={(e) => setDOI(e.target.value)} /><br />
                </div>
                <div className='upload--form--right'>
                    <label className='upload--label'>Title</label>
                    <input className="upload--field" type="text" placeholder="Title" value={ptitle} onChange={(e) => setPtitle(e.target.value)} /><br />
                    <label className='upload--label'>paper link</label>
                    <input className="upload--field" type="text" placeholder="Paper Link" value={paperlink} onChange={(e) => setPaperlink(e.target.value)} /><br />
                    <p className='upload--label'>Set as Private</p>
                    <select value={privat} onChange={(e) => setPrivat(e.target.value)}>

                        <option>Select</option>
                        <option value="Yes" >Yes</option>
                        <option value="No">No</option>
                    </select><br />
                    <p className='upload--label'>Is Patent</p>
                    <select value={patent} onChange={(e) => setPatent(e.target.value)}>

                        <option>Select</option>
                        <option value="Yes" >Yes</option>
                        <option value="No">No</option>
                    </select><br />
                    <p className='upload--label'>Paper type</p>
                    <select value={typep} onChange={(e) => setTypep(e.target.value)}>

                        <option>Select</option>
                        <option value="Workshop" >Workshop</option>
                        <option value="Journal">Journal</option>
                        <option value="Others">Others</option>
                    </select><br />
                    <textarea placeholder="Abstract" value={abstract} onChange={(e) => setAbstract(e.target.value)} /><br />

                    <Tagsinput />
                    <input type="submit" value="Upload" /><br />
                </div>



            </form>
        </div>
    );
}


export default Upload;
