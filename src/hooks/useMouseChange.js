// 用于组件之间复用逻辑
// 不会复用state
// 命名必以use开头
import { useState, useEffect } from 'react'

const useMouseChange = () => {
  // useEffect(() => {
  //   console.log('useEffect -- do something')
  // })

  const [ movePosition, setMovePosition ] = useState({x: 0, y: 0})
  useEffect(() => {
    const mouseMoveUpdated = (e) => {
      // console.log('订阅监听器')
      setMovePosition({ x: e.clientX, y: e.clientY })
    }

    document.addEventListener('mousemove', mouseMoveUpdated)
    return () => {
      // console.log('移除监听器')
      document.removeEventListener('mousemove', mouseMoveUpdated)
    }
  })

  return movePosition
}

export default useMouseChange