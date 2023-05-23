import React from "react"
import styled from "styled-components"
interface iButton{
    bg: string,
    color: string,
    desc: string,
}

export const Button:React.FC<iButton> = ({bg, color, desc}) =>{
    return(
        <Container bg={bg} color={color}>
            {desc}
        </Container>
    )
}

const Container = styled.div<{bg: string, color: string}>`
padding: 15px 24px;
font-size: 17px;
font-weight: 600;
margin-right: 10px;
background-color: ${({bg})=>bg};
color: ${({color})=>color};
border-radius: 10px;
border: 1px solid rgb(12,24,37);
cursor: pointer;
transition: all 400ms;

:hover{
    background-color: #3361D8;
    border: 1px solid transparent;
    color: white;
}

`