import React from "react"
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";

const Subtotal= () => {
    return (
        <div className="subtotal">
    <CurrencyFormat
renderText={(value) => (
<>
<p>
Subtotal ({basket.length} items):
<strong>{` $(value)` }</strong>
</p>
</>
)}
decimalScale={2}
value={getBasketTotal(basket)}
displayType={"text"}
thousandSeparator={true} prefix={"Rs."}/>
</div>
    );
    }
    export default Subtotal;



