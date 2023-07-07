"use client";
import React from "react";
import WindowIcon from "@mui/icons-material/Window";
import Link from "next/link";
import BorderAllIcon from "@mui/icons-material/BorderAll";
import { useRouter } from "next/navigation";
import LogoutIcon from '@mui/icons-material/Logout';
import ViewListRoundedIcon from "@mui/icons-material/ViewListRounded";
import GoogleIcon from "@mui/icons-material/Google";
import { v4 } from "uuid";
import { auth, provider } from "../../public/firebase";
import { signInWithPopup, signOut} from "firebase/auth";
import {useAuthState} from "react-firebase-hooks/auth"

// import BorderAllIcon from '@mui/icons-material/BorderAll';

const Sidebar = () => {
  const Login = async () =>{
    await signInWithPopup(auth, provider)
  }
  const Logout = async () => {
   await signOut(auth);
  }

  let categories = [
    "Electronics",
    "Home",
    "Garden",
    "Fashion",
    "Beauty",
    "Auto",
    "Books",
    "Games",
    "Watch",
  ];
  const [ user, loading] = useAuthState(auth);
  const router = useRouter();
  return (
    <div className="w-[400px] h-[80vh] bg-white border shadow-sm rounded-2xl py-10 relative xl:block hidden">
      <div className="flex items-center space-x-10">
        <div className="w-1 h-10 bg-[#ff9900]"></div>
        <div className="flex items-center space-x-4">
          <span className="text-3xl">
            <WindowIcon />
          </span>
          <span className=" uppercase text-2xl tracking-widest font-light hover:bg-[#e4e1e1f5] rounded-md">
            Categories{" "}
          </span>
        </div>
      </div>
      <div className="px-[80px] py-4">
        {categories.map((category) => (
          <Link href={`/category/${category}`} key={v4()}>
            <button className="text-xl hover:text-[#ff9900] block py-1">
              {category}
            </button>
          </Link>
        ))}
      </div>
      <div className="px-10">
        {/* <Link href={"/"}>
          <button
            className=" flex items-center text-2xl space-x-2 uppercase font-light hover:bg-[#ff990062]
                    w-full py-3 px-5 rounded-xl" onClick={() =>
                      router.push("/cart/page.jsx") 
                    }
          >
            <span className="text-2xl">
              {" "}
              <ViewListRoundedIcon />{" "}
            </span>
            <span>Orders</span>
            
          </button>
        </Link> */}
             {/* <div className="flex font-semibold px-10 items-center text-2xl space-x-1 uppercase hover:bg-[#e1e1e162]
                    w-full py-3 rounded-sm">
            <Link href={"/cart"}>
            <button className=" py-5 text-lg bg-white text-black capitalize">
              Check Cart👈🏻
            </button>
            </Link>
          </div> */}
      </div>
      <div className=" absolute w-full mx-auto bottom-10">
          {
            user ? <button
            className="flex items-center w-[85%] mx-auto space-x-2  hover:text-[#c1e8e6] text-xl uppercase text-white bg-black rounded-md
                  justify-center py-2" onClick={Logout}
          >
            <span>
              {/* <AiOutlineLogin/> */}
              <LogoutIcon />
            </span>
            <span>Logout</span>
          </button>
          : <button
          className="flex items-center w-[85%] mx-auto space-x-2  hover:text-[#c1e8e6] text-xl uppercase text-white bg-black rounded-md
                justify-center py-2" onClick={Login}
        >
          <span>
            {/* <AiOutlineLogin/> */}
            <GoogleIcon />
          </span>
          <span>Login with Google</span>
        </button>
          }
      </div>
    </div>
  );
};

export default Sidebar;

