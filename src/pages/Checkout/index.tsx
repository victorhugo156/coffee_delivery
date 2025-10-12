import { Container, FormWrapper, } from "./styles";
import { AddressSection } from "./components/AddreessSection";
import { OrderSection } from "./components/OrderSection";

export function Checkout() {

    return (
        <Container>
            <FormWrapper>
                    <AddressSection />
                    <OrderSection />
            </FormWrapper>
        </Container>

    )
}