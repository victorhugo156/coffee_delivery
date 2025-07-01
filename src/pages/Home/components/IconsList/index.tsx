import { IconItem, IconsList, type IconVariant } from "./styles";


interface IconsProps {
    variant?: IconVariant;
    icon: React.ReactNode;
    text: string
}


export function Icons({ icon, text, variant = "gray" }: IconsProps) {
    return (
        <IconsList >
            <IconItem variant={variant}>
                    <span>
                        {icon}
                    </span>
                    <p>{text}</p>
            </IconItem>

        </IconsList>
    )
}
