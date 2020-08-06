import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

import image from '../img/404.svg';

//Styled component
const ErrorView = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
    text-align: center;

    h1 {
        margin: 3rem 0;
        color: var(--DarkGray);
    }
`;

const Error = () => {
    return ( 

        <div className="wrapper">
            <ErrorView>
                <img src={image} alt="error 404" />
                <h1>Oops...! Page lost in space, <Link to="/" >go back home!</Link></h1>
            </ErrorView>
        </div>
     );
}
 
export default Error;