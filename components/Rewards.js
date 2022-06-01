import { useState } from "react";

const rewardArray = [
  {
    src: ["/assets/reward1.png", "/assets/reward1.2.png"],
    title: "STEP 1 :",
    text: "Completing quests",
  },
  {
    src: ["/assets/reward2.png", "/assets/reward2.2.png"],
    title: "STEP 2 :",
    text: "Earn Raffle Tickets",
  },
  {
    src: ["/assets/reward3.png", "/assets/reward3.2.png"],
    title: "REWARD 1 :",
    text: "Win SAND Cryptocurrency",
  },
  {
    src: ["/assets/reward4.png", "/assets/reward4.2.png"],
    title: "REWARD 2 :",
    text: "Get Unique NFTs",
  },
];

export default function Rewards() {
  return (
    <>
      <div
        id="rewards"
        className="h-fit bg-carefour-blue rounded-xl py-5 px-2 flex-col flex md:hidden"
      >
        <h2 className="text-white font-bold text-3xl text-center">Rewards</h2>
        {/* <p className="p-0 m-0 text-white text-md mt-5">
          After completing fun sustainability quests in Carrefour Compass,
          players earn raffle tickets that provide a chance to win SAND
          cryptocurrency. In turn, SAND can be sold for real money or used to
          buy NFTs in The Sandbox. These unique NFTs can be worn or used as
          assets in the player&apos;s own LAND.
        </p> */}
        <div className="mt-5 flex flex-col flex-1 justify-around items-center">
          {rewardArray.map((item, index) => (
            <RewardComponent
              item={item}
              key={index}
              classText="my-5 flex flex-col items-center"
              imageWidth={"w-1/2"}
            />
          ))}
        </div>
      </div>
      <div
        id="rewards"
        className="h-[100vh] bg-carefour-blue rounded-3xl p-10 flex-col hidden md:flex"
      >
        <div className="m-14 flex-col flex h-[30%] justify-between">
          <h2 className="text-white font-bold text-5xl">Rewards</h2>
          <div className="flex justify-center">
            <p className="p-0 m-0 text-white text-xl w-[70%] ">
              After completing fun sustainability quests in Carrefour Compass,
              players earn raffle tickets that provide a chance to win SAND
              cryptocurrency. In turn, SAND can be sold for real money or used
              to buy NFTs in The Sandbox. These unique NFTs can be worn or used
              as assets in the player&apos;s own LAND.
            </p>
          </div>
        </div>
        <div className="mb-14 mx-14 flex flex-1 justify-around items-center">
          {rewardArray.map((item, index) => (
            <RewardComponent item={item} key={index} />
          ))}
        </div>
      </div>
    </>
  );
}

const RewardComponent = ({ item, classText = "", imageWidth = "w-fit" }) => {
  const [show, setShow] = useState(false);

  return (
    <div className={`text-white text-center font-semibold ${classText}`}>
      <h4>{item.title}</h4>
      <p className="mb-2">{item.text}</p>
      <div
        className={`${imageWidth} shadow-[10px_12px_10px_-4px_#F4D206] rounded-3xl`}
      >
        <img
          src={show ? item.src[1] : item.src[0]}
          onMouseEnter={() => setShow(true)}
          onMouseLeave={() => setShow(false)}
        />
      </div>
    </div>
  );
};
