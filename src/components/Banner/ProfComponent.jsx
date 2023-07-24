import React, { useState, useEffect } from "react";
import axios from 'axios';
import styled from "styled-components";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebook, FaTwitter, FaTelegram, FaDiscord } from "react-icons/fa";
import { Slide } from "react-awesome-reveal";
import profile from '../../img/profilebg1.png'

const token_address = '0xfb5b838b6cfeedc2873ab27866079ac55363d37e';
const url = `https://api.coingecko.com/api/v3/simple/token_price/binance-smart-chain?contract_addresses=${token_address}&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true`;

const ProfComponent = () => {

  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    // Fetch data initially
    fetchData();

    // Set up interval to refresh data every 30 seconds
    const intervalId = setInterval(() => {
      fetchData();
    }, 10000);

    // Clean up interval on unmount
    return () => clearInterval(intervalId);
  }, []);

  if (!data) return null

  return (
    <Container id="home">
      <Slide direction="left">
        <Texts>
          <h1>AICROC</h1>
          <h3>Revolution in the memecoin world</h3>
          <p>
            Mission of the project <br />
            Develop a world class memecoin with best in class burn feature. We are starting with a meme project but we have big plans.
          </p>
          <Data>
            <div className="badge-container-price">
              <h2>Address: {token_address}</h2>
            </div>
            <br />
            <div className="badge-container-price">
              <h2>Total Supply: 21,000,000,000,000</h2>
            </div>
            <br />
            <div className="badge-container-price">
              <h2>Market Cap: ${data[token_address].usd_market_cap.toLocaleString()}</h2>
            </div>
            <br />
            <div className="badge-container-price" style={{ display: 'flex' }}>
              <h2 style={{ display: 'inline' }}>Price:</h2>
              <h2 className={`${data[token_address].usd_24h_change >= 0 ? 'positive' : 'negative'}`} style={{ display: 'inline', marginLeft: '1rem' }}>
                ${data[token_address].usd} ({data[token_address].usd_24h_change >= 0 ? '+' : ''} {data[token_address].usd_24h_change.toLocaleString()}%)
              </h2>
            </div>
          </Data>
        </Texts>
      </Slide>
      <Slide direction="right">
        <Profile>
          <img
            src={profile}
            alt="profile"
          />
          <Social>
            <p>Check out our social media:</p>
            <div className="social-icons">
              <span>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                  <AiOutlineInstagram />
                </a>
              </span>
              <span>
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                  <FaFacebook />
                </a>
              </span>
              <span>
                <a href="https://twitter.com/aicrocmemecoin" target="_blank" rel="noopener noreferrer">
                  <FaTwitter />
                </a>
              </span>
              <span>
                <a href="https://www.telegram.com/" target="_blank" rel="noopener noreferrer">
                  <FaTelegram />
                </a>
              </span>
              <span>
                <a href="https://www.discord.com/" target="_blank" rel="noopener noreferrer">
                  <FaDiscord />
                </a>
              </span>
            </div>
          </Social>
          <button onClick={() => window.open('https://bscscan.com/address/0x361556a23192794fc98771d5a6261caaa2cefb2c', '_blank', 'noopener,noreferrer')}>
            Smart Contract
          </button>
          <button onClick={() => window.open('https://bscscan.com/token/0x361556a23192794fc98771d5a6261caaa2cefb2c?a=0x000000000000000000000000000000000000dead', '_blank', 'noopener,noreferrer')}>
            Burn Address
          </button>
        </Profile>
      </Slide>
    </Container>

  );
};

export default ProfComponent;

const Container = styled.div`
  display: flex;
  gap: 15rem;
  padding-top: 3rem;
  width: 280%;
  max-width: 1280px;
  margin: 0 auto;
  z-index: 1;
  @media (max-width: 840px) {
    flex-direction: column;
    width: fit-content;
    gap: 0rem;
  }

  @media (max-width: 640px) {
    flex-direction: column;
    gap: 2rem;
  }

  button {
    padding: 0.7rem 3rem;
    margin-top: 2rem;
    margin-bottom: 1rem;
    margin-right: 10px;
    margin-left:15px;
    cursor: pointer;
    background-color: #0ac2cf;
    border: none;
    color: #000;
    font-weight: 500;
    border-radius:50px 50px 50px 50px;
    filter: drop-shadow(0px 10px 10px #01be9551);
    :hover {
      filter: drop-shadow(0px 10px 10px #01be9570);
    }
    @media (max-width: 640px) {
      flex-direction: column;
    }
  }
`;
const Texts = styled.div`
  flex: 1;
  h4 {
    padding: 1rem 0;
    font-weight: 500;
  }
  h1 {
    font-size: 5rem;
    font-family: "Secular One", sans-serif;
    letter-spacing: 2px;
    @media (max-width: 690px) {
      font-size: 3rem;
    }
  }
  h3 {
    font-weight: 500;
    font-size: 2rem;
    padding-bottom: 1.2rem;
    text-transform: capitalize;
    @media (max-width: 690px) {
      font-size: 2rem;
      word-break: break-word;
    }
  }

  h2 {
    @media (max-width: 690px) {
      font-size: 1rem;
      word-break: break-word;
    }
  }
  p {
    font-weight: 300;
    font-size: 1.5rem;
    @media (max-width: 690px) {
      font-size: 1rem;
      word-break: break-word;
    }
  }
`;
const Social = styled.div`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  p {
    font-size: 1.5rem;
    @media (max-width: 690px) {
      font-size: 0.7rem;
    }
  }

  .social-icons {
    display: flex;
    align-items: center;
    gap: 1rem;
    span {
      width: 3rem;
      height: 3rem;
      clip-path: square;
      background-color: #0ac2cf;
      position: relative;
      border-radius:15px 500px 300px;
      transition: transform 400ms ease-in-out;
      @media (max-width: 640px) {
        width: 2rem;
        height: 2rem;
      }
    }

    a {
      color: #fff;
      position: absolute;
      top: 55%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 2rem;
      @media (max-width: 640px) {
        font-size: 1.5rem;
      }
    }
  }
`;
const Profile = styled.div`
  img {
    border-radius: 50px;
    width: 30rem;
    filter: drop-shadow(0px 10px 10px #01be9570);
    transition: transform 400ms ease-in-out;
    @media (max-width: 790px) {
      margin-top:1rem;
      width: 15rem;
    }

    @media (max-width: 660px) {
      margin-top:1rem;
      width: 15rem;
    }

    @media (max-width: 640px) {
      margin-top:1rem;
      width: 100%;
    }
  }
  :hover img {
    transform: translateY(-10px);
  }
`;

const Data = styled.div`
  flex: 1;
  margin-top: 2rem;

  .badge-container-price {
    padding: 0.7rem 2rem;
    margin-top: 1rem;
    word-break: break-word;
    background-color: #191923;
    border: none;
    color: #fff;
    font-weight: 500;
    filter: drop-shadow(0px 10px 10px #01be9551);
    border-radius: 15px 50px 30px;
  }
  
  .positive {
    color: green;
  }
  
  .negative {
    color: red;
  }
`;
