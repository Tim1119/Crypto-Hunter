import axios from "axios";
import React, { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import { Link } from "react-router-dom";
import { TrendingCoins } from "../config/api";
import { CryptoState } from "../CryptoContext";


export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const Carousel = () => {
  const [trending, setTrending] = useState([]);
  const { currency, symbol } = CryptoState();

  const fetchTrendingCoins = async () => {
    const { data } = await axios.get(TrendingCoins(currency));
    setTrending(data);
  };
  // useEffect(() => {
  //   fetchTrendingCoins();
  // }, [currency]);

  // number of carousel image s to be shown on the screen
  const responsive = { 0: { items: 2 }, 512: { items: 4 } };

  const items = trending.map((coin) => {
   
    return (
      <Link to={`/coins/${coin.id}`} className='grid place-items-center' >
        <img src={coin?.image} className="h-[80px] mb-3" alt={coin.name} />
        <span>
          {coin?.symbol} &nbsp;
          {coin?.price_change_percentage_24h > 0 ? (
            <span className="text-green-500 my-5">
              {" "}
              + {coin.price_change_percentage_24h?.toFixed(2)}
            </span>
          ) : (
            <span className="text-red-500 my-5">
              {coin.price_change_percentage_24h?.toFixed(2)}
            </span>
          )}
        </span>
        <span className="text-xl font-[500]" >
            {symbol} {numberWithCommas(coin?.current_price.toFixed(2))}
        </span>
      </Link>
    );
  });

  console.log(trending);

  return (
    <div className="h-1/2 flex items-center">
      <AliceCarousel
         mouseTracking
        infinite
        autoPlayInterval={1000}
        animationDuration={1500}
        disableDotsControls
        disableButtonsControls
        responsive={responsive}
        items={items}
        autoPlay
      />
    </div>
  );
};

export default Carousel;
