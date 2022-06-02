import { useRouter } from "next/router";

const images = [
  { src: "/assets/Discord.png" },
  { src: "/assets/Opensea.png" },
  { src: "/assets/Twitter.png" },
  { src: "/assets/Instagram.png" },
];

export default function Home() {
  const router = useRouter();
  return (
    <>
      {/* mobile */}
      <div id="home" className="bg-white p-2 pb-5 flex flex-col md:hidden">
        <h2 className="font-bold text-start text-carefour-blue text-3xl mt-5 text-center">
          Introducing Carrefour Compass
        </h2>
        <p className="text-sm py-5 text-carefour-blue text-start">
          Play, earn, and create for free in the{" "}
          <span className="font-bold">
            world&apos;s first metaverse experience about food sustainability.
          </span>
          <br />
          Complete quests to earn raffle tickets for cryptocurrency that you can
          spend on NFTs or sell for real money.
          <br />
          <span className="font-bold">
            Carrefour Compass is your pass to the future!
          </span>
        </p>
        <div className="h-full w-full flex items-center">
          <video controls className="w-full rounded-xl">
            <source src={"/assets/projectVideo.mp4"} type="video/mp4" />
          </video>
        </div>

        <div className="flex mt-4">
          {images.map((item, index) => (
            <img src={item.src} w={32} key={index} className={"p-5"} />
          ))}
        </div>
        <div className="flex justify-center mt-4 ">
          <div
            className="px-5 py-1 w-fit bg-carefour-blue text-white rounded-xl cursor-pointer"
            onClick={() => {
              router.push("/LearnMore");
            }}
          >
            Learn more
          </div>
        </div>
      </div>

      {/* desktop */}
      <div id="home" className="h-fit bg-white p-14 hidden md:flex">
        <div className="w-[40%] h-full flex-col flex justify-between text-carefour-blue pr-10">
          <h2 className="font-bold text-5xl p-5">
            Introducing Carrefour Compass
          </h2>
          <p className="text-xl p-5">
            Play, earn, and create for free in the{" "}
            <span className="font-bold">
              world&apos;s first metaverse experience about food sustainability.
            </span>{" "}
            Complete quests to earn raffle tickets for cryptocurrency that you
            can spend on NFTs or sell for real money.{" "}
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
          <div className="flex">
            {images.map((item, index) => (
              <img src={item.src} w={32} key={index} className={"p-5"} />
            ))}
          </div>
        </div>
        <div className="w-[60%] h-full flex items-center">
          <video controls className="w-full rounded-3xl">
            <source src={"/assets/projectVideo.mp4"} type="video/mp4" />
          </video>
        </div>
      </div>
    </>
  );
}
