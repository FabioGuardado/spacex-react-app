import React from 'react';
import styled from '@emotion/styled';

// Components
import CategoryButton from '../components/UI/CategoryButton';

//Styled components
const Title = styled.h1`
    font-size: 1.8rem;
    color: var(--DarkGray);
    text-transform: uppercase;
    letter-spacing: 0.2rem;
    margin: 0 auto 2rem;
    text-align: center;
`;

const Menu = () => {
    return ( 
        <div className="wrapper">
            <Title>Active rockets and capsules</Title>
            <div className="menu-grid">
                <CategoryButton category="Falcon 9" photo="falcon" project="rockets" id="5e9d0d95eda69973a809d1ec" />
                <CategoryButton category="Falcon Heavy" photo="falconHeavy" project="rockets" id="5e9d0d95eda69974db09d1ed"/>
                <CategoryButton category="Dragon 2" photo="dragon" project="dragons" id="5e9d058859b1ffd8e2ad5f90" />
                <CategoryButton category="Starship" photo="starship" project="rockets" id="5e9d0d96eda699382d09d1ee" />
            </div>

        </div>
     );
}
 
export default Menu;