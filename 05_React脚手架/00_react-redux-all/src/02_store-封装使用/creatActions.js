import * as contansTypes from './contans'

const action = (num) => ({
    type: contansTypes.INCREMENT,
    num
})

export {
    action
}