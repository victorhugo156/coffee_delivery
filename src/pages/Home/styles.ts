import styled from "styled-components";
import Background from "../../assets/Background.png"


export const Banner = styled.div`

    width: 100vw;
    min-height: 34rem;

    background-image: url(${Background});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center; 

    padding: 5rem 10rem;

`

export const HeroContainer = styled.div`

display: flex;
align-items: center;
justify-content: space-between;


`

export const HeroTitle = styled.div`

display: flex;
flex-direction: column;

div h1{
    font-size: ${props=>props.theme.fontSizes["title-xl"]};
    font-weight: ${props=>props.theme.fontWeights["extraBold"]};
}

> div:nth-child(2){
    margin-top: 1rem;

    p{
        font-size: ${props=>props.theme.fontSizes["text-l"]};
        font-weight: ${props=>props.theme.fontWeights["regular"]};
    }
}

/* Using the > combinator, so only the 3rd direct child of HeroTitle will be styled.
    If I remove the > combinator, the third div inside the parent div will get the style as well, 
    in this case, the third icon.
*/
> div:nth-child(3){
    margin-top: 3rem;


    display: grid;
    grid-template-columns: auto auto;
    gap: 1.5rem;

}

`

export const HeroImage = styled.div`

img{
    max-width: 29rem;
};

`

export const Main = styled.div`
width: 100%;

>h2{
    margin-bottom: 4rem;
}


`

