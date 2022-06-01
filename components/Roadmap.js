export default function Roadmap() {
  return (
    <>
      <div id="roadmap" className=" bg-white py-5 px-2 flex flex-col md:hidden">
        <h2 className=" text-carefour-blue mt-5 font-bold text-3xl text-center">
          Our Roadmap
        </h2>
        <div className="py-10">
          <img src="/assets/Roadmap.png" className="w-full" />
        </div>
      </div>
      {/* desktop */}
      <div id="roadmap" className="bg-white p-14 hidden md:flex flex-col">
        <h2 className="mt-14  text-carefour-blue font-bold text-5xl">
          Roadmap
        </h2>
        <div className="py-10">
          <img src="/assets/Roadmap.png" className="w-full" />
        </div>
      </div>
    </>
  );
}
