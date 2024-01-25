import React, { useState } from "react";
import Map from "./components/Map/Map";
import Search from "./components/Search/Search";
import "./App.css";
import { IAddress } from "./types/Addres.types";
import ResetButton from "./components/ResetButton/ResetButton";
import { useAppSelector } from "./services/typeHooks";

const App: React.FC = () => {
  const addresses = useAppSelector((state) => state.search.address);
  const [selectedAddress, setSelectedAddress] = useState<IAddress | null>(null);

  const handleAddressSelect = (address: IAddress) => {
    setSelectedAddress(address);
  };

  return (
    <div className="app">
      <div className="input-container">
        <Search onAddressSelect={handleAddressSelect} />
      </div>
      <Map coordinates={selectedAddress?.geometry.coordinates || [0, 0]} />
      {addresses.features.length !== 0 && <ResetButton />}
    </div>
  );
};

export default App;
