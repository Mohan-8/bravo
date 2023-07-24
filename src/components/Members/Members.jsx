import React from 'react'
import styled from 'styled-components';
import SliderComp from './Slider';
import { Zoom } from 'react-awesome-reveal';

const Members = () => {
  return (
    <Container id='member'>
        <Zoom>
            <h1>Our Team</h1>
        </Zoom>
        <Slide>
            <SliderComp />
        </Slide>
    </Container>
  )
}

export default Members;

const Container = styled.div`
    width: 80%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 3rem 0;
    text-align: center;
    position: relative;
    @media(max-width: 840px){
        width: 90%;
    }
    h1{
        font-size: 1.9rem;
        color:#fff;
            margin-bottom: 4rem;
            @media (max-width: 790px) {
            margin-bottom: 2rem;
            font-size: 1.5rem;
        }@media (max-width: 660px) {
            margin-bottom: 4rem;
            width: 90%;
        }@media (max-width: 640px) {
            margin-bottom: 2rem;
            width: 90%;
        }
    }
    
    p{
        width: 28rem;
        margin: 0 auto;
        padding: 1rem 0;
        font-size: 1.2rem;
    }
`

const Slide = styled.div``