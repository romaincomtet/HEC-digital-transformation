import { useState } from "react";

export default function About() {
  return (
    <div id="about" className="h-[90vh] bg-white  flex-col flex pt-10">
      <div className="h-[50vh] flex w-full p-10">
        <div className="w-[40%] h-full bg-red-100">cdscdsdsc</div>
        <div className="w-[60%] h-full bg-[#F5D307] rounded-3xl"></div>
      </div>
      <div className="flex-1 flex w-full px-10">
        <Carousel />
      </div>
    </div>
  );
}

function Carousel() {
  const [index, setIndex] = useState(0);

  return (
    <div className="w-full flex flex-col">
      <div className="bg-[#F5D307] rounded-3xl w-full items-center justify-between flex pt-10">
        <img
          src="/assets/arrowLeft.png"
          className="w-[20px] m-5 cursor-pointer"
        />
        <div className="flex-1 flex justify-between items-center">
          <img src="/assets/pentureInfo.png" className="w-[40%]" />
          <div className="w-3/5 flex-col flex items-center">
            <p className=" text-white p-0 m-0 w-[80%]">
              <span className="font-bold">Nonfungible tokens (NFTs)</span>{" "}
              figure to play a big role in the usefulness and popularity of the
              metaverse. NFTs are a secure type of digital asset based on the
              same blockchain technology used by cryptocurrency. Instead of
              currency, an NFT can represent a piece of art, a song or digital
              real estate. An NFT gives the owner a kind of digital deed or
              proof of ownership that can be bought or sold in the metaverse.
            </p>
            <div className="mt-10">
              <button className="text-black bg-white px-5 py-2 rounded-xl text-lg">
                How it&apos;s work?
              </button>
            </div>
          </div>
        </div>
        <img
          src="/assets/arrowRight.png"
          className="w-[20px] m-5 cursor-pointer"
        />
      </div>
    </div>
  );
}
