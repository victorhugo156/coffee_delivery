import { Trash } from "phosphor-react";
import { Container, ContainerCheckout, ContainerControls, ContainerOrder, ContainerOrderSummary, ContainerPrice, Controls, ControlsWrapper, Divider, WrapperOerderInfo } from "./styles";
import { Button } from "../Button";
import Cappucino from "../../../../assets/images/cappucino.png";


export function OrederSection() {
    return (
        <Container>
            <h3>Checkout Coffe</h3>
            <ContainerOrder>
                <ContainerCheckout>
                    <img src={Cappucino} alt="" />
                    <ContainerControls>
                        <p>Traditional Expresso</p>
                        <ControlsWrapper>
                            <Controls>
                                <button>-</button>
                                <p>1</p>
                                <button>+</button>
                            </Controls>
                            <Button icon={<Trash size={18} color="purple" />} text={"Remove"} variant={"baseButton"} />
                        </ControlsWrapper>
                    </ContainerControls>
                    <ContainerPrice>
                        <span>AU$</span>
                        <p>9.90</p>
                    </ContainerPrice>
                </ContainerCheckout>
                <Divider />
                <ContainerOrderSummary>
                    <WrapperOerderInfo>
                        <p>Total purchase</p>
                        <div>
                            <span>AU$</span>
                            <p>29.70</p>
                        </div>
                    </WrapperOerderInfo>
                    <WrapperOerderInfo>
                        <p>Delivery fee</p>
                        <div>
                            <span>AU$</span>
                            <p>3.70</p>
                        </div>
                    </WrapperOerderInfo>
                    <WrapperOerderInfo>
                        <h1>Total</h1>
                        <div>
                            <span>AU$</span>
                            <p>40.70</p>
                        </div>
                    </WrapperOerderInfo>
                </ContainerOrderSummary>
                <Button  text={"Send Order"} variant={"yellowDark"} color={"white"} />
            </ContainerOrder>

        </Container>

    )
}