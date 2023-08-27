import styled from 'styled-components'
import { Slide } from 'react-awesome-reveal';
import { PieChart } from 'react-minimal-pie-chart';




const timelineData = [
  {
    text: 'Token Creation',
    date: 'July 02 2023',
    category: {
      tag: 'DONE',
      color: '#018f69'
    },
    link: {
      url: 'https://pancakeswap.finance/',
      text: 'Check it out on Pancakeswap'
    }
  },
  {
    text: 'Tokenomics',
    date: 'July 07 2023',
    category: {
      tag: 'DONE',
      color: '#018f69'
    }
  },
  {
    text: '1st Air Drop',
    date: 'July 16 2023',
    category: {
      tag: 'DONE',
      color: '#018f69'
  }
  },
  {
    text: 'Website Design',
    date: 'August 2023',
    category: {
      tag: 'DONE',
      color: '#018f69'
    },
    link: {
      url: '#',
      text: 'See website'
    }
  },
  {
    text: 'Community Giveaway',
    date: 'August 2023',
    category: {
      tag: 'DONE',
      color: '#FFDB14'
    }
  },
  {
    text: 'Listing & Trading',
    date: 'August 2023',
    category: {
      tag: 'DONE',
      color: '#FFDB14'
    }
  },
  {
    text: 'Staking',
    date: 'Soon',
    category: {
      tag: 'TO DO',
      color: '#e17b77'
    },
  },
  {
    text: 'Mega Burn',
    date: 'Soon',
    category: {
      tag: 'TO DO',
      color: '#e17b77'
    },
  }, {
    text: 'Use case 1 & Mega Burn',
    date: 'Soon',
    category: {
      tag: 'TO DO',
      color: '#e17b77'
    },
  },{
    text: 'Use case 2 & Mega Burn',
    date: 'Soon',
    category: {
      tag: 'TO DO',
      color: '#e17b77'
    },
  }
]

const TimelineItem = ({ data }) => (
  <div className="timeline-item">
    <div className="timeline-item-content">
      <span className="tag" style={{ background: data.category.color }}>
        {data.category.tag}
      </span>
      <time>{data.date}</time>
      <p>{data.text}</p>
      {data.link && (
        <a
          href={data.link.url}
          target="_blank"
          rel="noopener noreferrer"
        >
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
    { title: 'Developers & Ecosystem', value: 15, key1:'15%', color: '#FF5733' },
    { title: 'Marketing', value: 10, key1:'10%', color: '#33FF57' },
    { title: 'Community Airdrop', value: 17.5, key1:'17.5%', color: '#5733FF' },
    { title: 'Burn', value: 17.5, key1:'17.5%', color: '#33A0FF' },
    { title: 'Liquidity', value: 40, key1:'20%', color: '#FF33A0' },
    { title: 'Staking', value: 40, key1:'20%', color: '#EE33A0' }
  ];
  return (
    <Container id='tokenomic'>
      <p> We are not just a simple Memecoin project. Our future is AI and we are building all that the Crypto community needs. Stay tuned for big updates.</p><br />
      <Slide direction="left"><hr />
        <h1>Tokenomics</h1>
        <br />
        <h3> 
        <ChartContainer>
        <PieChart
          data={data}
          lineWidth={30}
          startAngle={270}
          viewBoxSize={[100, 100]}
          style={{ width: '350px', height: '350px', margin: '20px auto',':hover':'margin: 30px auto' }}
        />
         <StyledDiv>CROC</StyledDiv>
        <ChartLabel>
          <h2>Total supply - 21 Trillion</h2>
          {data.map((item) => (
            <LabelItem key={item.title}>
              <LabelColor color={item.color} />
              <LabelText>{item.key1}</LabelText>
              <LabelText>{item.title}</LabelText>
            </LabelItem>
          ))}
        </ChartLabel>
      </ChartContainer></h3>
      </Slide>
      <br /><hr />
      <div id="timeline">
      <h1>ROADMAP</h1>
      </div>
      <Timeline />
    </Container>
  )
}

export default Tokenomics

const Container = styled.div`
    width: 70%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 4rem 0;
    @media (max-width: 790px) {
      margin:auto;
      width: 90%;
    }
    @media (max-width: 660px) {
      width: 90%;
    }
    @media (max-width: 640px) {
      width: 90%;
  }

    span{
        font-weight: 700;
        text-transform: uppercase;
        margin-top: 0.1rem;
        border-radius: 15px;
    }

    h1{
        padding-top: 1rem;
        margin-top: 1rem;
        text-transform: capitalize;
        text-align: center;
        color: #000;
    }
    h2{
      padding-top: 1rem;
      margin-top: 1rem;
      text-transform: capitalize;
      text-align: center;
      color: #000;
  }
    li{
      word-break: break-word;
      margin-top: 0.5rem;
      font-size: 1.5rem;
      text-align: center;
    }
    p{
        word-break: break-word;
        margin-top: 0.5rem;
        font-size: 1.5rem;
        text-align: center;
    }

    .slick-list, .slick-slider, .slick-track{
        padding: 0;
    }

    .slick-dots{
        text-align: left;
        margin-left: 1rem;
    }

    .slick-dots li button:before{
        content: "";
    }

    .slick-dots li button{
        width: 9px;
        height: 4px;
        background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
        padding: 0.1rem;
        margin-top: 1rem;
        transition: all 400ms ease-in-out;
        border-radius: 50px;
    }
    
    .slick-dots li.slick-active button{
        background: #01be96;
        width: 15px;
    }

    .slick-dots li{
        margin: 0;
    }
`
const ChartContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`
const ChartLabel = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
const LabelItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top:5px;
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
`

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
  
`

const LabelText = styled.p`
  color: white;
  font-size: 14px;
`
const StyledDiv = styled.div`
  position: absolute;
  top: 50%;
  left: 32%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  font-size: 1.5rem;
  font-weight: bold;

  @media (max-width: 790px) {
  top: 27%;
  left: 49%;
  }

  @media (max-width: 660px) {
    top: 25%;
    left: 49%;
  }

  @media (max-width: 640px) {
    top: 18%;
    left: 49%;
  }
`