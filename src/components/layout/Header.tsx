import React from 'react'
import { Button } from '../static/Button'
import styled from 'styled-components'
import logo from '../../assets/logo.svg'
const Header = () => {
  return (
    <div>
      <Container>
        <Main>
            
            <Navlinks>
            <Logo src={logo}></Logo>
                <Nav> Save </Nav>
                <Nav> Invest </Nav>
                <Nav> Stories </Nav>
                <Nav> FAQs </Nav>
                <Nav> Resources </Nav>
            </Navlinks>
            <BHolder>
                <Button color='rgb(12,24,37)' bg='white' desc='Sign in'/>
                <Button color='white' bg='rgb(12,24,37)' desc='Create free account'/>
            </BHolder>
        </Main>
      </Container>
    </div>
  )
}

export default Header

const Nav = styled.div`
margin-right: 30px;
font-weight: 500;
font-size: 18px;
margin-top: 8px;
cursor: pointer;
`
const BHolder = styled.div`
display: flex;
`
const Navlinks = styled.div`
display: flex;
align-items: center;
justify-content: center;
`
const Logo = styled.img`
height: 35px;
width: auto;
margin-right: 70px;
cursor: pointer;
`
const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 80px;
width: 100%;

`
const Main = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 88%;

`
