import Navbar from "../components/Navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Navbar />
      <div className="pt-20">
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
