import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';
import LandingSection from './components/LandingSection';
import ItemsSection from './components/ItemsSection';
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
        <ItemsSection></ItemsSection>
        <TestimonialsSection></TestimonialsSection>
        <AboutSection></AboutSection>
      </Main>
      <Footer></Footer>
    </>
  );
}

export default App;
