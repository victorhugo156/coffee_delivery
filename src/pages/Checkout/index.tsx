import { Container, FormWrapper, } from "./styles";
import { AddressSection } from "./components/AddreessSection";
import { OrederSection } from "./components/OrederSection";

export function Checkout() {

    return (
        <Container>
            <FormWrapper>
                    <AddressSection />
                    <OrederSection />
            </FormWrapper>
        </Container>

    )
}