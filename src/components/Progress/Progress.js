import React, { useState, useEffect } from 'react';
import './Progress.css';
import PropTypes from 'prop-types';

const Progress = (props) => {

    const getColor = (type) => {
        const  color1  =props.color;
        console.log(props.color);
        // if ( ! color ) {
        //     return null;
        // }

        return color1 === undefined ?
            Progress.defaultProps.color :
            color1;
    }

    const [style, setStyle] = useState({});
    
	
	setTimeout(() => {
		const newStyle = {
			opacity: 1,
			width: `${props.done}%`,
            // backgroundColor: getColor()
            backgroundColor:getColor()
        }

		
		setStyle(newStyle);
	}, 200);
    // console.log(`${getColor()}`);
	return (
		<div className="progress" style={{height: props.height+'px', fontSize: props.height * 0.75 + 'px'} }>
			<div className={`${'progress-done'} ${props.gradient ? 'progress_gradient' : ''}`} style={style} >
				{props.done}%  
			</div>
		</div>
	)
}

Progress.defaultProps = {
    color: 'black',
    gradient: false
};

Progress.propTypes = {
    color: PropTypes.string,
    gradient: PropTypes.bool
};

export default Progress;