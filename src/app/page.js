import Image from "next/image";
import Card from "./components/Card";
import Astrix from '../../public/Astrix.png'

export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between ">
    <div className="h-screen w-full flex flex-col pl-5">
      <div className="w-full flex items-center"><Image src={Astrix} /><h1 className="text-[#FFCA5F] font-extrabold text-4xl">Astrix.</h1></div>
      <div className="w-full h-full flex items-center  relative">
        <div className=" w-[60%] flex overflow-x-auto px-36 no-scrollbar z-20 gap-4">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <h1 className="absolute text-start left-0  text-slate-400   text-8xl font-bold  z-0">
          AST
          <br />
          RIX
          <br />
          COLL
          <br />
          ECTI
          <br />
          BLE
        </h1>
      </div>

      <div className="absolute flex right-0 z-50 w-[40%] h-full">
        <div className="w-20 bg-[#B9A0FF] h-full"></div>
        <div className="w-full h-full bg-slate-600"></div>
        <div>
          <h2>Explore Youre First Collectible</h2>
          <h1>Meta Lives</h1>
          <h3>Live in Astrix</h3>
          <p>Lorem ipsum dolor sit amet <br /> consectetur. Ac lorem massa in morbi<br />  et sed ipsum. Pellentesque mattis<br />  condimentum ut nulla. </p>
        </div>

        <div>   22k people interested</div>

        <div>
          <h4>Collectibles</h4>
          <div>

          </div>
        </div>
      </div>

    </div>
    // </main>
  );
}
