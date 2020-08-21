
import styled from '@emotion/styled';

export const DataComponent = styled.div`
    padding: 2rem;

    @media(max-width: 480px) {
        text-align: center;
        padding: 2rem 0;
    }

    h1 {
        text-align: center;
        text-transform: uppercase;
        color: var(--DarkGray);
        letter-spacing: 0.8rem;
        padding: 1rem;
        background-color: var(--Gray);

        @media(max-width: 480px) {
            font-size: 1.4rem;
            letter-spacing: 0.5rem;
        }
    }

    div {
        margin: 0.8rem 0;
        line-height: 1.7rem;

    }
    h4 {
        font-weight: 700;
        text-transform: uppercase;
        color: var(--DarkGray);
        letter-spacing: 0.2rem;
        padding-bottom: 0.2rem;
        margin: 1rem 0;
        border-bottom: 1.5px solid var(--DarkGray);
    }
    div ul {
        list-style-type: none;
        font-size: 0.8rem;
    }
    div ul span {
        font-weight: 700;
    }
    li {
        padding: 0.2rem;
        display: flex;
        justify-content: space-between;
        text-transform: uppercase;
        transition: all ease-in-out 0.2s;

        &:hover {
            background-color: var(--Gray);
        }
    }
`;

export const SecondaryItem = styled.div`
    h6 {
        font-size: 0.9rem;
        text-transform: uppercase;
        font-weight: 700;
    }
    .dragon-thruster {
        display: block;
        
        &:hover {
            background-color: var(--White);
        }
    }
    .dragon-thruster p {
        padding: 0.2rem;
        margin-left: 0.6rem;
        display: flex;
        justify-content: space-between;
        text-transform: uppercase;
        transition: all ease-in-out 0.2s;

        &:hover {
            background-color: var(--Gray);
        }

        @media(max-width: 768px) {
            margin-left: 0;
        }
    }
    .fuel{
        justify-self: flex-start;
        text-align: left;
    }
    .fuel-info {
        font-weight: 400 !important;
        justify-self: flex-end;
        text-align: right;
    }
`;

export const Description = styled.div`
    padding-top: 2rem;

    @media(max-width: 768px){
        padding-top: 0;
    }

    .image-project {
        position: relative;
        
        @media(max-width: 768px) {
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }

    .image-project img {
        margin: 0 auto;
        max-height: 350px;
        width: auto;
        padding: 0.6rem;
        background-color: var(--NavyBlue);

        @media(max-width: 768px){
            margin: 0 auto;
            max-width: 80vw;
            max-height: auto;
        }
    }

    .wikipedia {
        position: absolute;
        top: 0;
        right: 0;
        transform: scale(1.2, 1.2);
        transition: all ease-in-out 0.3s;

        &:hover {
            transform: scale(1.3, 1.3);
            cursor: pointer;
        }
    }
    .wikipedia img {
        max-width: 32px;
        height: auto;
        z-index: 1000;
        border-radius: 5px;
        background-color: var(--Gray) !important;
        box-shadow: 8px 8px 10px rgba(0, 0, 0, 0.256);
    }
    
    p {
        margin-top: 1.5rem;
        font-size: 0.8rem;
        font-style: italic;
        text-align: center;
    }
`;