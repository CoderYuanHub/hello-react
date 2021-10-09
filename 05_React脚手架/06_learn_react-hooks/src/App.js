import React, { useState } from 'react'

export default function App() {
  const [counter, setCounter] = useState(0);
  const [userInfo, setUserInfo] = useState({
    name: "wyy",
    age: 18,
    height: 1.88
  })
  return (
    <div>
      <h2>Hooks初体验</h2>
      <p>初始值：{counter}</p>
      <button onClick={e => setCounter(counter + 1)}>增加</button>
      <p>用户姓名：{userInfo.name}</p>
      <p>用户身高：{userInfo.height}</p>
      <p>用户年龄：{userInfo.age}</p>
    </div>
  )
}
