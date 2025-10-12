import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App.tsx'


/**
 * todo: [x ] Increase and Decrease products in Home
 * todo: [x ] Using reducer to add products to cart
 * todo: [ ] Using ContextAdd products quantity into the cart on the Home header
 * todo: [ ] Send products to checkout page
 * todo: Add products to checkout page
 * 
 */

createRoot(document.getElementById('root')!).render(

  <StrictMode>
    <App />
  </StrictMode>
)
