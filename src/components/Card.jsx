import React from 'react'

export default function Card(props) {
    return (
        <>
            <div className='card'>
                <img className='card-photo' src={props.imgSrc} alt="" />
                <div className='card-content'>
                    <p className='card-location'>{props.location}<span>View on Google Maps</span></p>
                    <h2 className='card-title'>{props.title}</h2>
                    <p className='card-date'>{props.date}</p>
                    <p className='card-description'>{props.description}</p>
                </div>
        
            </div>
                
        </>
        
    )
}