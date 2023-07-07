// "use client";
import Image from "next/image";
import { BsLaptopFill, BsSmartwatch } from "react-icons/bs";
import { GiSofa, GiWrappedSweet } from "react-icons/gi";
import { AiOutlineMobile } from "react-icons/ai";
import {
  FaTshirt,
  FaBicycle,
  FaHeadphonesAlt,

} from "react-icons/fa";
import { IoGameController } from "react-icons/io5";
import { v4 } from "uuid";
import Link from "next/link";
// import LaptopMacRoundedIcon from "@mui/icons-material/LaptopMacRounded";
// import WatchTwoToneIcon from "@mui/icons-material/WatchTwoTone";
// import ChairIcon from "@mui/icons-material/Chair";
// import CakeIcon from "@mui/icons-material/Cake";
// import PhoneIphoneOutlinedIcon from "@mui/icons-material/PhoneIphoneOutlined";
// import CheckroomIcon from "@mui/icons-material/Checkroom";
// import DirectionsBikeOutlinedIcon from "@mui/icons-material/DirectionsBikeOutlined";
// import HeadsetRoundedIcon from "@mui/icons-material/HeadsetRounded";
// import SportsEsportsRoundedIcon from '@mui/icons-material/SportsEsportsRounded';
import Carasole from "./components/Carasole";



const getProducts = async() => {
  const products = await fetch('https://www.screentechnicals.com/api/ecommerce/products', { next: { revalidate: 10 } });
  return products.json();
}

export default async function Page() {
  const products = await getProducts();
  // let componets = [
  //   {
  //     icon: <LaptopMacRoundedIcon key={v4()} />,
  //     category: "laptop",
  //   },
  //   {
  //     icon: <ChairIcon key={v4()} />,
  //     category: "sofa",
  //   },
  //   {
  //     icon: <PhoneIphoneOutlinedIcon key={v4()} />,
  //     category: "phone",
  //   },
  //   {
  //     icon: <CheckroomIcon key={v4()} />,
  //     category: "tshirt",
  //   },
  //   {
  //     icon: <DirectionsBikeOutlinedIcon key={v4()} />,
  //     category: "cycle",
  //   },
  //   {
  //     icon: <HeadsetRoundedIcon key={v4()} />,
  //     category: "headphones",
  //   },
  //   {
  //     icon: <WatchTwoToneIcon key={v4()} />,
  //     category: "watch",
  //   },
  //   {
  //     icon: <CakeIcon key={v4()} />,
  //     category: "sweet",
  //   },
  //   {
  //     icon: <SportsEsportsRoundedIcon key={v4()} />,
  //     category: "game",
  //   },
  // ];

    let componets = [
    {
      icon: <BsLaptopFill key={v4()} />,
      category: "laptop",
    },
    {
      icon: <GiSofa key={v4()} />,
      category: "sofa",
    },
    {
      icon: <AiOutlineMobile key={v4()} />,
      category: "phone",
    },
    {
      icon: <FaTshirt key={v4()} />,
      category: "tshirt",
    },
    {
      icon: <FaBicycle key={v4()} />,
      category: "cycle",
    },
    {
      icon: <FaHeadphonesAlt key={v4()} />,
      category: "headphones",
    },
    {
      icon: <BsSmartwatch key={v4()} />,
      category: "watch",
    },
    {
      icon: <GiWrappedSweet key={v4()} />,
      category: "sweet",
    },
    {
      icon: <IoGameController key={v4()} />,
      category: "game",
    },
  ];


  return (
    <div className="w-full overflow-x-hidden">
      <div className="w-full lg:h-[40vh] magic-gradient rounded-xl shadow-md flex justify-between items-center overflow-hidden">
        <div className="text-white lg:pl-20 p-5 text-center lg:text-left justify-center w-full">
          <h1 className="uppercase lg:text-6xl text-4xl font-bold">
            free delivery
          </h1>
          <p className="lg:text-xl py-3">
            Don&#39;t miss it out! Only today, get free Next Day Delivery on all
            your orders.
          </p>
          <div>
            <Link href={"/products"}>
            <button className="px-4 py-2 text-lg bg-white text-black rounded-md capitalize">
              browse products
            </button>
            </Link>
          </div>
        </div>
        <div className="lg:flex hidden w-full items-center justify-center">
          <Image
            src={"/gifs/delivery.gif"}
            alt="gif1"
            width={300}
            height={200}
          />
        </div>
      </div>
      <div>
        <h1 className="text-center text-3xl font-bold pt-7 pb-5">
          Popular Categories ✨
        </h1>
        {/* <div className="w-full flex justify-center items-center flex-wrap">
          {componets.map((item) => {
            return (
              <Link href={`/category/${item.category}`}>
                <button className="text-3xl border shadow-md p-5 rounded-xl hover:scale-90 transition-transform m-3">
                  {item.icon}
                </button>
              </Link>
            );
          })}
        </div>
      </div> */}
      <div className="w-full flex justify-center items-center flex-wrap">
          {componets.map((item) => {
            return (
              <Link key={item.category} href={`/category/${item.category}`}>
                <button className="text-3xl border shadow-md p-5 rounded-xl hover:scale-90 transition-transform m-3">
                  {item.icon}
                </button>
              </Link>
            );
          })}
        </div>
      </div>
      <div>
        <h1 className="text-center font-bold text-3xl pt-10 pb-5">Hot Deals 🔥</h1>
        <div className="w-full px-10">
          <Carasole products={products} />
        </div>
      </div>
    </div>
  );
}