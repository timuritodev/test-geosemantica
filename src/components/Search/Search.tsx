import React, { useEffect, ChangeEvent } from 'react';
import { IAddress } from '../../types/Addres.types';
import { useAppSelector, useAppDispatch } from "../../services/typeHooks";
import { getCoordinatesAPI } from '../../services/redux/slices/search/search';
import "./Search.css";

interface SearchProps {
  onAddressSelect: (address: IAddress) => void;
}

const Search: React.FC<SearchProps> = ({ onAddressSelect }) => {
  const dispatch = useAppDispatch();
  const addresses = useAppSelector((state) => state.search.address);

  const [searchTerm, setSearchTerm] = React.useState<string>('');

  useEffect(() => {
    if (searchTerm.trim() !== '') {
      dispatch(getCoordinatesAPI(searchTerm));
    }
  }, [dispatch, searchTerm]);

  const handleSelect = (address: IAddress) => {
    onAddressSelect(address);
  };

  return (
    <div className='search'>
      <input
        className='input__search'
        type="text"
        placeholder="Введите адрес"
        value={searchTerm}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
      />
      <ul className='element__container'>
        {addresses.features.length !== 0 &&
          addresses.features.map((address) => (
            <li className='element' key={address.properties.place_id} onClick={() => handleSelect(address)}>
              {address.properties.formatted}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Search;
