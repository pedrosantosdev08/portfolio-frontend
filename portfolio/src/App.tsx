import "./App.css";
import { AboutMe } from "./components/Sections/About/AboutMe";
import { ContactMe } from "./components/Sections/ContactMe/ContactMe";
import { Header } from "./components/Sections/Header/Header";
import { Hero } from "./components/Sections/Hero/Hero";
import { Portfolio } from "./components/Sections/Portfolio/Portfolio";
import { Services } from "./components/Sections/Services/Services";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <AboutMe />
      <Portfolio />
      <ContactMe/>
    </>
  );
}

export default App;
