import styled from "styled-components";

export const ContainerForm = styled.div`
width: 100%;
background-color: yellow;

display: flex;
flex-direction: column;

form{
    width: 100%;
    background-color:${props=>props.theme.colors["base-card"]};
    display: flex;
    flex-direction: column;

    padding: 2rem;

    border-radius: 8px;
}

`
export const DeliveryAddressTitle = styled.div`
display: flex;


margin-bottom:3rem;

`


export const WrapperInputFirstRow = styled.div`
display: flex;
gap: 2rem;

margin-bottom: 1rem;

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