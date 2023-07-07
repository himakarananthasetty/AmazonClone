
import React from 'react'
import Image from 'next/image'
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../../public/firebase";

import { async } from '@firebase/util';

const CartCards = ({ name,image, description, price, key, id}) => {
  const deleteItem = async() =>{
    await deleteDoc(doc(db, "cart", id));
  }
  return (
    <div className='w-full p-5 border shadow-md mb-5 rounded-xl flex space-x-5 overflow-hidden relative'>
      <button className='absolute right-5 top-3 text-red-500 text-2xl'onClick={deleteItem}> <DeleteRoundedIcon/> </button>
        <div>
            <Image src={image} alt="Slected Item Image" width={100} height={100} priority={true}/>
        </div>
        <div className='space-y-2'>
            <h2 className='text-xl font-bold'>Name:{name}</h2>
            <h2 className='text-sm'>Description:{description.slice(0,220)}...</h2>
            <h2 className='text-xl font-semibold'>Price:{price}&#8377;</h2>

        </div>
    </div>
  )
}

export default CartCards