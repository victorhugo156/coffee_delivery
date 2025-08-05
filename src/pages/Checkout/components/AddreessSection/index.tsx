import { Bank, CreditCard, CurrencyDollarSimple, MapPin, Money } from "phosphor-react";
import { useForm } from "react-hook-form";
import { Button } from "../Button";
import { ContainerButtons, ContainerForm, ContainerPaymentMethod, DeliveryAddressTitle, PaymentTitle, WrapperInputFirstRow, WrapperInputSecondRow } from "./styles";


export function AddressSection() {

    const { register } = useForm();

    return (
        <ContainerForm>
            <h3>Fill up the form</h3>
            <form action="">
                <DeliveryAddressTitle>
                    <MapPin size={24} />
                    <p>Delivery Address</p>
                </DeliveryAddressTitle>
                <WrapperInputFirstRow>
                    <input
                        type="text"
                        placeholder="CEP"
                        {...register("cep")}
                    />
                    <input
                        type="text"
                        placeholder="Street"
                        {...register("street")}
                    />
                </WrapperInputFirstRow>

                <WrapperInputSecondRow>
                    <input type="text" placeholder="Number" {...register("number")} />
                    <input type="text" placeholder="unit" {...register("unit")} />
                    <input type="text" placeholder="Suburb" {...register("suburb")} />
                    <input type="text" placeholder="City" {...register("city")} />
                    <input type="text" placeholder="Estate" {...register("estate")} />
                </WrapperInputSecondRow>
            </form>

            <ContainerPaymentMethod>
                <PaymentTitle>
                    <CurrencyDollarSimple size={24} />
                    <div>
                        <p>Payment</p>
                        <p>Payment is done to the delivey currier. Pick the payment method</p>
                    </div>
                </PaymentTitle>
                <ContainerButtons>
                    <Button icon={<CreditCard />} text={"Credit Card"} />
                    <Button icon={<Bank />} text={"Savings Card"} />
                    <Button icon={<Money />} text={"Cash"} />
                </ContainerButtons>
            </ContainerPaymentMethod>
        </ContainerForm>
    )
}
