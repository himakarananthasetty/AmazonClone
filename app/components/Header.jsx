"use client";
import Image from "next/image";
import React , { useState }  from "react";
import Logo from "../../public/images/logo.png";
import DefaultImage from "../../public/images/default.png";
import Link from "next/link";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import { useRouter } from "next/navigation";
import { useAuthState } from "react-firebase-hooks/auth";

import { auth, db } from "../../public/firebase";
import { collection, query, where } from "firebase/firestore";
import {useCollectionData} from "react-firebase-hooks/firestore"


const Header = () => {
    const router = useRouter();
    const [searchTerm, setSearchTerm] = useState("");
const searching = (e) => {
    e.preventDefault();
    if(searchTerm !== ''){
        router.push(`/category/${searchTerm}`)

    }
}
const [user, loading] = useAuthState(auth);
const cartRef = collection(db,"cart");
const [cartSnapshotData, loading2] = useCollectionData(cartRef);
let totalLength = cartSnapshotData?.filter((data)=> data?.uid === user?.uid)?.length || 0;
return (
    <div className="w-full md:px-14 py-5 p-5 bg-white sticky top-0 left-0 shadow-sm">
      <div className="flex justify-between space-x-5 items-center ">
        <div>
          <Link href={'/'}>
            <button>
            <Image
            src={Logo}
            width={140}
            alt="logo"
            priority={true}
            className="relative  top-2 lg:w-[140px] w-[160px]"
          />
            </button>
          </Link>
        </div>
        <div className="w-full lg:block hidden">
        <form className="flex" onSubmit={searching}>
          <input
            type="text"
            className="w-full border rounded-l-xl px-4 py-2 outline-none focus:border-[#ff9900]"
            placeholder="Search Here!"
            onChange={(e)=>{setSearchTerm(e.target.value)}} value= {searchTerm}
          />
          <button className="text-3xl bg-[#ff9900] px-2 rounded-r-xl">
            <SearchIcon />
          </button>
        </form>
        </div>
        <div className=" flex items-center space-x-4">
          <Link href="/cart">
            <button className="text-[27px] bg-[#ff9900] p-2 rounded-md relative">
              <ShoppingCartIcon />
              <span className="absolute text-sm bg-black text-white px-2 rounded-full py-1 -top-4 -right-3">
                {totalLength}
              </span>
            </button>
          </Link>
          <button className="bg">
            <Image
              src={DefaultImage}
              width={66}
              alt="logo image"
              priority={true}
              className="lg:w-[66px] w-[45px] relative bottom-1"
            />
          </button>
        </div>
      </div>
      <div className="w-full lg:hidden mt-5">
        <form className="flex" onSubmit={searching}>
          <input
            type="text"
            className="w-full border rounded-l-xl px-4 py-2 outline-none focus:border-[#ff9900]"
            placeholder="Search Here!"
            onChange={(e)=>{setSearchTerm(e.target.value)}} value= {searchTerm}
          />
          <button className="text-3xl bg-[#ff9900] px-2 rounded-r-xl">
            <SearchIcon />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Header;
