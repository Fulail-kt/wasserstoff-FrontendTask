import Image from 'next/image';

const Card = ({ data,isEvent }) => {
  return (
    <div style={{ position: 'relative' }}>
     <div className='text-white  h-12'>
        {!isEvent && <><h1>{data?.title}</h1>
        <p className='text-sm'>({data?.ft})</p></>}
      </div>

      <div className="w-60 h-[360px] relative">
        <Image src={data?.image} className='w-full h-full rounded-sm' alt={data.title + Date.now()} width={500} height={40} />
        { isEvent && <div className='absolute flex flex-col top-0 justify-end items-start p-5 w-full h-full'>
          <h1 className='text-white text-2xl py-4  font-bold'>{data?.title}</h1>
          <h1 className='text-white text-xs gap-1 font-medium flex '> <Image src={data?.logo} width={12} height={12}/> {data?.location}</h1>
        </div>}
      </div>
    </div>
  );
};

export default Card;
