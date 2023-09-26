import styled from "styled-components";


export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    & > .sc-beyTiQ{
        width: 70%;
        margin-bottom: 1rem;
    }
    & > button{
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