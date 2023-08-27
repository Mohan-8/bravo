import React from "react";
import styled from "styled-components";
import Card from "./Card";
import { Slide } from "react-awesome-reveal";
import { IoMdWallet, IoMdSwap } from "react-icons/io";
import { SiEthereum } from "react-icons/si";
import { VscDebugDisconnect } from "react-icons/vsc";

const Buy = () => {
  return (
    <Container id="buy">
      <Slide direction="down">
        <h1>How to buy Base CROC</h1>
      </Slide>
      <Cards>
        <Slide direction="left">
          <Card
            Icon={IoMdWallet}
            title={"Create MetaMask Wallet"}
            disc={`Create a MetaMask Wallet using either a PC or a mobile device. This wallet will allow you to buy, sell, send, and receive CROC.`}
            button={"Create Wallet"}
            link={"https://metamask.io/"}
          />
        </Slide>
        <Slide direction="up">
          <Card
            Icon={SiEthereum}
            title={"Send ETH to your wallet"}
            disc={`You can buy ETH directly from exchanges like Binance, or a DEX. Make sure to use the ETH network when transferring ETH.`}
            button={"How to add ETH"}
            link={"https://metamask.io/"}
          />
        </Slide>
        <Slide direction="right">
          <Card
            Icon={VscDebugDisconnect}
            title={"Connect wallet to BS"}
            disc={`Swap, earn, and build on the leading decentralized crypto trading protocol.BaseSwap will allow you to buy CROC.`}
            button={"Baseswap"}
            link={"https://baseswap.fi/"}
          />
        </Slide>
        <Slide direction="down">
          <Card
            Icon={IoMdSwap}
            title={"Swap ETH for CROC"}
            disc={`You  can  start  swapping  as  soon  as  you  have  ETH  available!  Press  ‘Select a token’  and  enter  the token address.`}
            button={"Swap to CROC"}
            link={"https://baseswap.fi/swap"}
          />
        </Slide>
      </Cards>
    </Container>
  );
};

export default Buy;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  @media (max-width: 840px) {
    width: 90%;
  }

  h1 {
    text-align: center;
    color: white;
  }

  iframe {
    margin-top: 2rem;
    margin-left: auto;
    margin-right: auto;
    display: block;
    border-radius: 15px;
  }
`;

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 2rem;
  margin-bottom: 2rem;
  gap: 1rem;

  button {
    border-radius: 25px 15px;
    background-color: #0ac2cf;
    color: #000;
  }
`;
