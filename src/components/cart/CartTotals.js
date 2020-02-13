import React from 'react';
import {Link} from 'react-router-dom';
import PayPalButton from './PayPalButton';


export const CartTotals = (value,history) => {
    
    const {cartSubTotal,cartTax,cartTotal,clearCart} = value.value;

    return(
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                        <Link to="/">
                            <button  className="btn btn-outline-danger text-uppercase mb-5 px-5" type="button"
                            onClick={()=>clearCart()}>
                                Clear cart
                            </button>
                        </Link>
                        <h4>
                            <span className="text-title">
                                Subtotal : 
                            </span> <strong>$ {cartSubTotal}</strong>
                        </h4>
                        <h4>
                            <span className="text-title">
                                tax : 
                            </span> <strong>$ {cartTax}</strong>
                        </h4>
                        <h4>
                            <span className="text-title">
                                total : 
                            </span> <strong>$ {cartTotal} </strong>
                        </h4>
                        <PayPalButton total={cartTotal} clearCart={clearCart} history={history} />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
} 