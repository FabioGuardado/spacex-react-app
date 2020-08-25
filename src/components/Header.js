import React, { useState, Fragment } from 'react';
import Logo from '../img/spacex-logo.png'
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

//Styled components
const Element = styled(Link)`
    text-decoration: none;
    color: var(--White);
    border-bottom: 2px solid var(--Navy);
    transition: all ease-in-out 0.2s;
    cursor: pointer; 

    &:hover {
        border-bottom: 1px solid var(--White);
        padding-bottom: 0.3rem;
    }
`;

const BurgerMenu = styled.nav`
    width: 100vw;
    height: 100vh;
    z-index: 400;
    position: fixed;
    background-color: var(--DarkBlue);
    transform: ${({ burgerMenu }) => burgerMenu ? 'translateX(0) ' : 'translateX(100%) '};
    transition: all ease-in-out 0.3s;
    display: grid;
    grid-template-rows: 2rem auto;
    grid-template-columns: 1fr;
    overflow-x: hidden;

    /* div {
        border: red solid 1px;
    } */
    .btn-close {
        color: var(--White);
        font-size: 1.8rem;
        padding-right: 2rem;
        margin-top: 2rem;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
    .nav-links {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        
        @media(max-width: 768px){
            margin: 0 2rem;
        }
    }
    .nav-links a {
        text-align: center;
        text-decoration: none;
        display: block;
        border-bottom: 1px solid var(--DarkBlue);
        font-size: 1.6rem;
        color: var(--White);
        text-transform: uppercase;
        letter-spacing: 0.6rem;
        margin: 2rem 0;
        padding-bottom: 1rem;
        transition: all ease-in-out 0.2s;

        &:hover {
            font-weight: 700;
            border-bottom: 1px solid var(--White);
            
        }
    }
`;

const Header = () => {

    const [burgerMenu, setBurgerMenu] = useState(false);

    const handleClick = () => {
        if(burgerMenu) {
            setBurgerMenu(false);
        } else {
            setBurgerMenu(true);
        }
    }

    return ( 
        <Fragment>
            {
                (burgerMenu)
                ?
                    <BurgerMenu burgerMenu={burgerMenu}>
                        <div className="btn-close" onClick={handleClick} ><i className="fas fa-times"></i></div>
                        <div className="nav-links">
                            <Link to="/" onClick={() => setBurgerMenu(!burgerMenu)} >Rockets and capsules</Link>
                            <Link to="/launches" onClick={() => setBurgerMenu(!burgerMenu)} >Launches</Link>
                        </div>
                    </BurgerMenu>
                :
                    null
            }
            <div className="header-grid">
                <div className="header-column">
                    <Link to="/"> 
                        <img className="header-logo" src={Logo} alt="SpaceX logo" />
                    </Link>
                </div>
                <div className="header-column">
                    <div onClick={handleClick} className="btn-menu"><i className="fa fa-bars"></i></div>
                    <div className="nav-menu">
                        <Element to="/" className="element">Rockets and capsules</Element>
                        <Element to="/launches" className="element">Launches</Element>
                    </div>
                    
                </div>
            </div>
        </Fragment>
     );
}
 
export default Header;