import React from "react";
import styled from "styled-components";

const Card = (props) => {
  const { Icon, disc, title, button, link } = props;
  return (
    <Container>
      <span>
        <Icon />
      </span>
      <StyledHead>{title}</StyledHead>
      <p>{disc}</p>
      <button onClick={() => window.open(link, "_blank")}>{button}</button>
    </Container>
  );
};

export default Card;

const Container = styled.div`
  border-radius: 50px;
  width: 100%;
  background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
  padding: 1rem;
  text-align: center;
  span {
    font-size: 4rem;
    color: white;
  }

  p {
    font-size: 1 rem;
  }

  button {
    padding: 0.7rem 2rem;
    margin-top: 2rem;
    cursor: pointer;
    background-color: #0ac2cf;
    border: none;
    color: #fff;
    font-weight: 500;
    filter: drop-shadow(0px 10px 10px #01be9551);
    :hover {
      filter: drop-shadow(0px 10px 10px #01be9570);
    }
  }
`;
const StyledHead = styled.h1`
  font-size: 1.2rem;
  padding-bottom: 1rem;
  color: #165cb8;
`;
