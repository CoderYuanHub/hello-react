# Learn React

记录React学习过程中的笔记～

## 一、JSX语法

- **JSX中的注释**

```jsx
render() {
    return(
        <div>
        {/* JSX语法注释 */}
        <h2>hello world</h2>
        </div>
    )
}
```

- **JSX中数据注意项**

  数据显示类型：String、Number、Array

  数据不显示类型：null、undefined、 Boolean（需要显示时，要转为字符串）

  数据不支持类型：Object

- **JSX中支持表达式**

  运算符表达式、三元表达式、函数表达式

## 二、组件表示方法

函数表示法、class类表示法

## 三、React常用的生命周期（面试题）

![9962E0AE-4F75-464B-8F8F-DD4BC9276D19](/Users/yuan/Desktop/DEMO/hello-react/99_MdFile/9962E0AE-4F75-464B-8F8F-DD4BC9276D19.png)

部分不常用生命周期可查看官网：https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

## 四、父子间传值

react中父子组件传值都是通过props传递的，跟Vue是有一些区别的，具体案例如下：

```
import { Component } from 'react';
class NavbarItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0
        }
    }
    render() {
        const { titles } = this.props;
        const { activeIndex } = this.state;
        return (
            <div className="nav">
                {titles.map((item, index) => {
                    return <div onClick={e => this.changeIndex(index)} className={"nav-item " + (activeIndex === index ? "is-active" : "")} key={item}>{item}</div>
                })}
            </div>
        )
    }
    changeIndex(index) {
        this.setState({
            activeIndex: index
        });
        // 子组件通过props传递index参数回去给父组件
        this.props.changeIndex(index);
    }
}
export default class Navbar extends Component {
    constructor() {
        super();
        this.state = {
            titles: ["媒体", "动画", "游戏"],
            activeIndex: 0
        }
    }
    render() {
        return (
            <div>
                {/* 父组件传递titles、changeIndex属性给子组件，changeIndex同时接收子组件传递回来的参数 */}
                <NavbarItem changeIndex={index => this.getIndex(index)} titles={this.state.titles} />
                <div>{ this.state.titles[this.state.activeIndex] }</div>
            </div>
        )
    }
    getIndex(index) {
        this.setState({
            activeIndex: index
        })
    }
}
```

## 五、setState的使用(面试题)

this.setState({} || Function, callback),该函数可以接收两个参数，第一个参数可以接收对象和方法，第二个参数是该函数的执行回调（可不选）

**setState是可以是异步也可以是同步的**

异步情况：

```javascript
// 异步情况,方法一：通过回调获取到更新完的值
this.setState({
  counter: this.state.counter + 1
}, () => {
  console.log('拿到更新完的值', this.state.counter)
})
console.log("setState是异步情况", this.state.counter);
```

同步情况：

```javascript
//情况一：
setTimeout(() => {
  this.setState({
    counter: this.state.counter + 1
  })
  console.log("setState是同步情况", this.state.counter);
}, 0)
//情况二：
const btn = document.getElementById("btn");
btn.addEventListener('click', () => {
  this.setState({
    counter: this.state.counter + 1
  })
  console.log("setState是同步情况", this.state.counter);
})
```

总结：

- 在组件生命周期或React合成事件中，setState是异步的；
- 在setTimeout或者原生dom事件只，setState是同步的；

## 六、DIFF算法（面试）

React将树的复杂度O(n3)优化成O(n)，具体方法如下：

- 同层节点之间相互比较，不会跨节点比较；
- 不同类型的节点，产生不同的树结构；
- 开发中，可以通过key来指定哪些节点在不同的渲染下保持稳定；

#### 情况一：对比不同类型的元素

![diff-对比不同类型的元素](/Users/yuan/Desktop/DEMO/hello-react/99_MdFile/diff-对比不同类型的元素.png)

#### 情况二：对比同一类型的元素

![diff-对比同一类型的元素](/Users/yuan/Desktop/DEMO/hello-react/99_MdFile/diff-对比同一类型的元素.png)

#### 情况三：对节点进行递归

![diff-对节点进行递归](/Users/yuan/Desktop/DEMO/hello-react/99_MdFile/diff-对节点进行递归.png)

#### 情况四：keys的优化

![diff-keys的优化](/Users/yuan/Desktop/DEMO/hello-react/99_MdFile/diff-keys的优化.png)

