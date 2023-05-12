// import "<next>/styles/globals.css";
// import Navbar from "./Reuse/Navbar";
// import Footer from "./Reuse/footer";
// import Sidebar from "./Reuse/responsive_navbar";
// import Layout from './Layout/layout';
// import { ThemeProvider } from 'next-themes';

// export default function App({ Component, pageProps }) {
//   return (
//     <>
//       <ThemeProvider attribute="class">
//       <Layout>
//         <div className="lg:block md:block sm:hidden xs:hidden">
//           <Navbar />
//         </div>
//         <div className="lg=hidden md:hidden sm:block xs:block">
//           <Sidebar />
//         </div>
//         <Component {...pageProps} />
//         <Footer/>
//       </Layout>
//     </ThemeProvider>
//     </>
//   );
// }


// App.js

import "<next>/styles/globals.css";
import Navbar from "./Reuse/Navbar";
import Footer from "./Reuse/footer";
import Sidebar from "./Reuse/responsive_navbar";
import Layout from './Layout/layout';
import { ThemeProvider } from 'next-themes';

export default function App({ Component, pageProps }) {

  return (
    <>
      <ThemeProvider attribute="class">
        <Layout>
          <div className="lg:block md:block sm:hidden xs:hidden">
            <Navbar />
          </div>
          <div className="lg:hidden md:hidden sm:block xs:block">
            <Sidebar />
          </div>
          <Component {...pageProps} />
          <footer>
            <Footer/>
          </footer>
        </Layout>
      </ThemeProvider>
    </>
  );
}
