export const defaultState = {
    orderByOptions: [
        {value: 'name/ASC', label: 'Name'},
        {value: 'cost/ASC', label: 'Lowest Cost'},
        {value: 'cost/DSC', label: 'Highest Cost'}
    ],
    orderBy: 'name/ASC',
    name: ''
};

export const actionTypes = {
    FILTERS_SET_NAME: 'FILTERS/SET_NAME',
    FILTERS_SET_ORDER_BY: 'FILTERS/SET_ORDER_BY'
};

export const actions = {
    setName: (name) => (dispatch) => {
        dispatch({type: actionTypes.FILTERS_SET_NAME, payload: name});
    },
    setOrderBy: (orderBy) => (dispatch) => {
        dispatch({type: actionTypes.FILTERS_SET_ORDER_BY, payload: orderBy});
    },
};

export const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.FILTERS_SET_NAME:
            return {
                ...state,
                name: action.payload
            };
        case actionTypes.FILTERS_SET_ORDER_BY:
            return {
                ...state,
                orderBy: action.payload
            };
        default:
            return state;
    }
};