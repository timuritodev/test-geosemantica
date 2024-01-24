import React, { useState } from "react";
import Map from "./components/Map/Map";
import Search from "./components/Search/Search";
import "./App.css";
import { IAddress } from "./types/Addres.types";

const App: React.FC = () => {
  const [selectedAddress, setSelectedAddress] = useState<IAddress | null>(null);

  const handleAddressSelect = (address: IAddress) => {
    setSelectedAddress(address);
    console.log(selectedAddress, "app");
  };

  return (
    <div className="container">
      <div className="input-container">
        <Search onAddressSelect={handleAddressSelect} />
      </div>
      <Map coordinates={selectedAddress?.geometry.coordinates || [0, 0]} />
    </div>
  );
};

export default App;
