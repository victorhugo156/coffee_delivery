import { ShoppingCart } from "phosphor-react";
import { CardContainer, CoffeeInformation, ContainerControls, Controls, Icon, Tag, WrapperCardContainer } from "./styles";
import { coffees } from "../../../../data/coffeeList";

export function CoffeeCard() {
    return (
        <WrapperCardContainer>
            {coffees.map((coffee) => {
                return (
                    <CardContainer>
                        <img src={coffee.image} alt="" />
                        <Tag>
                            <p>{coffee.tag}</p>
                        </Tag>
                        <CoffeeInformation>
                            <h2>{coffee.title}</h2>
                            <p>{coffee.description} </p>
                        </CoffeeInformation>
                        <ContainerControls>
                            <div>
                                <p>AU$</p>
                                <p>{coffee.price}</p>
                            </div>
                            <Controls>
                                <div>
                                    <button>-</button>
                                    <p>1</p>
                                    <button>+</button>
                                </div>
                                <Icon> <ShoppingCart size={25} color="white" /></Icon>
                            </Controls>
                        </ContainerControls>
                    </CardContainer>
                )
            })}

        </WrapperCardContainer>
    )
}