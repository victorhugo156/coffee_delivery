import { ShoppingCart } from "phosphor-react";
import { Banner } from "./styles"
import { Icons } from "./components/IconsList";



export function Home() {
    return (
        <Banner>
            <div>
                <div>
                    <h1>Find the perfect coffee</h1>
                    <h1>for any time of the day</h1>
                </div>
                <div>
                    <p>WIth coffee delivery you will receive your coffee wherever you are at, at any time</p>
                </div>

                <div>
                    <Icons icon={<ShoppingCart />} text={"Easy to buy"} variant="purple" />
                    <Icons icon={<ShoppingCart />} text={"Easy to buy"} variant="yellow" />
                    <Icons icon={<ShoppingCart />} text={"Easy to buy"} variant="gray" />
                    <Icons icon={<ShoppingCart />} text={"Easy to buy"} variant="yellowDark" />
                </div>

            </div>

            <div>
                <img src="" alt="" />
            </div>

        </Banner>
    )
}
