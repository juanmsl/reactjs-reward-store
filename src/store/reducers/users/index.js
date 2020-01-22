import {Constants} from "utils";
import API from "api";


export const defaultState = {
    status: Constants.FETCH.STANDBY,
    error: null,
    username: null,
    points: 0,
    history: [],
    statusPoints: Constants.FETCH.STANDBY,
    messagePoints: null
};

export const actionTypes = {
    USERS_GET_REQUEST: 'USERS/GET_REQUEST',
    USERS_GET_SUCCESS: 'USERS/GET_SUCCESS',
    USERS_GET_FAILURE: 'USERS/GET_FAILURE',
    USERS_UPDATE_POINTS_REQUEST: 'USERS/UPDATE_POINTS_REQUEST',
    USERS_UPDATE_POINTS_SUCCESS: 'USERS/UPDATE_POINTS_SUCCESS',
    USERS_UPDATE_POINTS_FAILURE: 'USERS/UPDATE_POINTS_FAILURE',
    USERS_RESET_MESSAGE_POINTS: 'USERS/RESET_MESSAGE_POINTS',
    USERS_GET_HISTORY: 'USERS/GET_HISTORY'
};

export const actions = {
    getUser: () => (dispatch) => {
        dispatch({type: actionTypes.USERS_GET_REQUEST});
        API.getUser((response) => {
            dispatch({type: actionTypes.USERS_GET_SUCCESS, payload: response.data});
        }, (error) => {
            dispatch({type: actionTypes.USERS_GET_FAILURE, payload: error.message});
        });
    },
    addPoints: (amount) => (dispatch) => {
        dispatch({type: actionTypes.USERS_UPDATE_POINTS_REQUEST});
        API.addPoints(amount, (response) => {
            dispatch({type: actionTypes.USERS_UPDATE_POINTS_SUCCESS, payload: response.data});
        }, (error) => {
            dispatch({type: actionTypes.USERS_UPDATE_POINTS_FAILURE, payload: error.response.data.error});
        });
    },
    getHistory: () => (dispatch) => {
        API.getHistory((response) => {
            dispatch({type: actionTypes.USERS_GET_HISTORY, payload: response.data});
        }, (error) => {
            dispatch({type: actionTypes.USERS_GET_HISTORY, payload: []});
        });
    },
    resetMessagePoints: () => (dispatch) => {
        dispatch({type: actionTypes.USERS_RESET_MESSAGE_POINTS});
    }
};

export const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.USERS_GET_REQUEST:
            return {
                ...state,
                status: Constants.FETCH.PROGRESS
            };
        case actionTypes.USERS_GET_SUCCESS:
            return {
                ...state,
                status: Constants.FETCH.SUCCESS,
                username: action.payload.name,
                points: action.payload.points,
                history: action.payload.redeemHistory
            };
        case actionTypes.USERS_GET_FAILURE:
            return {
                ...state,
                status: Constants.FETCH.FAILED,
                error: action.payload
            };
        case actionTypes.USERS_UPDATE_POINTS_REQUEST:
            return {
                ...state,
                statusPoints: Constants.FETCH.PROGRESS,
                messagePoints: 'Operation in progress...'
            };
        case actionTypes.USERS_UPDATE_POINTS_SUCCESS:
            return {
                ...state,
                statusPoints: Constants.FETCH.SUCCESS,
                points: action.payload['New Points'],
                messagePoints: action.payload.message
            };
        case actionTypes.USERS_UPDATE_POINTS_FAILURE:
            return {
                ...state,
                statusPoints: Constants.FETCH.FAILED,
                messagePoints: action.payload
            };
        case actionTypes.USERS_RESET_MESSAGE_POINTS:
            return {
                ...state,
                statusPoints: Constants.FETCH.STANDBY,
                messagePoints: defaultState.messagePoints
            };
        case actionTypes.USERS_GET_HISTORY:
            return {
                ...state,
                history: action.payload
            };
        default:
            return state;
    }
};