import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useRouter } from "next/router";

const FooterSection = [
  {
    sections: [
      { route: undefined, text: "Carrefour's activities" },
      { route: undefined, text: "The points of sale" },
      { route: undefined, text: "Carrefour's governance" },
      { route: undefined, text: "Foundation and Solidarity" },
      { route: undefined, text: "The history of Carrefour" },
      { route: undefined, text: "Carrefour 2022 strategy" },
      { route: undefined, text: "The food transition" },
      { route: undefined, text: "Digital Retail Strategy 2026" },
    ],
    name: "Groupe",
  },
  {
    sections: [
      { route: undefined, text: "Shareholder's corner" },
      { route: undefined, text: "Annual General Meeting" },
      { route: undefined, text: "The Carrefour share" },
      { route: undefined, text: "Financial publications" },
      { route: undefined, text: "Regulated information" },
    ],
    name: "Groupe",
  },
  {
    sections: [
      { route: "/#home", text: "Home" },
      { route: "/#rewards", text: "Rewards" },
      { route: "/#ourConcept", text: "Our Concept" },
      { route: "/#roadmap", text: "Roadmap" },
      { route: "/#aboutUs", text: "About us" },
      { route: "/#partner", text: "Partner" },
      { route: "/LearnMore", text: "Learn more" },
    ],
    name: "Compass",
  },
  {
    sections: [
      { route: undefined, text: "All the news" },
      { route: undefined, text: "Horizons blog" },
    ],
    name: "Newsroom",
  },
  {
    sections: [
      { route: undefined, text: "Act For Change" },
      { route: undefined, text: "Diversity" },
    ],
    name: "RH",
  },
];

const FooterSectionMobile = [
  {
    sections: [
      { route: undefined, text: "Carrefour's activities" },
      { route: undefined, text: "The points of sale" },
      { route: undefined, text: "Carrefour's governance" },
      { route: undefined, text: "Foundation and Solidarity" },
      { route: undefined, text: "The history of Carrefour" },
      { route: undefined, text: "Carrefour 2022 strategy" },
      { route: undefined, text: "The food transition" },
      { route: undefined, text: "Digital Retail Strategy 2026" },
      { route: undefined, text: "Shareholder's corner" },
      { route: undefined, text: "Annual General Meeting" },
      { route: undefined, text: "The Carrefour share" },
      { route: undefined, text: "Financial publications" },
      { route: undefined, text: "Regulated information" },
    ],
    name: "Groupe",
  },
  {
    sections: [
      { route: "/#home", text: "Home" },
      { route: "/#rewards", text: "Rewards" },
      { route: "/#ourConcept", text: "Our Concept" },
      { route: "/#roadmap", text: "Roadmap" },
      { route: "/#aboutUs", text: "About us" },
      { route: "/#partner", text: "Partner" },
      { route: "/LearnMore", text: "Learn more" },
    ],
    name: "Compass",
  },
  {
    sections: [
      { route: undefined, text: "All the news" },
      { route: undefined, text: "Horizons blog" },
    ],
    name: "Newsroom",
  },
  {
    sections: [
      { route: undefined, text: "Act For Change" },
      { route: undefined, text: "Diversity" },
    ],
    name: "RH",
  },
];

const footerHastag = [
  { text: "#Better Produce", route: undefined },
  { text: "#Eat Better", route: undefined },
  { text: "#Better Consumption", route: undefined },
  { text: "#Imagining the Future", route: undefined },
];

const more = [
  { text: "Legal Notice", route: undefined },
  { text: "Cookie policy", route: undefined },
  { text: "Privacy policy", route: undefined },
  { text: "Accessibility statement", route: undefined },
];

export default function Footer() {
  const router = useRouter();
  return (
    <>
      <div
        id="footer"
        className="bg-carefour-blue rounded-t-xl py-5 px-3 flex-col flex md:hidden"
      >
        <div className="flex flex-col items-center">
          {FooterSectionMobile.map((item, index) => (
            <FooterComponentMobile item={item} key={index} />
          ))}
        </div>
        <div className="flex items-center flex-col border-t border-b border-white/20 p-4">
          {footerHastag.map((item, index) => (
            <div
              className="font-bold w-[80%] text-white border text-center border-white rounded-xl py-1 px-3 my-1"
              key={index}
            >
              {item.text}
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center pt-5">
          <div className="w-[80%]">
            {more.map((item, index) => (
              <div className="text-sm text-white py-1 px-3" key={index}>
                {item.text}
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* desktop */}
      <div
        id="footer"
        className="bg-carefour-blue rounded-t-3xl p-10 flex-col hidden md:flex"
      >
        <div className="flex justify-around pb-10">
          {FooterSection.map((item, index) => (
            <div className="flex flex-col items-start " key={index}>
              <h3 className="text-white text-lg font-bold my-2">{item.name}</h3>
              {item.sections.map((section, i) => (
                <div
                  key={`${index}_${i}`}
                  className="text-white my-1 text-sm"
                  onClick={() => {
                    if (section.route) router.push(section.route);
                  }}
                >
                  {section.text}
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="flex justify-center border-t border-b border-white/20 p-4">
          <div className="w-[80%] flex justify-evenly">
            {footerHastag.map((item, index) => (
              <div
                className="font-bold text-white border border-white rounded-xl py-1 px-3"
                key={index}
              >
                {item.text}
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center pt-8">
          <div className="w-[80%] flex justify-evenly">
            {more.map((item, index) => (
              <div className="text-sm text-white py-1 px-3" key={index}>
                {item.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

const FooterComponentMobile = ({ item }) => {
  const [show, setShow] = useState(false);
  const router = useRouter();

  return (
    <div className="flex flex-col w-full">
      <div className="flex justify-center items-center">
        {show ? (
          <KeyboardArrowUpIcon className="text-white" />
        ) : (
          <KeyboardArrowDownIcon className="text-white" />
        )}
        <h3
          className="text-white text-lg font-bold py-2 "
          onClick={() => setShow(!show)}
        >
          {item.name}
        </h3>
        {show ? (
          <KeyboardArrowUpIcon className="text-white" />
        ) : (
          <KeyboardArrowDownIcon className="text-white" />
        )}
      </div>

      {show &&
        item.sections.map((section, i) => (
          <div
            key={`${i}`}
            className="text-white my-1 text-sm ml-5 w-full"
            onClick={() => {
              if (section.route) router.push(section.route);
            }}
          >
            {section.text}
          </div>
        ))}
    </div>
  );
};
