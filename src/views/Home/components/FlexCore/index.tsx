import React, { useState } from 'react'
import './index.scss'

export default function FlexCore() {
  const [alignContent, setAlignContent] = useState('normal')
  const [flexDirection, setFlexDirection] = useState('row')
  const [flexWrap, setFlexWrap] = useState('nowrap')
  const [justifyContent, setJustifyContent] = useState('flex-start')
  const [alignItems, setAlignItems] = useState('flex-start')

  return (
    <div className="flexCore-wrapper">
      <div
        className="review-box"
        style={
          {
            alignContent,
            flexDirection,
            flexWrap,
            justifyContent,
            alignItems,
          } as React.CSSProperties
        }
      >
        {(Array.from({ length: 10 }) as Number[]).map((_, index) => {
          return <div className="item">{`item${index}`}</div>
        })}
      </div>

      <div className="tools">
        <p>Box样式：</p>
        <div className="setting-box">
          <span>1. flex-direction: </span>
          <select
            onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
              setFlexDirection(String(event.target.value))
            }}
          >
            <option value="row">row</option>
            <option value="row-reverse">row-reverse</option>
            <option value="column">column</option>
            <option value="column-reverse">column-reverse</option>
          </select>
        </div>
        <div className="setting-box">
          <span>2. flex-wrap: </span>
          <select
            onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
              setFlexWrap(String(event.target.value))
            }}
          >
            <option value="nowrap">nowrap</option>
            <option value="wrap">wrap</option>
            <option value="wrap-reverse">wrap-reverse</option>
          </select>
        </div>
        <div className="setting-box">
          <span>3. align-content: </span>
          <select
            onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
              setAlignContent(String(event.target.value))
            }}
          >
            <option value="normal">normal</option>
            <option value="stretch">stretch</option>
            <option value="center">center</option>
            <option value="start">start</option>
            <option value="end">end</option>
          </select>
        </div>
        <div className="setting-box">
          <span>4. justify-content: </span>
          <select
            onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
              setJustifyContent(String(event.target.value))
            }}
          >
            <option value="flex-start">flex-start</option>
            <option value="flex-end">flex-end</option>
            <option value="center">center</option>
            <option value="space-between">space-between</option>
            <option value="space-around">space-around</option>
          </select>
        </div>
        <div className="setting-box">
          <span>5. align-items: </span>
          <select
            onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
              setAlignItems(String(event.target.value))
            }}
          >
            <option value="flex-start">flex-start</option>
            <option value="flex-end">flex-end</option>
            <option value="center">center</option>
            <option value="baseline">baseline</option>
            <option value="stretch">stretch</option>
          </select>
        </div>
        <div
          style={{
            border: '1px solid #ccc',
            padding: '10px',
          }}
        >
          <p>item的属性设置: </p>
          <p>order: 定义项目的排列顺序，数字越少越在前面</p>
          <p>
            flex-grow: 定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大
          </p>
          <p>
            flex-shrink: 定义项目的缩小比例，默认是1，即如果空间不足，也不缩小
          </p>
          <p>
            flex-basis: 定义了在分配多余空间之前，项目占据的主轴空间（main
            size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小
          </p>
          <p>
            flex: flex属性是flex-grow, flex-shrink 和
            flex-basis的简写，默认值为0 1 auto
          </p>
          <p>
            align-self:
            align-self属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。
            默认值：auto | flex-start | flex-end | center | baseline | stretch
          </p>
        </div>
      </div>
    </div>
  )
}
