import React, { useState } from 'react';
import LikeButton from './components/UseState/index'
import MouseChange from './components/UseEffect/index'
import DogGallery from './components/ControlEffect/index'
import useMouseChange from './hooks/useMouseChange'
import useUrlLoader from './hooks/useUrlLoader'
import UseRef from './components/UseRef'

const DogGalleryWithHook = () => {
  const [ res, loading ] = useUrlLoader('https://dog.ceo/api/breeds/image/random')
  return (
    <div style={{ height: '500px', display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'pink' }} >
      {
        loading
        ? <span>==dog读取中==</span>
        : <img src={ res && res.message } alt='dog' style={{ height: '100%' }} />
      }
    </div>
  )
}

const CatGalleryWithHook = () => {
  const [ category, setCategory ] = useState('1')
  const [ res, loading ] = useUrlLoader(`https://api.thecatapi.com/v1/images/search?limit=1&category_ids=${category}`)
  return (
    <>
      <div style={{ height: '500px', display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'orange' }} >
        {
          loading
          ? <span>==cat读取中==</span>
          : <img src={ res && res[0] && res[0].url } alt='cat' style={{ height: '100%' }} />
        }
      </div>
      <button onClick={
        () => { setCategory('1') }
      }>更换帽子猫猫</button>
      <button onClick={
        () => { setCategory('5') }
      }>更换盒子猫猫</button>
    </>
  )
}

function App() {
  const position = useMouseChange()
  return (
    <div className="App">
      <p className='title'>
        1. useState
      </p>
      <LikeButton />
      <p className='title'>
        2. useEffect
      </p>
      <MouseChange />
      <p className='title'>
        3. 控制useEffect
      </p>
      <DogGallery />
      <DogGalleryWithHook />
      <CatGalleryWithHook />
      <p className='title'>
        4. 自定义hooks
      </p>
      <p>
        X: { position.x }<br/>
        Y: { position.y }
      </p>
      <p className='title'>
        5. useRef
      </p>
      <UseRef/>
    </div>
  );
}

export default App;
