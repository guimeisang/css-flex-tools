import "./index.scss"
import React, { useState } from 'react'

export default function FlexCore() {
  const [alignContent, setAlignContent] = useState('normal')
  const [flexDirection, setFlexDirection] = useState<FlexDirction>('row')

  return (
    <div className="flexCore-wrapper">
      <div className="review-box" style={{alignContent, flexDirection}}>
        { (Array.from({length: 10}) as Number[]).map((item, index) => {
          return <div className="item">{`item${index}`}</div>
        }) }
      </div>

      <div className="tools">
        <p>Box样式：</p>
        <span>1. flex-direction: </span>
        <select onChange={(event: React.ChangeEvent<HTMLSelectElement>) => { setFlexDirection(String(event.target.value)) }}>
          <option value='row'>row</option>
          <option value='row-reverse'>row-reverse</option>
          <option value='column'>column</option>
          <option value='column-reverse'>column-reverse</option>
        </select>
        <span>2. align-content: </span>
        <select onChange={(event: React.ChangeEvent<HTMLSelectElement>) => { setAlignContent(String(event.target.value)) }}>
          <option value='normal'>normal</option>
          <option value='stretch'>stretch</option>
          <option value='center'>center</option>
          <option value='start'>start</option>
          <option value='end'>end</option>
        </select>
      </div>
    </div>
  )
}