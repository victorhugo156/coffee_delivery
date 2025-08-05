import styled from "styled-components";

export const ContainerForm = styled.div`

display: flex;
flex-direction: column;

h3{
  margin-bottom: 2rem;

  font-size: ${props=>props.theme.fontSizes["title-s"]};
}

form{
    width: 100%;
    background-color:${props=>props.theme.colors["base-card"]};

    display: flex;
    flex-direction: column;

    border-radius: 8px;

    padding: 3rem 2.5rem 3rem 2.5rem;
}

input{
  background-color: ${props=>props.theme.colors["base-input"]};
  height: 2.62rem;

  padding: 1rem;

  border: none;
  border-radius: 8px;
}

`
export const DeliveryAddressTitle = styled.div`
display: flex;
align-items: center;
gap: .5rem;

margin-bottom:3rem;

p{
  font-size: ${props=>props.theme.fontSizes["text-m"]};
}

`


export const WrapperInputFirstRow = styled.div`
display: flex;
flex-direction: column;
gap: 1rem;

margin-bottom: 1rem;

>input:nth-child(1){
  width: 12rem;
}

`
export const WrapperInputSecondRow = styled.div `
display: grid;
  /* three “track” columns: 
     – 1fr for Number/Bairro  
     – 2fr for Complement/City 
     – 1fr for UF */
  grid-template-columns: 1fr 2fr 1fr;
  /* row-gap | column-gap */
  gap: 1rem 0.75rem;

  /* Number input (first child) spans column 1 */
  > input:nth-of-type(1) {
    grid-column: 1 / 2;
  }

  /* Complemento input (second child) spans columns 2–4 */
  > input:nth-of-type(2) {
    grid-column: 2 / 4;
  }

  /* Bairro input (third child) spans column 1 */
  > input:nth-of-type(3) {
    grid-column: 1 / 2;
  }

  /* Cidade input (fourth child) spans column 2 */
  > input:nth-of-type(4) {
    grid-column: 2 / 3;
  }

  /* UF input (fifth child) spans column 3 */
  > input:nth-of-type(5) {
    grid-column: 3 / 4;
  }
;


`


export const ContainerPaymentMethod = styled.div`

background-color:${props=>props.theme.colors["base-card"]};

padding: 3rem 2.5rem 3rem 2.5rem;

border-radius: 8px;

margin-top: 1rem;



`

export const PaymentTitle = styled.div`

display: flex;
align-items: flex-start;
gap: .5rem;

margin-bottom: 2rem;

div{
  display: flex;
  flex-direction: column;
  gap:.2rem;

}

p{
  font-size: ${props=>props.theme.fontSizes["text-m"]};
}

`

export const ContainerButtons = styled.div`

max-width: 35rem;
display: flex;
gap: 1rem;

`