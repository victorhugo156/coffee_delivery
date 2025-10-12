import { Trash } from "phosphor-react";
import { Container, ContainerCheckout, ContainerControls, ContainerOrder, ContainerOrderSummary, ContainerPrice, Controls, ControlsWrapper, Divider, WrapperOerderInfo } from "./styles";
import { Button } from "../Button";
import { useContext } from "react";
import { CartContext } from "../../../../contexts/CartContext";


export function OrderSection() {

    const { cartItems } = useContext(CartContext);

    return (
        <Container>
            <h3>Checkout Coffe</h3>
            <pre>{JSON.stringify(cartItems, null, 2)}</pre>

            <ContainerOrder>
                {
                    cartItems.length === 0 ? (
                        <>
                            <p>No items in cart</p>
                            <Divider />
                            <ContainerOrderSummary>
                                <WrapperOerderInfo>
                                    <p>Total purchase</p>
                                    <div>
                                        <span>AU$</span>
                                        <p>0.00</p>
                                    </div>
                                </WrapperOerderInfo>
                                <WrapperOerderInfo>
                                    <p>Delivery fee</p>
                                    <div>
                                        <span>AU$</span>
                                        <p>0.00</p>
                                    </div>
                                </WrapperOerderInfo>
                                <WrapperOerderInfo>
                                    <h1>Total</h1>
                                    <div>
                                        <span>AU$</span>
                                        <p>0.00</p>
                                    </div>
                                </WrapperOerderInfo>
                            </ContainerOrderSummary>

                            <Button disabled={true} text={"Send Order"} variant={"yellowDark"} color={"white"} />

                        </>

                    ) : (
                        cartItems.map((item) => (
                            <>
                                <ContainerCheckout>
                                    <img src={item.image} alt="" />
                                    <ContainerControls>
                                        <p>{item.title}</p>
                                        <ControlsWrapper>
                                            <Controls>
                                                <button>-</button>
                                                <p>{item.quantity}</p>
                                                <button>+</button>
                                            </Controls>
                                            <Button icon={<Trash size={18} color="purple" />} text={"Remove"} variant={"baseButton"} />
                                        </ControlsWrapper>
                                    </ContainerControls>
                                    <ContainerPrice>
                                        <span>AU$</span>
                                        <p>{item.price}</p>
                                    </ContainerPrice>
                                </ContainerCheckout>
                                <Divider />

                            </>
                        ))
                    )
                }

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

                <Button text={"Send Order"} variant={"yellowDark"} color={"white"} />

            </ContainerOrder>

        </Container>

    )
}