import styled from "styled-components";


export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5rem;
    width: 100%;
    height: 100%;
    & > h1{
        font-size: 2rem;
        margin-bottom: 1rem;
    }
    & > .sc-beyTiQ{
        width: 70%;
        margin-bottom: 1rem;
    }
    & > button{
        margin-top: 0.8rem;
        border: 1px solid black;
        border-radius: .4rem;
        background-color: White;
        padding: 0 0.5rem;
        font-size: 1rem;
        color: black;
        transition: all 0.25s ease-in-out;
        height: 2rem;
        width: 6rem;
    }
    & > button:hover{
        border: 1px solid white;
        background-color: transparent;
        color: white;
        cursor: pointer;
    }
`