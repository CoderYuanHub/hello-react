import * as contanTypes from './contans';
const increment = () => ({
    type: contanTypes.increment
});

const decrement = (number) => ({
    type: contanTypes.decrement,
    number
})

export {
    increment,
    decrement
}