import React from 'react';
import Filter from './Filter';


const Filter1 = ()=>{
    const callMeFun = (data)=>{
        console.log(data);
    }
    return(<>
<Filter callMeFun = {callMeFun} /> 
</>
    )
}

export default Filter1;