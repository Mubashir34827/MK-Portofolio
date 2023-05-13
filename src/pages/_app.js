import "<next>/styles/globals.css";
import { ThemeProvider } from 'next-themes';
import Footer from "./Reuse/footer";
import Mode from './Reuse/mode';
import Header from './Reuse/Navbar'

export default function App({ Component, pageProps }) {

  return (
    <>
      <ThemeProvider attribute="class">
        <Mode>
          <Header />
          <Component {...pageProps} />
          <footer>
            <Footer/>
          </footer>
        </Mode>
      </ThemeProvider>
    </>
  );
}
