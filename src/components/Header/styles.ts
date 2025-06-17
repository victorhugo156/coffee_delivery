import styled from "styled-components";


export const HeaderContainer = styled.header`

width: 100%;
display: flex;
justify-content: space-between;
align-items: center;

nav{
    width: 12rem;
    display: flex;
    gap: 1.5rem;
};

a{
    background: ${props => props.theme.colors["yellow-light"]};
    height: 2.37rem;
    padding: .5rem;
    border-radius: 6px;

}

nav a:first-child{
    background: ${props => props.theme.colors["purple-light"]};
}

a div{
    display: flex;
    align-items: center;
    gap: .5rem;
}


`

export const ShoppingCartDiv = styled.div`

div{
    background: ${props=>props.theme.colors["yellow"]};
    width: 1.25rem;
    height: 1.25rem;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 50%;
};

`