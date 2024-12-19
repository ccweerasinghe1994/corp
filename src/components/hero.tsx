import Image, { StaticImageData } from "next/image";

type HeroProps = {
  imgData: StaticImageData;
  imgAlt: string;
  title: string;
};
export default function Hero(props: HeroProps) {
  return (
    <div className="h-screen relative">
      <div className="absolute -z-10 inset-0">
        <Image
          fill
          style={{
            objectFit: "cover",
          }}
          src={props.imgData}
          alt={props.imgAlt}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900" />
      </div>
      <div className="p-48 flex justify-center items-center">
        <h1 className="text-white text-6xl">{props.title}</h1>
      </div>
    </div>
  );
}
