import React from 'react'

function Modal2() {
  return (
    <div className='bg-white w-full h-fit mt-12'>
      <h2 className='font-semibold text-xl pb-2'>1. Hardware</h2>
      <p>3D프린터의 하드웨어는 이전 연구실 연구원들이 제작한 세라믹용 광경화 3D프린터를 조금 더 개선시켜서 진행.</p>
      <h3 className='font-medium text-xl pb-2'>1.1. DLP_modeling</h3>
      <h4 className='font-medium text-md pb-2'>[기존 3D프린터 모델링 데이터]</h4>
      <img style={{ height: '400px' }} src="https://user-images.githubusercontent.com/85150616/190361121-0117c724-f518-464e-87e6-159c2f0b06a6.PNG" alt="3D프린터-Original" />
      <h4 className='font-medium text-md pb-2'>[최종 3D프린터 모델링 데이터]</h4>
      <img style={{ height: '400px' }} src="https://user-images.githubusercontent.com/85150616/252551598-225661aa-9097-4f11-bbe2-9b790dc30527.png" alt="3D프린터-Original" />

      <h4 className='font-medium text-md pb-2'>🧐behind modeling</h4>
      <h5 className='font-medium text-md pb-2 text-start'>고점도 세라믹 레진을 토출하기 위해 여러 모델링을 실험해 봤습니다.
        1차적으로는 제어하기 쉬운 스텝모터를 이용해 여러 형상으로 토출을 시도해 봤으나 필요압력이 높아 구조물이 외압을 버티기 힘들어 3차 시도 끝에 공압기로 압력을 가해 토출하는 방식을 차용했습니다.</h5>
      <img style={{ height: '400px' }} src="https://user-images.githubusercontent.com/85150616/252553219-81f908d7-b5df-4674-a14d-b1e2606ae90b.png" alt="3D프린터-Original" />
      <h5 className='font-medium text-md pb-2 text-start'>
        사용된 시료 주사기는 250ml 공업용 주사기에 3D프린터 및 o-ring으로 커스텀하여 사용하였습니다.
      </h5>
      <h3 className='font-medium text-xl pb-2'>1.2. DLP_arduino</h3>
      <img style={{ height: '400px' }} src="https://github.com/JinkyoJB/DLP_auto/assets/85150616/7b37ed0c-1cc7-4d04-a820-3659f3038f4d" alt="3D프린터-Original" />
      <h5 className='font-medium text-md pb-2 text-start'> 아두이노는 시리얼 통신을 통해 말단의 모터,센서를 제어하며 컴퓨터의 GUI명령 또한 시리얼 통신으로 입력받습니다. 모터의 동작은 비동기방식이여야 하므로 일정 동작이 끝난 뒤, 아두이노는 '*'과 같은 특정 시그널을 통해 동작의 끝남을 컴퓨터에게 알리는 방식을 차용하였습니다.</h5>
      <h3 className='font-medium text-xl pb-2'>1.3 블레이드 히팅</h3>
      <h5 className='font-medium text-md pb-2 text-start'> 세라믹의 점도 및 흐름성은 온도에 반비례하는 특성을 지니므로 고점도 세라믹을 도포 시 40-70도의 블레이드가 필요합니다.
        따라서 모델링 및 가공하여 블레이드 양측에 열봉이 1개씩 삽입되고 중앙에 온도센서를 부착한 히팅 블레이드를 적용했습니다.
      </h5>
      <img style={{ height: '400px' }} src="https://github.com/JinkyoJB/DLP_auto/assets/85150616/c7f71921-4a4c-4389-809c-38c307e3b3d1" alt="3D프린터-Original" />
      <h3 className='font-medium text-xl pb-2'>1.4 flow-chart 및 diagram</h3>
      <img style={{ height: '400px' }} src="https://github.com/JinkyoJB/DLP_auto/assets/85150616/76975f1e-7250-40cc-8057-768efe1efead" alt="3D프린터-Original" />
      <img style={{ height: '400px' }} src="https://github.com/JinkyoJB/DLP_auto/assets/85150616/e84d451b-f473-4da6-96c7-77da7228ad32" alt="3D프린터-Original" />

    </div>      
  )
}

export default Modal2