import React, { Component } from 'react'
// 方法一：通过props的children去获取
// export default class SlotShow extends Component {
//     render() {
//         const { children } = this.props;
//         return (
//             <div className="slot">
//                 <div className="slot-left">{children[0]}</div>
//                 <div className="slot-center">{children[1]}</div>
//                 <div className="slot-right">{children[2]}</div>
//             </div>
//         )
//     }
// }
// 方法二：根据props传递参数去获取
export default class SlotShow extends Component {
    render() {
        const { slotLeft, slotCenter, slotRight } = this.props;
        return (
            <div className="slot">
                <div className="slot-left">{slotLeft}</div>
                <div className="slot-center">{slotCenter}</div>
                <div className="slot-right">{slotRight}</div>
            </div>
        )
    }
}

