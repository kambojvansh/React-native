export const initialState = {
    currentValue: 0,
    operator: null,
    previousValue: null,
    curruntValueShow: " ",
    dot: null,
};

// export const handleNumber2 = (value, state) => {
//     return {
//         currentValue: `${value}`,
//         curruntValueShow: `${state.curruntValueShow}${value}`
//     };
// }

export const handleNumber = (value, state) => {
    // alert(eval(this.state.curruntValueShow))
    if (state.currentValue === "0") {
        // if (state.operator) {
        //     handleNumber2(value, state)
        //     handleEqual(state)
        // }
        // handleNumber2(value, state)
        return {
            currentValue: `${value}`,
            curruntValueShow: `${state.curruntValueShow}${value}`,
        };
    }

    return {
        currentValue: `${state.currentValue}${value}`,
        curruntValueShow: `${state.curruntValueShow}${value}`,
        // result: `${eval(state.curruntValueShow.toLocaleString())}`,
        // result: `${eval("2+2+2+2")}`,

        // this.handleEqual(state)

    };


};

export const handleEqual = state => {
    const { currentValue, previousValue, operator } = state;

    const current = parseFloat(currentValue);
    const previous = parseFloat(previousValue);
    const resetState = {

        operator: null,
        // previousValue: null,
        dot: null
    };

    if (operator === "/") {
        return {
            currentValue: previous / current,
            // this.curruntValueShow:"/",
            ...resetState
        };
    }

    if (operator === "*") {
        return {
            currentValue: previous * current,
            ...resetState
        };
    }

    if (operator === "+") {
        return {
            currentValue: previous + current,
            // ...handleEqual(state),
            ...resetState
        };
    }

    if (operator === "-") {
        return {
            currentValue: previous - current,
            ...resetState
        };
    }

    return state;
};

const calculator = (type, value, state) => {
    switch (type) {
        case "number":
            return handleNumber(value, state);
        case "operator":
            return {
                operator: value,
                previousValue: state.currentValue,
                curruntValueShow: state.curruntValueShow + value,
                currentValue: "0",
            };
        case "equal":
            return handleEqual(state);
        case "clear":
            return initialState;
        case "posneg":
            return {
                currentValue: `${parseFloat(state.currentValue) * -1}`,
                curruntValueShow: `${parseFloat(state.currentValue) * -1}`,

            };
        case "percentage":
            return {
                currentValue: `${parseFloat(state.currentValue) * 0.01}`,
                curruntValueShow: `${parseFloat(state.currentValue) * 0.01}`
            };
        default:
            return state;
    }
};

export default calculator;
