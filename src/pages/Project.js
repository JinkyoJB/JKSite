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
import printer from '../assets/3dprinter.mp4';

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
                        className="mx-[3px] z-[10] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
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
                                        className="fixed top-0 left-0 w-full h-full mt-20 z-[20] flex flex-col text-black" style={{ backgroundColor: 'rgba(0,0,0,0.7)' }}>
                                        <div className='버튼줄 flex justify-end mr-6 my-4'>
                                            <button
                                                type="button"
                                                onClick={() => setShowModal(false)}
                                                className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] ">
                                                close
                                            </button>
                                        </div>
                                        <div className='p-8 w-5/6 mx-auto rounded-lg h-5/6 ' style={{ backgroundColor: 'rgba(255,255,255,0.8)' }}>
                                            <div className="container mx-auto md:px-6 lex h-full justify-start flex-col overflow-y-scroll">
                                                <section className="mb-32">
                                                    <h2 className="mb-12 text-center text-3xl font-bold">
                                                        DLP_auto
                                                    </h2>

                                                    <div className="flex flex-wrap items-center">
                                                        <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-6 lg:mb-0 lg:w-5/12">
                                                            <div className="relative overflow-hidden rounded-lg bg-cover bg-[50%] bg-no-repeat shadow-lg dark:shadow-black/20"
                                                                data-te-ripple-init data-te-ripple-color="light">
                                                                <video className="w-full shadow-lg" autoplay loop controls muted>
                                                                    <source
                                                                        src={printer}
                                                                        type="video/mp4" />
                                                                </video>
                                                                <a href="#!">
                                                                    <div
                                                                        className="absolute overflow-hidden top-0 right-0 bottom-0 left-0 h-full w-full bg-[hsl(0,0%,0%,0.4)] bg-fixed">
                                                                        <div className="flex h-full items-center justify-center">
                                                                            <div className="px-6 py-12 text-center text-white md:px-12">
                                                                                <h3 className="mb-6 text-2xl font-bold uppercase">
                                                                                    The future is
                                                                                    <u className="text-[hsl(210,12%,80%)]">now</u>
                                                                                </h3>
                                                                                <p className="text-[hsl(210,12%,80%)]">
                                                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                                                    Harum quia laboriosam error consequuntur fugit,
                                                                                    doloribus rerum, iure nesciunt amet quidem veniam
                                                                                    cupiditate hic fugiat dolore aperiam quisquam libero
                                                                                    earum quibusdam?
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="relative overflow-hidden bg-cover bg-no-repeat">
                                                                        <div
                                                                            className="absolute overflow-hidden top-0 right-0 bottom-0 left-0 h-full w-full bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </div>
                                                        </div>

                                                        <div className="w-full shrink-0 grow-0 basis-auto md:px-6 lg:w-7/12">
                                                            <div className="mb-12 flex">
                                                                <div className="shrink-0">
                                                                    <div className="rounded-md p-4 shadow-lg bg-[hsl(231,52.6%,20%)] dark:bg-[hsl(231,52.6%,30%)]">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                                                            stroke="currentColor" className="h-6 w-6 text-white">
                                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                                d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                                <div className="ml-4 grow">
                                                                    <p className="mb-2 font-bold">Support 24/7</p>
                                                                    <p className="text-neutral-500 dark:text-neutral-300">
                                                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                                                        Nihil quisquam quibusdam modi sapiente magni molestias
                                                                        pariatur facilis reprehenderit facere aliquam ex.
                                                                    </p>
                                                                </div>
                                                            </div>

                                                            <div className="mb-12 flex">
                                                                <div className="shrink-0">
                                                                    <div className="rounded-md p-4 shadow-lg bg-[hsl(231,52.6%,20%)] dark:bg-[hsl(231,52.6%,30%)]">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                                                            stroke="currentColor" className="h-6 w-6 text-white">
                                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                                d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                                <div className="ml-4 grow">
                                                                    <p className="mb-2 font-bold">Safe and solid</p>
                                                                    <p className="text-neutral-500 dark:text-neutral-300">
                                                                        Eum nostrum fugit numquam, voluptates veniam neque quibusdam
                                                                        ullam aspernatur odio soluta, quisquam dolore animi mollitia a
                                                                        omnis praesentium, expedita nobis!
                                                                    </p>
                                                                </div>
                                                            </div>

                                                            <div className="mb-12 flex">
                                                                <div className="shrink-0">
                                                                    <div className="rounded-md p-4 shadow-lg bg-[hsl(231,52.6%,20%)] dark:bg-[hsl(231,52.6%,30%)]">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                                                            stroke="currentColor" className="h-6 w-6 text-white">
                                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                                d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                                <div className="ml-4 grow">
                                                                    <p className="mb-2 font-bold">Extremely fast</p>
                                                                    <p className="text-neutral-500 dark:text-neutral-300">
                                                                        Enim cupiditate, minus nulla dolor cumque iure eveniet facere
                                                                        ullam beatae hic voluptatibus dolores exercitationem? Facilis
                                                                        debitis aspernatur amet nisi iure eveniet facere?
                                                                    </p>
                                                                </div>
                                                            </div>

                                                            <div className="flex">
                                                                <div className="shrink-0">
                                                                    <div className="rounded-md p-4 shadow-lg bg-[hsl(231,52.6%,20%)] dark:bg-[hsl(231,52.6%,30%)]">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                                                            stroke="currentColor" className="h-6 w-6 text-white">
                                                                            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
                                                                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                                <div className="ml-4 grow">
                                                                    <p className="mb-2 font-bold">Live analytics</p>
                                                                    <p className="text-neutral-500 dark:text-neutral-300">
                                                                        Illum doloremque ea, blanditiis sed dolor laborum praesentium
                                                                        maxime sint, consectetur atque ipsum ab adipisci ullam
                                                                        aspernatur odio soluta, quisquam dolore
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </section>
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
