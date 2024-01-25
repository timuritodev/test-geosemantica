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

  const coordinates: [number, number] = [
    selectedAddress?.lon || 0, 
    selectedAddress?.lat || 0,  
  ];

  return (
    <div className="app">
      <div className="input-container">
        <Search onAddressSelect={handleAddressSelect} />
      </div>
      <Map coordinates={coordinates || [0, 0]} />
      {addresses.results.length !== 0 && <ResetButton />}
    </div>
  );
};

export default App;
