import React from 'react'
import styled from 'styled-components'
import { mediaQuery } from '../styled'

const H3 = styled.h3`
    font-size: 4vw;
    width: 70%;
    margin-top: 5%; 
    color: #006D77;
    
    ${mediaQuery} {
        font-size: 8vw;
        margin: auto;
        margin-top: 20%;
        margin-bottom: 30%;
        width: 90%;
        text-align: center;
    }`

const Title = () => {


    return (
        <div 
            style={{
                paddingTop: '15vw',
                paddingLeft: '10vw',

            }}>
            <H3 style={{display : "inline"}}>Faculty Publication Repository</H3>
        </div>
    )
}

export default Title