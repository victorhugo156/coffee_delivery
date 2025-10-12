import { createContext, useReducer } from "react";
import { cartReducer, type CartAction, type CartItem } from "../reducers/useShoppingCart";

interface CartContextType{
    cartItems: CartItem[],
    calculateTotalQuantity: (cartItems: CartItem[]) => number;
    dispatch: React.Dispatch<CartAction>
}

interface CartContextProviderProps{
    children: React.ReactNode
}


function calculateTotalQuantity(cartItems: CartItem[]){

    return cartItems.reduce((totalSoFar, currentItem)=>{ 
        
        return totalSoFar + currentItem.quantity;
        
    }, 0); 
}


export const CartContext = createContext({} as CartContextType);


export function CartContextProvider({ children }: CartContextProviderProps) {

    const [coffees, dispatch] = useReducer(cartReducer, []);
    
    return (
            <CartContext.Provider value={{
                cartItems: coffees,
                calculateTotalQuantity,
                dispatch
            }}>
                {children}
            </CartContext.Provider>

    )
}
