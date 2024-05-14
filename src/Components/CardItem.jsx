


import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Context } from './Context/Context';

export default function CardItem(props) {
    const { addToFavorite, removeFromFavorite } = useContext(Context);

    // Initialize like state, defaulting to false if no value stored in localStorage
    const initialLikeState = localStorage.getItem(`like_${props.id}`) === 'true';
    const [like, setLike] = useState(initialLikeState);

    useEffect(() => {
        localStorage.setItem(`like_${props.id}`, like.toString());
    }, [like, props.id]);

    const toggleLike = () => {
        // Toggle like state
        setLike(prevLike => !prevLike);
        // Update context based on like state
        if (!like) {
            addToFavorite(props.el); 
        } else {
            removeFromFavorite(props.id); 
        }
    };

    return (
        <div>
            <div className='item mx-3 my-4'>
                <NavLink to={`/${props.title}/${props.id}`}>   
                    <img src={props.srcImg} alt={props.name} className='w-100 object-fit-cover rounded-2' height={280} /> 
                </NavLink>
                <div className='heart d-flex justify-content-between'> 
                    <span>{props.name}</span>
                    <span className='text-sec cursor-pointer' onClick={toggleLike}>
                        {like ? (
                            <i className='fa-solid fa-heart'></i>
                        ) : (
                            <i className='fa-regular fa-heart'></i>
                        )}
                    </span>
                </div>
                <div className='location'>
                    <i className="fa-solid fa-location-dot text-sec"></i>                 
                    <NavLink to={`${props.link}`} className='text-decoration-none text-main'>
                        <span className='m-1'>{props.location}</span>
                    </NavLink>
                </div>
            </div>
        </div>
    );
}
