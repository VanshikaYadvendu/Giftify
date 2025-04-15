import React, { useContext, useState } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext';

const FoodItem = ({_id,name,price,description,image}) => {


  //const [itemCount,setItemCount] = useState(0);
  const {cartItems,addToCart,removeFromCart,url} = useContext(StoreContext);

  return (
    <div className='food-item'>
        <div className="food-item-image">
            <img className = "food-image" src={url+"/images/"+image} alt="" />
            {!cartItems[_id]
                ?<img className='add' onClick={()=>addToCart(_id)} src={assets.add_icon_white} alt="" />
                :<div className='food-item-counter'>
                  <img onClick={()=>removeFromCart(_id)} src={assets.remove_icon_red} alt="" />
                  <p>{cartItems[_id]}</p>
                  <img onClick={()=>addToCart(_id)} src={assets.add_icon_green} alt="" />
                  </div>

            }
        </div>
        <div className="food-item-info">
            <div className="food-rating">
                <p>{name}</p>
                <img src={assets.rating_starts} alt="" />
            </div>
            <p className="food-description">{description}</p>
            <p className="food-price">${price}</p>
        </div>
    </div>
  )
}

export default FoodItem
