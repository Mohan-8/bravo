import React from 'react'
import styled from 'styled-components'

const TokenomicSlider = (props) => {
    const {header, body} = props.item;
  return (
    <Container>
        <Header>
            <h1>{header}</h1>
        </Header>
        <Body>
            <h1>{body}</h1>
        </Body>
    </Container>
  )
}

export default TokenomicSlider

const Container = styled.div`
    background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
    padding: 1.5rem 1rem;
    margin: 0 1rem;
`

const Header = styled.div`
    font-size: 1rem;
    text-align: center;
    justify-content: space-between;
`
const Body = styled.p`
    font-size: 2rem;
    margin-bottom: 1.5rem;
    text-align: center;
`
