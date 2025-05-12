import { useId } from "react";
import getCurrencyInfo from "../hooks/CurrencyInfo";

function CurrencyInput({
  label = "",
  options = [],
  amountDisabled = false,
  currencyDisabled = false,
  onCurrencyChange,
  amount,
  onAmountChange,
  selectCurrency = "usd",
  className = "",
}) {
  

  const amountId = useId();
  const optionId = useId();

  return (
    <>
      <div className={`flex gap-12 ${className}`}>
        {/* Amount */}
        <div className="flex flex-col w-full">
          <label
            htmlFor={amountId}
            className="block text-sm font-medium text-white"
          >
            {label}
          </label>
          <input
            type="number"
            name=""
            id={amountId}
            value={amount || ""}
            placeholder="0.00"
            className="mt-1 p-2 w-full  rounded-md bg-white shadow-sm focus:ring focus:ring-indigo-200 placeholder:text-black "
            disabled={amountDisabled}
            onChange={(e) => {
              onAmountChange && onAmountChange(Number(e.target.value));
            }}
          />
        </div>

        <div className="flex flex-col w-full">
          {/* Currency */}
          <label
            htmlFor={optionId}
            className="block text-sm font-medium text-white"
          >
            Select Currency
          </label>
          <select
            name=""
            id={optionId}
            value={selectCurrency}
            disabled={currencyDisabled}
            className="mt-1 p-2 w-full rounded-md bg-white shadow-sm focus:ring focus:ring-indigo-200"
            onChange={(e) => {
              onCurrencyChange && onCurrencyChange(e.target.value);
            }}
          >
            {options.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
}

export default CurrencyInput;
