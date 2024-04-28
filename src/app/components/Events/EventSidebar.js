import React from 'react'
import Image from 'next/image'
import { Fonts,png,svg } from '../../Constants/constant';


const EventSidebar = () => {
  return (
    <div className="w-full h-full flex flex-col justify-between pt-9 text-white">
            <div>
              <div className="pl-8 tracking-wider">
                <h2 className={`${Fonts.lexend600.className} tracking-wider`}>Explore Youre First <br /> Event</h2>
                <h1 className={`${Fonts.lexend600.className} text-4xl pt-10`}>Event Name </h1>
                <h3 className={`${Fonts.lexend400.className} text-sm font-bold pt-4 flex items-center gap-x-2`}><Image src={svg?.location} alt='location' width={20}/>Venue <Image src={svg?.time} alt='time' width={20} /> 04/3/2024 @19:00</h3>
                <p className={` ${Fonts.lexend400.className} py-5 text-xs `}>Lorem ipsum dolor sit amet <br /> consectetur. Ac lorem massa in morbi<br /> et sed ipsum. Pellentesque mattis<br /> condimentum ut nulla. </p>
              </div>
              <div className="w-full h-56">
                <h2 className={`${Fonts.lexend400.className} pl-8`}>Artist Lineup</h2>
                <div className="w-full h-full flex justify-center items-center">
                  <div>
                    <Image src={png?.artist1} width={120} height={50} alt='artist 1' />
                  </div>
                  <div>
                    <Image src={png?.artist2} width={160} height={80} alt='artist 2' />
                  </div>
                  <div>
                    <Image src={png?.artist3} width={120} height={50} alt='artist 3' />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full flex p-4 ">
              <div className="w-full flex items-end justify-between"> <Image src={png?.qr} alt='QR' width={60} height={60}/> <div>
              <button className={`bg-[#FFCA5F] text-black mr-5 rounded-full px-4 py-1.5 ${Fonts.lexend600.className}`}>Join Waitlist</button>
                </div></div>
            </div>
          </div>
  )
}

export default EventSidebar
