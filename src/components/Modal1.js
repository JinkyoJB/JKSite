import React, { useEffect, useState } from 'react';
import {
    Animate,
    Carousel,
    initTE,
    Ripple
} from "tw-elements";

import printer from '../assets/3dprinter.mp4';
import video1 from '../assets/video1.mp4';

//icons
import { IoFlaskSharp } from "react-icons/io5";
import { IoConstruct } from "react-icons/io5";
import { IoReceipt } from "react-icons/io5";

import Modal2 from '../components/Modal2';
import Modal3 from '../components/Modal3';

function Modal1() {
    useEffect(() => {
        initTE({ Animate });
        initTE({ Carousel });
        initTE({ Ripple });
    }, []);

    const [showModal, setShowModal] = useState(false);
    const [showModal2, setShowModal2] = useState(false);
    const [showModal3, setShowModal3] = useState(false);
  return (
      <div
          className="fixed top-0 left-0 w-full h-full mt-20 z-[20] flex flex-col text-black" style={{ backgroundColor: 'rgba(0,0,0,0.7)' }}>
          <div className='버튼줄 flex justify-end mr-6 my-4'>
              <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] ">
                  close
              </button>
          </div>
          <div className='pt-8 px-8 w-5/6 mx-auto rounded-lg h-5/6' style={{ backgroundColor: 'rgba(255,255,255,0.8)' }}>
            <div className="container mx-auto md:px-6 lex h-full justify-start flex-col overflow-y-scroll">
                <section className="mb-14">
                    <h2 className="mb-12 text-center text-3xl font-bold">
                        DLP_auto
                    </h2>

                    <div className="flex flex-wrap items-center">
                        <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-6 lg:mb-0 lg:w-5/12">
                            <div className="relative overflow-hidden rounded-lg bg-cover bg-[50%] bg-no-repeat shadow-lg"
                                  data-te-ripple-init data-te-ripple-color="light">
                                <figure className="text-center">
                                    <figcaption className="mt-2 text-sm text-gray-500 ">
                                          제작된 3D프린터 작동모습
                                    </figcaption>
                                    <video className="w-full shadow-lg" autoplay loop controls muted>
                                        <source
                                            src={printer}
                                            type="video/mp4" />
                                    </video>
                                </figure>
                            </div>
                        </div>

                        <div className="w-full shrink-0 grow-0 basis-auto md:px-6 lg:w-7/12">
                            <div className="mb-12 flex">
                                <div className="shrink-0">
                                    <div className="rounded-md p-4 shadow-lg bg-[hsl(231,52.6%,20%)] ">
                                        <IoFlaskSharp stroke="currentColor" className="h-6 w-6 text-white" />
                                    </div>
                                  </div>
                                  <div className="ml-4 grow">
                                        <p className="mb-2 font-bold text-lg">소재 : 세라믹</p>
                                        <p className="text-neutral-500 ">
                                          세라믹 소재는 내열성, 내화학성 등 공학적으로 유용한 물성 덕분에 인공관절, 인공치아 같은 의료 보형물 제조에 널리 적용되고 있다.
                                          <br />
                                          하지만 세라믹을 전통적인 제조방법인 절삭 가공으로 가공 시
                                          세라믹의 높은 경도와 취성으로 인해 절삭 공구의 마모, 가공
                                          품의 균열 및 표면 품질 저하 등의 문제 등으로 인해 긴 공정시간 및 높은 가
                                          공비용이 들고 복잡한 형상을 만들기 어려운 단점이 있다.
                                    </p>
                                  </div>
                              </div>

                              <div className="mb-12 flex">
                                  <div className="shrink-0">
                                      <div className="rounded-md p-4 shadow-lg bg-[hsl(231,52.6%,20%)] ">
                                          <IoConstruct stroke="currentColor" className="h-6 w-6 text-white" />
                                      </div>
                                  </div>
                                  <div className="ml-4 grow">
                                      <p className="mb-2 font-bold text-lg">가공방법: 적층제조</p>
                                      <p className="text-neutral-500">
                                          적층제조로 가공한다면 물리적 충격에
                                          의한 품질 저하가 발생하지 않고, 복잡한 형상의 개인 맞춤화가 간편하며 소
                                          량생산으로 인한 경제적 제조가 가능할 것이다.
                                      </p>
                                  </div>
                              </div>

                              <div className="mb-12 flex">
                                  <div className="shrink-0">
                                      <div className="rounded-md p-4 shadow-lg bg-[hsl(231,52.6%,20%)] ">
                                          <IoReceipt stroke="currentColor" className="h-6 w-6 text-white" />
                                      </div>
                                  </div>
                                  <div className="ml-4 grow">
                                      <p className="mb-2 font-bold text-lg">가공문제와 해결방법 : CNN</p>
                                      <video className="h-96 shadow-lg my-8 m-auto w-full" autoplay loop controls muted>
                                          <source
                                              src={video1}
                                              type="video/mp4" />
                                      </video>
                                      <p className="text-neutral-500 ">
                                          세라믹 광경화 3D프린터의 출력물 강도를 높이기 위해서 광경화되는 표면면적과 표면 품질이 보장되어야 한다. 또한 고점도 레진일 경우 유
                                          동성이 적어 긁힘 또는 기공 등 문제가 발생할 경우 유동에 의해 평탄하게 복원되는 시간이 길거나 복원되지 않는 도포 문제가 발생한다.
                                          <br />
                                          이 경우 재도포 등으로 해결을 해야 출력물의 층간 결합력이 보장될 수 있다. 이를 위해서는 도포 후 도포면의 상태를 항상 관찰해야 하지만, 연구자가 계
                                          속 주시하기에는 너무 많은 인적 에너지 및 비용이 소모되고, 연구자의 주관
                                          적인 판단으로 인해 출력품질이 좌우될 수 있다는 우려가 발생한다. 본 논문
                                          은 해당 문제를 해결하기 위해서 머신러닝(Machine learning)의 한 분야인
                                          CNN(Convolution neural network)을 접목하였다.
                                      </p>
                                  </div>
                              </div>
                          </div>
                          <div className='flex flex-wrap gap-16 mx-auto justify-center mt-12'>
                              <button
                                  type="button"
                                  onClick={() => {
                                      if (showModal3) {
                                          setShowModal3(false);
                                      }
                                      setShowModal2(!showModal2);
                                  }}
                                  className="inline-block rounded bg-[hsl(231,52.6%,20%)] px-6 pb-2 pt-2.5 text-lg font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] ">
                                  Hardware
                              </button>
                              <button
                                  type="button"
                                  onClick={() => {
                                      if (showModal2) {
                                          setShowModal2(false);
                                      }
                                      setShowModal3(!showModal3);
                                  }}
                                  className="inline-block rounded bg-[hsl(231,52.6%,20%)] px-6 pb-2 pt-2.5 text-lg font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] ">
                                  Software
                              </button>
                          </div>
                          {showModal2 && (
                              <Modal2 />
                          )}
                          {showModal3 && (
                              <Modal3 />
                          )}
                      </div>
                  </section>
              </div>
          </div>
      </div>
  )
}

export default Modal1;