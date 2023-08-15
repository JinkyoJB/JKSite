import React from 'react'

function Project() {
  return (
    <div className='ProjectPage'>
      <div className='flex flex-col place-items-start px-16 py-2 pt-4'>
        <h1 className='font-semibold text-xl pb-2'>#1. 딥러닝을 통한 DLP 3D프린터 출력 자동화</h1>
        <p className='text-start'>2021~2022</p>
        <p className='text-start'>서울과학기술대학교 특수정밀가공 및 생산연구실</p>
        <p className='text-start'>세라믹 및 금속 재료의 광경화 타입 3D프린터 -  딥러닝 기술을 기반으로 한 전공정 자동화 프로젝트</p>
        <video style={{height:'600px'}} className=' my-4' controls src="https://user-images.githubusercontent.com/85150616/190361339-f62668f7-aa68-4073-84bd-3492f415d7a6.mp4"></video>
        <h2 className='font-semibold text-xl pb-2'>1. Hardware</h2>
        <p>3D프린터의 하드웨어는 이전 연구실 연구원들이 제작한 세라믹용 광경화 3D프린터를 조금 더 개선시켜서 진행</p>
        <h3 className='font-medium text-xl pb-2'>1.1. DLP_modeling</h3>
        <h4 className='font-medium text-md pb-2'>[기존 3D프린터 모델링 데이터]</h4>
        <img style={{ height: '400px' }} src="https://user-images.githubusercontent.com/85150616/190361121-0117c724-f518-464e-87e6-159c2f0b06a6.PNG" alt="3D프린터-Original" />
        <h4 className='font-medium text-md pb-2'>[최종 3D프린터 모델링 데이터]</h4>
        <img style={{ height: '400px' }} src="https://user-images.githubusercontent.com/85150616/252551598-225661aa-9097-4f11-bbe2-9b790dc30527.png" alt="3D프린터-Original" />

        <h4 className='font-medium text-md pb-2'>🧐behind modeling</h4>
        <h5 className='font-medium text-md pb-2 text-start'>고점도 세라믹 레진을 토출하기 위해 여러 모델링을 실험해 봤습니다.
          1차적으로는 제어하기 쉬운 스텝모터를 이용해 여러 형상으로 토출을 시도해 봤으나 필요압력이 높아 구조물이 외압을 버티기 힘들어 3차 시도 끝에 공압기로 압력을 가해 토출하는 방식을 차용했습니다.</h5>
        <img style={{ height: '400px' }} src="https://user-images.githubusercontent.com/85150616/252553219-81f908d7-b5df-4674-a14d-b1e2606ae90b.png" alt="3D프린터-Original" />

        <h2 className='font-semibold text-xl pb-2'>2. Software</h2>
        {/* ... */}
        <h2 className='font-semibold text-xl pb-2'>3. Deep learning</h2>
        {/* ... */}
        <h3 className='font-semibold text-xl pb-2'>3.1. DLP_dataset</h3>
        {/* ... */}
        <h3 className='font-semibold text-xl pb-2'>3.2. DLP_data_augmentation</h3>
        {/* ... */}
        <h3 className='font-semibold text-xl pb-2'>3.3. DLP_deepLearning</h3>
        {/* ... */}
        <h3 className='font-semibold text-xl pb-2'>결과</h3>
        <img src="https://github.com/JinkyoJB/DLP_auto/assets/85150616/14204e1a-42d2-4f73-982e-01b5b90a408f" alt="결과 이미지" />
        <h3 className='font-semibold text-xl pb-2'>3.4. DLP_yolo5(testing)</h3>
        <p>현재는 도포 과정이 아닌 전과정에서 일어날 수 있는 결함을 yolo5로 관측하기 위해 test 중입니다.</p>
      </div>
    </div>
  )
}

export default Project