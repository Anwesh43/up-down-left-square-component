import React from 'react'
import {sinify, divideScale} from './utils'
const color = "#283593"
const sizeFactor = 5

const upDownSquareStyle = (i, w, h, scale) => {
    const sf = sinify(scale)
    const sf1 = divideScale(sf, 0, 2)
    const sf2 = divideScale(sf, 1, 2)
    const size = Math.min(w, h) / sizeFactor
    const x = w / 2 - size / 2 - (w / 2 - size  * i) * (1 - 2 * i) * sf2
    const y = -(size) * (1 - i) * sf1
    const height = `${size * sf1}px`
    const width = `${size}px`
    const left = `${x}px`
    const top = `${h / 2 + y}px`
    const position = 'absolute'
    const background = color
    return {position, left, top, width, height, background}
}

const UpDownLeftSquare = ({i, scale, w, h}) => {
    return <div style = {upDownSquareStyle(i, w, h, scale)}>
    </div>
}

export default UpDownLeftSquare
