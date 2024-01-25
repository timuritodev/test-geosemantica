import { useEffect, ChangeEvent, FC, useState } from 'react';
import { IAddress } from '../../types/Addres.types';
import { useAppSelector, useAppDispatch } from "../../services/typeHooks";
import { getCoordinatesAPI, resetSearch } from '../../services/redux/slices/search/search';
import "./Search.css";

interface SearchProps {
  onAddressSelect: (address: IAddress) => void;
}

const Search: FC<SearchProps> = ({ onAddressSelect }) => {
  const dispatch = useAppDispatch();
  const addresses = useAppSelector((state) => state.search.address);

  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    if (searchTerm.trim() !== '') {
      dispatch(getCoordinatesAPI(searchTerm));
    }
  }, [dispatch, searchTerm]);

  const handleSelect = (address: IAddress) => {
    onAddressSelect(address);
    setSearchTerm(address.formatted);
  };

  const handleButtonClick = () => {
    setSearchTerm('');
    dispatch(resetSearch());
  };

  return (
    <div className='search'>
      <div className='input__container'>
        <input
          className='input__search'
          type="text"
          placeholder="Введите адрес"
          value={searchTerm}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
        />
        <button className='search__button' type='button' onClick={handleButtonClick}>Сбросить поиск</button>
      </div>
      <ul className='element__container'>
        {addresses.results.length !== 0 &&
          addresses.results.map((address) => (
            <li className='element' key={address.place_id} onClick={() => handleSelect(address)}>
              {address.formatted}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Search;
