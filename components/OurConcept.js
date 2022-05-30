import { useState } from "react";

export default function OurConcept() {
  return (
    <div id="ourConcept" className="h-[80vh] bg-white  flex-col flex p-10">
      <h2 className="text-carefour-blue font-bold text-5xl mt-10">
        Our Concept
      </h2>

      <div className="flex-1 flex flex-col w-full p-10 text-carefour-blue justify-around">
        <div className="flex h-1/2 justify-between items-center">
          <div className="w-1/2">
            Carrefour compass is a unique initiative by Carrefour to help
            it&apos;s customers and consumers to learn and to know more about
            its sustainability initiatives and to be develop better
            relationships between consumers and producers. With our stories of
            farm to fork we bring you closer to the sustainability practices and
            we all move one step forward towards the responsible living.
          </div>
        </div>
        <div className="flex h-1/2 justify-between items-center">
          <div className="w-1/2"></div>

          <div className="w-1/2">
            Carrefour compass is a unique initiative by Carrefour to help
            it&apos;s customers and consumers to learn and to know more about
            its sustainability initiatives and to be develop better
            relationships between consumers and producers. With our stories of
            farm to fork we bring you closer to the sustainability practices and
            we all move one step forward towards the responsible living.
          </div>
        </div>
      </div>
    </div>
  );
}
