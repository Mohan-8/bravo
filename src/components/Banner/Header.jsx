import React, { useState } from "react";
import styled from "styled-components";
import logo from "../../img/your-logo.png";
// import { ConnectWallet } from "@thirdweb-dev/react";

const Header = () => {
  const [bar, setBar] = useState(false);

  return (
    <Container bar={bar}>
      <Logo>
        <img src={logo} alt="logo" />
        <h1>CROC</h1>
      </Logo>
      <Nav bar={bar}>
        <span>
          <a href="#home">Home</a>
        </span>
        <span>
          <a href="#buy">How to buy</a>
        </span>
        <span>
          <a href="#member">Team</a>
        </span>
        <span>
          <a href="#tokenomic">Tokenomics</a>
        </span>
        <span>
          <a href="#timeline">Roadmap</a>
        </span>
        <span></span>
        <span></span>
      </Nav>
      <div onClick={() => setBar(!bar)} className="bars">
        <div className="bar"></div>
      </div>
      <Button bar={bar}>
        <button
          onClick={() =>
            window.open(
              "https://pancakeswap.finance/swap?outputCurrency=0xD4e4C95454996D149fE1CAF54Fd443a6A2D64016",
              "_blank",
              "noopener,noreferrer"
            )
          }
        >
          Bsc Trade
        </button>
        <button
          onClick={() =>
            window.open(
              "https://baseswap.fi/swap",
              "_blank",
              "noopener,noreferrer"
            )
          }
        >
          Base Trade
        </button>
        {/* <ConnectWallet theme="dark" btnTitle="Connect-Wallet" /> */}
      </Button>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  max-width: 1480px;
  width: 100%;
  margin: 0 auto;
  padding: 1.5rem 0;
  position: relative;
  animation: header 500ms ease-in-out;
  @media (max-width: 840px) {
    width: 90%;
  }
  .bars {
    display: none;
  }

  button {
    padding: 0.7rem 2rem;
    margin-right: 10px;
    cursor: pointer;
    background: rgb(180, 246, 252);
    background: radial-gradient(
      circle,
      rgba(180, 246, 252, 1) 0%,
      rgba(0, 0, 0, 1) 0%
    );
    border: none;
    color: #fff;
    font-weight: 500;
    border-radius: 15px;
    filter: drop-shadow(0px 10px 10px #01be9551);
    :hover {
      filter: drop-shadow(0px 10px 10px #01be9570);
      border-radius: 15px;
    }
  }
`;
const Logo = styled.div`
  border-radius: 15px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  span {
    font-size: 1.8rem;
  }

  h1 {
    font-weight: 600;
    font-size: 1.2rem;
    @media (max-width: 790px) {
      display: none;
    }
  }

  img {
    width: 8rem;
    filter: drop-shadow(0px 10px 10px #01be9570);
    transition: transform 400ms ease-in-out;
    border-radius: 25px;
    @media (max-width: 790px) {
      width: 4rem;
    }

    @media (max-width: 660px) {
      width: 4rem;
    }

    @media (max-width: 640px) {
      width: 4rem;
    }
  }
`;
const Nav = styled.div`
  @media (max-width: 640px) {
    position: fixed;
    display: flex;
    flex-direction: column;
    background-color: #01be96;
    inset: 0;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    gap: 2rem;
    font-weight: 700;
    height: ${(props) => (props.bar ? "100vh" : 0)};
    transition: height 400ms ease-in-out;
    overflow: hidden;
    z-index: 100;
  }
  span {
    margin-left: 1rem;
    a {
      color: #fff;
      text-decoration: none;
      font-weight: 400;
      position: relative;
      :before {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        bottom: -5px;
        height: 2px;
        background-color: #fff;
        transform: scale(0);
        transform-origin: right;
        transition: transform 400ms ease-in-out;
      }
      :hover:before {
        transform: scale(1);
        transform-origin: left;
      }
      :hover {
        opacity: 0.7;
      }
    }
  }
`;

const Button = styled.div`
  span {
    margin-left: 1rem;
  }
`;
