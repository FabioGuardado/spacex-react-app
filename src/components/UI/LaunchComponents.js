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
        margin-bottom: 2rem;
    }
    h3 {
        font-size: 1.5rem;
        text-align: center;
    }
    .img-container {
        margin: 1rem 0 2rem;
        display: flex;
        align-content: center;
        justify-content: center;
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
        color: var(--DarkGray);
        text-transform: uppercase;
        letter-spacing: 0.3rem;
        padding-bottom: 0.5rem;
        border-bottom: 2px solid var(--DarkGray);
        margin-bottom: 1rem;
        
        @media(max-width: 768px) {
            text-align: center;
            font-size: 1.6rem;
            letter-spacing: 0.2rem;
        }
    }

    .upc-launch-container {
        display: grid;
        grid-template-columns: 80px 1.5fr 0.5fr;
        margin-top: 0.5rem;
        padding-bottom: 0.5rem;
        margin-bottom: 0.7rem;
        border-bottom: 1px solid var(--DarkGray);

        .launch-column-1,
        .launch-column-2,
        .launch-column-3 {
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .launch-column-3 {
            flex-direction: column;
        }

        @media(max-width: 768px) {
            grid-template-columns: 80px 1fr;
            grid-template-rows: 1fr 1fr;

            h3 {
                text-align: center;
                font-size: 1.1rem;
            }
            
            p {
                font-size: 0.9rem;
            }

            .launch-column-1 {
                grid-column-start: 1;
                grid-column-end: 1;
                grid-row-start: 1;
                grid-row-end: span-2;
            }
            .launch-column-2 {
                grid-column-start: 2;
                grid-column-end: 2;
                grid-row-start: 1;
                grid-row-end: 1;
            }
            .launch-column-3 {
                grid-column-start: 2;
                grid-column-end: 2;
                grid-row-start: 2;
                grid-row-end: 2;
            }
        }
    }
`;