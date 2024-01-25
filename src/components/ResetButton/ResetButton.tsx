import { useAppDispatch } from "../../services/typeHooks";
import { resetSearch } from '../../services/redux/slices/search/search';
import "./ResetButton.css";
import { FC } from "react";

const ResetButton: FC = () => {
    const dispatch = useAppDispatch();

    const handleClickButton = () => {
        dispatch(resetSearch());
    }
    return (
        <button className="reset__button" onClick={handleClickButton} type='button'>
            Сбросить результаты поиска
        </button>
    );
};

export default ResetButton;
