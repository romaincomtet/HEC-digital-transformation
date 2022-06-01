const brandDefault = [
  { type: "image", src: "/assets/filierequalite.png" },
  { type: "image", src: "/assets/atforfood.png" },
  { type: "image", src: "/assets/carefourBio.png" },
  { type: "text", text: "Our partners" },
  { type: "image", src: "/assets/S.png" },
  { type: "image", src: "/assets/refletdefrance.png" },
  { type: "image", src: "/assets/carefourBio.png" },
];

export default function PartnerBrand({
  colorCss = "bg-carefour-blue",
  textColorCss = "text-white",
}) {
  return (
    <div
      id="home"
      className={`h-[calc(100vh-80vh)] ${colorCss} flex justify-around items-center rounded-2xl`}
    >
      {brandDefault.map((item, index) => {
        return item.type === "image" ? (
          <div className="" key={index}>
            <img src={item.src} width={85} />
          </div>
        ) : (
          <div className="" key={index}>
            <p className={`text-xl font-bold ${textColorCss}`}>{item.text}</p>
          </div>
        );
      })}
    </div>
  );
}
