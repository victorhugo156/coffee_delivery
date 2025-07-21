import arabic from "../assets/images/arabic.png"
import cappucino from "../assets/images/cappucino.png"
import expressoAmericano from "../assets/images/expresso_americano.png"
import expressoCreamy from "../assets/images/expresso_creamy.png"
import expressoTraditional from "../assets/images/expresso_traditional.png"
import flatWhite from "../assets/images/flat_white.png"
import hawaii from "../assets/images/hawaii.png"
import hotChocolate from "../assets/images/hot_chocolate.png"
import iceExpresso from "../assets/images/ice_expresso.png"
import irish from "../assets/images/irish.png"
import latte from "../assets/images/latte.png"
import macchiato from "../assets/images/macchiato.png"
import mocaccino from "../assets/images/mocaccino.png"

export interface CoffeeList{
    image: string;
    tag: string;
    title: string;
    description: string;
    price: string;
}

export const coffees: CoffeeList[]=[
    {image: arabic, tag:"traditional", title: "Expresso Traditional", description:"Traditional coffee made with hot water and ground beans", price:"9,90"},
    {image: cappucino, tag:"traditional", title: "Flat White", description:"Traditional coffee made with hot water and ground beans", price:"9,90"},
    {image: expressoAmericano, tag:"traditional", title: "Latte", description:"Traditional coffee made with hot water and ground beans", price:"9,90"},
    {image: expressoCreamy, tag:"traditional", title: "Capuccino", description:"Traditional coffee made with hot water and ground beans", price:"9,90"},
    {image: expressoTraditional, tag:"traditional", title: "Machiato", description:"Traditional coffee made with hot water and ground beans", price:"9,90"},
    {image: flatWhite, tag:"traditional", title: "Mocaccino", description:"Traditional coffee made with hot water and ground beans", price:"9,90"},
    {image: hawaii, tag:"traditional", title: "Hot Chocolate", description:"Traditional coffee made with hot water and ground beans", price:"9,90"},
    {image: hotChocolate, tag:"traditional", title: "Cubano", description:"Traditional coffee made with hot water and ground beans", price:"9,90"},
    {image: iceExpresso, tag:"traditional", title: "Hawai", description:"Traditional coffee made with hot water and ground beans", price:"9,90"},
    {image: irish, tag:"traditional", title: "Arabic", description:"Traditional coffee made with hot water and ground beans", price:"9,90"},
    {image: latte, tag:"traditional", title: "Irish", description:"Traditional coffee made with hot water and ground beans", price:"9,90"},
    {image: macchiato, tag:"traditional", title: "Irish", description:"Traditional coffee made with hot water and ground beans", price:"9,90"},
    {image: mocaccino, tag:"traditional", title: "Irish", description:"Traditional coffee made with hot water and ground beans", price:"9,90"},
    
    
]