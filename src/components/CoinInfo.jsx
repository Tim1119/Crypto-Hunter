import React, { useEffect, useState } from 'react'
import { CryptoState } from '../CryptoContext'
import { HistoricalChart } from '../config/api'
import axios from 'axios'
import { data } from 'autoprefixer'
import { CircularProgress } from '@mui/material'
import { Line } from 'react-chartjs-2'
const CoinInfo = () => {

  const [historicalData,setHistoricalData] = useState([]) 
  const [days,setDays]=useState(1)
  const {currency,coin} = CryptoState()

  const fetchHistoricalData = async () =>{
    const {data} = await axios.get(HistoricalChart(coin.id,days,currency))
    setHistoricalData(data.prices)
  }
  useEffect(()=>{
    
    fetchHistoricalData(data.prices)
  },[currency,days])


  return (
    <div className="w-3/4 flex flex-col items-center justify-center mt-6 p-10 md:w-full md:mt-0 md:p-5 pt-0" >
        {
          !historicalData ? (
            <CircularProgress />
          ):(
            <Line data={{
              labels:{}
            }} />
          )
        }
      <div>

      </div>
    </div>
  )
}

export default CoinInfo