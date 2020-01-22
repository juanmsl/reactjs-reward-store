import {combineReducers} from "redux";
import {reducer as ProductsReducer} from "./products";
import {reducer as UsersReducer} from "./users";
import {reducer as FiltersReducer} from "./filters";

const reducers = {
    products: ProductsReducer,
    users: UsersReducer,
    filters: FiltersReducer
};

export default combineReducers(reducers);