import { ContainerButton, IconBtn, type Alignment, type ColorVariant, type TextColorVariant  } from "./styles";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ColorVariant;
    icon?: React.ReactNode;
    text: string;
    align?: Alignment;
    color?: TextColorVariant;
    disabled?: boolean;
}


function handleClick(event: React.MouseEvent<HTMLButtonElement>){
    
    console.log(event);


}

export function Button({icon, text, variant = "gray", align = "center", color = "dark", disabled = false, ...rest}: ButtonProps){
    return(
        <ContainerButton  onClick={handleClick} variant={variant} $align={align} textColor={color} disabled={disabled} {...rest}>
            <IconBtn>{icon}</IconBtn>
            <p color={color}>{text}</p>
        </ContainerButton>
    )
}