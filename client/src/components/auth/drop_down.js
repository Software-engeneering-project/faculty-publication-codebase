import React from 'react'

function drop_down(props){
    const optionsItems = props.map((props) => <option value = {props}>{props}</option>);
    return(
        <div>
            {optionItems}
        </div>
    )
}
