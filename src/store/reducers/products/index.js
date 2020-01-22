import {Constants} from 'utils';
import API from "api";
import {actions as UsersActions} from "store/reducers/users";


export const defaultState = {
    products: [],
    status: Constants.FETCH.STANDBY,
    error: null,
    messageRedeem: null,
    statusRedeem: Constants.FETCH.STANDBY
};

export const actionTypes = {
    PRODUCTS_GET_REQUEST: 'PRODUCTS/GET_REQUEST',
    PRODUCTS_GET_SUCCESS: 'PRODUCTS/GET_SUCCESS',
    PRODUCTS_GET_FAILURE: 'PRODUCTS/GET_FAILURE',
    PRODUCTS_REDEEM_REQUEST: 'PRODUCTS/REDEEM_REQUEST',
    PRODUCTS_REDEEM_SUCCESS: 'PRODUCTS/REDEEM_SUCCESS',
    PRODUCTS_REDEEM_FAILURE: 'PRODUCTS/REDEEM_FAILURE',
    PRODUCTS_RESET_MESSAGE_REDEEM: 'PRODUCTS/RESET_MESSAGE_REDEEM'
};

export const actions = {
    getProducts: () => (dispatch) => {
        dispatch({type: actionTypes.PRODUCTS_GET_REQUEST});
        API.getProducts((response) => {
            dispatch({type: actionTypes.PRODUCTS_GET_SUCCESS, payload: response.data});
        }, (error) => {
            dispatch({type: actionTypes.PRODUCTS_GET_FAILURE, payload: error.message});
        });
    },
    redeemProduct: (productId) => (dispatch) => {
        dispatch({type: actionTypes.PRODUCTS_REDEEM_REQUEST});
        API.redeem(productId, (response) => {
            dispatch(UsersActions.getUser());
            dispatch({type: actionTypes.PRODUCTS_REDEEM_SUCCESS, payload: response.data.message});
        }, (error) => {
            dispatch({type: actionTypes.PRODUCTS_REDEEM_FAILURE, payload: error.response.data.error});
        });
    },
    resetMessageRedeem: () => (dispatch) => {
        dispatch({type: actionTypes.PRODUCTS_RESET_MESSAGE_REDEEM});
    }
};

export const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.PRODUCTS_GET_REQUEST:
            return {
                ...state,
                status: Constants.FETCH.PROGRESS,
                error: defaultState.error
            };
        case actionTypes.PRODUCTS_GET_SUCCESS:
            return {
                ...state,
                status: Constants.FETCH.SUCCESS,
                products: action.payload
            };
        case actionTypes.PRODUCTS_GET_FAILURE:
            return {
                ...state,
                status: Constants.FETCH.FAILED,
                error: action.payload
            };
        case actionTypes.PRODUCTS_REDEEM_REQUEST:
            return {
                ...state,
                statusRedeem: Constants.FETCH.PROGRESS,
                messageRedeem: "Redeem in progress..."
            };
        case actionTypes.PRODUCTS_REDEEM_SUCCESS:
            return {
                ...state,
                statusRedeem: Constants.FETCH.SUCCESS,
                messageRedeem: action.payload
            };
        case actionTypes.PRODUCTS_REDEEM_FAILURE:
            return {
                ...state,
                statusRedeem: Constants.FETCH.FAILED,
                messageRedeem: action.payload
            };
        case actionTypes.PRODUCTS_RESET_MESSAGE_REDEEM:
            return {
                ...state,
                statusRedeem: Constants.FETCH.STANDBY,
                messageRedeem: defaultState.messageRedeem
            };
        default:
            return state;
    }
};