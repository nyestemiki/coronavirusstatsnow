import styled from 'styled-components';

// GLOBAL

const Style = styled.div`
    background: rgba(0, 0, 0, .8);
    min-height: 100vh;
    max-height: 100%;
    position: relative;
`;

// TOP

const Top = styled.div`
    display: flex;
    place-content: space-between;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    background: rgba(255, 255, 255, .25);
    padding: 1rem 2rem;
    position: fixed;
    width: 100vw;
    z-index: 100;

    & > * {
        background: rgba(255, 255, 255, .5);
        padding: 5px;
        border-radius: 5px;
        transition: background-color .5s;
        cursor: pointer;

        &:hover {
            background: rgba(255, 255, 255, .75);
            box-shadow: 0 0 5px black;
        }
    }
`;

const Select = styled.select`
    max-width: 50vw;  
`;

const Languages = styled.div`
    display: flex;
    place-items: space-around;
    place-content: center;
    
    img {
        width: 2rem;
        margin: 2px;
        transition: transform .6s;

        &:hover {
            transform: scale(1.25);
        }
    }
`;

// MIDDLE

const Data = styled.div`
    display: flex;
    flex-wrap: wrap;
    place-content: space-around;
    place-items: center;
    position: relative;
    min-height: 100vh;
    max-height: 100%;
`;

const DataContainer = styled.div`
    padding: 5rem;
    margin: 5rem;
    border-radius: 10px;
    background: rgba(255, 255, 255, .6);
    display: flex;
    flex-direction: column;
    place-content: center;
    place-items: center;
    box-shadow: 0 0 10px black;
    backdrop-filter: blur(10px);
    color: white;
    text-shadow: 0 0 6px black;
`;

const Number = styled.div`
    font-size: 3rem;
    font-weight: bold;
`;

const Title = styled.div`
    font-size: 1.35rem;
`;

// BOTTOM

const Updated = styled.div`
    position: fixed;
    bottom: 0;
    color: white;
    display: flex;
    place-items: center;
    place-content: center;
    background: rgba(255, 255, 255, .25);
    padding: 5px;
    width: 100vw;
    backdrop-filter: blur(10px);
    text-shadow: 0 0 3px black;

    & > * {
        padding: 3px;
    }
`;

export default Style;
export { Top, Select, Languages, Data, DataContainer, Number, Title, Updated };
