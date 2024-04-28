import Image from 'next/image'
import React from 'react'
import loading from '../../../../public/loading1.png'

const Loading = () => {
  return (
    <div className='bg-[#FFF4DF] w-full min-h-screen' >
      <div></div>

      <div className='w-full flex justify-center'>
        <div className='w-[70%]'>
            <div>WE <Image/>ORGANIZE THE </div>
            <div>CONNECTION <Image src={loading}/> </div>
            <div> <Image src={loading}/>BETWEEN <Image src={loading}/></div>
            <div> ARTIST<Image src={loading}/>  CULTURE<Image src={loading}/> MUSIC</div>
            <div> <Image src={loading}/>ART <Image src={loading}/>& COLLECTIONS </div>
            
        </div>
      </div>
    </div>
  )
}

export default Loading
