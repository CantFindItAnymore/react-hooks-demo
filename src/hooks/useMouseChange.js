// 用于组件之间复用逻辑
// 不会复用state
// 命名必以use开头
import { useState, useEffect } from 'react'

const useMouseChange = () => {
  useEffect(() => {
    console.log('useEffect -- do something')
  })

  const [ position, setPosition ] = useState({x: 0, y: 0})
  useEffect(() => {
    const mouseUpdated = (e) => {
      console.log('订阅监听器')
      setPosition({ x: e.clientX, y: e.clientY })
    }

    document.addEventListener('mousemove', mouseUpdated)
    return () => {
      console.log('移除监听器')
      document.removeEventListener('mousemove', mouseUpdated)
    }
  })

  return position
}

export default useMouseChange