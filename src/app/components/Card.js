
import Image from 'next/image'
import lunarPalace from '../../../public/lunar.png'
const Card = () => {
    return (
        <div>
            <div>
                <h1>Lunar Palace</h1>
                <p>(ft. kanye west)</p>
            </div>

            <div className="w-64 h-96">

                <Image src={lunarPalace} className='w-full h-full' width={500} height={40} />
            </div>

        </div>
    )
}

export default Card
