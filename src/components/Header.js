import React from 'react';
import Logo from '../img/spacex-logo.png'
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

//Styled components
const Element = styled(Link)`
    text-decoration: none;
    color: var(--White);
    transition: all ease-in-out 0.2s;
    cursor: pointer; 

    &:hover {
        color: var(--DarkBlue);
        font-weight: 700;
        padding: 0.3rem;
        border-radius: 3px;
        background-color: var(--White);
    }
`;

const Header = () => {
    return ( 
        <div className="header-grid">
            <div className="header-column">
                <Link to="/"> 
                    <img className="header-logo" src={Logo} alt="SpaceX logo" />
                </Link>
            </div>
            <div className="header-column">
                <div className="nav-menu">
                    <Element to="/" className="element">Rockets and capsules</Element>
                    <Element to="/"className="element">Launches</Element>
                    <Element to="/"className="element">About</Element>
                </div>
                {/* <span className="btn-menu"><i className="fas fa-bars"></i></span> */}
            </div>
        </div>
     );
}
 
export default Header;