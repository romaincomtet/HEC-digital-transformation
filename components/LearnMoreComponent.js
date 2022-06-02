import { useRouter } from "next/router";

const category = [
  {
    bgColor: "bg-carefour-blue",
    text: "Metaverse",
  },
  {
    bgColor: "bg-carefour-yellow",
    text: "Cryptocurrency",
  },
  {
    bgColor: "bg-carefour-yellow",
    text: "NFTs",
  },
  {
    bgColor: "bg-carefour-yellow",
    text: "Sustainability",
  },
  {
    bgColor: "bg-carefour-yellow",
    text: "Carrefour Compass",
  },
];

export default function LearnMoreComponent() {
  const router = useRouter();
  return (
    <>
      <div
        id="home"
        className="h-fit bg-white pt-5 pb-8 px-2 flex flex-col md:hidden"
      >
        <h2 className="font-bold text-3xl p-2 text-carefour-blue">
          Welcome to Carrefour Compass (in development)
        </h2>
        <div className="flex mt-2 flex-wrap">
          {category.map((item, index) => (
            <div
              className={`px-4 py-1 ${item.bgColor} text-white rounded-xl mx-1 my-1`}
              key={index}
            >
              {item.text}
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-5">
          <img src="/assets/inDevelopment.png" className="w-full" />
        </div>
      </div>
      <div id="home" className="h-fit bg-white p-14 hidden md:flex flex-col">
        <h2 className="font-bold text-5xl p-2 text-carefour-blue">
          Welcome to Carrefour Compass (No video for the momment)
        </h2>
        <div className="flex mt-8">
          {category.map((item, index) => (
            <div
              className={`px-4 py-1 ${item.bgColor} text-white rounded-xl mx-2`}
              key={index}
            >
              {item.text}
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <img src="/assets/inDevelopment.png" className="w-full" />
        </div>
      </div>
    </>
  );
}
