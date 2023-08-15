import React from 'react'

import p1 from '../assets/p1.jpeg';

import {
  Carousel,
  initTE,
} from "tw-elements";

initTE({ Carousel });

function History() {
  return (
    <div className='HistoryPage flex flex-col px-8'>
      <div className="col1 flex flex-row gap-4 py-4 h-48">
        <div className="row2 border-r-4 pr-8 flex items-center">
          <p style={{ fontSize:'20px'}}>2013.03 ~ 2017.02</p>
        </div>
        <div className="row1 border-r-4 pr-8">
          <img src={p1} className='h-40 object-cover rounded-full'/>
        </div>
        <div className="row3 flex flex-col items-center justify-center h-full">
          <p style={{ fontSize: '20px' }}>목포해양대학교 기관시스템공학부​</p>
          <p style={{ fontSize: '16px' }}>복수전공 전기제어공학과​</p>
        </div>
      </div>
      <div className="col1 flex flex-row gap-4 py-4 h-48">
        <div className="row2 border-r-4 pr-8 flex items-center">
          <p style={{ fontSize: '20px' }}>2018.06 ~ 2020.06</p>
        </div>
        <div className="row2 border-r-4">2</div>
        <div className="row3 ">3</div>
      </div>
      <div className="col1 flex flex-row gap-4 py-4 h-48">
        <div className="row2 border-r-4 pr-8 flex items-center">
          <p style={{ fontSize: '20px' }}>2020.08 ~ 2023.02</p>
        </div>
        <div className="row2 border-r-4">2</div>
        <div className="row3">3</div>
      </div>
      <div className="col1 flex flex-row gap-4 py-4 h-48">
        <div className="row2 border-r-4 pr-8 flex items-center">
          <p style={{ fontSize: '20px' }}>2023.02 ~ 2023.07</p>
        </div>
        <div className="row2 border-r-4">2</div>
        <div className="row3">3</div>
      </div>
    </div>
  )
}

export default History