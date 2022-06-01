import { useRouter } from "next/router";
import MenuIcon from "@mui/icons-material/Menu";

export default function Navbar({ header }) {
  const router = useRouter();
  return (
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
        <MenuIcon className="cursor-pointer" />
        {/* {header.map((item, index) => (
          <h2
            key={index}
            className="cursor-pointer text-white max-w-[120px] mx-4"
            onClick={() => router.push(item.route)}
          >
            {item.text}
          </h2>
        ))} */}
      </div>
    </div>
  );
}
