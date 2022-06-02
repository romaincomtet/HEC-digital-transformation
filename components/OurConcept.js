import { useState } from "react";

export default function OurConcept() {
  return (
    <>
      {/* mobile */}
      <div
        id="ourConcept"
        className=" bg-white  flex-col flex md:hidden pt-5 pb-14 px-2"
      >
        <h2 className="text-carefour-blue font-bold text-3xl text-center mt-5">
          Our Concept
        </h2>

        <div className="text-carefour-blue mt-5 text-md px-4">
          Carrefour Compass will attract shoppers to the metaverse through
          playable sustainability stories that provide a chance to earn SAND
          cryptocurrency and buy exclusive NFTs. Each sustainability story and
          subsequent quests will be built around Carrefour&apos;s real-world
          sustainability initiatives.
        </div>
        <div className="text-carefour-blue mt-5 text-md px-4">
          New sustainability stories will launch with exclusive NFT collections
          related to the CSR initiative at hand. For example, NFBees can be
          utilized as NPCs in a story about Carrefour&apos;s efforts to reduce
          CO2 emissions. The possibilities for telling sustainability stories
          with NFTs are limitless.
        </div>
      </div>
      {/* desktop */}
      <div id="ourConcept" className=" bg-white flex-col hidden md:flex p-20">
        <h2 className="text-carefour-blue font-bold text-5xl mt-10">
          Our Concept
        </h2>

        <div className="flex flex-col w-full p-10 my-20 text-carefour-blue justify-around">
          <div className="flex h-1/2 justify-between items-center p-10">
            <div className="w-1/2">
              Carrefour Compass will attract shoppers to the metaverse through
              playable sustainability stories that provide a chance to earn SAND
              cryptocurrency and exclusive NFTs. Each sustainability story and
              subsequent quests will be built around Carrefour&apos;s real-world
              sustainability initiatives.
            </div>
          </div>
          <div className="flex h-1/2 justify-between items-center p-10">
            <div className="w-1/2"></div>

            <div className="w-1/2">
              New sustainability stories will launch with exclusive NFT
              collections related to the CSR initiative at hand. For example,
              NFBees can be utilized as NPCs in a story about Carrefour&apos;s
              efforts to reduce CO2 emissions. The possibilities for telling
              sustainability stories with NFTs are limitless.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
