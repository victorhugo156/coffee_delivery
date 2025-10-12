
import styled from "styled-components";


export const HeaderContainer = styled.header`

width: 100%;
display: flex;
align-items: center;


nav{

    width: 100%;
    display: flex;
    gap: 1.5rem;
};

nav a:first-child {

width: 6.31rem;
height: 3.5rem;

display: flex;
flex-shrink: 0;
margin-right: auto;

align-items: center;

padding: .7rem;

}

img{
width: 100%;

object-fit: cover;

}


a:nth-child(2), a:nth-child(3){
    background: ${props => props.theme.colors["yellow-light"]};
    height: 2.37rem;
    padding: .5rem;

    border-radius: 6px;
    

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