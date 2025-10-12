import { coffees } from "../../../../data/coffeeList";
import { Cards } from "./components/Cards";
import { WrapperCardContainer } from "./styles";

export function CoffeeCard() {

    return (
        <WrapperCardContainer>
            {coffees.map((coffee) => {
                return (
                   <Cards key={coffee.id} coffee = {coffee}/>
                )
            })}
        </WrapperCardContainer>
    )
}