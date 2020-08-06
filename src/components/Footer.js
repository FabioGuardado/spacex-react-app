import React from 'react';
import styled from '@emotion/styled';

//Styled component
const FooterComponent = styled.footer`
    margin-top: 3rem;
    text-align: center;
    background-color: var(--Gray);

    p {
        padding: 2rem 0;
        font-style: italic;
        color: var(--DarkGray);
        font-size: 1.1rem;
        a {
            font-weight: bold;
            text-decoration: none;
            color: var(--NavyBlue);
        }
        a:hover {
            text-decoration: underline;
        }
    }
`;

const Footer = () => {
    return ( 
        <FooterComponent>
            <p>Made by <a href="https://github.com/FabioGuardado">Fabio Guardado</a>, using ReactJS and Jake Meyer's <a href="https://github.com/r-spacex/SpaceX-API">SpaceX API</a> 🚀.</p>
        </FooterComponent>
     );
}
 
export default Footer;