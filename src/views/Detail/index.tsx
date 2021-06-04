import { observable } from 'mobx'
import * as React from 'react'
import Hello from './components/hello'
import { Input, InputState } from './components/input'
import { observer } from 'mobx-react-lite'

class DetailState {
  @observable
  input: InputState = new InputState()
}

const Detail: React.FunctionComponent = observer((props) => {
  return (
    <>
      <h1>详情页</h1>
      <Hello compiler="ts" framework="react" />
      <Input state={DetailState} />
    </>
  )
})

export default Detail
