import { Trash } from "phosphor-react";
import { Container, ContainerCheckout, ContainerControls, ContainerOrder, ContainerOrderSummary, ContainerPrice, Controls, ControlsWrapper, Divider, WrapperOerderInfo } from "./styles";
import { Button } from "../Button";
import { useContext } from "react";
import { CartContext } from "../../../../contexts/CartContext";


export function OrderSection() {

    const { cartItems } = useContext(CartContext);

    const { dispatch } = useContext(CartContext);

    function handleDecreaseCoffeeQuantity(id: number) {
        dispatch({
            type: "DECREMENT",
            payload: {
                id: id
            }
        })
    }

    function handleIncreaseCoffeeQuantity(id: number) {
        dispatch({
            type: "INCREMENT",
            payload: {
                id: id
            }
        })
    }

    function handleRemoveCoffeeFromCart(id: number) {
        dispatch({
            type: "REMOVE_PRODUCT",
            payload: {
                id: id
            }
        })
    }


    return (
        <Container>
            <h3>Checkout Coffe</h3>
            {/* <pre>{JSON.stringify(cartItems, null, 2)}</pre> */}

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
                                                <button onClick={() => handleDecreaseCoffeeQuantity(item.id)}>-</button>
                                                <p>{item.quantity}</p>
                                                <button onClick={() => handleIncreaseCoffeeQuantity(item.id)}>+</button>
                                            </Controls>
                                            {
                                                cartItems.length > 0 ? (
                                                    <Button onClick={() => handleRemoveCoffeeFromCart(item.id)} icon={<Trash size={18} color="purple" />} text={"Remove"} variant={"baseButton"} />
                                                ) : (
                                                    <Button disabled={true} onClick={() => handleRemoveCoffeeFromCart(item.id)} icon={<Trash size={18} color="purple" />} text={"Remove"} variant={"baseButton"} />
                                                )
                                            }
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
                    {
                        cartItems.length > 0 ? (
                                <>
                                    <WrapperOerderInfo>
                                        <p>Total purchase</p>
                                        <div>
                                            <span>AU$</span>
                                            <p>{(cartItems.reduce((total, item) => total + item.priceNumber * item.quantity, 0)).toFixed(2)}</p>
                                        </div>
                                    </WrapperOerderInfo>
                                    <WrapperOerderInfo>
                                        <p>Delivery fee</p>
                                        <div>
                                            <span>AU$</span>
                                            <p>3.70</p>{/* TODO: change to fee from Post Code API */}
                                        </div>
                                    </WrapperOerderInfo>
                                    <WrapperOerderInfo>
                                        <h1>Total</h1>
                                        <div>
                                            <span>AU$</span>
                                            <p>{(cartItems.reduce((total, item) => total + item.priceNumber * item.quantity, 0) + 3.70).toFixed(2)}</p>{/* TODO: sum with delivery fee coming from API */}
                                        </div>
                                    </WrapperOerderInfo>
                                    <Button text={"Send Order"} variant={"yellowDark"} color={"white"} />
                                </>


                            ) : (
                            <>
                            </>
                        )
                    }
                </ContainerOrderSummary>


            </ContainerOrder>

        </Container>

    )
}