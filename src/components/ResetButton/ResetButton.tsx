import { useAppDispatch } from "../../services/typeHooks";
import { resetSearch } from '../../services/redux/slices/search/search';
import "./ResetButton.css";
import { FC } from "react";

const ResetButton: FC = () => {
    const dispatch = useAppDispatch();

    return (
        <button className="reset__button" onClick={() => dispatch(resetSearch())} type='button'>
            Сбросить поиск
        </button>
    );
};

export default ResetButton;
