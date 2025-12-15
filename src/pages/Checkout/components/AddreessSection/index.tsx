import { Bank, CreditCard, CurrencyDollarSimple, MapPin, Money } from "phosphor-react";
import { useForm } from "react-hook-form";
import { Button } from "../Button";
import { ContainerButtons, ContainerForm, ContainerPaymentMethod, DeliveryAddressTitle, PaymentTitle, SuggestionList, WrapperInputFirstRow, WrapperInputSecondRow } from "./styles";
import { useEffect, useState } from "react";



/*
    TODO: Work on the send order button.
*/
export function AddressSection() {

    const { register } = useForm();

    const [fullAddress, setFullAddress] = useState<string>("");
    const [streetName, setStreetName] = useState<string>("");
    const [postcode, setPostcode] = useState<string>("");
    const [number, setNumber] = useState<string>("");
    const [suburb, setSuburb] = useState<string>("");
    const [city, setCity] = useState<string>("");
    const [estate, setEstate] = useState<string>("");

    const [suggestions, setSuggestions] = useState<any[]>([]);

    function handlePostCode(e: React.ChangeEvent<HTMLInputElement>) {
        setFullAddress(e.target.value);
    }

    function handleUserClickSuggestion(suggestion: any) {

        setStreetName(suggestion.street);
        setPostcode(suggestion.postcode);
        setNumber(suggestion.housenumber);
        setSuburb(suggestion.suburb);
        setCity(suggestion.city);
        setEstate(suggestion.state_code);

        console.log(suggestion.country);
        setSuggestions([]);
    }



    function callPostCodeAPI(postCode: string) {
        fetch(`https://api.geoapify.com/v1/geocode/autocomplete?text=${postCode}&limit=5&format=json&apiKey=3407374fa3c342998a5440cd3c66dad8`)
            .then(response => response.json())
            .then(data => {
                if (data.results && data.results.length > 0) {
                    setSuggestions(data.results)
                    console.log(data.results)
                } else {
                    setSuggestions([])
                }
            })
            .catch(error => console.log(error))

    }

    useEffect(() => {
        if (fullAddress.length < 3) {
            setSuggestions([])
            return
        }
        callPostCodeAPI(fullAddress);
    }, [fullAddress])

    return (
        <ContainerForm>
            <h3>Fill up the form</h3>
            <form action="">
                <DeliveryAddressTitle>
                    <MapPin size={24} />
                    <p>Delivery Address</p>
                </DeliveryAddressTitle>
                <WrapperInputFirstRow>
                    {
                        streetName.length > 0 ? (
                            <input type="text" placeholder="Street" {...register("street")} value={streetName} />
                        ) :
                            <input type="text" placeholder="Street" {...register("street")} value={fullAddress} onChange={handlePostCode} />
                    }
                    {/* <input type="text" placeholder="Street" {...register("street")} value={fullAddress} onChange={handlePostCode}/> */}
                    {
                        fullAddress.length > 0 &&
                        suggestions.map((suggestion) => (
                            <SuggestionList key={suggestion.place_id}>
                                <p onClick={() => handleUserClickSuggestion(suggestion)}>{suggestion.formatted}</p>
                            </SuggestionList>

                        ))
                    }

                    <input type="text" placeholder="CEP" {...register("cep")} value={postcode} />
                </WrapperInputFirstRow>

                <WrapperInputSecondRow>
                    <input type="text" placeholder="Number" {...register("number")} value={number} />
                    <input type="text" placeholder="unit" {...register("unit")} />
                    <input type="text" placeholder="Suburb" {...register("suburb")} value={suburb} />
                    <input type="text" placeholder="City" {...register("city")} value={city} />
                    <input type="text" placeholder="Estate" {...register("estate")} value={estate} />
                </WrapperInputSecondRow>
            </form>

            <ContainerPaymentMethod>
                <PaymentTitle>
                    <CurrencyDollarSimple size={24} />
                    <div>
                        <p>Payment</p>
                        <p>Payment is done to the delivery currier. Pick the payment method</p>
                    </div>
                </PaymentTitle>
                <ContainerButtons>
                    <Button icon={<CreditCard size={18} color="purple" />} text={"Credit Card"} color={"dark"} variant={"baseButton"} />
                    <Button icon={<Bank size={18} color="purple" />} text={"Savings Card"} color={"dark"} variant={"baseButton"} />
                    <Button icon={<Money size={18} color="purple" />} text={"Cash"} color={"dark"} variant={"baseButton"} />
                </ContainerButtons>
            </ContainerPaymentMethod>
        </ContainerForm>
    )
}
