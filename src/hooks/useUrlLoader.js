/***
 *  自定义hook
 * */

import { useState, useEffect } from 'react'
import axios from 'axios'

const UseUrlLoader = (url) => {
  const [ res, setRes ] = useState(null)
  const [ loading, setLoading ] = useState(false)

  useEffect(() => {
    setLoading(true)
    axios.get(url)
      .then(res => {
        console.log(res)
        setRes(res.data)
        setLoading(false)
      })
  }, [url])
  return [res, loading]
}

export default UseUrlLoader
