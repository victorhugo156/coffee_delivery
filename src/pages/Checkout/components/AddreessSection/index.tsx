import { ContainerForm, DeliveryAddressTitle, WrapperInputFirstRow, WrapperInputSecondRow } from "./styles";
import { MapPin } from "phosphor-react";
import { useForm } from "react-hook-form";


export function AddressSection() {

    const { register } = useForm();

    return (
        <ContainerForm>
            <h3>Fill up the form</h3>
            <form action="">
                <DeliveryAddressTitle>
                    <MapPin />
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
        </ContainerForm>
    )
}
