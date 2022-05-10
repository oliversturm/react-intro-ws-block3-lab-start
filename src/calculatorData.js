import { createContext, useContext, useReducer } from 'react';

// Stack array and levels. There are as many levels as given by
// `length`, but they are the other way round (due to pretty dumb
// JS array datatype).
//
// stack.length = 5
// stack[4] => level 1
// stack[3] => level 2
// stack[2] => level 3
// stack[1] => level 4
// stack[0] => level 5

const placeholder = '0';

const extractLevel = (s, l) => (l <= s.length ? s[s.length - l] : placeholder);

const to = (prefix, base) => (v) =>
  `${prefix}: ${parseFloat(v, 10).toString(base)}`;
const toHex = to('Hex', 16);
const toOct = to('Oct', 8);
const toBin = to('Bin', 2);

const reducer = (state, action) => {
  switch (action.type) {
    case 'value0append':
      const { value0: v0 } = state;
      const {
        payload: { once: o, char: c },
      } = action;
      return {
        ...state,
        value0:
          o && v0.includes(c) ? v0 : `${v0 === placeholder ? '' : v0}${c}`,
      };

    case 'value0push':
      return {
        ...state,
        stack: state.stack.concat(state.value0),
        value0: placeholder,
      };

    case 'acceptBinOpResult':
      return {
        ...state,
        stack: state.stack.slice(0, -1),
        value0: action.payload.result,
      };

    default:
      return state;
  }
};

const value0append = (dispatch) => (char, once) =>
  dispatch({ type: 'value0append', payload: { char, once } });

const value0push = (dispatch) => () =>
  dispatch({ type: 'value0push', payload: {} });

const acceptBinOpResult = (dispatch) => (result) =>
  dispatch({ type: 'acceptBinOpResult', payload: { result } });

export const useCalculatorData = () => {
  const { state, dispatch } = useContext(CalculatorContext);

  return {
    stack: {
      value1: extractLevel(state.stack, 1),
      value2: extractLevel(state.stack, 2),
      value3: extractLevel(state.stack, 3),
      value4: extractLevel(state.stack, 4),
    },
    value0: state.value0,
    hexValue0: toHex(state.value0),
    octValue0: toOct(state.value0),
    binValue0: toBin(state.value0),
    actions: {
      value0append: value0append(dispatch),
      value0push: value0push(dispatch),
      acceptBinOpResult: acceptBinOpResult(dispatch),
    },
  };
};

export const useCalculatorDefaultData = () => {
  const [state, dispatch] = useReducer(reducer, {
    stack: [],
    value0: placeholder,
  });
  return { state, dispatch };
};

export const CalculatorContext = createContext();
