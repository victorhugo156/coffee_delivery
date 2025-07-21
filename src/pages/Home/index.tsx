import { ShoppingCart, Package, Timer, Coffee } from "phosphor-react";
import { Banner, HeroContainer, HeroImage, HeroTitle, Main } from "./styles"
import { Icons } from "./components/IconsList";
import CoffeeBannerImage from "../../assets/CoffeeBannerImage.png"
import { CoffeeCard } from "./components/CoffeeCards";

export function Home() {
    return (
        <>
            <Banner>
                <HeroContainer>
                    <HeroTitle>
                        <div>
                            <h1>Find the perfect coffee</h1>
                            <h1>for any time of the day</h1>
                        </div>
                        <div>
                            <p>WIth coffee delivery you will receive your coffee wherever you are at, at any time</p>
                        </div>
                        <div>
                            <Icons icon={<ShoppingCart size={18} color="white" />} text={"Easy to buy"} variant="yellowDark" />
                            <Icons icon={<Package size={18} color="white" />} text={"Strong package"} variant="gray" />
                            <Icons icon={<Timer size={18} color="white" />} text={"Fast delivery"} variant="yellow" />
                            <Icons icon={<Coffee size={18} color="white" />} text={"Frash coffee"} variant="purple" />
                        </div>
                    </HeroTitle>

                    <HeroImage>
                        <img src={CoffeeBannerImage} alt="" />
                    </HeroImage>
                </HeroContainer>
            </Banner>
            <Main>
                <h2>Our Coffees</h2>
                <CoffeeCard/>
            </Main>
        </>

    )
}
