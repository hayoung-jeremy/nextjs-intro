// this page is for customizing and using global styles
import Layout from "../components/Layout";
// we can also import global css here
// import "../styles/globals.css"

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <style jsx global>{`
        body {
          font-family: Montserrat;
        }
      `}</style>
    </>
  );
};

export default App;
