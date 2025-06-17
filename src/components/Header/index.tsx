import { HeaderContainer, ShoppingCartDiv } from "./styles";
import logo from "../../assets/logo.png";
import { MapPin, ShoppingCart } from "phosphor-react";
import { NavLink } from "react-router-dom";
import {  } from "@phosphor-icons/react";

export function Header(){
    return(
        <HeaderContainer>
            <img src={logo}/>
            <nav>
                <NavLink to="">
                    <div>
                        <MapPin size={22}/>
                        <p>Location</p>
                    </div>
                </NavLink>

                <NavLink to="">
                    <ShoppingCartDiv>
                        <div>
                            <p>3</p>
                        </div>
                        <ShoppingCart size={22}/>
                    </ShoppingCartDiv>
                </NavLink>
            </nav>
        </HeaderContainer>
    )
}