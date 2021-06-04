import React from 'react'

const Hello: React.FunctionComponent<{ compiler: string; framework: string }> =
  (props) => {
    return (
      <>
        <div>{props.compiler}</div>
        <div>{props.framework}</div>
      </>
    )
  }

export default Hello
