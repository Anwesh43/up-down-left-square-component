import React, {useEffect} from 'react'
import {useAnimatedScale, useDimension} from './hooks'
import UpDownLeftSquare from './UpDownLeftSquare'

const btnStyle = (w, h) => {
    return {position : 'absolute', left : `${w / 2}px`, top : `${0.1 * h}px`}
}

const UpDownLeftSquares = (props) => {
    const {w, h, resize, disableResize} = useDimension()
    const {scale, start} = useAnimatedScale(0.02, 20)
    useEffect(() => {
        resize()
        return disableResize
    })
    return <div>
        <button style = {btnStyle(w, h)} onClick = {start}>Start</button>
        {[0, 1].map(i => <UpDownLeftSquare key = {`rect_${i}`} i = {i} w = {w} h = {h} scale = {scale}/>)}
    </div>
}

export default UpDownLeftSquares
