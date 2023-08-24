import { useState } from "react";
import "./App.css";
import { Cart } from "./components/Cart";
import { Header } from "./components/Header";
import { Meals } from "./components/Meals";
import CartProvider from "./store/cart-context";

function App() {
  const [cartIsShown, setcartIsShown] = useState(false);
  const showCartHandler = () => {
    setcartIsShown(true);
  };
  const hideCartHandler = () => {
    setcartIsShown(false);
  };
  return (
    <CartProvider>
      {cartIsShown && <Cart cartHide={hideCartHandler}></Cart>}
      <Header cartOpener={showCartHandler}></Header>
      <Meals></Meals>
    </CartProvider>
  );
}

export default App;
