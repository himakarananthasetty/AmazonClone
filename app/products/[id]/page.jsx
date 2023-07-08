import React from "react";
import Image from "next/image";

import Buttons from "../../components/Buttons";

const getProduct = async (id) => {
  const products = await fetch(
    `https://www.screentechnicals.com/api/ecommerce/products/${id}`,
    { next: { revalidate: 10 } }
  );
  return products.json();
};

const Page = async ({ params }) => {
  const { id } = params;
  const data = await getProduct(id);

  return (
    <div className="w-full flex flex-col lg:flex-row">
      <div className="lg:w-[50%] w-full mb-5">
        <Image
          src={data?.[0]?.image}
          alt=""
          width={150}
          height={150}
          priority={true}
          className="mx-auto"
        />
      </div>
      <div className="lg:w-[50%] lg:ml-10 w-full">
        <h2 className="text-lg uppercase text-[#ff9900] tracking-widest">
          {data?.[0]?.brand}
        </h2>
        <h2 className="text-2xl font-bold">{data?.[0]?.name}</h2>
        <h2 className="text-xl font-semibold">Price: {data?.[0]?.price}&#8377;</h2>
        <h2 className="text-sm w-full tracking-wide">Description:{data?.[0]?.description.slice(0,200)}...</h2>
        <Buttons data={data} />

      </div>
      <div className="items-center">
      </div>
    </div>
  );
};

export default Page;
