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
    <div id="home" className="h-fit bg-white p-14 flex flex-col">
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
      {/* <div className="w-[40%] h-full flex-col flex justify-between text-carefour-blue pr-10">
        <p className="text-xl p-5">
          Play, earn, and create for free in the{" "}
          <span className="font-bold">
            world&apos;s first metaverse experience about food sustainability.
          </span>{" "}
          Complete quests to earn raffle tickets for cryptocurrency that you can
          spend on NFTs or sell for real money.{" "}
          <span className="font-bold">
            Carrefour Compass is your pass to the future!
          </span>
        </p>
        <div className="p-5">
          <div
            className="px-5 py-2 w-fit bg-carefour-blue text-white rounded-xl cursor-pointer"
            onClick={() => {
              router.push("/LearnMore");
            }}
          >
            Learn more
          </div>
        </div>
        <div className="flex"></div>
      </div>
      <div className="w-[60%] h-full flex items-center">
        <video controls className="w-full rounded-3xl">
          <source src={"/assets/projectVideo.mp4"} type="video/mp4" />
        </video>
      </div> */}
      {/* <video loop autoPlay>
        <source src="/Explosion.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
    </div>
  );
}
