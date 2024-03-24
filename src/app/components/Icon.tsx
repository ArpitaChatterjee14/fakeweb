import Image from "next/image";

export default function Icon({source} : {source:string}) : React.ReactNode{
    return (
      <button className="btn">
        <Image
          src={`./${source}.svg`}
          alt={`Picture of the ${source}`}
          width="20"
          height="20"
        />
        </button>
      )
  } 