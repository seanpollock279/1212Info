import React from 'react';
import './CustomStyle.css';

export default function CustomButton({ title, onPress, icon}) {
    return (
        <button className="customButton" type="button" onClick={onPress}>
            <img src={icon} className="customButton__icon" />
            {title}
        </button>
    )
}
