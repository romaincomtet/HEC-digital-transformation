import { useRouter } from "next/router";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

export default function Navbar({ header }) {
  const [showHeader, setsShowHeader] = useState(false);
  const router = useRouter();

  return (
    <>
      <div className="h-10 md:h-20 z-[2] bg-carefour-blue rounded-b-xl overflow-x-hidden flex items-center justify-between fixed top-0 left-0 w-screen">
        <div className="ml-2 md:ml-4 flex items-center bg-white p-2 rounded-lg ">
          <img
            src="/logo.png"
            className="cursor-pointer w-[100px] md:w-[200px]"
            onClick={() => router.push("/")}
          />
        </div>

        <div className="justify-right mr-5 hidden md:flex">
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
        <div className="justify-right mr-5 flex md:hidden">
          <MenuIcon
            className="cursor-pointer text-white"
            onClick={() => setsShowHeader(!showHeader)}
          />
        </div>
      </div>
      {showHeader && (
        <div className="pt-10 fixed bg-carefour-blue w-screen rounded-b-2xl flex flex-col pb-2 shadow-xl md:hidden">
          {header.map((item, index) => (
            <div
              className="w-full flex justify-center text-white hover:text-carefour-blue bg-carefour-blue hover:bg-white"
              onClick={() => {
                setsShowHeader(false);
                router.push(item.route);
              }}
              key={index}
            >
              <h2 className="cursor-pointer max-w-[120px] mx-4 my-2">
                {item.text}
              </h2>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
