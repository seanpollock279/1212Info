import React from 'react';
import CardButton from './CardButton';

export default function CustomCard({ content, buttonTitle }) {
    return (
        <div className="customCard" style={{height: '125px'}}>
            <p className="customCard__content">{content}</p>
            <CardButton title={buttonTitle} />
        </div>
    )
}
