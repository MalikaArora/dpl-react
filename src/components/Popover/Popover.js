import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import Styles from './styles.module.scss';
// import bindClassNames from 'classnames/bind'

// const cx = bindClassNames(Styles)

const propTypes = {
    title: PropTypes.string.isRequired,
    position: PropTypes.string,
    children: PropTypes.node.isRequired,
};
const Popover = ({ title, position, children }) => {

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

    Popover.defaultProps = {
        position: 'right',
    }; //default position

    return (
        <div className={Styles.container}
            data-testid="popover"
            ref={node}
            onClick={() => setState(!isVisible)}
        >
            <div data-testid="popover-placeholder">{children}</div>
            {isVisible && (
                <div
                    className={`${Styles.popoverContent} ${Styles[position]}`}
                    data-testid="popover-content"
                >
                    <span className={Styles.arrow}></span>
                    {title}
                </div>
            )}
        </div>
);
        }
Popover.propTypes = propTypes;

export default Popover;