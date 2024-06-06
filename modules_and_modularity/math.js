const add = (a, b) => {
    return a + b;
};

const sub = (a, b) => {
    return a - b;
};

const mul = (a, b) => {
    return a * b;
};

const div = (a, b) => {
    if (b === 0) {
        console.error("division by 0 is not possible");
        return undefined;
    }
    return a / b;
};

module.exports = {
    addFunction: add,
    subFunction: sub,
    mulFunction: mul,
    divFunction: div
};
