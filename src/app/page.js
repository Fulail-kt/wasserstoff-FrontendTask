'use client'
import { useState } from "react";
import Image from "next/image";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'

// static data

import { Data, Events, Fonts, svg, settings } from "./Constants/constant";

// components

import Card from "./components/Common/Card";
import EventSidebar from "./components/Events/EventSidebar";
import CollectionSidebar from "./components/Collection/CollectionSidebar";


export default function Home() {

  const [collectionTrue, setCollectionTrue] = useState(false)

  return (
    // Header

    <div className="h-screen w-full flex flex-col pl-10">
      <div className="w-full flex items-center">
        <Image src={svg.Astrix} alt="astrix logo" />
        <h1 className="text-[#FFCA5F] font-extrabold text-4xl">Astrix.</h1>
      </div>

      {/* Slider */}

      <div className="w-full h-full flex items-center  relative">
        <div className="w-[50%] ml-32 z-20 overflow-x-auto">
          <div className={`w-full ${Fonts.lexend600.className}`}>
            {collectionTrue ? (
              <Slider className="w-full carousel-container" {...settings}>
                {Data.map((item) => (
                  <Card key={item.id} data={item} isEvent={false} />
                ))}
              </Slider>
            ) : (
              <Slider {...settings}>
                {Events.map((item) => (
                  <Card key={item.id} data={item} isEvent={true} />
                ))}
              </Slider>
            )}
          </div>
        </div>

        {/*  Bacground Font  */}

        <div className={`absolute flex flex-col gap-y-16 ${Fonts.lexend800.className} text-7xl text-start left-0  text-white text-opacity-20 lexend-700   z-0`}>
          <div className="h-32">
            <h1>ASTR<br />IX</h1>
          </div>
          {
            collectionTrue ? (
              <div className="h-52">
                <h1>COLL<br />ECTI<br />BLE</h1>
              </div>
            ) : (
              <div className="h-52">
                <h1>EVE<br />NTS</h1>
              </div>
            )
          }
        </div>
      </div>

      {/* Sidebars */}

      <div className="absolute flex bg-[#15181B] right-0 z-50 w-[45%] h-full">
        <div className="w-20 overflow-hidden bg-[#B9A0FF] h-full flex justify-center items-center">
          <h1 className={`marquee flex gap-2 rotate-90 whitespace-nowrap  text-md ${Fonts.kronaOne.className}`}>
            Event : Oasis Bus tour , JLN Stadium , Delhi  <Image src={svg.star} width={25} /> Collection Live: Meta Lives, live on astrix
          </h1>
        </div>
        {collectionTrue ? <CollectionSidebar /> : <EventSidebar />}
      </div>

      {/* Navigation buttons */}

      <div className=" pb-10 text-white font-semibold flex  items-center rounded-full ">
        <div className=" bg-[#282B30] flex justify-between  rounded-full">
          <button onClick={() => { setCollectionTrue(false) }} className={`${Fonts.lexend600.className} ${!collectionTrue ? "bg-[#484E56]" : ""} rounded-full px-10 py-2`}>Events</button>
          <button onClick={() => { setCollectionTrue(true) }} className={`${Fonts.lexend600.className} ${collectionTrue ? "bg-[#484E56]" : ""}  rounded-full px-7`}>Collections</button>
        </div>
      </div>
    </div>
  );
}
