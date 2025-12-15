import styled from "styled-components";

export type ColorVariant = "yellowDark" | "gray" | "baseButton";
export type Alignment = "center" | "left" | "right";
export type TextColorVariant = "dark" | "white";

interface ButtonPropsContainer {
    variant: ColorVariant;
    $align?: Alignment;  
    textColor: TextColorVariant;
}

const colorVariant = {
    yellowDark: "#C47F17",
    gray: "#8D8686",
    baseButton: "#E6E5E5",
}

const textColorVariant = {
    dark: "#8D8686",
    white: "#FFFFFF",
}

const justifyMap: Record<Alignment, "flex-start" | "center" | "flex-end"> = {
  left: "flex-start",
  center: "center",
  right: "flex-end",
};



export const ContainerButton = styled.button<ButtonPropsContainer>`
background-color: ${({ variant }) => colorVariant[variant]};

display: flex;
flex: 1;
align-items: center;
justify-content: ${({ $align = "center" }) => justifyMap[$align]};;
gap: .5rem;

padding: .8rem 1rem;

border-radius: 3px;

cursor: pointer;

&:disabled{
    opacity: 0.5;
    cursor: not-allowed;
}

p{
    color: ${({ textColor }) => textColorVariant[textColor]};
}

&:hover{
    border: 1px solid ${({ theme }) => theme.colors["purple"]};
    background-color: ${({ theme }) => theme.colors["purple-light"]};
}

`

export const IconBtn = styled.i`
display: flex;

`
