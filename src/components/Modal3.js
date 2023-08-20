import React from 'react'

//imgs
import fig10a from '../assets/figure10a.png';
import fig10b from '../assets/figure10b.png';
import fig10c from '../assets/figure10c.png';

//components

function Modal3() {
  return (
    <div className='bg-white w-full h-fit mt-12'>
          <div className='flex flex-col divide-y'>
                <div className="row1">
                  <h1 className='text-2xl my-4 font-semibold'>결함 분류</h1>
                    <figure class="text-center">
                        <img className='w-full' src="https://user-images.githubusercontent.com/85150616/252557504-ebb91870-656c-4c79-95e9-7ff584c73bb4.png" alt="classification" />
                    </figure>
                    <h2 className='text-left my-2 p-2 my-2 text-lg'>
                      <p className='font-semibold'>정상상태(Normal)와 출력 중 빈번한 결함들로 분류하였다.</p>
                        <br /> 
                        <div className='flex'>
                          <p className='font-semibold mr-2'>기계 자체적으로 조치를 취할 수 있는 상태: </p><p>미미한 결함(Minor defect), 기공 상태(Pore)</p> 
                      </div>
                      <div className='flex'>
                          <p className='font-semibold mr-2'>적층이 아예 불가능한 상태: </p><p>심각한 문제(Critical) 및 기계오류 문제(Error)</p>
                      </div>
                        <br />
                      <p className='font-semibold'>총 5가지의 유형으로 분류하였다.</p>
                        
                    </h2>
                
                </div>
            <div className="row2">
                  <h1 className='text-2xl my-4 font-semibold'>데이터셋 준비</h1>
                    <div className="row2">
                      <h2 className="text-lg text-left ml-4 my-4 font-semibold">1. 노광 영역 추출</h2>
                        <div className='grid grid-cols-3'>
                            <div className="col1">
                              <figure class="text-center">
                                  <img className='w-72' src={fig10a} alt="fig10a" />
                              </figure>
                            </div>
                            <div className="col2">
                              <figure class="text-center">
                                  <img className='w-72' src={fig10b} alt="fig10b" />
                              </figure>
                            </div>
                            <div className="col3">
                              <figure class="text-center">
                                  <img className='w-72' src={fig10c} alt="fig10c" />
                              </figure>
                            </div>
                        </div>
                        <p>
                          (a)는 UV 노광 단계에서 카메라로 촬영된 3024*4032px의 크기의 원
                          본 이미지이다. 해당 이미지에는 적층된 표면도 촬영되지만, 도포 날 및 구조
                          물도 촬영되며 이는 분석에 필요한 데이터가 아니므로, 신경망의 입력데이터
                          에서 불필요한 용량을 차지한다. 따라서 원본 이미지에서 원하는 특징이 추출
                          될 수 있는 데이터만 추출하는 과정을 진행했다.
                        </p>
                        <iframe
                          src="https://nbviewer.org/github/JinkyoJB/JKSite/blob/main/src/assets/DLP_preprocessing.ipynb"
                            title="Jupyter Notebook Viewer"
                            width="100%"
                            height="800px"
                        ></iframe>
                  
                  </div>
                  <div className="row2">
                      <h2 className="text-lg text-left ml-4 my-4">2. 이미지 전처리</h2>
                  </div>
            </div>
            <div className="row2">
                <h1>CNN</h1>
            </div>
            <div className="row2">
                <h1>성능평가</h1>
            </div>
            <div className="row2">
                <h1>GUI</h1>
            </div>
       </div>
    </div>
  )
}

export default Modal3