import Image from "next/image";

interface IRate {
    rate: number,
    count: number
}

interface IInfo {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating: IRate
  }

export default function Body({info} : {info : Array<IInfo>}) : React.ReactNode {
    return (<div className="details">
            {info.map((item) => <div className="card">
                <img src={item.image} alt={item.title} width={100} height={100} />
                <div>{item.title}</div>
                <div>${item.price}</div>
            </div>)}
            </div>
    )
}