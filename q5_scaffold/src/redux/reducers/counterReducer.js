// add counter action creators imports here

import { DECREASE_COUNTER, INCREASE_COUNTER, RESET_COUNTER } from "../actions/counterActions";



const INITIAL_STATE = { count: 0 };

// define counter reducer function here
export const counterReducer = (state = INITIAL_STATE,action) =>{
    switch(action.type){
        case INCREASE_COUNTER:
            return {
                count:++state.count
            }


        case DECREASE_COUNTER:
            return {
                count:--state.count
            }

        case RESET_COUNTER:
            return{
                count:0
            }

        default:
            return state;
    }

}
