import Image from "next/image";
import React from "react";

const Card = ({ name, price, image }) => {
  return (
    <div className="m-3 cursor-pointer hover:scale-90 transition-transform">
      <div className="w-[200px] h-[250px] overflow-header shadow-md border rounded-xl py-2 px-4 flex items-center justify-center">
        <Image src={image} width={500} height={500} alt="" priority={true} />
      </div>
      <div>
        <h2 className="text-xl font-bold">{name.slice(0,30)}...</h2>
        <p className="py-5 text-lg font-semibold">	&#8377;{price}</p>
      </div>
    </div>
  );
};

export default Card;
