import { ContainerButton, IconBtn, type Alignment, type ColorVariant, type TextColorVariant  } from "./styles";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ColorVariant;
    icon?: React.ReactNode;
    text: string;
    align?: Alignment;
    color?: TextColorVariant;
    disabled?: boolean;
}

export function Button({icon, text, variant = "gray", align = "center", color = "dark", disabled = false}: ButtonProps){
    return(
        <ContainerButton variant={variant} $align={align} textColor={color} disabled={disabled}>
            <IconBtn>{icon}</IconBtn>
            <p color={color}>{text}</p>
        </ContainerButton>
    )
}