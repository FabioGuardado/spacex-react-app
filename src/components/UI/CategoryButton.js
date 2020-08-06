import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

// Images
import falcon from '../../img/falcon.jpg';
import fh from '../../img/fh.jpg';
import dragon from '../../img/dragon.jpg';
import starship from '../../img/starship.jpg';

const Button = styled(Link)`
    text-decoration: none;
    padding: 2rem;
    border-radius: 10px;
    background-color: var(--Gray);
    text-align: center;
    cursor: pointer;
    transition: all ease-in 0.3s;

    &:hover {
        transform: scale(1.08, 1.08);
        background-color: var(--DarkGray);

        p {
            color: var(--White);
        }

        img {
            background-color: var(--White);
        }
    }
    img {
        max-height: 150px;
        border-radius: 100%;
        padding: 0.4rem;
        background-color: var(--DarkBlue);
    }
    p {
        color: var(--DarkGray);
        font-size: 18px;
        font-weight: 700;
        margin: 0.6rem 0;
        text-transform: uppercase;
        letter-spacing: 0.4rem;
    }
`;

const CategoryButton = ({category, photo, project, id}) => {

    var image;
    switch (photo) {
        case "falcon":
            image = falcon;
            break;
        case "falconHeavy":
            image = fh;
            break;
        case "dragon":
            image = dragon;
            break;
        case "starship":
            image = starship;
            break;
        default:
            image = null;
            break;
    }

    return ( 
        <Button to={`/details/${project}/${id}`}>
            <img src={image} alt={category} />
            <p>{category}</p>
        </Button>
     );
}
 
export default CategoryButton;