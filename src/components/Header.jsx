import React from "react";
import { Link } from "react-router-dom";
import { CryptoState } from "../CryptoContext";
import { Crypto } from "../CryptoContext";

const Header = () => {
  // const { currency, setCurrency } = useContext(Crypto);
  const { currency, setCurrency } = CryptoState()

    console.log(currency)
  return (
    <header className="static h-[60px] shadow-2xl bg-green-500 dark:bg-red-600 px-5">
      <div className="max-w-6xl mx-auto flex items-center justify-between h-full w-full">
        <Link to="/">
          <div className="font-bold text-3xl cursor-pointer text-[#FFD700]">
            <h1>Crypto Hunter</h1>
          </div>
        </Link>

        <div>
          <select
            id="countries_disabled"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={(e) => setCurrency(e.target.value)}
          >
            <option value={"NGN"}>
              NGN
            </option>
            <option value={"USD"}>USD</option>
          </select>
        </div>
      </div>
    </header>
  );
};

export default Header;
