import { useState } from "react";

function CurrencyConvertor() {

    const [amount, setAmount] = useState("");
    const [currency, setCurrency] = useState("");

    const handleSubmit = () => {

        const euro = (Number(amount) / 90).toFixed(2);

        setCurrency(euro);

        alert(`Converting to Euro: ${euro}`);
    };

    return (

        <div>

            <h1 style={{ color: "green" }}>
                Currency Convertor!!!
            </h1>

            <p>
                Amount
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />
            </p>

            <p>
                Currency
                <input
                    type="text"
                    value={currency}
                    readOnly
                />
            </p>

            <button onClick={handleSubmit}>
                Submit
            </button>

        </div>
    );
}

export default CurrencyConvertor;