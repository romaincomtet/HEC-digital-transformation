const contributorArray = [
  { src: "/assets/Michael.png", name: "Michael Scrivner" },
  { src: "/assets/Tejashree.png", name: "Tejashree Bhatia" },
  { src: "/assets/romain.png", name: "Romain Comtet" },
  { src: "/assets/floriant.png", name: "Florian Pichard" },
];

export default function Compass() {
  return (
    <div
      id="compass"
      className="h-[80vh] bg-carefour-blue rounded-3xl p-10 flex-col flex"
    >
      <div className="flex items-center justify-center mt-10">
        <div className="bg-white p-4 rounded-xl">
          <img src="/logo.png" width={400} className="mt-[10px]" />
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <div className="text-white w-[80%]">
          Team Horizon offers to address the pain points of the customers while
          shopping groceries (in-stores or on online) by proposing a solution in
          the Metaverse which will make the whole experience fun, engaging and
          exciting for shoppers, and insightful and transparent to Carrefour and
          its partners. The first step to this is to gain customer attraction
          and engagement in the Metaverse through gamification.
        </div>
      </div>
      <div className=" flex justify-around mt-10 flex-1 items-center">
        {contributorArray.map((item, index) => (
          <div
            className="bg-white text-carefour-blue p-2 rounded-2xl"
            key={index}
          >
            <img src={item.src} className="h-[220px]" />
            <p className="text-center mt-1">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
