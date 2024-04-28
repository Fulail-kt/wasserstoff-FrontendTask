import Image from "next/image"
const PeopleCircle = ({peoples,index}) => {
  return (
    <div>
      <Image src={peoples[index]?.image} alt='people image' width={25} height={25} className=" rounded-full"/>
    </div>
  )
}

export default PeopleCircle
