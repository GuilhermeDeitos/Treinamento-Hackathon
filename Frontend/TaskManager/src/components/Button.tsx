import styled from "styled-components";

interface Buttonprops{
    text:string;
    click:()=>void;
}

const StyledButton = styled.button`
    background-color: green;
`
export function Button({text, click}:Buttonprops){
    return(
        <StyledButton onClick={click}>{text}</StyledButton>
    )
}