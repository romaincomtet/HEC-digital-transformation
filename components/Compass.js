const contributorArray = [
  {
    src: "/assets/Michael.png",
    name: "Michael Scrivner",
    email: "michael.scrivner@hec.edu",
    profession:
      "Masters in Marketing at HEC Paris Product Marketing Manager for Tech and Gaming",
  },
  {
    src: "/assets/Tejashree.png",
    name: "Tejashree Bhatia",
    email: "tejashree.bhatia@gmail.com",
    profession:
      "Executive MBA at HEC Paris Business strategy Consultant for a start-up",
  },
  {
    src: "/assets/romain.png",
    name: "Romain Comtet",
    email: "romain.comtet@epitech.eu",
    profession: "Student at EPITECH freelance Full-stack Developper",
  },
  {
    src: "/assets/floriant.png",
    name: "Florian Pichard",
    email: "florianpichardpro@gmail.com",
    profession: "Student at eartsup Junior Product Designer",
  },
];

export default function Compass() {
  return (
    <div
      id="aboutUs"
      className="bg-carefour-blue rounded-3xl p-10 flex-col flex"
    >
      <div className=" flex w-full h-fit">
        <div className="w-[40%] flex-1 p-10 flex-col flex justify-between pb-20 ">
          <h2 className="text-white font-bold text-5xl">About Us</h2>
          <p className="text-white">
            Team Horizon (Group 6) is dedicated to driving awareness of
            Carrefour Compass in The Sandbox through fun, rewarding, and
            engaging experiences.
            <br /> <br />
            Our surveys and research found that most respondents are unaware or
            unconvinced by the metaverse and corporate sustainability claims. By
            telling farm-to-fork sustainability stories in the metaverse,
            Carrefour is uniquely positioned to increase brand awareness,
            loyalty, and sales in the near and long term.
          </p>
        </div>
        <div className="w-[60%] h-full p-10 rounded-3xl">
          <img src={"/assets/aboutUsImage.png"} className="w-full" />
        </div>
      </div>
      <div className="flex justify-around m-10 flex-1">
        {contributorArray.map((item, index) => (
          <div
            className="text-white flex flex-col justify-start items-center max-w-[250px]"
            key={index}
          >
            <a
              href={`mailto:${item.email}`}
              className="text-center mt-1 mb-4 decoration-white underline decoration-2"
            >
              {item.email}
            </a>
            <div className="bg-white text-carefour-blue w-fit p-2 rounded-2xl">
              <img src={item.src} className="h-[220px]" />
              <p className="text-center mt-1 font-semibold">{item.name}</p>
            </div>
            <p className="text-center mt-4">{item.profession}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
