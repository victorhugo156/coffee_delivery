
import styled from "styled-components";

export type IconVariant = "yellowDark" | "gray" | "yellow" | "purple";


interface IconsPropsContainer {
    variant: IconVariant;
}

const iconVariant = {
    yellowDark: "#C47F17",
    gray: "#8D8686",
    yellow: "#DBAC2C",
    purple: "#8047F8",
}

export const IconsList = styled.div`
    display: flex;
    gap: 1.5rem;


`

export const IconItem = styled.div<IconsPropsContainer>`

display: flex;
align-items: center;

span{

    display: flex;
    align-items: center;
    justify-content: center;

    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background: ${({ variant }) => iconVariant[variant]}
}

p{
    font-size: ${props => props.theme.fontSizes["text-m"]};
    color: ${props=> props.theme.colors["white"]}
}




`