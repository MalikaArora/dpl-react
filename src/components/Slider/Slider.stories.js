import React from 'react'
import ReactDOM from 'react-dom'
import Slider from './Slider'

export default {
    title: 'Slider'
}

export const ShowSlider = () => {
    return (
        <div>
            hi
            <Slider sliderWidth="400" sliderHeight="250" />
        </div>
    );
}

// module.exports = ShowSlider;