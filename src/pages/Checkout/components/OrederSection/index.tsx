import { Trash } from "phosphor-react";
import { Container, ContainerCheckout, ContainerOrder, Controls, Divider } from "./styles";
import { Button } from "../Button";
import Cappucino from "../../../../assets/images/cappucino.png";


export function OrederSection() {
    return (
        <Container>
        <h3>Checkout Coffe</h3>
            <ContainerOrder>
                <ContainerCheckout>
                    <img src={Cappucino} alt="" />
                    <div>
                        <p>Traditional Expresso</p>
                        <Controls>
                            <div>
                                <button>-</button>
                                <p>1</p>
                                <button>+</button>
                            </div>
                            <Button icon={<Trash />} text={"Remove"} />
                        </Controls>
                        
                    </div>
                    <div>
                        <p>AU$</p>
                        <p>9.90</p>
                    </div>

                   
                </ContainerCheckout>
                 <Divider/>
            </ContainerOrder>
        </Container>

    )
}