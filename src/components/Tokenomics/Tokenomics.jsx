import styled from "styled-components";
import { Slide } from "react-awesome-reveal";
import { PieChart } from "react-minimal-pie-chart";
import C1 from "../../img/ch/1.jpg";
import C2 from "../../img/ch/2.jpg";

const timelineData = [
  {
    text: "Token Creation",
    date: "July 02 2023",
    category: {
      tag: "DONE",
      color: "#018f69",
    },
    link: {
      url: "https://pancakeswap.finance/",
      text: "Check it out on Pancakeswap",
    },
  },
  {
    text: "Tokenomics",
    date: "July 07 2023",
    category: {
      tag: "DONE",
      color: "#018f69",
    },
  },
  {
    text: "1st Air Drop",
    date: "July 16 2023",
    category: {
      tag: "DONE",
      color: "#018f69",
    },
  },
  {
    text: "Website Design",
    date: "July 30 2023",
    category: {
      tag: "DONE",
      color: "#018f69",
    },
    link: {
      url: "#",
      text: "See website",
    },
  },
  {
    text: "Listing & Trading",
    date: "August 2023",
    category: {
      tag: "Done",
      color: "#018f69",
    },
  },
  {
    text: "Community Giveaway",
    date: "August 2023",
    category: {
      tag: "Done",
      color: "#018f69",
    },
  },
  {
    text: "Token Launch in Base",
    date: "August 2023",
    category: {
      tag: "Done",
      color: "#018f69",
    },
  },
  {
    text: "Mega Burn",
    date: "August 2023",
    category: {
      tag: "Done",
      color: "#018f69",
    },
  },
  {
    text: "Staking",
    date: "Soon",
    category: {
      tag: "TO DO",
      color: "#e17b77",
    },
  },
  {
    text: "Use case 1 & Mega Burn",
    date: "Soon",
    category: {
      tag: "TO DO",
      color: "#e17b77",
    },
  },
  {
    text: "Use case 2 & Mega Burn",
    date: "Soon",
    category: {
      tag: "TO DO",
      color: "#e17b77",
    },
  },
];

const TimelineItem = ({ data }) => (
  <div className="timeline-item">
    <div className="timeline-item-content">
      <span className="tag" style={{ background: data.category.color }}>
        {data.category.tag}
      </span>
      <time>{data.date}</time>
      <p>{data.text}</p>
      {data.link && (
        <a href={data.link.url} target="_blank" rel="noopener noreferrer">
          {data.link.text}
        </a>
      )}
      <span className="circle" />
    </div>
  </div>
);

const Timeline = () =>
  timelineData.length > 0 && (
    <div className="timeline-container">
      {timelineData.map((data, idx) => (
        <TimelineItem data={data} key={idx} />
      ))}
    </div>
  );

const Tokenomics = () => {
  const data = [
    {
      title: "Developers & Ecosystem",
      value: 15,
      key1: "15%",
      color: "#FF5733",
    },
    { title: "Marketing", value: 10, key1: "10%", color: "#33FF57" },
    {
      title: "Community Airdrop",
      value: 17.5,
      key1: "17.5%",
      color: "#5733FF",
    },
    { title: "Burn", value: 17.5, key1: "17.5%", color: "#33A0FF" },
    { title: "Liquidity", value: 40, key1: "40%", color: "#FF33A0" },
  ];
  const data1 = [
    { title: "Liquidity", value: 100, key1: "100%", color: "#33FF57" },
  ];
  return (
    <Container id="tokenomic">
      <p>
        {" "}
        We are not just a simple Memecoin project. Our future is AI and we are
        building all that the Crypto community needs. Stay tuned for big
        updates.
      </p>
      <br />
      <Slide direction="left">
        <hr />
        <h1>Tokenomics</h1>
        <br />
        <h3>
          <He>
            <span>
              <h5>Bsc Chart</h5>
            </span>
            <span>
              <h5>Base Chart</h5>
            </span>
          </He>
          <ChartContainer>
            <StyledImage>
              <PieChart
                data={data}
                lineWidth={30}
                startAngle={270}
                viewBoxSize={[100, 100]}
                style={{ width: "100%", height: "100%" }}
              />
            </StyledImage>
            <StyledImag>
              <PieChart
                data={data1}
                lineWidth={30}
                startAngle={270}
                viewBoxSize={[100, 100]}
                style={{ width: "100%", height: "100%" }}
              />
            </StyledImag>
          </ChartContainer>
          <ChartLabel>
            <span>
              <h2>Total supply - 21 Trillion</h2>
              <StyledHeading>BSC Chart</StyledHeading>
              {data.map((item) => (
                <LabelItem key={item.title}>
                  <LabelColor color={item.color} />
                  <LabelText>{item.key1}</LabelText>
                  <LabelText>{item.title}</LabelText>
                </LabelItem>
              ))}
            </span>
            <span>
              <h2>Total supply - 21 Trillion</h2>
              <StyledHeading>Base chart</StyledHeading>
              {data1.map((item) => (
                <LabelItem key={item.title}>
                  <LabelColor color={item.color} />
                  <LabelText>{item.key1}</LabelText>
                  <LabelText>{item.title}</LabelText>
                </LabelItem>
              ))}
            </span>
          </ChartLabel>
        </h3>
      </Slide>
      <br />
      <hr />
      <div id="timeline">
        <h1>ROADMAP</h1>
      </div>
      <Timeline />
    </Container>
  );
};

export default Tokenomics;

const Container = styled.div`
  width: 70%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 4rem 0;
  @media (max-width: 790px) {
    margin: auto;
    width: 90%;
  }
  @media (max-width: 660px) {
    width: 90%;
  }
  @media (max-width: 640px) {
    width: 90%;
  }

  span {
    font-weight: 700;
    text-transform: uppercase;
    margin-top: 0.1rem;
    border-radius: 15px;
  }

  h1 {
    padding-top: 1rem;
    margin-top: 1rem;
    text-transform: capitalize;
    text-align: center;
    color: #000;
  }
  h2 {
    padding-top: 1rem;
    margin-top: 1rem;
    text-transform: capitalize;
    text-align: center;
    color: #000;
  }

  li {
    word-break: break-word;
    margin-top: 0.5rem;
    font-size: 1.5rem;
    text-align: center;
  }
  p {
    word-break: break-word;
    margin-top: 0.5rem;
    font-size: 1.5rem;
    text-align: center;
  }

  .slick-list,
  .slick-slider,
  .slick-track {
    padding: 0;
  }

  .slick-dots {
    text-align: left;
    margin-left: 1rem;
  }

  .slick-dots li button:before {
    content: "";
  }

  .slick-dots li button {
    width: 9px;
    height: 4px;
    background: linear-gradient(
      159deg,
      rgb(45, 45, 58) 0%,
      rgb(43, 43, 53) 100%
    );
    padding: 0.1rem;
    margin-top: 1rem;
    transition: all 400ms ease-in-out;
    border-radius: 50px;
  }

  .slick-dots li.slick-active button {
    background: #01be96;
    width: 15px;
  }

  .slick-dots li {
    margin: 0;
  }
`;

const ChartContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  max-width: 1480px;
  width: 100%;
  margin: 0 auto;
  padding: 1.5rem 0;
  position: relative;
`;

const StyledImage = styled.div`
  background-image: url(${C1});
  width: 350px;
  height: 350px;
  background-size: 19rem;
  background-position: bottom;
  border-radius: 350px;
`;
const StyledImag = styled.div`
  background-image: url(${C2});
  width: 350px;
  height: 350px;
  background-size: 19rem;
  background-position: bottom;
  border-radius: 350px;
`;

const ChartLabel = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
  max-width: 1480px;
  width: 100%;
  margin: 0 auto;
  padding: 1.5rem 0;
  position: relative;
`;

const LabelItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 5px;
  @media (max-width: 790px) {
    gap: 10px;
  }
  @media (max-width: 660px) {
    gap: 5px;
  }
  @media (max-width: 640px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;
const He = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  max-width: 1480px;
  width: 100%;
  margin: 0 auto;
  padding: 1.5rem 0;
  position: relative;
  font-size: 30px;
`;
const LabelColor = styled.div`
  width: 12px;
  height: 12px;
  background-color: ${(props) => props.color};
  align-items: center;
  margin-top: 8px;
  @media (max-width: 640px) {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
`;
const StyledHeading = styled.h1`
  color: #165cb8;
`;
const LabelText = styled.p`
  color: white;
  font-size: 14px;
`;
