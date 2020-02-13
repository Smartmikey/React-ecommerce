import React from 'react';
import {CartItem} from './CartItem';


export const CartList = ({value})=>{
    const {cart} = value;
   return (
       <React.Fragment>
           <div className="container-fluid">
                {cart.map(item=>{
                   return <CartItem key={item.id} item={item} value={value} />

                })}
           </div>
       </React.Fragment>
   ) 
}