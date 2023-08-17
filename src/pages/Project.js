import React, { useEffect, useState } from 'react';
import {
  Animate,
  Carousel,
  initTE,
  Ripple
} from "tw-elements";

import dental from '../assets/dental.png';
import video1 from '../assets/video1.mp4';
import proecessImg from '../assets/process.png';
import f11a from '../assets/figure11a.png';
import f11b from '../assets/figure11b.png';


function Project() {
  useEffect(() => {
    initTE({ Animate });
    initTE({ Carousel });
    initTE({ Ripple });
  }, []);

  const [showModal, setShowModal] = useState(false);

  return (
    <div className='ProjectPage'>
      <div
        id="carouselExampleCaptions"
        className="relative"
        data-te-carousel-init>
        <div
          className="absolute bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
          data-te-carousel-indicators>
          <button
            type="button"
            data-te-target="#carouselExampleCaptions"
            data-te-slide-to="0"
            data-te-carousel-active
            className="mx-[3px]z-[10] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
            aria-current="true"
            aria-label="Slide 1"></button>
          <button
            type="button"
            data-te-target="#carouselExampleCaptions"
            data-te-slide-to="1"
            className="mx-[3px] z-[10] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
            aria-label="Slide 2"></button>
          <button
            type="button"
            data-te-target="#carouselExampleCaptions"
            data-te-slide-to="2"
            className="mx-[3px] z-[10] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
            aria-label="Slide 3"></button>
        </div>

        <div
          className="relative w-full overflow-hidden after:clear-both after:block after:content-[''] h-max-96">
          <div
            className="relative float-left -mr-[100%] w-full h-full flex justify-center items-center transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            data-te-carousel-active
            data-te-carousel-item
            style={{ backfaceVisibility: 'hidden' }}>
            <img
              src={dental}
              className="block w-4/6 mx-auto "
              alt="..." />
            <div
              className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
              <div className="flex h-full items-center justify-center">
                <div className="text-white">
                  <h2 className="mb-4 text-4xl font-semibold">DLP_auto</h2>
                  <h4 className="mb-6 text-xl font-semibold text-slate-300">서울과학기술대학교 특수정밀가공 및 생산연구실</h4>
                  <button
                    type="button"
                    onClick={() => setShowModal(true)}
                    className="rounded border-2 border-neutral-50 px-7 pb-[8px] pt-[10px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                    data-te-ripple-init
                    data-te-ripple-color="light">
                    Detail
                  </button>
                </div>
                {/* 모달 */}
                {showModal && (
                  <div
                    className="fixed top-0 left-0 w-full h-full bg-black opacity-75 mt-20 z-[20] flex flex-col text-black">
                    <div className='버튼줄 flex justify-end mr-6 mt-4'>
                      <button
                        type="button"
                        onClick={() => setShowModal(false)}
                        className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] ">
                        close
                      </button>
                    </div>
                    <div className='bg-white p-8 w-5/6 mx-auto rounded-lg h-5/6'>
                      <div
                        className="flex h-full justify-start flex-col bg-white overflow-scroll">
                        <div className='프로젝트주제'>
                          <h1 className="border-b-2 border-neutral-100 px-6 py-3 text-2xl font-medium leading-tight text-black">
                            프로젝트 주제
                          </h1>
                          <div className="p-16 text-black">
                            <div className="col1 w-full flex">
                              <div className="소재 row1 w-1/2">
                                <h2>소재 : 세라믹</h2>
                                <p>
                                  세라믹 소재는 내열성, 내화학성 및 내산화성 등 공학적으로 유용한 물성 덕분에 인공관절, 인공치아 같은 의료 보형물 제조에 널리 적용되고 있다. 하지
                                  만 이렇게 공업적으로 우수한 재료인 세라믹을 전통적인 제조방법인 절삭 가
                                  공으로 가공 시 세라믹의 높은 경도와 취성으로 인해 절삭 공구의 마모, 가공
                                  품의 균열 및 표면 품질 저하 등의 문제 등으로 인해 긴 공정시간 및 높은 가
                                  공비용이 들고 복잡한 형상을 만들기 어려운 단점이 있다.
                                </p>
                              </div>
                              <div className="가공방법 row2 w-1/2">
                                <h2>가공방법: 적층제조(AM, Addictive Manufacturing)</h2>
                                <p>
                                  적층제조로 가공한다면 물리적 충격에
                                  의한 품질 저하가 발생하지 않고, 복잡한 형상의 개인 맞춤화가 간편하며 소
                                  량생산으로 인한 경제적 제조가 가능할 것이다.
                                </p>
                              </div>
                            </div>
                            <div className="col2 w-full">
                              <h2>프로젝트 주제</h2>
                              <div className='flex'>
                                <div className="동영상 col1 w-3/6">
                                  <video className="h-96 shadow-lg my-8 m-auto w-full" autoplay loop controls muted>
                                    <source
                                      src={video1}
                                      type="video/mp4" />
                                  </video>
                                </div>
                                <div className="col2 w-3/6">
                                  <h5 className="text-left ">
                                    세라믹 광경화 3D프린터의 출력물 강도를 높이기 위해서 광경화되는 표면면적과 표면 품질이 보장되어야 한다. 또한 고점도 레진일 경우 유
                                    동성이 적어 긁힘 또는 기공 등 문제가 발생할 경우 유동에 의해 평탄하게 복원되는 시간이 길거나 복원되지 않는 도포 문제가 발생한다.
                                    <br /> 
                                    이 경우 재도포 등으로 해결을 해야 출력물의 층간 결합력이 보장될 수 있다. 이를 위해서는 도포 후 도포면의 상태를 항상 관찰해야 하지만, 연구자가 계
                                    속 주시하기에는 너무 많은 인적 에너지 및 비용이 소모되고, 연구자의 주관
                                    적인 판단으로 인해 출력품질이 좌우될 수 있다는 우려가 발생한다. 본 논문
                                    은 해당 문제를 해결하기 위해서 머신러닝(Machine learning)의 한 분야인
                                    CNN(Convolution neural network)을 접목하였다. 
                                  </h5>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='하드웨어'>

                        </div>
                        <div className='소프트웨어'>
                          <h1 className="border-b-2 border-neutral-100 px-6 py-3 text-2xl font-medium leading-tight text-black">
                            소프트웨어
                          </h1>
                          <div className="gui col1 flex flex-col">
                            <div>
                              <figure class="text-center">
                                <img style={{ height: '400px' }} src="https://github.com/JinkyoJB/DLP_auto/assets/85150616/13b66011-cf88-46b0-a97d-206ebcadeb8b" alt="3D프린터-Original" />
                                <figcaption class="mt-2 text-sm text-gray-500">
                                  3D프린터와 연결된 컴퓨터 화면에서는 위 이미지와 같은 화면을 볼 수 있습니다.
                                  <ui>
                                    <li className="1">UV광제어 프로그램 (좌측 프로그램) </li>
                                    <li className="2">3D프린터 하드웨어제어용 GUI (중앙 프로그램)</li>
                                    <li className="3">안드로이드 제어용 프로그램 (우측 프로그램) </li>
                                  </ui>
                                </figcaption>
                              </figure>
                              <p>
                              3D프린터 하드웨어제어용 GUI는 PyQt5를 사용하여 py파일로 변환하여 제작했습니다. 해당 GUI를 통해 DLP에 input될 이미지, 광파워, 노광 시간, 3D프린터의 모터,센서를 조절할 수 있습니다. 또한 AI모드 출력 명령 버튼을 누르면 densenet을 적용하여 세라믹 표면에 결점이 발견 될 시 자동 재 블레이딩 및 블레이드 온도를 높이는 등의 폐루프 시스템을 적용할 수 있습니다.
                               우측은 표면 결점을 검출하기 위해서 3D프린터 윗면에 달아둔 안드로이드기기를 통해 보여지는 이미지를 상시로 확인 할 수 있습니다. GUI를 통한 안드로이드 제어는 pure-python-adb, platform_tools, scrcpy를 통해 ADB서버를 이용했습니다.
                              </p>
                              <figure class="text-center">
                                <img style={{ height: '400px' }} src="https://github.com/JinkyoJB/DLP_auto/assets/85150616/3d5dbf48-469b-4432-98e3-5e1a2f96d043" alt="3D프린터-Original" />
                                <figcaption class="mt-2 text-sm text-gray-500">
                                  제작된 GUI 사용법
                                </figcaption>
                              </figure>
                            </div>
                          </div>
                          <div className="deepLearning col2 flex flex-col">
                            <h2 className='text-xl'>Deeplearning</h2>
                            <p>
                              딥러닝을 사용하는 목적은 세라믹 도포면의 결과를 양,불량으로 classification 후 다음 공정의 step을 판단하기 위함입니다.
                              세라믹 재료 특성 상 광경화 반응이 일어 날 수 있도록 회백색인 경우가 많은데 대부분의 이미지가 하얀색이라 데이터가 rgb(255,255,255)에 편중되는 값을 갖고 있어 적절한 전처리가 요구됐습니다. 
                            </p>
                            <div className='DLP_dataset'>
                              <p>데이터셋은 2021.10.07~2022.02.23까지 실험 중 촬용된 세라믹 도표면 사진을 바탕으로 구성되었습니다.</p>
                              <div className=''>
                                <h2>데이터셋 분류 정의</h2>
                                <img style={{ height: '400px' }} src="https://github.com/JinkyoJB/DLP_auto/assets/85150616/ebb91870-656c-4c79-95e9-7ff584c73bb4" alt="3D프린터-Original" />
                                <p>
                                  정상상태(Normal)와 출력 중 빈번한 결함들로 분류했으며, 기계 자체적으로 조치를 취할 수 있는 상태인 미미한 결함(Minor defect)과 기공 상태(Pore), 적층이 아예 불가능한 심각한 상태(Critical) 및 기계오류 문제(Error) 로 총 5가지의 유형으로 분류했습니다.
                                </p>
                                <ul>
                                  <li className="1">normal</li>
                                  <li className="2">Pore</li>
                                  <li className="3">error</li>
                                  <li className="4">minor defect</li>
                                  <li className="5">critical</li>
                                </ul>
                              </div>
                              <div className=''>
                                <h2>노광영역 추출</h2>
                                <img style={{ height: '400px' }} src={proecessImg} alt="3D프린터-Original" />
                                <p>
                                  (a)는 UV 노광 단계에서 카메라로 촬영된 3024*4032px의 크기의 원
                                  본 이미지이다. 해당 이미지에는 적층된 표면도 촬영되지만, 도포 날 및 구조
                                  물도 촬영되며 이는 분석에 필요한 데이터가 아니므로, 신경망의 입력데이터
                                  에서 불필요한 용량을 차지한다. 따라서 원본 이미지에서 원하는 특징이 추출
                                  될 수 있는 데이터만 추출하는 전처리 과정이 필요하다. 본 논문에서는 다음
                                  과 같은 표면 품질 분류목적에 의미 있는 정보를 가진 데이터영역을 노광된
                                  시편영역 내부만으로 정의하여 해당 영역만 추출하는 전처리 방법을 진행하여
                                  분석데이터의 효율을 높였다. 
                                </p>
                              </div>
                              
                              <div className="col1">
                                <img style={{ height: '400px' }} src={f11a} alt="f11a" />
                              </div>
                              <div className="col2">
                                <img style={{ height: '400px' }} src={f11b} alt="f11b" />
                              </div>

                            </div>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div
            className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            data-te-carousel-item
            style={{ backfaceVisibility: 'hidden' }}
>
            <img
              src="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(22).jpg"
              className="block w-full"
              alt="..." />
            <div
              className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
              <h5 className="text-xl">Second slide label</h5>
              <p>
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </div>
          <div
            className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            data-te-carousel-item
            style={{ backfaceVisibility: 'hidden' }}
>
            <img
              src="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(23).jpg"
              className="block w-full"
              alt="..." />
            <div
              className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
              <h5 className="text-xl">Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </div>
        </div>

        <button
          className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
          type="button"
          data-te-target="#carouselExampleCaptions"
          data-te-slide="prev">
          <span className="inline-block h-8 w-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="h-6 w-6">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </span>
          <span
            className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
          >Previous</span>
        </button>
        <button
          className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
          type="button"
          data-te-target="#carouselExampleCaptions"
          data-te-slide="next">
          <span className="inline-block h-8 w-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="h-6 w-6">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </span>
          <span
            className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
          >Next</span>
        </button>
      </div>
    </div>
  )
}

export default Project
