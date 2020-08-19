import React, { useState } from 'react'
import 'rjx-ui'

const LikeButton = () => {
  // useState用于在函数组件中添加和管理状态
  // useStete之间互不相干，但一个useState中的多个state必须同步更新，因为hook中的state总是替换 ↓

  // 1.
  // const [ like, setLike ] = useState(0)
  // const [ on, setOn ] = useState('on')

  // 2.
  const [ obj, setObj ] = useState({like: 0, on: true})

  return (
    <>
    {/* rjx-ui的使用 */}
      <div className="r-header">
        <div className="left"><i className="fa fa-chevron-left"></i> 返回</div>
        <div className="title">hooks demo</div>
        <div className="right"><i className="fa fa-ellipsis-h"></i></div>
      </div>
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
