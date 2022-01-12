import {
    ADD_TRANS, ADD_PLAN, DELETE_PLAN, DELETE_TRANS, EDIT_PLAN, EDIT_TRANS,
    SET_ID, SET_TRANS, SET_PLANS
} from "./actionTypes";

export const setID = (id) => {
    return {
        type: SET_ID,
        payload: id
    }
}

export const setTransactions = (list) => {
    return {
        type: SET_TRANS,
        payload: list
    }
}

export const setPlans = (list) => {
    return {
        type: SET_PLANS,
        payload: list
    }
}

export const addTransaction = (data) => {
    return {
        type: ADD_TRANS,
        payload: data
    }
}

export const deleteTransaction = (id) => {
    return {
        type: DELETE_TRANS,
        payload: id
    }
}


export const editTransaction = (id, data) => {
    return {
        type: EDIT_TRANS,
        payload: { ...data, id }
    }
}

export const addPlan = (data) => {
    return {
        type: ADD_PLAN,
        payload: data
    }
}

export const deletePlan = (id) => {
    return {
        type: DELETE_PLAN,
        payload: id
    }
}

export const editPlan = (id, data) => {
    return {
        type: EDIT_PLAN,
        payload: { ...data, id }
    }
}
