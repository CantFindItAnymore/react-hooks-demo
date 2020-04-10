import React, { useState, useEffect } from 'react'

const MouseChange = () => {
  // ----------------------------------
  // useEffect
  // 可以理解为这样一个生命周期：( 组件加载完成 || 组件更新完成 || 组件即将卸载 )时

  // 1. 产生某些副作用 ↓
  // useEffect(() => {
  //   console.log('useEffect -- do something')
  // })

  // 2. 消除某些副作用 ↓
  const [ clickPosition, setClickPosition ] = useState({x: 0, y: 0})
  useEffect(() => {
    console.log('mouseChange执行了')
    // 下面这种注释掉的写法--每次组件更新时都会添加一个监听事件，会大量重复(内存泄漏，页面卡死)！so，我们要清除它！
    // document.addEventListener('click', (e) => {
    //   console.log('有几个我？')
    //   setPosition({ x: e.clientX, y: e.clientY })
    // })

    // 下面这种写法这样理解 ↓
    // 这其实是一个发布订阅模式，在组件加载完成或更新时订阅监听器，在组件卸载时清除监听器。
    const mouseClickUpdated = e => {
      console.log('订阅监听器')
      setClickPosition({ x: e.clientX, y: e.clientY })
    }

    document.addEventListener('click', mouseClickUpdated)
    // 清除副作用函数
    // useEffect的return函数在组件卸载时执行(可以理解为class中触发render时) ↓
    return () => {
      console.log('移除监听器')
      document.removeEventListener('click', mouseClickUpdated)
    }
  })

  return (
    <p>
      X: { clickPosition.x }<br />
      Y: { clickPosition.y }
    </p>
  )
}

export default MouseChange