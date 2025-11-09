// Step 1 -> Create Reducer

import { ConvertNumberToPice } from "../utils/convertNumberToPrice";

//Defining the type of my state
export interface Coffees{
    id: number;
    image: string;
    tag: string;
    title: string;
    description: string;
    price: string;   
}

export type CartItem = Coffees & { quantity: number; priceNumber: number }; 
// priceNumber will be a number like 9.9 (derived from price)



//defining the type of my action
export type CartAction =
    | { type: "ADD_PRODUCT", payload: { coffee: Coffees; quantity: number } }
    | { type: "INCREMENT", payload: { id: number } }
    | { type: "DECREMENT", payload: { id: number } }
    | { type: "REMOVE_PRODUCT", payload: { id: number } }

//creating an enum to be easy to work with this reducer in other files
export enum ActionTypes{
    ADD_PRODUCT = "ADD_PRODUCT",
    INCREMENT = "INCREMENT",
    DECREMENT = "DECREMENT",
    REMOVE_PRODUCT = "REMOVE_PRODUCT",
}


export function cartReducer(state: CartItem[], action: CartAction): CartItem[] {

    //Switch function that will check the type of my action
    switch(action.type){
        case ActionTypes.ADD_PRODUCT:{

            //Now my payload is Coffees and I am destructing it
            //coffee and quantity are variable receiving my payload
            const { coffee, quantity} = action.payload;

            //Now I need tro transform my price into a number
            //using the function in my folder utils
            const priceNumber = ConvertNumberToPice(coffee.price)

            //Now I will check if the coffee is already in the cart
            const isCoffeeAlreadyInCart = state.find((cartItem)=> cartItem.id === coffee.id)

            if(isCoffeeAlreadyInCart){
                return state.map((item) =>
                    item.id === coffee.id ? { ...item, quantity: quantity } : item
                );
            }

            return [...state, {...coffee, priceNumber, quantity}]
        };

        case ActionTypes.REMOVE_PRODUCT:{
            //Filter the state, keeping items where the item's id is NOT equal to the payload id.
            return state.filter((item)=> item.id !== action.payload.id)
            
        }

        case ActionTypes.INCREMENT:{
            return state.map((item)=> item.id === action.payload.id ? {...item, quantity: item.quantity + 1, totalPrice: (item.quantity * item.priceNumber).toFixed(2)} : item)
        };

        case ActionTypes.DECREMENT:{
            return state.map((item)=> item.id === action.payload.id ? {...item, quantity: item.quantity - 1, totalPrice: (item.quantity * item.priceNumber).toFixed(2)} : item)
        }

        default:
            return state

    }

}
