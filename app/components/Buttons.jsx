'use client';
import React from "react";
import {addDoc, collection, serverTimestamp} from "firebase/firestore"
import { auth, db } from "/Users/himakarananthasetty/amazonclone-himakar/public/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const Buttons = ({data}) => {

    const [user] = useAuthState(auth)
  const addToCart = async() => {
    if(user){
        const docRef = addDoc(collection(db, 'cart'),{
            id:data[0].id,
            name: data[0].name,
            description: data[0].description,
            price: data[0].price,
            uid: user?.uid,
            createdAt: serverTimestamp()
        });
    } else{
        alert('Please sign in!');
    }
  }
  return (
    <div className="flex items-center pt-5 space-x-10 sticky">
      <button className="text-white bg-gradient-to-b from-[#ffd900] to-[#ffb300] px-4 py-1 text-xl rounded-md">
        Buy Now
      </button>
      <button
        className="text-white bg-gradient-to-b from-[#ffd900] to-[#ffb300] px-4 py-1 text-xl rounded-md"
        onClick={addToCart}
      >
        Add to cart
      </button>
    </div>
  );
};

export default Buttons;
