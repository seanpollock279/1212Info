import React from 'react';
import './CustomStyle.css';

export default function CardButton({ title }) {
    return (
        <button className="cardButton" type="button">
            {title}
        </button>
    )
}
