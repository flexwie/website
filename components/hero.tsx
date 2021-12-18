import * as React from "react";
import Image from "next/image";

interface HeroProps {
  imageData: StaticImageData;
  header: string;
  subheader: string;
}

export const Hero: React.FC<HeroProps> = ({ imageData, header, subheader }) => {
  return (
    <div className="container flex flex-col sm:flex-row w-full justify-center content-center items-center">
      <div>
        <div className="block w-52 h-52 md:mr-10">
          <Image src={imageData} placeholder="blur" layout="responsive" />
        </div>
      </div>
      <div className="flex flex-col mr-4 ml-4 sm:m-0">
        <h1 className="font-sans font-extrabold text-3xl text-indigo-600">
          {header}
        </h1>
        <h2 className="pt-3">{subheader}</h2>
      </div>
    </div>
  );
};
