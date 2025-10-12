import styled from "styled-components";


export const CardContainer = styled.div`
position: relative;

background-color: ${props => props.theme.colors["base-card"]};

width: 16rem;
height: 19.3rem;

padding: 4rem .8rem 0 .8rem;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

border-radius: 0 50px;

img{
    position: absolute;
    left: 5rem;
    top: -1.5rem;
}

`

export const Tag = styled.div`
background-color: ${props => props.theme.colors["yellow-light"]};

padding: .2rem 1.5rem;

border-radius: 20px;

margin: 1rem 0;

p{
    text-transform: uppercase;
    color: ${props => props.theme.colors["yellow-dark"]};
    font-weight: ${props => props.theme.fontWeights["bold"]};
    font-size: ${props => props.theme.fontSizes["text-xs"]};
}

`

export const CoffeeInformation = styled.div`

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

>h2{
    margin-bottom: .8rem;

    font-family: ${props => props.theme.fonts["title"]};
}

p{
    text-align: center;
    color: ${props => props.theme.colors["base-label"]};

    font-size: ${props => props.theme.fontSizes["text-m"]};
}


`

export const ContainerControls = styled.div`
width: 100%;

display: flex;
justify-content: space-between;

gap: 1rem;

margin-top: 2rem;

>div:first-child{

    display: flex;
    align-items: baseline;
    gap: .1rem;
}


>div p:first-child{

    font-family: ${props => props.theme.fonts["title"]};
    font-size: ${props => props.theme.fontSizes["text-l"]};
}

>div p:last-child{

    font-family: ${props => props.theme.fonts["title"]};
    font-size: ${props => props.theme.fontSizes["title-l"]};
    font-weight: ${props => props.theme.fontWeights["extraBold"]};
}

`

export const Controls = styled.div`

display: flex;
gap: .4rem;


>div:first-child{
    background-color: ${props => props.theme.colors["base-button"]};

    width: 4.5rem;
    height: 2.37rem;

    display: flex;
    align-items: center;
    justify-content: space-between;


    border-radius: 8px;

    button:first-child{
        font-size: ${props => props.theme.fontSizes["title-xl"]};
    }

    button{
        background: none;
        border: none;

        padding: 0 .3rem;
        font-size: ${props => props.theme.fontSizes["title-m"]};
        color: ${props => props.theme.colors["purple-dark"]};
        cursor: pointer;
    }
}


`

export const ButtonSoppingCart = styled.button`

background-color: ${props => props.theme.colors["purple-dark"]};



width: 2.3rem;
height: 2.3rem;

display: flex;
align-items: center;
justify-content: center;

border-radius: 8px;
cursor: pointer;

`