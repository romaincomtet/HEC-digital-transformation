import { useRouter } from "next/router";

const headerInfo = [
  { text: "HOME", route: "/#home" },
  { text: "ABOUT", route: "/#about" },
  { text: "OUR CONCEPT", route: "/#ourConcept" },

  { text: "REWARDS", route: "/#rewards" },
  { text: "ROADMAP", route: "/#roadmap" },
  { text: "COMPASS", route: "/#compass" },
  { text: "HOW IT WORK", route: "/how" },
];

export default function Navbar() {
  const router = useRouter();
  return (
    <div className="h-20 z-[2] bg-carefour-blue rounded-b-xl overflow-x-hidden flex items-center justify-between fixed top-0 left-0 w-screen">
      <div className="ml-4 flex items-center bg-white p-2 rounded-lg ">
        <img src="/logo.png" width={200} />
      </div>

      <div className="flex w-[70%] justify-around">
        {headerInfo.map((item, index) => (
          <h2
            key={index}
            className="cursor-pointer text-white"
            onClick={() => router.push(item.route)}
          >
            {item.text}
          </h2>
        ))}
      </div>
    </div>
  );
}
