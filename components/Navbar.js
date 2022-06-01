import { useRouter } from "next/router";

export default function Navbar({ header }) {
  const router = useRouter();
  return (
    <div className="h-20 z-[2] bg-carefour-blue rounded-b-xl overflow-x-hidden flex items-center justify-between fixed top-0 left-0 w-screen">
      <div className="ml-4 flex items-center bg-white p-2 rounded-lg ">
        <img
          src="/logo.png"
          className="cursor-pointer"
          width={200}
          onClick={() => router.push("/")}
        />
      </div>

      <div className="flex justify-right mr-5">
        {header.map((item, index) => (
          <h2
            key={index}
            className="cursor-pointer text-white max-w-[120px] mx-4"
            onClick={() => router.push(item.route)}
          >
            {item.text}
          </h2>
        ))}
      </div>
    </div>
  );
}
