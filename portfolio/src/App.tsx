import "./App.css";
import { AboutMe } from "./components/About/AboutMe";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { Portfolio } from "./components/Portfolio/Portfolio";
import { Services } from "./components/Services/Services";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <AboutMe/>
      <Portfolio/>
    </>
  );
}

export default App;
