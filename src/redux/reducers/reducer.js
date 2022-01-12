import { combineReducers } from 'redux';
import { ADD_TRANS, ADD_PLAN, DELETE_PLAN, DELETE_TRANS, EDIT_PLAN, EDIT_TRANS, SET_ID, SET_PLANS, SET_TRANS } from '../actions/actionTypes';

const setIDReducer = (state = {}, action) => {
    switch (action.type) {
        case SET_ID:
            return { id: action.pyload };
        default:
            return state;
    }
}

const transactionReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TRANS:
            return [
                ...state,
                { ...action.payload }
            ];
        case DELETE_TRANS:
            return [
                ...state
            ].filter(item => item.id !== action.payload);
        case EDIT_TRANS:
            const item = [...state].filter(item => item.id === action.payload.id);
            return [...state, { ...item, ...action.payload.data }];
        case SET_TRANS:
            return [...action.payload];
        default:
            return state;
    }
}

const planReducer = (state = [], action) => {
    switch (action.type) {
        case SET_PLANS:
            return [...action.payload];
        case ADD_PLAN:
            return [
                ...state,
                { ...action.payload, id: 1 + state.length }
            ];
        case DELETE_PLAN:
            return [
                ...state
            ].filter(item => item.id !== action.payload);
        case EDIT_PLAN:
            const item = [...state].filter(item => item.id === action.payload.id);
            return [...state, { ...item, ...action.payload.data }];
        default:
            return state;
    }
}

export const rootReducer = combineReducers({
    transactions: transactionReducer,
    plans: planReducer,
    id: setIDReducer
});

