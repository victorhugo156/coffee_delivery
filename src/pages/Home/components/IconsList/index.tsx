import { IconsList } from "./styles";
import { ShoppingCart, Package, Timer, Coffee } from "phosphor-react";

export function Icons(){
    return(
        <IconsList>
            <div>
                <span>
                    <ShoppingCart/>
                </span>
                <p>Simple to buy</p>
            </div>
            <div>
                <span>
                    <Package/>
                </span>
                <p>Strong package</p>
            </div>
            <div>
                <span>
                    <Timer/>
                </span>
                <p>Fast delivery</p>
            </div>
            <div>
                <span>
                    <Coffee/>
                </span>
                <p>Fresh Coffee</p>
            </div>
        </IconsList>
    )
}
