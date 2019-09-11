import React, { useState, useEffect } from 'react'
import axios from 'axios'

const DogGallery = () => {

  const [ url, setUrl ] = useState('')
  const [ loading, setLoading ] = useState(false)
  const [ fetch, setFetch ] = useState(false)

  useEffect(() => {
    setLoading(true)
    axios.get('https://dog.ceo/api/breeds/image/random')
      .then(res => {
        setUrl(res.data.message)
        setLoading(false)
      })
  }, [fetch])
  // ↑注意此处的[]，
  // useEffect的第二个参数是一个数组
  // 表示组件更新时useEffect是否执行取决于这些参数中的某一个是否改变
  // 空数组则表示不依赖任何参数，useEffect只在组件首次加载时执行一次

  return (
    <>
      <button onClick={ () => { setFetch(!fetch) } }>更换图片</button>
      <br/>
        <div style={{ height: '500px', display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#ccc' }} >
          {
            loading
            ? <span>==dog读取中==</span>
            : <img src={ url } alt='dog' style={{ height: '100%' }} />
          }
        </div>
    </>
  )
}

export default DogGallery
