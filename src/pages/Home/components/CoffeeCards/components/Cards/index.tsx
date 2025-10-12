import { ShoppingCart } from "phosphor-react";
import { ButtonSoppingCart, CardContainer, CoffeeInformation, ContainerControls, Controls, Tag } from "./styles";
import { useContext, useState } from "react";
import { type Coffees } from "../../../../../../reducers/useShoppingCart";
import { CartContext } from "../../../../../../contexts/CartContext";

interface CardsProps{
    coffee: Coffees
}

export function Cards({coffee}:CardsProps) {


    const [coffeeQuantity, setCoffeeQuantity] = useState(0);

    const {dispatch} = useContext(CartContext);


    function handleDecreaseCoffeeQuantity() {

        if (coffeeQuantity > 0)
            setCoffeeQuantity((state)=>{
                return state - 1;
            });
        
    }

    function handleIncreaseCoffeeQuantity() {
            setCoffeeQuantity((state)=>{
                return state + 1;
            })   
    }


    function handleAddCoffeeIntoCart(){
        dispatch({
            type: "ADD_PRODUCT",
            payload: {
                coffee: coffee,
                quantity: coffeeQuantity
            }
        })
    }
    return (
        <CardContainer key={coffee.id}>
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
                        <button onClick={handleDecreaseCoffeeQuantity}>-</button>
                        <p>{coffeeQuantity}</p>
                        <button onClick={handleIncreaseCoffeeQuantity}>+</button>
                    </div>
                    <ButtonSoppingCart onClick={handleAddCoffeeIntoCart}> <ShoppingCart size={25} color="white" /></ButtonSoppingCart>
                </Controls>
            </ContainerControls>
        </CardContainer>
    )
}