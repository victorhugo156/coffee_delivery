import { ContainerButton, IconBtn, type Alignment, type ColorVariant, type TextColorVariant  } from "./styles";

interface ButtonProps {
    variant?: ColorVariant;
    icon?: React.ReactNode;
    text: string;
    align?: Alignment;
    color?: TextColorVariant;
}

export function Button({icon, text, variant = "gray", align = "center", color = "dark"}: ButtonProps){
    return(
        <ContainerButton variant={variant} $align={align} textColor={color}>
            <IconBtn>{icon}</IconBtn>
            <p color={color}>{text}</p>
        </ContainerButton>
    )
}