import styled from "styled-components";

export type ColorVariant = "yellowDark" | "gray";

interface ButtonPropsContainer {
    variant: ColorVariant;
}

const colorVariant = {
    yellowDark: "#C47F17",
    gray: "#8D8686",
}


export const ContainerButton = styled.button<ButtonPropsContainer>`
background-color: ${({ variant }) => colorVariant[variant]};

display: flex;
flex: 1;
align-items: center;
gap: .5rem;

padding: .8rem 1rem;

border-radius: 3px;

`

export const IconBtn = styled.i`
display: flex;

`
