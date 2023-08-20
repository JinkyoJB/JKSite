import React from 'react'

//imgs
import fig10a from '../assets/figure10a.png';
import fig10b from '../assets/figure10b.png';
import fig10c from '../assets/figure10c.png';
import fig11a from '../assets/figure11a.png';
import fig11b from '../assets/figure11b.png';
import fig12 from '../assets/figure12.png';
import fig13 from '../assets/figure13.png';
import table2 from '../assets/table2.png';
import figr1 from '../assets/figr1.png';
import figr2 from '../assets/figr2.png';
import figr3 from '../assets/figr3.png';
import figr4 from '../assets/figr4.png';
import alex1 from '../assets/alex1.png';
import densenet1 from '../assets/densenet1.png';
import google1 from '../assets/google1.png';
import resnet1 from '../assets/resnet1.png';
import result1 from '../assets/result1.png';
import result2 from '../assets/result2.png';


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
                <h1 className='text-2xl my-4 font-semibold'>데이터 전처리</h1>
                    <div className="row2">
                      <h2 className="text-lg text-left ml-8 my-4 font-semibold">1. 노광 영역 추출</h2>
            <div className='grid grid-cols-3 place-content-around mx-8'>
                            <div className="col1">
                <figure class="text-center justify-center">
                                  <img className='w-full' src={fig10a} alt="fig10a" />
                              </figure>
                            </div>
                            <div className="col2">
                              <figure class="text-center">
                  <img className='lg:h-96 object-fit' src={fig10b} alt="fig10b" />
                              </figure>
                            </div>
                            <div className="col3">
                              <figure class="text-center">
                  <img className='w-full' src={fig10c} alt="fig10c" />
                              </figure>
                            </div>
                        </div>
                        <p className='ml-8 text-start'>
                          (a)는 UV 노광 단계에서 카메라로 촬영된 3024*4032px의 크기의 원
                          본 이미지이다. 해당 이미지에는 적층된 표면도 촬영되지만, 도포 날 및 구조
                          물도 촬영되며 이는 분석에 필요한 데이터가 아니므로, 신경망의 입력데이터
                          에서 불필요한 용량을 차지한다. 따라서 원본 이미지에서 원하는 특징이 추출
                          될 수 있는 데이터만 추출하는 과정을 진행했다.
                        </p>

                  
                  </div>
          <div className='grid grid-cols-2 mx-4 gap-2 ml-8'>
            <div className="row1">
              <figure class="text-center">
                <img className='w-full' src={fig11a} alt="fig11a" />
              </figure>
            </div>
            <div className="row2">
              <figure class="text-center">
                <img className='w-full' src={fig11b} alt="fig11b" />
              </figure>
            </div>
          </div>
          <div className='text-left mx-4 my-2 gap-2 ml-8'>
            <p className='mb-2'>
              (a)와 같이 외곽선 데이터의 최솟값과 최댓값
              을 이용해 시편 영역을 포함한 사변형의 꼭짓점 영역을 정의하여 시편 영역만
              추출하였다. 추출된 이미지의 원본 크기는 가로, 세로가 511~514px로 일정한
              크기의 입력으로 만들기 위해 512*512px의 크기로 reshape하였다.
            </p>
            <p>
              OpenCV 모듈의 Contour line을 입력 이미지와 합성하여
              Contour line 외부영역은 RGB 값을 일정 값(빨간색)으로 설정하여 Dead zone
              을 생성하였다. 이미지는 (b)와 같이 처리되며, 해당 처리로 인해서 노
              광된 Target zone만 표면 상태분석 학습이 진행되어 시편의 품질이 아닌 서포
              터 부분이 표면 평가에 영향을 주는 것을 방지한다.
            </p>
          </div>
          <div className="row2 flex flex-col justify-center items-center">
                    <h2 className="text-lg text-left ml-4 my-4 font-semibold self-start">2. 차원 축소</h2>
                    <figure class="text-left my-2 mb-4">
                      <img className='h-96' src={fig12} alt="fig12" />
                    </figure>
                    <p className='text-left ml-8 mb-2'>
                      하드웨어의 메모리 용량은 기술 및 비용적인 측면에서 부담되므로 입력 이미지의 품질 데이터 손실이 없는 내에서 차원축
                      소를 위한 전처리를 진행하였다.</p> 
            <p className='text-left ml-8'>
                      이미지와 같이 결점이 있는 이미지 사진에서 가장 작은 결점의 픽셀을 보면 10px로 차원축소를
                      하여도 4px의 크기로 결점 데이터가 손실되지 않은 것을 확인하였으며, 전체
                      적으로 512ⅹ512px의 입력데이터를 224ⅹ224px 크기로 차원축소를 진행하였다.
                    </p>
                  </div>
          <div className="row3 flex flex-col justify-center items-center">
            <h2 className="text-lg text-left ml-4 my-4 font-semibold self-start">3. Augmentation</h2>
            <figure class="text-left my-2 mb-4 mx-8">
              <img className='h-96' src={table2} alt="table2" />
            </figure>
            <p className='text-left ml-8 mb-2 self-start'>
              원본 이미지에는 예시 사진과 같이 ‘강아지 존재’에 대한 정보가
              담겨있다.
            </p>
            <p className='text-left ml-8 self-start'>
              좌우반전 및 상하반전을 진행해도 ‘강아지 존재’에 대한 데이터
              손실은 발생하지 않는다. 랜덤위치합성은 ‘강아지 존재’에 대한 정보가 없
              는 배경에 ‘강아지 존재’가 있는 정보를 합성하여 인위적으로 데이터를 생
              성하는 방법이다. Normal은 일정 개수 이상 확보되었으므로 기본적인 좌우반
              전만을 적용하였고, Critical과 Pore는 좌우반전과 상하반전을 사용하여 데이터
              셋양을 증가시켰다. Error은 RGB특징이 분명하고, 상대적으로 발생 가중치가
              낮으므로 Augmentation을 적용하지 않았다. Minor_defect는 상대적으로 원본
              개수가 적어 3가지 Augmentation을 적용하였으며, 도포면 품질 데이터에서는
              결점 데이터가 없는 Normal에 결점 데이터를 추출 및 일정 범위 내의 랜덤한
              크기와 랜덤한 위치에 합성하여 이미지를 생성하였다. 
            </p>
            <p className='text-left ml-4 self-start'>
              Augmentation을 적용한 최종 개수의 전체비율이 25% 내외가 되도록 하여 가중치를 비슷하게 학습하
              도록 적용하였다.
            </p>
          </div>
          <div className="row4 flex flex-col justify-center items-center">
            <h2 className="text-lg text-left ml-8 my-4 font-semibold self-start">4. RGB픽셀값 표준화</h2>
            <figure class="text-left my-2 mb-4 mx-8">
              <img className='h-96 overflow-auto' src={fig13} alt="fig13" />
            </figure>
          </div>
          <div className="row5 flex flex-col justify-center items-center">
            <h2 className="text-lg text-left ml-8 my-4 font-semibold self-start">5. 전처리 코드</h2>
            <iframe
              src="https://nbviewer.org/github/JinkyoJB/JKSite/blob/main/src/assets/DLP_preprocessing.ipynb"
              title="Jupyter Notebook Viewer"
              width="100%"
              height="800px"
            ></iframe>
          </div>
  
            </div>
            <div className="row2">
              <h1 className='text-2xl my-4 font-semibold'>CNN</h1>
          <div className="col1 flex flex-col justify-center items-center">
            <h2 className='text-lg text-left ml-8 my-4 font-semibold self-start'>적용한 알고리즘</h2>
            <ul>
              <li className="li1 text-left mx-8 flex flex-col">
                <h3 className="text-lg text-left ml-8 my-4 font-semibold self-start">1. AlexNet</h3>
                <figure className="text-left my-2 mb-4 mx-8 self-center">
                  <img className='w-fit' src={figr1} alt="figr1" />
                </figure>
                    <p>
                      2012년에 개최된 이미지넷 분류 경
                      진대회에서 우승을 차지한 이미지 CNN의 기초적인 알고리즘이다.
                      <br />
                       빠른 연산을 위해 GPU 병렬연산이 처음 적용되었으며, 과적합방지를 위한 Dropout
                        기술 및 ReLU함수가 적용된 논문이다. 
                  <br /><br />이후에 개발된 알고리즘에 비해 비교
                      적 연산층의 깊이가 깊지 않아 빠른 연산속도로 이미지 특징을 추출할 수 있
                      는 장점이 고려되어 학습을 진행하였다. 
                    </p>
              </li>
              <li className="li2 text-left mx-8">
                <h3 className="text-lg text-left ml-8 my-4 font-semibold self-start">2. GoogLeNet</h3>
                <figure className="text-left my-2 mb-4 mx-8 self-center">
                  <img className='w-fit' src={figr2} alt="figr2" />
                </figure>
                    
                    <p>
                  GoogLeNet은 2014년도에 이미지넷 분류 경진대회에서 우승한 알고리즘으로 AlexNet보다 좀 더 깊은 22
                  개의 층으로 구성되어 있다. 해당 알고리즘은 1ⅹ1사이즈의 filter Convolution
                  연산을 통해 특성맵의 개수를 줄여 연산량을 획기적으로 줄이는 방법이 적용
                  되었으며, Inception모듈을 통해 좀 더 다양한 종류의 특성이 도출되도록 한
                  알고리즘이다.<br /> <br />지르코니아 도포 표면 데이터셋은 기존 이미지넷 분류 경진대회에 적용된 데이터셋보다 이미지 크기가 2배정도로 더 크므로, 연산의 효율
                  을 높일 필요가 있어 해당 알고리즘의 적합성이 고려하여 학습을 진행하였다.
                    </p>
              </li>
              <li className="li3 text-left mx-8 flex flex-col">
                <h3 className="text-lg text-left ml-8 my-4 font-semibold self-start">3. ResNet</h3>
                <figure className="text-left my-2 mb-4 mx-8 self-center">
                  <img className='w-fit' src={figr3} alt="figr3" />
                </figure>
                <p>
                  152개의 층으로 구성되어 있어 앞서 언급된 GoogLeNet에 비
                  해 7배가 깊어진 구조로 되어 있다. 신경망이 일정이상 깊어지면 성능향상
                  이 미비해지거나 더 나빠지는 현상이 발생하는데 연산 과정 중 미분의 기울기
                  (gradient)가 급속히 작아지는 Vanishing gradient 문제로 인한 것으로, 해당 알
                  고리즘은 이를 해결하기 위해 Residual learning block 또는 Skip connection이
                  라 불리는 신경망을 적용한 알고리즘이다. 또한, 신경망이 깊어질수록 연산시
                  간이 증가하므로 이를 해결하기 위해 Bottleneck design 구조를 사용하여 신경
                  망의 복잡도를 줄이고 연산시간을 감소시켰다.
                  <br /><br /> 이러한 ResNet 알고리즘은 이
                  미지넷 분류 경진대회에서도 사람의 분류 에러율인 5%를 뛰어넘는 3.6%의 에
                  러율을 보여주었으며 해당 데이터셋에도 효과적으로 적용되는지 확인하기 위
                  해 목적 데이터셋을 학습하였다.
                </p>
              </li>
              <li className="4 text-left mx-8 flex flex-col">
                <h3 className="text-lg text-left ml-8 my-4 font-semibold self-start">4. DenseNet</h3>
                <figure className="text-left my-2 mb-4 mx-8 self-center">
                  <img className='w-fit' src={figr4} alt="figr4" />
                </figure>
                <p>
                  2017년도에 CVPR(컴퓨터 비전 및 패턴인식
                  학회, Conference on computer vision and pattern recognition)에서 발표된
                  DenseNet으로 각 layer를 Feedforward 방식으로 다른 모든 Layer에 연결하는
                  Convolution 네트워크를 적용함으로써 Vanishing gradient 문제를 완화하고 특
                  징 전파를 강화하며 매개변수의 수를 줄여 연산을 사용한 알고리즘이다.
                  본 논문에서 주장한 바에 따르면 ResNet 알고리즘보다 좀 더 개선된 알고리
                  즘으로 ImageNet 데이터셋을 적용했을 때 ResNet 알고리즘보다 성능향상이
                  된 것을 확인할 수 있다.<br /><br /> 해당 알고리즘 또한 지르코니아 표면 데이터셋에서도 성능향상이 되는지 학습을 진행하였다.
                </p>
              </li>
            </ul>
          </div>
          <div className="col2">
            <h2 className='text-lg text-left ml-8 font-semibold self-start mt-8'>적용 결과</h2>
            <p className='text-left mx-6 text-slate-500'>
              hyperparameter은 batch size=8, learning rate=0.0001, critierion=
              CrossEntropyLoss, optimizer=Adam, weight decay=1e-4, 데이터셋의
              train/validation/test 비율은 80/10/10으로 최종 최적화함.
            </p>
            <ul className='text-left ml-12 my-4 text-lg font-semibold'>
              <div className="col1">
                <h3>AlexNet</h3>
                <figure className="text-left my-2 mb-4 mx-8 self-center">
                  <img className='w-fit' src={alex1} alt="alex1" />
                </figure>
              </div>
              <div className="col2">
                <h3>GoogLeNet</h3>
                <figure className="text-left my-2 mb-4 mx-8 self-center">
                  <img className='w-fit' src={google1} alt="google1" />
                </figure>
              </div>
              <div className="col3">
                <h3>ResNet</h3>
                <figure className="text-left my-2 mb-4 mx-8 self-center">
                  <img className='w-fit' src={resnet1} alt="resnet1" />
                </figure>
              </div>
              <div className="col4">
                <h3>DenseNet</h3>
                <figure className="text-left my-2 mb-4 mx-8 self-center">
                  <img className='w-fit' src={densenet1} alt="densenet1" />
                </figure>
              </div>
            </ul>
          </div>
            </div>
            <div className="row2">
              <h1 className='text-2xl my-4 font-semibold'>성능평가</h1>
              <img className='w-fit mx-auto' src={result1} alt="result1" />
          <img className='w-fit mx-auto' src={result2} alt="result2" />
              <p className=' text-left mx-12 my-4'>훈련된 모델의 테스트 중 예측과 실제 값이 일치하지 않았을 때
            의 값에 따라 PR표로 정리하고, Test accuracy을 정리한 표이다. 표를 보면 GoogLeNet(99.82%),
            DenseNet(98.17%), AlexNet(97.61%), Resnet152(94.13%) 순으로 높은 정확도를
            보였으며, 모두 94% 이상의 높은 Test accuracy를 보여 정상적으로 학습된 것
            을 확인할 수 있었다. 이 중 제일 정확도가 높은 GoogLeNet을 고점도 지르코
            니아 레진용 광경화 3D프린터의 분류모델로 선정하였다.</p>
              </div>
            <div className="row3">
              <h1 className='text-2xl my-4 font-semibold'>GUI</h1>
          <div>
            <figure className="text-center mx-auto">
              <img className='mx-auto' style={{ height: '400px' }} src="https://github.com/JinkyoJB/DLP_auto/assets/85150616/13b66011-cf88-46b0-a97d-206ebcadeb8b" alt="3D프린터-Original" />
              <figcaption class="mt-2 text-sm text-gray-500">
                3D프린터와 연결된 컴퓨터 화면에서는 위 이미지와 같은 화면을 볼 수 있다.
                <ui >
                  <li className="1">UV광제어 프로그램 (좌측 프로그램) </li>
                  <li className="2">3D프린터 하드웨어제어용 GUI (중앙 프로그램)</li>
                  <li className="3">안드로이드 제어용 프로그램 (우측 프로그램) </li>
                </ui>
              </figcaption>
            </figure>
            <p className='text-md text-left mx-8'>
              3D프린터 하드웨어제어용 GUI는 PyQt5를 사용하여 py파일로 변환하여 제작했다. 해당 GUI를 통해 DLP에 input될 이미지, 광파워, 노광 시간, 3D프린터의 모터,센서를 조절할 수 있습니다. 또한 AI모드 출력 명령 버튼을 누르면 densenet을 적용하여 세라믹 표면에 결점이 발견 될 시 자동 재 블레이딩 및 블레이드 온도를 높이는 등의 폐루프 시스템을 적용할 수 있다.
              우측은 표면 결점을 검출하기 위해서 3D프린터 윗면에 달아둔 안드로이드기기를 통해 보여지는 이미지를 상시로 확인 할 수 있다. GUI를 통한 안드로이드 제어는 pure-python-adb, platform_tools, scrcpy를 통해 ADB서버를 이용했다.
            </p>
            <figure className="text-center my-4">
              <figcaption className="mt-2 text-sm text-gray-500">
                제작된 GUI 사용법
              </figcaption>
              <img style={{ height: '400px' }} src="https://github.com/JinkyoJB/DLP_auto/assets/85150616/3d5dbf48-469b-4432-98e3-5e1a2f96d043" alt="3D프린터-Original" />
              
            </figure>
          </div>
        </div>
            
       </div>
    </div>
  )
}

export default Modal3