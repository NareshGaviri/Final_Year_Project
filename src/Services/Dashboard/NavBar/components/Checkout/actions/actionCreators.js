import ACTIONS from "./actionTypes"

export const dataRequest=()=>{
    return{
        type:ACTIONS.DATA_REQUEST
    }
}
export const dataSuccess=(payload)=>{
    return{
        type:ACTIONS.DATA_SUCCESS,
        payload
    }
}

export const dataFailure=(payload)=>{
    return{
        type:ACTIONS.DATA_SUCCESS,
        payload
    }
}