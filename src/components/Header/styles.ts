
import styled from "styled-components";


export const HeaderContainer = styled.header`

width: 100%;
display: flex;
justify-content: space-between;
align-items: center;


img{
    width: 5.28rem;
    height: 2.5rem;
}

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

nav a:last-child{
    span{
    background: ${props=>props.theme.colors["yellow-dark"]};
    width: 20px;
    height: 20px;

    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;

    top:-40px;
    left: 20px;

    border-radius: 50%;
};
    
}

`

export const ShoppingCartDiv = styled.div`

div{
    background: ${props=>props.theme.colors["yellow"]};
    width: 1.25rem;
    height: 1.25rem;
    position: absolute;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 50%;
};

`