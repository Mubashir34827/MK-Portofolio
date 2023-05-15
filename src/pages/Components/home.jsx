import Homepage from "./profile";
import About from "./about";
import Skills from "./skills";
import Services from "./services";
import Contact from "./contact";

export default function Index() {
    return (
        <>
            <Homepage />
            <Skills />
            <Services />
            <About />
            <Contact />
        </>
    )
}
