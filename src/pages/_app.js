import "<next>/styles/globals.css";
import { ThemeProvider } from 'next-themes';
import Footer from "./utils/footer";
import Mode from './utils/mode';
import Header from './utils/Navbar'

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
