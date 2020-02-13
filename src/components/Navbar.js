import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {ButtonContainer} from './Button'
export default class Navbar extends Component {
    render(){
        return(
            <React.Fragment>

                <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
                    <Link to="/">
                        <i className="fas fa-shopping-cart navbar-brand"></i>
                    </Link>
                    <ul className="navbar-nav align-item-center">
                        <li className="nav-item ml-5">
                            <Link to="/"> Store</Link>
                        </li>
                    </ul>

                    <Link to="/cart" className="ml-auto text-dark"> 
                        <ButtonContainer>
                            <i className="fas fa-shopping-cart mx-2"></i>
                             My Cart
                        </ButtonContainer>
                    </Link>
                </NavWrapper>
            </React.Fragment>
        )
    }
}

const NavWrapper  = styled.nav`
background: var(--mainBlue);
color: var(--mainWhite) !important;
font-size: 1.3rem;
text-transform: capitalize;
`