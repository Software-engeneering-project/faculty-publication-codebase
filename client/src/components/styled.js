import styled from "styled-components"

export const mediaQuery = '@media only screen and (max-width: 843px)'

export const themeBlue = '#1A4555'
export const themeGreen = '#A6E1D9'
export const bgGradient = 'linear-gradient(180.38deg, #AAF3E9 8.05%, rgba(255, 255, 255, 0) 141.25%), #43B3A3'

export const Button = styled.button`
    font-size: 1em;
    width: 10vw;
    min-width: 120px;
    height: 2.7vw;
    min-height: 35px;
    background-color: ${themeBlue};
    color: white;
    border: none;
    box-shadow: 0px 3px 5px #00000075`

export const ButtonHolder = styled.div`
    text-align: center;`