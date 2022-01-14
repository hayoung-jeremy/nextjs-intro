// this page is for customizing and using global styles
import NavBar from "../components/NavBar";
// we can also import global css here
// import "../styles/globals.css"

const App = ({ Component, pageProps }) => {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <style jsx global>{`
        body {
          font-family: Montserrat;
        }
      `}</style>
    </>
  );
};

export default App;
