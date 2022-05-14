import {useEffect, useState} from 'react';

function TagsInput(){
    const [tags,setTags] = useState([])

    function handlekeydown(e) {
        if(e.key != 'Enter') return 
        const value = e.target.value
        if(!value.trim()) return 
        setTags([... tags,value])
    }


     return (
        <div className="tags-input-container">
            {/* <div className="tag-item">
                <span className="text">hello</span>
                <span className="close">x</span>
            </div> */}
            {tags.map((tag,index) => (
                <div className="tag-item">
                <span className="text">{tag}</span>
                <span className="close">x</span>
            </div>
            ))} 

            <input onKeyDown={handlekeydown} type="text" className="tags-input" placeholder="Type Something"></input>
        </div>
    )
}

export default TagsInput;