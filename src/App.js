import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';
import LandingSection from './components/LandingSection';
import SpecialsSection from './components/SpecialsSection';
import TestimonialsSection from './components/TestimonialsSection';
import AboutSection from './components/AboutSection';

function App() {
  return (
    <>
      <Header>
        <Nav></Nav>
      </Header>
      <Main>
        <LandingSection></LandingSection>
        <SpecialsSection></SpecialsSection>
        <TestimonialsSection></TestimonialsSection>
        <AboutSection></AboutSection>
      </Main>
      <Footer></Footer>
    </>
  );
}

export default App;
