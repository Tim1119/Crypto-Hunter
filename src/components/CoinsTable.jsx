import React, { useEffect, useState } from "react";
import { CoinList } from "../config/api";
import axios from "axios";
import { CryptoState } from "../CryptoContext";
import { LinearProgress, Table, TableCell, TableContainer, TableHead, TableRow, TextField } from "@mui/material";

const CoinTable = () => {
  const { currency, symbol } = CryptoState();

  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchCoins();
  }, [currency]);

  const fetchCoins = async () => {
    setLoading(true);

    const { data } = await axios.get(CoinList(currency));
    setCoins(data);
    setLoading(false);
  };

  return (
    <div className="text-center max-w-5xl mx-auto">
      <h4 className="m-5 font-montserrat text-3xl">
        Cryptocurrency Prices By Market Cap
      </h4>
      <input
        placeholder="Search for a Crypto Currency"
        className="p-2 w-full text-black outline-none border-none"
      onChange={(e)=> setSearch(e.target.value)}

      />
      <TableContainer>
        {
          loading ? (
            <LinearProgress style={{backgroundColor:"gold"}} />
          ):(
            <Table>
              <TableHead style={{backgroundColor:"#EEBC1D"}} >
                  <TableRow>
                  {["Coin", "Price", "24h Change", "Market Cap"].map((head) => (
                    <TableCell
                      style={{
                        color: "black",
                        fontWeight: "700",
                        fontFamily: "Montserrat",
                      }}
                      key={head}
                      align={head === "Coin" ? "" : "right"}
                    >
                      {head}
                    </TableCell>
                  ))}
                  </TableRow>
              </TableHead>
            </Table>
          )
        }
      </TableContainer>
    </div>
  );
};

export default CoinTable;
