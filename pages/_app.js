import { useRouter } from "next/router";
import Navbar from "../components/Navbar";
import "../styles/globals.css";

const headerInfo = {
  home: [
    { text: "HOME", route: "/#home" },
    { text: "OUR CONCEPT", route: "/#ourConcept" },
    { text: "REWARDS", route: "/#rewards" },
    { text: "ROADMAP", route: "/#roadmap" },
    { text: "ABOUT US", route: "/#aboutUs" },
    { text: "LEARN MORE", route: "/LearnMore" },
  ],
  LearnMore: [
    { text: "HOME", route: "/" },
    { text: "LEARN MORE", route: "/LearnMore" },
  ],
};

function MyApp({ Component, pageProps }) {
  const { pathname } = useRouter();
  return (
    <div>
      <Navbar
        header={
          pathname.slice(0, 10) === "/LearnMore"
            ? headerInfo.LearnMore
            : headerInfo.home
        }
      />
      <div className="pt-20">
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
