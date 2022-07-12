import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CryptoState } from "../CryptoContext";
import axios from "axios";
import { SingleCoin } from "../config/api";
import CoinInfo from "../components/CoinInfo";
import ReactHtmlParser from "react-html-parser";
import { CircularProgress } from "@mui/material";

export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const CoinPage = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState();
  const [loading, setLoading] = useState(false);

  const { currency, symbol } = CryptoState();

  const fetchCoin = async () => {
    setLoading(true);
    const { data } = await axios.get(SingleCoin(id));
    setCoin(data);
    console.log('fff',data)
    setLoading(false);
  };

  useEffect(() => {
    fetchCoin();
    console.log('dddddd',coin)
  }, [currency]);
 

  return (
    <div className="flex flex-col md:flex-row ">
      <div className="md:basis-1/3 md:border-r border-gray-400 flex flex-col items-center mt-10">
        <img
          src={coin?.image.large}
          alt={coin?.name}
          className="w-52 object-fit"
        />
        <h3 className="font-bold mb-5 text-4xl ">{coin?.name}</h3>
        <p className="p-6 w-full text-justify">
          {ReactHtmlParser(coin?.description.en.split(". ")[0])}.
        </p>
        <div className="text-left w-full px-6">
          <span className="flex text-xl font-bold">
          Rank: {coin?.market_cap_rank.toLocaleString('en-US')}
          </span>
          <span className="flex text-xl font-bold">
            Current Price: {symbol}{" "}
            {coin?.market_data.current_price[currency.toLowerCase()].toLocaleString('en-US')}
          </span>
          <span className="flex text-xl font-bold">
            Mark. Cap: {symbol}{" "}
            {coin?.market_data.market_cap[currency.toLowerCase()].toLocaleString('en-US')} M
          </span>
        </div>
      </div>
      {coin ? (<CoinInfo coin={coin} className=" bg-blue-300 md:basis-3/4 " />) : <CircularProgress />}
    
    </div>
  );
};

export default CoinPage;
