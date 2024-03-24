import Icon from "./Icon";

interface ICat {
    name: string,
    state: boolean
  }

export default function Header({category, clickFun} : {category:Array<ICat>, clickFun:Function}) : React.ReactNode {

    return (
    <div className="header">
        <div className="header--cat">
            {category.map((item,index) => {
                return (<div key={index} className={item.state ? "active" : "inactive"}>
                            <button onClick={() => clickFun(item.name)}>{item.name.slice(0,1).toUpperCase() + item.name.slice(1,)}
                            </button>
                        </div>)
            })}
        </div>
        <div className="header--title">
                FAKE STORE
        </div>
        <div className="header--icon">
                <Icon source="search"/>
                <Icon source="user"/>
                <Icon source="favourite"/>
                <Icon source="cart"/>
        </div>
    </div>
      )
  } 