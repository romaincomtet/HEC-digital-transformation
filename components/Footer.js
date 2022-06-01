import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useRouter } from "next/router";

const FooterSection = [
  {
    sections: [
      { route: undefined, text: "Les activités de Carrefour" },
      { route: undefined, text: "Les points de vente" },
      { route: undefined, text: "La gouvernance de Carrefour" },
      { route: undefined, text: "Fondation et Solidarité" },
      { route: undefined, text: "L'histoire de Carrefour" },
      { route: undefined, text: "Stratégie Carrefour 2022" },
      { route: undefined, text: "La transition alimentaire" },
      { route: undefined, text: "Stratégie Digital Retail 2026" },
    ],
    name: "Groupe",
  },
  {
    sections: [
      { route: undefined, text: "Espace actionnaires" },
      { route: undefined, text: "Assemblée Générale" },
      { route: undefined, text: "L'action Carrefour" },
      { route: undefined, text: "Publication financières" },
      { route: undefined, text: "Informations réglementées" },
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
      { route: undefined, text: "Toutes les actualités" },
      { route: undefined, text: "Blog Horizons" },
    ],
    name: "Newsroom",
  },
  {
    sections: [
      { route: undefined, text: "Act For Change" },
      { route: undefined, text: "Diversité" },
    ],
    name: "RH",
  },
];

const FooterSectionMobile = [
  {
    sections: [
      { route: undefined, text: "Les activités de Carrefour" },
      { route: undefined, text: "Les points de vente" },
      { route: undefined, text: "La gouvernance de Carrefour" },
      { route: undefined, text: "Fondation et Solidarité" },
      { route: undefined, text: "L'histoire de Carrefour" },
      { route: undefined, text: "Stratégie Carrefour 2022" },
      { route: undefined, text: "La transition alimentaire" },
      { route: undefined, text: "Stratégie Digital Retail 2026" },
      { route: undefined, text: "Espace actionnaires" },
      { route: undefined, text: "Assemblée Générale" },
      { route: undefined, text: "L'action Carrefour" },
      { route: undefined, text: "Publication financières" },
      { route: undefined, text: "Informations réglementées" },
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
      { route: undefined, text: "Toutes les actualités" },
      { route: undefined, text: "Blog Horizons" },
    ],
    name: "Newsroom",
  },
  {
    sections: [
      { route: undefined, text: "Act For Change" },
      { route: undefined, text: "Diversité" },
    ],
    name: "RH",
  },
];

const footerHastag = [
  { text: "#Mieux Produire", route: undefined },
  { text: "#Mieux Manger", route: undefined },
  { text: "#Mieux Consommer", route: undefined },
  { text: "#Imaginer Le Futur", route: undefined },
];

const more = [
  { text: "Mentions légales", route: undefined },
  { text: "Politique des cookies", route: undefined },
  { text: "Politique de confidentialité", route: undefined },
  { text: "Déclaration d'accessibilité", route: undefined },
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
