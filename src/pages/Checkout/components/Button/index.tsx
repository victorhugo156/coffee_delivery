import { ContainerButton, IconBtn, type ColorVariant } from "./styles";

interface ButtonProps {
    variant?: ColorVariant;
    icon?: React.ReactNode;
    text: string
}

export function Button({icon, text, variant = "gray"}: ButtonProps){
    return(
        <ContainerButton variant={variant}>
            <IconBtn>{icon}</IconBtn>
            <p>{text}</p>
        </ContainerButton>
    )
}