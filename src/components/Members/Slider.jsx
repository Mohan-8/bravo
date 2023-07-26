// Slider.jsx
import React from 'react';
import styled from 'styled-components';
import croc from '../../img/ghost.jpg';
import croc2 from '../../img/gold.jpg';
import croc3 from '../../img/diamond.jpg';
import croc4 from '../../img/infantry.jpg';

const data = [
  {
    image: croc,
    title: "GHOST"
  },
  {
    image: croc3,
    title: "DIAMOND"
  },
  {
    image: croc2,
    title: "GOLD"
  },
  {
    image: croc4,
    title: "INFANTRY"
  },
];

const SliderComp = () => {
  return (
    <Container>
      {data.map((item, i) => (
        <Member item={item} key={i} />
      ))}
    </Container>
  );
};

export default SliderComp;


const Member = (props) => {
  const { image, title = 'Default Title' } = props.item;
  return (
    <MemberContainer className='member'>
      <img src={image} alt='member' />
      <Title>{title}</Title>
    </MemberContainer>
  );
};

const MemberContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 25rem;
  margin: 0 0.5rem;
  padding: 0.5rem;
  border-radius: 5px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  text-align: center;
  img {
    width: 100%;
    height: 70%;
    transition: transform 400ms ease-in-out;
    border-radius: 15px;
    border: dotted 3px cyan;
  }
  
  @media (max-width: 790px) {
    img {
      max-width: 100%;
      height: auto;
      transition: none;
      border-radius: 10px; 
      border: dotted 2px cyan;
    }
  }
  
  @media (max-width: 660px) {
    img {
      max-width: 100%;
      height: auto;
      transition: none;
      border-radius: 5px; 
      border: dotted 1px cyan; 
    }
  }
  
  @media (max-width: 640px) {
    img {
      max-width: 100%;
      height: auto;
      transition: none;
      border-radius: 5px; 
      border: dotted 1px cyan; 
    }
  }
  }
`;

const Container = styled.div`
  display: flex; 
  justify-content: space-between;
  @media (max-width: 790px) {
    display: block;
    margin: auto;
    width: 50%;
  } 
  @media (max-width: 660px) {
    width: 90%;
  }

  @media (max-width: 640px) {
    width: 90%;
  }
`

const Title = styled.h1`
font-size: 1.9rem;
`;
