import {useState} from 'react'
export const useAnimatedScale = (scGap, delay) => {
    const [animated, setAnimated] = useState(false)
    const [scale, setScale] = useState(0)
    return  {
        scale,
        start() {
            if (!animated) {
                var currScale = scale
                setAnimated(true)
                const interval = setInterval(() => {
                    currScale += scGap
                    setScale(currScale)
                    if (scale > 1) {
                        setScale(0)
                        setAnimated(false)
                        clearInterval(interval)
                    }
                }, delay)
            }
        }
    }
}
