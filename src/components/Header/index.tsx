import { HeaderContainer, ShoppingCartDiv } from "./styles";
import logo from "../../assets/logo.png";
import { MapPin, ShoppingCart } from "phosphor-react";
import { NavLink } from "react-router-dom";
import { useContext, useEffect } from "react";
import { CartContext } from "../../contexts/CartContext";

export function Header(){

    const { cartItems, calculateTotalQuantity } = useContext(CartContext);

    useEffect(() => {
        console.log(`THis is the cartItems: ${cartItems.map((item) => item.quantity)}`)
    }, [cartItems])

    return(
        <HeaderContainer>
            <nav>
                <NavLink to="/">
                    <img src={logo}/>
                </NavLink>
            
                <NavLink to="">
                    <div>
                        <MapPin size={22}/>
                        <p>Location</p>
                    </div>
                </NavLink>

                <NavLink to="checkout">
                    <ShoppingCartDiv>
                        
                        <ShoppingCart size={22}/>
                    </ShoppingCartDiv>
                    <span>
                        <p>{calculateTotalQuantity(cartItems)}</p>
                    </span>
                </NavLink>
            </nav>
        </HeaderContainer>
    )
}