export const ADD_ONE = "ADD_ONE";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY";
export const MEMORY_SET_VALUE = "MEMORY_SET_VALUE";
export const MEMORY_CLEAR_VALUE = "MEMORY_CLEAR_VALUE";
export const MEMORY_APPLY_VALUE = "MEMORY_APPLY_VALUE";

export const addOne = () => {
  return { type: ADD_ONE };
};

export const clearDisplay = () => {
  return { type: CLEAR_DISPLAY };
};

export const changeOperation = (input) => {
  return { type: CHANGE_OPERATION, payload: input };
};

export const applyNumber = (number) => {
  return { type: APPLY_NUMBER, payload: number };
};

export const memorySetValue = () => {
  return { type: MEMORY_SET_VALUE };
};

export const memoryApplyValue = () => {
  return { type: MEMORY_APPLY_VALUE };
};

export const memoryClearValue = () => {
  return { type: MEMORY_CLEAR_VALUE };
};
