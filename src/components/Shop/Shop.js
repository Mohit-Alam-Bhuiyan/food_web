import React, { useEffect, useState } from 'react';
import './Shop.css';
import Food from '../Food/Food';
const Shop = () => {
    const [foods, setFoods] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect( () => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=a')
        .then(res=>res.json())
        .then(data => setFoods(data.meals))
    },[]);

    const handleAddToCart = (food) =>{
        console.log(food);
        //cart.push(food);
        const newCart = [...cart, food.strMeal];
        setCart(newCart);
    }
    return (
        <div className='shop-container'>
           <div className="foods-container">
            {
                foods.map(food=><Food
                     key={food.idMeal}
                     food = {food}
                     handleAddToCart = {handleAddToCart}
                     ></Food>)
            }
           </div>
           <div className="cart-container">
            <h4>Meal Details</h4>
            <p>Selected Items: {cart}</p>
           </div>
        </div>
    );
};

export default Shop;