import CityState, { CityAction, CityActionType } from "../../types/cities";


const initialState: CityState = {
    country: 'Россия',
    cities: []
};

export const cityReducer = (state: CityState = initialState, action: CityAction): CityState => {
    switch (action.type) {
        case CityActionType.GET_COUNTRY: return {
            ...state,
            country: action.payload
        }
        case CityActionType.GET_CITY_LIST: return {
            ...state,
            cities: action.payload
        }
        default: return state
    }
}