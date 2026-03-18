import "./App.css";
import { AboutMe } from "./components/About/AboutMe";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { Services } from "./components/Services/Services";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <AboutMe/>
    </>
  );
}

export default App;
