import { useEffect, useState } from "react";
import CurrencyInput from "./components/CurrencyInput";
import getCurrencyInfo from "./hooks/CurrencyInfo";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);
  const formRef = useRef(null);

  const currency = getCurrencyInfo(from);
  const options = Object.keys(currency);

  const convert = () => {
    const converted = amount * Number(currency[to]);
    setConvertedAmount(converted.toFixed(2));
  };
  const Swap = () => {
    setAmount(convertedAmount);
    setConvertedAmount(amount);
    setFrom(to);
    setTo(from);
    
  };


  return (
    <>
      <section
        className="m-auto h-screen flex flex-col gap-4 justify-center items-center font-mono
      "
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
        }}
      >
        <form
          className="p-8 rounded-2xl shadow-md w-full max-w-lg backdrop-blur-xs"
          onSubmit={(e) => {
            e.preventDefault();
            convert();
            console.log("Submit");
          }}
          ref={formRef}
        >
          <div className="mb-4">
            <CurrencyInput
              label="From"
              amount={amount}
              selectCurrency={from}
              onCurrencyChange={(currency) => setFrom(currency)}
              onAmountChange={(amount) => setAmount(amount)}
              options={options}
            //   onKeyDown={(e) => {
            //   if (e.key === "Enter") {
            //     convert();
            //   }
            // }}
            />
          </div>
          <div className="mb-4 flex justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg
         "
              onClick={Swap}
            >
              Swap
            </button>
          </div>
          <div className="mb-8">
            <CurrencyInput
              label="To"
              amount={convertedAmount}
              selectCurrency={to}
              amountDisabled
              onCurrencyChange={(currency) => setTo(currency)}
              onAmountChange={(amount) => setAmount(amount)}
              options={options}
            />
          </div>
          <div>
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg w-full"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default App;
