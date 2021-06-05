import { observable } from 'mobx'
import * as React from 'react'
import Hello from './components/hello'
import { observer } from 'mobx-react-lite'

const Detail: React.FunctionComponent = observer((props) => {
  return (
    <>
      <h1>详情页</h1>
      <Hello compiler="ts" framework="react" />
    </>
  )
})

export default Detail
