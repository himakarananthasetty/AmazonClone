import React from 'react'
import Image from 'next/image'

const Page = () => {
  return (
    <div className='w-full flex items-center justify-center h-[58vh] overflow-hidden flex-col '>
        <div>
            <h1 className='text-3xl font-bold'>✅ Congratulations! Your Order was Successful.</h1>
        </div>
        <Image src={"/gifs/success.gif"} alt="success" width={400} height={400}/>
    </div>
  )
}

export default Page