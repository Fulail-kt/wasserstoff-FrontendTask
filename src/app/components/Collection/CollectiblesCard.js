import React from 'react'
import image1 from '../../../../public/image1.png'
import Image from 'next/image'

const CollectiblesCard = () => {
  return (
    <div className='text-black'>
        <div className='w-32 py-2 flex bg-[#B9A0FF] text-xs  rounded-xl flex-col justify-center items-center'>
            <div className='w-full flex justify-around '> <span className='bg-black px-2 rounded-full text-white '>2024</span> <h5>By <span className='font-bold '>Pablo</span></h5> </div>   
            <h4 className='text-center font-semibold text-xs py-1'>Collectible Name</h4> 
                  <div>
                    <Image className='rounded-lg border border-black' src={image1} alt='image' width={110} height={80} />
                  </div>
        </div>
    </div>
  )
}

export default CollectiblesCard
