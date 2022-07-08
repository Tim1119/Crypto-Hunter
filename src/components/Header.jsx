import React from "react";
import { Link } from "react-router-dom";
import { CryptoState } from "../CryptoContext";
import { Crypto } from "../CryptoContext";
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';





const Header = () => {
  // const { currency, setCurrency } = useContext(Crypto);
  const { currency, setCurrency } = CryptoState();

  console.log(currency);
  

  return (
    <header className="static h-[60px] shadow-2xl  px-5">
      <div className="max-w-6xl mx-auto flex items-center justify-between h-full w-full">
        <Link to="/">
          <div className="font-bold text-3xl cursor-pointer text-[#FFD700]">
            <h1>Crypto Hunter</h1>
          </div>
        </Link>

        <div>
          <Select
              variant="outlined"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={currency}
              style={{ width: 100, height: 40, marginLeft: 15,color:"#fff",}}
              onChange={(e) => setCurrency(e.target.value)}
              
            >
              <MenuItem value={"USD"}>USD</MenuItem>
              <MenuItem value={"NGN"}>NGN</MenuItem>
            </Select>
        </div>
      </div>
    </header>
  );
};

export default Header;
