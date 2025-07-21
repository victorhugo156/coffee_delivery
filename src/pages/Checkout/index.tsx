import { Button } from "./components/Button";
import { CreditCard, MapPin, CurrencyDollarSimple } from "phosphor-react";
import { Container, ContainerForm, ContainerPaymentMethod, DeliveryAddressTitle, PaymentTitle } from "./styles";

export function Checkout() {
    return (
        <Container>
            <ContainerForm>
                <h3>Fill up the form</h3>
                <form action="">
                    <DeliveryAddressTitle>
                        <p>Delivery Address</p>
                        <MapPin />
                    </DeliveryAddressTitle>

                    <input type="text" />
                    <input type="text" />
                    <div>
                        <input type="text" />
                        <input type="text" />
                        <input type="text" />
                        <input type="text" />
                        <input type="text" />
                    </div>
                </form>
            </ContainerForm>
            <ContainerPaymentMethod>
                <PaymentTitle>
                    <CurrencyDollarSimple />
                    <div>
                        <p>Payment</p>
                        <p>Payment is done to the delivey currier. Pick the payment method</p>
                    </div>
                </PaymentTitle>
                <Button icon={<CreditCard />} text={"Credit Card"} />
                <Button icon={<CreditCard />} text={"Credit Card"} />
                <Button icon={<CreditCard />} text={"Credit Card"} />
            </ContainerPaymentMethod>
        </Container>

    )
}