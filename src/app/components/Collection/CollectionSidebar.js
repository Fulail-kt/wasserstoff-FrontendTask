import React from 'react'
import PeopleCircle from './PeopleCircle'
import CollectiblesCard from './CollectiblesCard'
import { Fonts, peoples, png } from '../../Constants/constant'

const CollectionSidebar = () => {
  return (
    <div className="w-full flex flex-col justify-between h-full pl-12 pt-8 text-white">
      <div>
        <div>
          <h2 className={`${Fonts?.lexend600.className} tracking-wider`}>Explore Youre First <br /> Collectible</h2>
          <h1 className={`text-4xl  mt-7 ${Fonts?.lexend600.className} font-extrabold`}>  Meta <br /> Lives  </h1>
          <h3 className={`${Fonts?.lexend400.className} t font-bold flex gap-x-3 mt-3`}>Live in Astrix</h3>
          <p className={`${Fonts?.lexend400.className} mt-2 text-xs`}>Lorem ipsum dolor sit amet <br /> consectetur. Ac lorem massa in morbi<br /> et sed ipsum. Pellentesque mattis<br /> condimentum ut nulla. </p>
        </div>
        <div className={`${Fonts?.lexend400.className} w-full flex text-sm my-4 items-center`}>
          <div className="flex justify-center">
            {Array(4).fill(null).map((_, index) => (
              <PeopleCircle peoples={peoples} index={index} key={index} />
            ))}
          </div>
          <p className='pl-2'>22k people interested</p>
        </div>
        <div className={`${Fonts?.lexend400.className}`}>
          <h4 className="text-sm">Collectibles</h4>
          <div className="mt-3 flex gap-3 ">
            {Array(3).fill(null).map((_, index) => (
              <CollectiblesCard key={index} />
            ))}
          </div>
        </div>
      </div>

      <div className="w-full flex justify-end items-end p-4 ">
        <button className={`bg-[#FFCA5F] rounded-full mr-5 text-black px-4 py-1.5 ${Fonts?.lexend600.className}`}>Join Waitlist</button>
      </div>
    </div>
  )
}

export default CollectionSidebar
