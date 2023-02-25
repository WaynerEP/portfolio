import Home from "./components/Home";
import Navbar from "./Layouts/Navbar";
import Skills from "./components/Skills";
import Service from "./components/Services";
import Projects from "./components/Projects";
import Hireme from "./components/Hireme";
import Contact from "./components/Contact";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Footer from "./components/Footer";
import { isDarkInLE, setThemeInLE } from "./utils/theme";

const App = () => {
  useEffect(() => {
    const theme = isDarkInLE();
    if (theme === 'dark' || window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add('dark');
      setThemeInLE('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    Aos.init({
      duration: 1800,
      offset: 100,
      disable: "mobile",
    });
  }, []);
  return (
    <>
      <Navbar />
      <Home />
      <Skills />
      <Service />
      <Projects />
      <Hireme />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
