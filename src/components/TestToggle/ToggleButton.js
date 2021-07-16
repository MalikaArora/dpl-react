import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const CheckedIcon = () => <></>;
const UncheckedIcon = () => <></>;

const ToggleButton = ( props ) => {

    const [toggle, setToggle] = useState(true);
    const { defaultChecked, onChange, disabled, className } = props;

    useEffect(() => {
        if (defaultChecked) {
            setToggle(defaultChecked)
        }
    }, [defaultChecked]);

    const triggerToggle = () => {
        if ( disabled ) {
            return;
        }

        setToggle(!toggle);

        if ( typeof onChange === 'function' ) {
            onChange(!toggle);
        }
    }

    const getIcon = (type) => {
        const { icons } = props;
        if ( ! icons ) {
            return null;
        }

        return icons[type] === undefined ?
            ToggleButton.defaultProps.icons[type] :
            icons[type];
    }

    const getColor = (type) => {
        const { color } = props;
        if ( ! color ) {
            return null;
        }

        return color === undefined ?
            ToggleButton.defaultProps.color :
            color;
    }

    const getPills = (type) => {
        const { pills } = props;
        if ( ! pills ) {
            return null;
        }

        return pills === undefined ?
            ToggleButton.defaultProps.pills :
            pills;
    }

    const toggleClasses = classNames('wrg-toggle', {
        'wrg-toggle--checked': toggle,
        'wrg-toggle--disabled': disabled
    }, className);

    return (
        <div onClick={triggerToggle} className={toggleClasses}>
            <div className={`${'wrg-toggle-container'} ${!getPills() ? 'pills' : ''}`} style={toggle?{backgroundColor:getColor()}:{}}>
                <div className="wrg-toggle-check">
                    <span>{ getIcon('checked') }</span>
                </div>
                <div className="wrg-toggle-uncheck">
                    <span>{ getIcon('unchecked') }</span>
                </div>
            </div>
            <div className={`${"wrg-toggle-circle"} ${!getPills() ? 'pills' : ''}`}></div>
            <input type="checkbox" aria-label="Toggle Button" className="wrg-toggle-input" />
        </div>
    );
}

ToggleButton.defaultProps = {
    icons: {
        checked: <CheckedIcon />, 
        unchecked: <UncheckedIcon />
    },
    color: 'lightgrey',
    pills: true
    
};

ToggleButton.propTypes = {
    disabled: PropTypes.bool,
    defaultChecked: PropTypes.bool,
    className: PropTypes.string,
    onChange: PropTypes.func,
    icons: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.shape({
            checked: PropTypes.node,
            unchecked: PropTypes.node
        })
    ]),
    color: PropTypes.string,
    pills: PropTypes.bool
};

export default ToggleButton;