import React, { useEffect, useState } from "react";
import { CryptoState } from "../CryptoContext";
import { HistoricalChart } from "../config/api";
import axios from "axios";
import { data } from "autoprefixer";
import { CircularProgress } from "@mui/material";
import { chartDays } from "../config/data";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import SelectButton from "./SelectButton";
Chart.register(...registerables);

const CoinInfo = ({ coin }) => {
  const [historicalData, setHistoricalData] = useState([]);
  const [days, setDays] = useState(1);
  const { currency } = CryptoState();

  const fetchHistoricalData = async () => {
    const { data } = await axios.get(HistoricalChart(coin?.id, days, currency));
    setHistoricalData(data.prices);
  };
  useEffect(() => {
    fetchHistoricalData();
  }, [currency, days]);

  return (
    <div className="w-full flex flex-col items-center justify-center mt-6 p-10 md:w-full md:mt-0 md:p-5 pt-0">
      {!historicalData ? (
        <CircularProgress />
      ) : (
        <Line
          data={{
            labels: historicalData.map((coin) => {
              let date = new Date(coin[0]);
              let time =
                date.getHours() > 12
                  ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                  : `${date.getHours() - 12}:${date.getMinutes()} AM`;
              return days === 1 ? time : date.toLocaleDateString();
            }),
            datasets: [
              {
                data: historicalData.map((coin) => coin[1]),
                label: `Price (Past ${days} Days in ${currency})`,
                borderColor: "#EEBC1D",
              },
            ],
          }}
          options={{
            elements: {
              point: {
                radius: 1,
              },
            },
          }}
        />
      )}
      <div className="flex mt-5 justify-around w-full">
        {chartDays.map((day) => (
          <SelectButton 
          key={day.value} 
          onClick={() => setDays(day.value)}
          selected={day.value === days}
          >
            {day.label}
          </SelectButton>
        ))}
      </div>
    </div>
  );
};

export default CoinInfo;
