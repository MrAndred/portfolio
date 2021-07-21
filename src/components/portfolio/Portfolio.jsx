import PortfolioList from "../portfolioList/PortfolioList"
import "./portfolio.sass"
import {useState, useEffect} from "react"
import {featuredPortfolio, webPortfolio, softwarePortfolio} from "../data.js"

export default function Portfolio() {
    const [selected, setSelected] = useState("featured");
    const [data, setData] = useState([])
    const list = [
        {
            id: "featured",
            title: "Featured"            
        },
        {
            id: "web",
            title: "Web sites"
        },
        {
            id: "software",
            title: "Softwares"
        }
    ];

    useEffect(() => {
        switch(selected)
        {
            case "web":
                setData (webPortfolio);
                break;
            case "software":
                setData (softwarePortfolio);
                break;
            default:
                setData (featuredPortfolio);
                break;
        } 
    }, [selected])

    return (
        <div className = "portfolio" id = "portfolio">
            <h1>Portfolio</h1>
            <ul>
                {list.map(item=>(
                    <PortfolioList 
                        title = {item.title} 
                        active = {selected === item.id} 
                        setSelected = {setSelected}
                        id = {item.id}
                        />
                    ))}
            </ul>
            <div className = "container">
                {data.map(d=>(
                   <a href = {d.a}>
                    <div className = "item">
                            <img src = {d.img} alt = "Portfolio Work" />
                            <h3>{d.title}</h3>
                        </div>
                   </a>
                ))}
               
            </div>

        </div>
    )
}
