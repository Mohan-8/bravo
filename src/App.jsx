import './App.css';
import styled from "styled-components";
import backgroundImage from "./img/bg3.jpg";
import Header from './components/Banner/Header';
import ProfComponent from './components/Banner/ProfComponent';
import Members from "./components/Members/Members";
import Buy from './components/Buy/Buy';
import Tokenomics from './components/Tokenomics/Tokenomics';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Container >
      <Banner >
        <Header />
        <ProfComponent />
      </Banner >
      <Buy />
      <LightColor >
      <Members />
      </LightColor>
      <Tokenomics />
      <LightColor >
        <Footer />
      </LightColor >
    </Container >
  );
}

export default App;

const Container = styled.div``;
const Banner = styled.div`
  background-image: url(${backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  @media (max-width: 640px) {
    height: 100%;
    padding-bottom: 2rem;
  }
`;

const LightColor = styled.div`
  background-image: url(${backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  @media (max-width: 640px) {
    height: 100%;
  }
`;
