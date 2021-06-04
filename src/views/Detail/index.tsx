import * as React from 'react'
import Hello from './components/hello'
import { Input } from './components/input'

const Detail: React.FunctionComponent = (props) => {
  return (
    <>
      <h1>详情页</h1>
      <Hello compiler="ts" framework="react" />
      <Input state="" />
    </>
  )
}

export default Detail
