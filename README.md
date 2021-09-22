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

## 三、React常用的生命周期

![9962E0AE-4F75-464B-8F8F-DD4BC9276D19](/Users/yuan/Desktop/DEMO/hello-react/99_MdFile/9962E0AE-4F75-464B-8F8F-DD4BC9276D19.png)

部分不常用生命周期可查看官网：https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

## 四、父子间传值

如下：

```
//通过props传递参数
//父组件render()
render() {
    console.log("执行了render方法");
    return (
        <div>
            <ChildCpn name="wyy" age={18} height={188}></ChildCpn>
        </div>
    )
}
//自组件render()
render() {
    const { name, age, height, arr } = this.props;
    return (
    		<div>{ name + age + height }</div>
    )
}
```

