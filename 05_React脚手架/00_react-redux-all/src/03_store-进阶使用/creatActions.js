// 用于定义操作类型，是个对象
import * as contansTypes from './contans'

const action = (num) => ({
    type: contansTypes.INCREMENT,
    num
})

export {
    action
}