import React from 'react';
import './Food.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
const Food = ({food, handleAddToCart}) => {
    //const = props;
    const {strMeal,strMealThumb, strArea} = food;
    return (
        <div className='food'>
            <img src={strMealThumb} alt="" />
            <div className='food-info'>
               <p className='food-name'>{strMeal}</p>
               <p>Origin: {strArea}</p>
            </div>
            <button onClick={() => handleAddToCart(food)} className='btn-cart'>
                <p className='btn-text'>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Food;