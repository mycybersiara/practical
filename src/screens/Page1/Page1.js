import React, { useRef, useEffect, useState } from "react"
import "./Page1.scss"

const Page1 = (props) => {

    const box = useRef(null)
    const [colors, setcolors] = useState([])

    useEffect(() => {

        GetColors()

    }, [])

    const GetColors = () => {

        let colors_array = []

        for (let i = 0; i <= 256; i = i + 8) {
            for (let j = 0; j <= 256; j = j + 8) {
                for (let k = 0; k <= 256; k = k + 8) {
                    colors_array.push(`rgb(${i},${j},${k})`)
                }
            }
        }

        setcolors(colors_array)
        AddColor(colors_array)
    }


    const AddColor = (colors) => {
        let context = box.current.getContext('2d')

        let pos = 0

        for (let i = 0; i <= box.current.width; i++) {
            for (let j = 0; j <= box.current.height; j++) {
                context.fillStyle = colors[pos]
                context.fillRect(i, j, 1, 1);
                pos++;
            }
        }
    }

    const download = () => {
        var link = document.createElement('a');
        link.download = 'image.png';
        link.href = box.current.toDataURL()
        link.click();
    }

    return (
        <div className="page1_parent">
            <div className="box" id="box-parent" style={{ backgroundColor: "gray" }}>
                <canvas ref={box}>

                </canvas>
            </div>

            <div className="download-button" onClick={download}>
                Download Image
            </div>
        </div>
    )
}

export default Page1