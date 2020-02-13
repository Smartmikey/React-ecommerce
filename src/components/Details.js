import React, {Component} from 'react';
import { ProductConsumer } from '../Context';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button';

export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {value => {
                  
                  const { id,company,img,info,price,title,inCart } 
                  = value.detailProduct;

                    console.log(id);
                    
                    return (
                        
                        <div className="container py-5">
                        {/* title */}
                        <div className="row">
                            <div className="col-10 mx-auto text-center text-slanted text-blue my-2 text-capitalize"> <h3> {title} </h3></div>
                            </div>
                            {/* end of title */}

                            {/* Product info */}
                                <div className="row">
                                    <div className="col-10 mx-auto col-md-6 my-3">
                                        <img className="w-100 mx-auto" src={img} alt={title}/>
                                    </div>
                                    <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                        <h2>Model: {title}</h2>
                                        <h3 className="text-title text-uppercase text-muted mt-3 mb-2"> made By:  <span className="text-uppercase">{company}</span></h3>
                                        <h4 className="text-blue">
                                            <strong>
                                                Price:  
                                                <span>$</span> {price}
                                            </strong>
                                        </h4>
                                        <p className="text-capitalize font-weight-bold mt-3 mb-0">Some infor about product:</p>
                                        <p className="text-muted lead">{info}</p>
                                        {/* button */}
                                        <Link to="/"> 
                                        <ButtonContainer>Back to product</ButtonContainer>
                                        </Link>
                                        <ButtonContainer cart disabled={inCart?true : false}
                                            onClick={()=>{value.addToCart(id);                                 value.openModal(id)
                                            }}
                                        >
                                            {inCart?"inCart":"Add to cart"}
                                        </ButtonContainer>
                                    </div>
                                </div>
                            {/* end of Product info */}
                            
                        </div>
                       
                    )
                }}
            </ProductConsumer>
        );
    }
}