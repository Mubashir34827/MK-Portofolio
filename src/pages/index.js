import Homepage from "./Components/home";
import About from "./Components/about";
import Skills from "./Components/skills";
import Services from "./Components/services";
import Contact from "./Components/contact";

export default function Home() {
  return (
    <>
      <main>
        <Homepage />
        <Skills />
        <Services />
        <About />
        <Contact />
      </main>
    </>
  );
}
