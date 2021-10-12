import React, { useState } from 'react'
import UseEffectCpn from './01_useEffect使用/UseEffectCpn';
import UseContextCpn from './02_useContext使用/UseContextCpn';
import UseReducerCpn from './03_useReducer使用/UseReducerCpn';
const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
};
export const ThemeContext = React.createContext(themes.light);

export default function App() {
  const [counter, setCounter] = useState(0);
  const [isLogin, setIsLogin] = useState(true)
  const [userInfo, setUserInfo] = useState({
    name: "wyy",
    age: 18,
    height: 1.88
  })
  function switchCpn() {
    setIsLogin(!isLogin);
  }
  return (
    <div>
      <h2>Hooks初体验</h2>
      <p>初始值：{counter}</p>
      <button onClick={e => setCounter(counter + 1)}>增加</button>
      <p>用户姓名：{userInfo.name}</p>
      <p>用户身高：{userInfo.height}</p>
      <p>用户年龄：{userInfo.age}</p>
      <hr />
      {isLogin ? <UseEffectCpn /> : null}
      <ThemeContext.Provider value={{
        foreground: "#000000",
        background: "#eeeeee"
      }}>
        <UseContextCpn />
      </ThemeContext.Provider>
      <UseReducerCpn />
      <button onClick={e => switchCpn()}>切换</button>
    </div>
  )
}
