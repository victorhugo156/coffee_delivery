
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
background-color: ${props=>props.theme.colors["base-card"]};

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

export const ContainerControls = styled.div`

display: flex;
flex-direction: column;
gap: .5rem;

margin-left: 1rem;
margin-right: 2rem;


`

export const ControlsWrapper = styled.div`

display: flex;
gap: .4rem;

`

export const Controls = styled.div`

    background-color: ${props=>props.theme.colors["base-button"]};

    width: 4.5rem;
    height: 2.8rem;

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


`

export const ContainerPrice = styled.div`

display: flex;
gap: .5rem;

span{
    font-size: ${props=>props.theme.fontSizes["text-m"]};
    font-weight: ${props=>props.theme.fontWeights["bold"]};
}

p{
    font-size: ${props=>props.theme.fontSizes["text-m"]};
    font-weight: ${props=>props.theme.fontWeights["bold"]};
}


`

export const Divider = styled.span`

border: 1px solid ${props=>props.theme.colors["base-button"]};

margin: 2rem 0;

`

export const ContainerOrderSummary = styled.div`
width: 100%;
display: flex;
flex-direction: column;
gap: 1rem;

margin-bottom: 2rem;
`

export const WrapperOerderInfo = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;

    padding:  0 1.5;

    div{
        display: flex;
        align-items: flex-end;
    }

`