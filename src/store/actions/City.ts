import { Dispatch } from "redux";
import { CityAction, CityActionType } from "../../types/cities";

export const setCountry = (country: string) => (dispatch: Dispatch<CityAction>) => {
    dispatch({
        type: CityActionType.GET_COUNTRY,
        payload: country
    });
};

export const setCityList = (city: string[]) => (dispatch: Dispatch<CityAction>) => {
    dispatch({
        type: CityActionType.GET_CITY_LIST,
        payload: city
    });
};