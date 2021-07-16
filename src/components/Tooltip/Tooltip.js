import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import Styles from './styles.module.scss';
import bindClassNames from 'classnames/bind'

const cx = bindClassNames(Styles)

const propTypes = {
    title: PropTypes.string.isRequired,
    position: PropTypes.string,
    children: PropTypes.node.isRequired,
};
const Tooltip = ({ title, position, children }) => {

const node = useRef();//initiating different methods responsible for the component logic regarding each element, 
//useRef() returns a mutable ref object of that element

const [isVisible, setState] = useState(false);
const handleClick = ({ target }) => { //takes care of both inside and outside clicks for the current mounted element.
    if (node.current.contains(target)) {
        // inside click
        return;
    }
    // outside click
    setState(false);
}

Tooltip.defaultProps = {
    position: 'right',
}; //default position

return (
    <div className={Styles.container}
        data-testid="tooltip"
        ref={node}
        // onMouseOver={() => setState(!isVisible)}
        onMouseOver={() => setState(true)}

        onMouseOut={() => setState(false)}

    >
        <div data-testid="tooltip-placeholder">{children}</div>
        {isVisible && (
            <div
                className={`${Styles.tooltipContent} ${Styles[position]}`}
                data-testid="tooltip-content"
            >
                <span className={Styles.arrow}></span>
                {title}
            </div>
        )}
    </div>
);
        }
Tooltip.propTypes = propTypes;

export default Tooltip;