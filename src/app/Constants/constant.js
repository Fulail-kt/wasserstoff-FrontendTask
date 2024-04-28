
import image1 from '../../../public/lunar.png'
import image2 from '../../../public/lunar2.png'
import image3 from '../../../public/lunar3.png'
import image4 from '../../../public/lunar4.png'
import artist1 from '../../../public/artist1.png'
import artist2 from '../../../public/artist2.png'
import artist3 from '../../../public/artist3.png'
import event from '../../../public/event.png'
import event2 from '../../../public/event3.png'

import star from '../../../public/star.svg'
import Astrix from '../../../public/Astrix.png'
import qr from '../../../public/qr.png'
import time from '../../../public/time.svg'



import people1 from '../../../public/people2.png'
import people2 from '../../../public/people5.png'
import people3 from '../../../public/people3.png'

import location from '../../../public/location.svg'

// png export

export const png={
image1,image2,image3,image4,event,event2,people1,people2,people3,qr,artist1,artist3,artist2
}

// svg Export

export const svg={star,Astrix,time,location}

// fonts
import { Krona_One, Lexend } from 'next/font/google';

const kronaOne = Krona_One({
    weight: ['400'],
    style: ['normal'],
    subsets: ['latin'],
  });
  
  const lexend400 = Lexend({
    weight: ['400'],
    style: ['normal'],
    subsets: ['latin'],
  });

  const lexend600 = Lexend({
    weight: ['600'],
    style: ['normal'],
    subsets: ['latin'],
  });
  
  const lexend800 = Lexend({
    weight: ['800'],
    style: ['normal'],
    subsets: ['latin'],
  });
  
  // Export the Fonts object
  export const Fonts = {
    kronaOne, 
    lexend400,
    lexend600,
    lexend800,
  };


// Collection Data

export const Data = [

    {
        title: 'Lunar Palace',
        ft: 'ft.kanye west',
        image: image1,

    },
    {
        title: 'Lunar Palace',
        ft: 'ft.kanye west',
        image: image2,

    },
    {
        title: 'Lunar Palace',
        ft: 'ft.kanye west',
        image: image3,

    }, {
        title: 'Lunar Palace',
        ft: 'ft.kanye west',
        image: image4,

    }
]

// People Pic
export const peoples=[{image:people3},{image:people1},{image:people2},{image:people3},{image:people1}]


// Events Data
export const Events=[

    {
         title:'Event Name',
         image:event,
         location:'Location',
         logo:location
    },
    {
        title:'Event Name',
        image:image2,
        location:'Location',
        logo:location
   },
   {
    title:'Event Name',
    image:event2,
    location:'Location',
    logo:location
},
{
    title:'Event Name',
    image:image4,
    location:'Location',
    logo:location
}
]

// Carousal settings

export const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
  };
  