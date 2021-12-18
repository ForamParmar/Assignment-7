import React from 'react';
import { useState } from 'react';

const Cart = () => {
    const prod = ["milk", "tea", "butter", "sugar", "salt"];
    const rate = [40, 50, 100, 30, 10];
    const qty = [0, 0, 0, 0, 0];
    const btns=["Add to cart","Remove from the cart"];
  
    const[price,setPrice]  = useState(0);
    const[count,setCount]  = useState(0);

    var incrementQty = (prod) =>{
        console.log('>>',prod)
        if(prod === "milk")
          {
            if(qty[0] < 0){}
            else{
              setCount(count + 1)
              setPrice(price + rate[0])
            }
          }
        if(prod === "tea")
          {
            if(qty[1] < 0){}
            else{
              setCount(count + 1)
              setPrice(price + rate[1])
            }
          }
        if(prod === "butter")
          {
            if(qty[2] < 0){}
            else{
              setCount(count + 1)
              setPrice(price + rate[2])
            }
          }
        if(prod === "sugar")
          {
            if(qty[3] < 0){}
            else{
              setCount(count + 1)
              setPrice(price + rate[3])
            }
          }
        if(prod === "salt")
          {
            if(qty[4] < 0){}
            else{
              setCount(count + 1)
              setPrice(price + rate[4])
            }
          }
      }

      var decrementQty = (prod) =>{
        console.log('>>',prod)
        if(prod === "milk")
          {
            if(qty[0] < 0){}
            else{
              setCount(count - 1)
              setPrice(price - rate[0])
            }
          }
        if(prod === "tea")
          {
            if(qty[1] < 0){}
            else{
              setCount(count - 1)
              setPrice(price - rate[1])
            }
          }
        if(prod === "butter")
          {
            if(qty[2] < 0){}
            else{
              setCount(count - 1)
              setPrice(price - rate[2])
            }
          }
        if(prod === "sugar")
          {
            if(qty[3] < 0){}
            else{
              setCount(count - 1)
              setPrice(price - rate[3])
            }
          }
        if(prod === "salt")
          {
            if(qty[4] < 0){}
            else{
              setCount(count - 1)
              setPrice(price - rate[4])
            }
          }
      }

    return (
        <div>
        {
          prod.map((p, i) => <div class="container">
          <h1>{p}, Qty: {qty[i] } Price:{rate[i]}</h1><br />
          <button class="btn" onClick={() => incrementQty(p)}>{btns[0]}</button> 
          <button class="btn1" onClick={() => decrementQty(p)}>{btns[1]}</button><br /><br /></div>)
        } 
        
        <div class="container">
        <h1>Total Qty : {count}</h1>
        <h1>Total Price : {price}</h1>
        </div>
      </div>
    )
}

export default Cart
