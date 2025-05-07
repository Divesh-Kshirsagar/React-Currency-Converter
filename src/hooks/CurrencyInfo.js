import { useEffect } from "react";
import { useState } from "react";

function getCurrencyInfo(currency){
    currency = currency.toLowerCase()
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((response) => response.json())
        .then((res) => {
            setData(res[currency]);
        })
    }, [currency]);
    
    return data
}

export default getCurrencyInfo;