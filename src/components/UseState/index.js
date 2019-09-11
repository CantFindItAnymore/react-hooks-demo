import React, { useState } from 'react'

const LikeButton = () => {
  // useState用于在函数组件中添加和管理状态
  // useStete之间互不相干，但一个useState中的state必须同步更新 ↓

  // 1.
  // const [ like, setLike ] = useState(0)
  // const [ on, setOn ] = useState('on')

  // 2.
  const [ obj, setObj ] = useState({like: 0, on: true})

  return (
    <>
      <button onClick={
        () => { setObj({ like: obj.like+1, on: obj.on }) }
      }>
        { obj.like } 赞
      </button>

      <button onClick = {
        () => { setObj({ like: obj.like, on: !obj.on }) }
      }>
        状态：{ obj.on ? 'on' : 'off' }
      </button>
    </>
  )
}

export default LikeButton
