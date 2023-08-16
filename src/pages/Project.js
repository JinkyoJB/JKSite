import React, { useEffect, useState } from 'react';
import {
  Animate,
  Carousel,
  initTE,
  Ripple
} from "tw-elements";

import dental from '../assets/dental.png';
import video1 from '../assets/video1.mp4';

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
                    className="fixed top-0 left-0 w-full h-full bg-black opacity-75 mt-20 z-[20] flex flex-col"
                     >
                    <div className='flex justify-end mr-6 mt-4'>
                    <button
                      type="button"
                      onClick={() => setShowModal(false)}
                      className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] ">
                      close
                    </button>
                      </div>
                    <div
                      className="m-4 block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ">
                      <h5
                        className="border-b-2 border-neutral-100 px-6 py-3 text-xl font-medium leading-tight text-black">
                        Problem
                      </h5>
                      <div className="p-16">
                        <video className="h-3/6 shadow-lg my-8" autoplay loop controls muted>
                          <source
                            src={video1}
                            type="video/mp4" />
                        </video>
                        <h5
                          className="text-left mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                          세라믹 광경화 3D프린터의 출력물 강도를 높이기 위해서 광경화되는 표면면적과 표면 품질이 보장되어야 한다.
                        </h5>
                        <h5
                          className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                          세라믹 소재는 내열성, 내화학성 및 내산화성 등 공학적으로 유용한 물성 덕분에 인공관절, 인공치아 같은 의료 보형물 제조에 널리 적용되고 있다. 하지
                          만 이렇게 공업적으로 우수한 재료인 세라믹을 전통적인 제조방법인 절삭 가
                          공으로 가공 시 세라믹의 높은 경도와 취성으로 인해 절삭 공구의 마모, 가공
                          품의 균열 및 표면 품질 저하 등의 문제 등으로 인해 긴 공정시간 및 높은 가
                          공비용이 들고 복잡한 형상을 만들기 어려운 단점이 있다. 적층제조(AM, Addictive Manufacturing)로 가공한다면 물리적 충격에
                          의한 품질 저하가 발생하지 않고, 복잡한 형상의 개인 맞춤화가 간편하며 소
                          량생산으로 인한 경제적 제조가 가능할 것이다.
                        </h5>
                        <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                          With supporting text below as a natural lead-in to additional
                          content.
                        </p>
                        <button
                          type="button"
                          href="#"
                          className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                          data-te-ripple-init
                          data-te-ripple-color="light">
                          Go somewhere
                        </button>
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
