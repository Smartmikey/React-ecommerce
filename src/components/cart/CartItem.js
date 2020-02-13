import React from 'react';


export const CartItem = (item,value) =>{
  
    const{id,title,img,price,total,count} = item.item;
    const {increment,decrement,removeItem} = item.value;
    return (
        <React.Fragment>
            <div className="row my-2 text-capitalize text-center">
                <div className="col-10 mx-auto col-lg-2">
                    <img src={img} style={{width: "5rem", height: "5rem"}}
                    className="img-fluid" alt={title} />
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <span className="d-lg-none">Product :</span> {title}
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <span className="d-lg-none">Price :</span> {price}
                </div>
                
                <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                    <div className="d-flex justify-content-center">
                        <div >
                            <span className="btn btn-black mx-1" onClick={()=>decrement(id)}> - </span>
                            <span className="btn btn-black mx-1"> {count} </span>
                            <span className="btn btn-black mx-1" onClick={()=>increment(id)}> + </span>
                        </div>
                    </div>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <div className="cart-icon" onClick={()=>removeItem(id)}> <i className="fas fa-trash"></i></div>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <strong>Item total : $ {total}</strong>
                </div>
            </div>
        </React.Fragment>
    )
}