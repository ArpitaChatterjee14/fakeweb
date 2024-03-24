'use client'
import Body from "./components/Body";
import Header from "./components/Header";
import { useEffect, useState } from "react";

interface ICat {
  name: string,
  state: boolean
}

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

export default function Home() {

  const [cat, setCat] = useState<Array<ICat>>([])
  const [det, setDet] = useState<Array<IInfo>>([])

  function handleClick (item : string) {
    setCat(cat.map((i) => i.name===item ? {...i, state:true} : {...i, state:false}))

    fetch(`https://fakestoreapi.com/products/category/${item}`)
        .then(res => res.json())
        .then(data => {
            setDet(data)
        }
        )
}

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
        .then(res => res.json())
        .then(data => {
            let temp : ICat;
            setCat(...(cat as []),data.map((i:string) => ({...temp, name:i, state:false})))
        }
        )
  }, [])

  return (
    <>
      <Header category={cat} clickFun={handleClick}/>
      <Body info={det}/>
    </>
  );
}
