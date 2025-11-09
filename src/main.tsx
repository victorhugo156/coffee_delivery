import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App.tsx'


/**
 * todo: [x ] Increase and Decrease products in Home
 * todo: [x ] Using reducer to add products to cart
 * todo: [x ] Send products to checkout page
 * todo: [x ] Add products to checkout page
 * todo: [ x] Increase and Decrease products in Checkout page
 * todo: [ x] I need to update the total price of the cart when the user
 *           increase or decrease the quantity of the products
 * 
 *  * todo: [ ] I need to connect the checkout page to the post code API to get the delivery fee
 *  * todo: [ ] I need to enable the payments buttons
 *  * todo: [ ] I need to link the checkout page to the Success page
 *  * todo: [ ] Start with the backend in node.js
 * 
 */

createRoot(document.getElementById('root')!).render(

  <StrictMode>
    <App />
  </StrictMode>
)
