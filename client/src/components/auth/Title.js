import React from 'react'
import styled from 'styled-components'
import { mediaQuery } from '../styled'

const H3 = styled.h3`
    font-size: 4vw;
    width: 70%;
    margin-top: 5%;
    
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
                paddingTop: '1vw',
                paddingLeft: '2vw',
            }}>
            <H3>Faculty Publication Repository</H3>
        </div>
    )
}

export default Title