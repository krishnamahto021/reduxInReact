// define counter action constants here
export const INCREASE_COUNTER = 'Increase Counter';
export const DECREASE_COUNTER = 'Decrease Counter';
export const RESET_COUNTER = 'Reset Counter';

// define counter action creators here
export const increaseCounter = ()=>({type:INCREASE_COUNTER});
export const decreaseCounter = ()=>({type:DECREASE_COUNTER});
export const resetCounter = ()=>({type:RESET_COUNTER});
