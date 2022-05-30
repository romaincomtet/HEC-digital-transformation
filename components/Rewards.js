const rewardArray = [
  { src: "/assets/reward1.png", title: "STEP 1 :", text: "Completing quests" },
  {
    src: "/assets/reward2.png",
    title: "STEP 2 :",
    text: "Earning raffle ticket",
  },
  {
    src: "/assets/reward3.png",
    title: "STEP 3 :",
    text: "SAND Cryptocurrency",
  },
  { src: "/assets/reward4.png", title: "STEP 4 :", text: "NFTs" },
];

export default function Rewards() {
  return (
    <div
      id="rewards"
      className="h-[100vh] bg-carefour-blue rounded-3xl p-10 flex-col flex"
    >
      <div className="m-14 flex-col flex h-[30%] justify-between">
        <h2 className="text-white font-bold text-5xl">Rewards</h2>
        <p className="p-0 m-0 text-white text-xl">
          The user has fun while completing the quest and story, earning raffle
          tickets for SAND currency. They also think it would be fun to play
          through with their friends and family. Pains: They were worried that
          they might not win and earn any rewards. Also, they might forget how
          to use raffle tickets for the SAND lottery. (Fake text)
        </p>
      </div>
      <div className="mb-14 mx-14 flex flex-1 justify-around items-center">
        {rewardArray.map((item, index) => (
          <div className="text-white text-center" key={index}>
            <h4>{item.title}</h4>
            <p className="mb-2">{item.text}</p>
            <img src={item.src} />
          </div>
        ))}
      </div>
    </div>
  );
}
