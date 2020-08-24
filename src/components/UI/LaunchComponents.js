import styled from '@emotion/styled';

export const LaunchPageDetails = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 2rem;
    background-color: rgba(0, 0, 0, 0.59);
    color: var(--White);

    @media(max-width: 768px) {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr;
    }
    @media(max-width: 480px) {
        padding: 2rem 0;
        text-align: center;
        h1, h3 {
            margin: 0 2rem;
        }
    }

    .launch-grid-column {
        display: flex;
        flex-direction: column;
    }

    h1 {
        text-transform: uppercase;
        letter-spacing: 0.3rem;
    }
    .img-container {
        margin: 2rem 0 1rem;
        display: flex;
        align-content: center;
        justify-content: center;
    }
    img {
        padding: 0.4rem;
        background-color: var(--Gray);
        border-radius: 100%;
    }
    .mission-patch {
        width: 260px;
        height: auto;
    }
    .details {
        font-size: 0.8rem;
        font-style: italic;
        text-align: center;
        padding: 0 1rem;
    }
    .date-details {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;

        @media(max-width: 768px) {
            margin: 0 1rem;
        }
    }

    .launch-date-container {
        display: flex;
        align-content: center;
        justify-content: center;
        margin: 1rem auto 2rem;
    }
    .launch-date {
        text-transform: uppercase;
        font-weight: 700;
        font-size: 2rem;
        border: 1px solid var(--White);
        padding: 2rem;

        @media(max-width: 768px) {
            max-width: 140px;
            font-size: 1.6rem;
        }
    }
    .hour {
        display: block;
        font-size: 1.1rem;
        text-align: center;

        @media(max-width: 768px) {
            font-size: 0.9rem;
        }
    }

    .date-title {
        display: flex;
        justify-items: center;
        align-items: center;
        color: #000;
        text-transform: uppercase;
        padding: 1rem;
        background-color: var(--White);
        text-align: center;
    }
`;

export const UpcomingLaunches = styled.div`
    h1 {
        text-transform: uppercase;
        letter-spacing: 0.3rem;
    }
`;