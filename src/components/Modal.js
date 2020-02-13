import React, {Component} from 'react';
import styled from 'styled-components';
import {ProductConsumer} from '../Context';
import {ButtonContainer} from './Button';
import {Link} from 'react-router-dom';


export default class Modal extends Component {
    render(){
        return(
            <ProductConsumer>
                {(value)=>{
                    const {modalOpen,closeModal} = value;
                    const {img, title,price} = value.modalProduct;
                    if(!modalOpen){
                        return null
                    }else{
                        return(
                            <ModalConatiner>
                            <div id="modal" className="conatiner">
                                <div className="row">
                                    <div className="col-6 mx-auto col-md-6 col-lg-6 
                                    text-center text-capitalize">
                                        <h4 className="m-2">Item added to cart </h4>
                                        <img src={img} className="img-fluid" alt={title}/>
                                        <h4 className="m-2">{title}</h4>
                                        <h5 className="text-muted ">Price : ${price}</h5>
                                        <Link to="/">
                                            <ButtonContainer onClick={()=>closeModal()}>
                                                Continue shopping
                                            </ButtonContainer>
                                        </Link>
                                        <Link to="/cart">
                                            <ButtonContainer cart onClick={()=>closeModal()}>Go to cart</ButtonContainer>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </ModalConatiner>
                        )
                        
                    }
                    return
                }}
            </ProductConsumer>
        )
    }
}


const ModalConatiner = styled.div`
    position: fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
    background: rgba(0,0,0,.3);
    display: flex;
    align-items: center;
    justify-content: center;
    #modal{
        background: var(--mainWhite);
    }
`