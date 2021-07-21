import "./intro.sass"
import { init } from "ityped"
import { useEffect, useRef } from "react"

export default function Intro() {
    const textRef = useRef();

    useEffect(() => {    
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed: 60,
            strings: ["Frontend", ".Net"]})
    }, []);

    return (
        <div className = "intro" id = "intro">
            <div className = "left">
                <div className = "imageContainer">
                    <img src = "assets/manPhoto.png" alt  = "" />
                </div>
            </div>
            <div className = "right">
                <div className = "wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Andrew Areshko</h1>
                    <h3><span ref = {textRef}></span> Developer</h3>
                    <p>I'm studying in MRC in Belarus on 3 course and do my best <br /> by completing different IT projects and read documentation</p>
                </div>
                <a href = "#portfolio">
                    <img src = "assets/arrowDown.png" alt = "" />
                </a>
            </div>
        </div>
    )
}
