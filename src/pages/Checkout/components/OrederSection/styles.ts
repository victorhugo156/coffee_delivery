
import styled from "styled-components";

export const Container = styled.div`
width: 100%;

display: flex;
flex-direction: column;


h3{
    margin-bottom: 2rem;
}


`

export const ContainerOrder = styled.div`
background-color: red;

display: flex;
flex-direction: column;

padding: 3rem 2.5rem 3rem 2.5rem;

border-radius: 2px 30px 2px 30px;
`

export const ContainerCheckout = styled.div`

display: flex;

img{
    width: 4rem;
    height: 4rem;
}

`

export const Controls = styled.div`

display: flex;
gap: .4rem;


>div:first-child{
    background-color: ${props=>props.theme.colors["base-button"]};

    width: 4.5rem;
    height: 2.37rem;

    display: flex;
    align-items: center;
    justify-content: space-between;


    border-radius: 8px;

    button:first-child{
        font-size: ${props=>props.theme.fontSizes["title-xl"]};
    }

    button{
        background: none;
        border: none;

        padding: 0 .3rem;
        font-size: ${props=>props.theme.fontSizes["title-m"]};
        color: ${props=>props.theme.colors["purple-dark"]};
    }
}


`

export const Divider = styled.span`

border: 1px solid yellow;



`