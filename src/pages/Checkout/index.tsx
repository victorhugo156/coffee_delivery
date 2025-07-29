import { Button } from "./components/Button";
import { CreditCard, CurrencyDollarSimple } from "phosphor-react";
import { Container, ContainerPaymentMethod, FormWrapper, PaymentTitle } from "./styles";
import { AddressSection } from "./components/AddreessSection";
import { useForm } from "react-hook-form";
import { OrederSection } from "./components/OrederSection";

export function Checkout() {


    return (
        <Container>
            <FormWrapper>
                <form action="">
                    <AddressSection />
                    <OrederSection />
                </form>
            </FormWrapper>
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