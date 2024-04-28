'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import loading1 from '../../../../public/loading1.png';
import loading2 from '../../../../public/loading2.png';
import loading3 from '../../../../public/loading3.png';
import loading3_1 from '../../../../public/loading3.1.png';
import loading4 from '../../../../public/loading4.png';
import loading4_1 from '../../../../public/loading4.1.png';
import loading5 from '../../../../public/loading5.png';
import loading5_1 from '../../../../public/loading5.1.png';
import AstrixBlk from '../../../../public/AstrixBlk.png';

const Loading = () => {
    const [width, setWidth] = useState(100);
    const [swidth, setSwidth] = useState(190);
    const [twidth, setTwidth] = useState(90);
    const [fwidth, setFwidth] = useState(110);



    useEffect(() => {
        const interval = setInterval(() => {
            // for first (fwidth) image
            setFwidth(prevWidth => (prevWidth === 110 ? 220 : 110));
            // for second (swidth) image
            setSwidth(prevWidth => (prevWidth === 190 ? 350 : 190));
            // for third (twidth) image
            setTwidth(prevWidth => (prevWidth === 50 ? 100 : 50));
            // default
            setWidth(prevWidth => (prevWidth === 100 ? 200 : 100));
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const imageStyle = {
        width: `${width}px`,
        height: '20%',
        transition: 'width 2s ease-in-out',
    };

    const imageStyle1 = {
        width: `${fwidth}px`,
        height: '20%',
        transition: 'width 2s ease-in-out',
    };

    const imageStyle2 = {
        width: `${swidth}px`,
        height: '20%',
        transition: 'width 2s ease-in-out',
    };
    const imageStyle3 = {
        width: `${twidth}px`,
        height: '20%',
        transition: 'width 2s ease-in-out',
    };

    return (
      
        <Link href='/home'> 
            <div className='w-full h-screen bg-[#FFF4DF] cursor-pointer'>
                <div>
                    <div className='flex items-center p-5'>
                        <Image src={AstrixBlk} />
                        <h1 className=" font-bold text-4xl">Astrix.</h1>
                    </div>
                </div>
                <div className='w-full flex justify-center items-center'>
                    <div className=' w-[60%] flex flex-col justify-center items-center '>
                        <div className='w-[590px]'>
                            <div className='flex  gap-4 overflow-hidden items-center  h-40' >
                                <h1 className='text-4xl font-semibold'>WE</h1>
                                <Image src={loading1} alt="Image" style={imageStyle1} />
                                <h1 className='text-4xl font-semibold'>ORGANIZE THE</h1>
                            </div>
                            <div className='flex gap-4 -mt-20 items-center overflow-hidden h-40' >
                                <h1 className='text-4xl font-semibold'>CONNECTION</h1>
                                <Image src={loading2} alt="Image" style={imageStyle2} />
                            </div>
                            <div className='flex -mt-20 gap-4 items-center overflow-hidden h-40' >
                                <Image src={loading3} alt="Image" style={imageStyle} />
                                <h1 className='text-4xl font-semibold'>BETWEEN</h1>
                                <Image src={loading3_1} alt="Image" className='h-6 w-10' />
                                <h1 className='text-4xl font-semibold'>MUSIC</h1>
                            </div>
                            <div className='flex -mt-20  gap-4 items-center overflow-hidden h-40' >
                                <h1 className='text-4xl font-bold'>ARTIST</h1>
                                <Image src={loading4} alt="Image" style={imageStyle} />
                                <h1 className='text-4xl font-bold'>CULTURE</h1>
                                <Image src={loading4_1} alt="Image" style={imageStyle3} />
                            </div>
                            <div className='flex -mt-20 gap-4 items-center overflow-hidden h-40' >
                                <Image src={loading5} alt="Image" style={imageStyle} />
                                <h1 className='text-4xl font-bold'>ART</h1>
                                <Image src={loading5_1} alt="Image" className='h-8 w-12' />
                                <h1 className='text-4xl font-bold'>&&nbsp;COLLECTIONS</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Loading;
