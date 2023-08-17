import React, { useEffect } from 'react';

import m1 from '../assets/m1.jpg';
import m2 from '../assets/m2.jpg';
import m5 from '../assets/m5.jpeg';
import m6 from '../assets/m6.jpg';
import m7 from '../assets/m7.jpeg';
import m8 from '../assets/m8.jpg';

import a1 from '../assets/a1.jpg';
import a2 from '../assets/a2.jpg';
import a3 from '../assets/a3.jpg';
import a4 from '../assets/a4.png';

import u1 from '../assets/u1.jpg';
import u2 from '../assets/u2.png';
import u3 from '../assets/u3.png';

import j1 from '../assets/j1.png';
import j2 from '../assets/j2.png';
import j3 from '../assets/j3.png';

import { BsGithub } from "react-icons/bs";
import { SiNotion } from "react-icons/si";
import { RiNewspaperFill } from "react-icons/ri";

import { Carousel, Button, initTE } from "tw-elements";

function History() {
    useEffect(() => {
        initTE({ Carousel });
        initTE({ Button });
    }, []);

    return (
        <div className='HistoryPage flex flex-col pl-32 py-16 w-full overflow-scroll'>
            <ol className="border-l-2 border-primary mt-16">
                <li>
                    <div className="flex-start flex items-center">
                        <div
                            className="-ml-[9px] -mt-2 mr-3 flex h-4 w-4 items-center justify-center rounded-full bg-primary"></div>
                        <h4 className="-mt-2 text-xl font-semibold">2013.03 ~ 2017.02</h4>
                    </div>
                    <div className="내용 mb-6 ml-6 pb-6">
                        <div className="text-xl text-left text-primary mt-3">
                            목포해양대학교 기관시스템공학부 / 복수전공 전기제어공학과​
                        </div>
                        <div className="grid grid-cols-3 gap-2 justify-center">
                            <div
                                className="mt-6 flex flex-col h-fit rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
                                <div className='flex grid grid-cols-2 gap-2'>
                                    <img
                                        className="rounded-lg w-full h-72 object-cover"
                                        src={m1}
                                        alt="Hollywood Sign on The Hill" />
                                    <img
                                        className="rounded-lg w-full h-72 object-cover"
                                        src={m2}
                                        alt="Hollywood Sign on The Hill" />
                                </div>
                                <div className="p-4">
                                    <h3
                                        className="mb-2 text-lg font-medium leading-tight text-neutral-800 text-primary">
                                        해사대학 졸업
                                    </h3>
                                    <ul className="mb-2 text-base text-neutral-600">
                                        <li className='text-left'>
                                            ● 선박 기관사 자격증 취득
                                        </li>
                                        <li className='text-left'>
                                            ● 싱가폴, 일본, 베트남 등 항해
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div
                                className="mx-3 mt-6 flex flex-col self-start rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
                                <div className='flex grid grid-cols-2 gap-2'>
                                    <img
                                        className="rounded-lg w-full h-72 object-cover"
                                        src={m6}
                                        alt="Hollywood Sign on The Hill" />
                                    <img
                                        className="rounded-lg w-full h-72 object-cover"
                                        src={m5}
                                        alt="Hollywood Sign on The Hill" />
                                </div>
                                <div className="p-6">
                                    <h3
                                        className="mb-2 text-lg font-medium leading-tight text-neutral-800 text-primary">
                                        새유달호,새누리호 1년 승선실습
                                    </h3>
                                    <ul className="mb-2 text-base text-neutral-600">
                                        <li className='text-left'>
                                            ● 3교대 근무
                                        </li>
                                        <li className='text-left'>
                                            ● 박용보기 유지보수 및 각종 기기 오버홀 경험
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div
                                className="mx-3 mt-6 flex flex-col self-start rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
                                <div className='flex grid grid-cols-2 gap-2'>
                                    <img
                                        className="rounded-lg w-full h-72 object-cover"
                                        src={m7}
                                        alt="Hollywood Sign on The Hill" />
                                    <img
                                        className="rounded-lg w-full h-72 object-cover"
                                        src={m8}
                                        alt="Hollywood Sign on The Hill" />
                                </div>
                                <div className="p-6">
                                    <h3
                                        className="mb-2 text-lg font-medium leading-tight text-neutral-800 text-primary">
                                        현장 교육
                                    </h3>
                                    <ul className="mb-2 text-base text-neutral-600">
                                        <li className='text-left'>
                                            ● 실습선 배관 설계도 작성 
                                        </li>
                                        <li className='text-left'>
                                            ● 각 종 기기 메뉴얼 교육 수료
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>



                <li>
                    <div className="flex-start flex items-center">
                        <div
                            className="-ml-[9px] -mt-2 mr-3 flex h-4 w-4 items-center justify-center rounded-full bg-primary"></div>
                        <h4 className="-mt-2 text-xl font-semibold">2018.06 ~ 2020.06</h4>
                    </div>
                    <div className="내용 mb-6 ml-6 pb-6">
                        <div className="text-xl text-left text-primary mt-3">
                            아그루코리아 융착기술팀 엔지니어 / 사원 팀원
                        </div>
                        <div className="grid grid-cols-3 gap-2 justify-center">
                            <div
                                className="mt-6 flex flex-col h-fit rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
                                <div className='flex grid grid-cols-2 gap-2'>
                                    <img
                                        className="rounded-lg w-full h-72 object-cover"
                                        src={a1}
                                        alt="Hollywood Sign on The Hill" />
                                    <img
                                        className="rounded-lg w-full h-72 object-cover"
                                        src={a2}
                                        alt="Hollywood Sign on The Hill" />
                                </div>
                                <div className="p-4">
                                    <h3
                                        className="mb-2 text-lg font-medium leading-tight text-neutral-800 text-primary">
                                        장비 유지보수
                                    </h3>
                                    <ul className="mb-2 text-base text-neutral-600">
                                        <li className='text-left'>
                                            ● 수원,화성,파주,이천,평택, 중국시안 등 반도체 현장 파견
                                            </li>
                                        <li className='text-left'>
                                            ● 장비 점검 및 유지보수 대응
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div
                                className="mx-3 mt-6 flex flex-col self-start rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
                                <div className='flex gap-1'>
                                    <img
                                        className="rounded-lg w-full h-72 object-cover"
                                        src={a3}
                                        alt="Hollywood Sign on The Hill" />

                                </div>
                                <div className="p-6">
                                    <h3
                                        className="mb-2 text-lg font-medium leading-tight text-neutral-800 text-primary">
                                        장비 및 기술 교육
                                    </h3>                                    
                                    <ul className="mb-2 text-base text-neutral-600">
                                        <li className='text-left'>
                                            ● 융착기술 및 융착기기 사용법 교육 및 보조
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div
                                className="mx-3 mt-6 flex flex-col self-start rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
                                <div className='flex gap-1'>
                                    <img
                                        className="rounded-lg w-full h-72 object-cover"
                                        src={a4}
                                        alt="Hollywood Sign on The Hill" />
                                </div>
                                <div className="p-6">
                                    <h3
                                        className="mb-2 text-lg font-medium leading-tight text-neutral-800 text-primary">
                                        사무 자동화
                                    </h3>
                                    <ul className="mb-2 text-base text-neutral-600">
                                        <li className='text-left'>
                                            ● EXCEL VBA로 사무 자동화
                                        </li>
                                        <li className='text-left'>
                                            ● 3D모델링으로 pipe 형상-교육자료 제작
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>

                <li>
                    <div className="flex-start flex items-center">
                        <div
                            className="-ml-[9px] -mt-2 mr-3 flex h-4 w-4 items-center justify-center rounded-full bg-primary dark:bg-primary-500"></div>
                        <h4 className="-mt-2 text-xl font-semibold">2020.08 ~ 2023.02</h4>
                    </div>
                    <div className="내용 mb-6 ml-6 pb-6">
                        <div className="text-xl text-left text-primary mt-3">
                            서울과학기술대학교 기계정보공학과 일반대학원​ / 석사과정
                        </div>
                        <div className="grid grid-cols-3 gap-2 ">
                            <div
                                className="mt-6 flex flex-col w-fit h-fit rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
                                <div className='flex grid grid-cols-2 gap-2'>
                                    <img
                                        className="rounded-lg w-full h-72 object-cover"
                                        src={u1}
                                        alt="Hollywood Sign on The Hill" />
                                    <img
                                        className="rounded-lg w-full h-72 object-cover"
                                        src={u2}
                                        alt="Hollywood Sign on The Hill" />
                                </div>
                                <div className="p-4">
                                    <h3
                                        className="mb-2 text-lg font-medium leading-tight text-neutral-800 text-primary">
                                        세라믹, 설탕 소재 3D프린터 개발
                                    </h3>
                                    <ul className="mb-2 text-base text-neutral-600">
                                        <li className='text-left'>
                                            ● 3D프린터 설계(NX tool) 및 제작
                                        </li>
                                        <li className='text-left'>
                                            ● 재료물성 테스트(인장실험, 3점,4점 굽힘 실험, 주사전자현미경) 진행
                                        </li>
                                        <li className='text-left'>
                                            ● 관련 논문 게재
                                        </li>
                                    </ul>
                                    <div className='flex flex-row justify-center gap-4'>

                                        <a
                                            target="_blank"
                                            href='https://www.mdpi.com/2210946'
                                            className="flex gap-1 inline-block rounded bg-primary px-4 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg">
                                            <RiNewspaperFill /> paper1
                                        </a>

                                        <a
                                            target="_blank"
                                            href='https://www.mdpi.com/2076-3417/12/9/4189'
                                            className="flex gap-1 inline-block rounded bg-primary px-4 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg">
                                            <RiNewspaperFill /> paper2
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="mx-3 mt-6 flex flex-col self-start rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
                                <div className='flex'>
                                    <img
                                        className="rounded-lg w-full h-72 object-fit"
                                        src={u3}
                                        alt="Hollywood Sign on The Hill" />

                                </div>
                                <div className="p-4">
                                    <h3
                                        className="mb-2 text-lg font-medium leading-tight text-neutral-800 text-primary">
                                        CNN기반 고점도 세라믹 광경화 3D프린터 개발
                                    </h3>
                                    <ul className="mb-2 text-base text-neutral-600">
                                        <li className='text-left'>
                                            ● 하드웨어 설계,제작
                                        </li>
                                        <li className='text-left'>
                                            ● AI관련 데이터셋 구축,훈련,학습 및 모델 최적화 진행
                                        </li>
                                        <li className='text-left'>
                                            ● 제어 소프트웨어 제작
                                        </li>
                                        <li className='text-left'>
                                            ● 물성 테스트
                                        </li>
                                        <li className='text-left'>
                                            ● 한국생산제조학회에서 우수논문상 수상 및 해외저널에 게재
                                        </li>
                                    </ul>
                                    <div className='flex flex-row justify-center'>
                                        <a
                                            target="_blank"
                                            href='https://www.mdpi.com/1996-1944/16/13/4734'
                                            className="flex gap-1 inline-block rounded bg-primary px-4 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg">
                                            <RiNewspaperFill /> paper
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                        

                </li>

                <li>
                    <div className="flex-start flex items-center">
                        <div
                            className="-ml-[9px] -mt-2 mr-3 flex h-4 w-4 items-center justify-center rounded-full bg-primary"></div>
                        <h4 className="-mt-2 text-xl font-semibold">2023.02 ~ 2023.07</h4>
                    </div>
                    <div className="내용 mb-6 ml-6 pb-6">
                        <div className="text-xl text-left text-primary mt-3">
                            SW사관학교 정글 부트캠프 수료
                        </div>
                        <div className="grid grid-cols-3 gap-2 justify-center">
                            <div
                                className="mt-6 flex flex-col h-fit rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
                                <div className='flex gap-1'>
                                    <img
                                        className="rounded-lg w-full h-72 object-cover"
                                        src={j1}
                                        alt="Hollywood Sign on The Hill" />
                                </div>
                                <div className="p-4">
                                    <h3
                                        className="mb-2 text-lg font-medium leading-tight text-neutral-800 text-primary">
                                        알고리즘 문제 풀이
                                    </h3>
                                    <ul className="mb-2 text-base text-neutral-600">
                                        <li className='text-left'>
                                            ● 기초, 수학, 재귀함수, 정렬, 완전탐색, 이분탐색, 분할정복, 스택, 큐, 우선순위 큐, 그래프탐색, DFS, BFS, 위상정렬, 동적 프로그래밍, 그리디 등 문제 풀이 

                                        </li>
                                    </ul> 
                                </div>
                                <div className='flex flex-row justify-center gap-4 pb-4'>
                                    <a
                                        target="_blank"
                                        href='https://www.notion.so/week01-04-e8807e6486ca49ef91450f3142f3178c?pvs=4'
                                        className="inline-block flex gap-2 rounded bg-primary px-4 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg">
                                        <SiNotion /> notion
                                    </a>
                                </div>
                            </div>
                            <div
                                className="mx-3 mt-6 flex flex-col self-start rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
                                <div className='flex gap-1'>
                                    <img
                                        className="rounded-lg w-full h-72 object-fit"
                                        src={j2}
                                        alt="Hollywood Sign on The Hill" />

                                </div>
                                <div className="p-6">
                                    <h3
                                        className="mb-2 text-lg font-medium leading-tight text-neutral-800 text-primary">
                                        자료구조,서버, OS 구현
                                    </h3>
                                    <ul className="mb-2 text-base text-neutral-600">
                                        <li className='text-left'>
                                            ● KAIST 컴퓨터공학과 과정에서 진행하는 malloc lab, proxy lab, PintOS 등 개선 및 구현
                                        </li>
                                    </ul>
                                </div>
                                <div className='flex flex-row justify-center gap-4 pb-4'>
                                    <a
                                        target="_blank"
                                        href='https://www.notion.so/PintOS-805a9939d27f4b0e8ed0ca2fabd370da?pvs=4'
                                        className="inline-block flex gap-2 rounded bg-primary px-4 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg">
                                        <SiNotion /> notion
                                    </a>
                                </div>
                            </div>
                            <div
                                className="mx-3 mt-6 flex flex-col self-start rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
                                <div className='flex gap-1'>
                                    <img
                                        className="rounded-lg w-full h-72 object-fit"
                                        src={j3}
                                        alt="Hollywood Sign on The Hill" />
                                </div>
                                <div className="p-6">
                                    <h3
                                        className="mb-2 text-lg font-medium leading-tight text-neutral-800 text-primary">
                                        이미지 공유 협업툴 - Phodo 웹서비스 개발​
                                    </h3>
                                    <ul className="mb-2 text-base text-neutral-600">
                                        <li className='text-left'>
                                            ● 이미지 카테고리 분류 / 음성통화와 실시간 동시작업 / Ai를 이용한 협업내용 레포트 생성

                                        </li>
                                        <li className='text-left'>
                                            ● 주요 업무: 프로젝트 관리(팀장) / AI API 담당 / 프론트엔드 담당
                                        </li>
                                    </ul>
                                </div>
                                <div className='flex flex-row flex-wrap justify-center gap-4 pb-4 whitespace-normal'>
                                    <a
                                        target="_blank"
                                        href='https://www.notion.so/1376b12a17364b738c5896adcefa42ee?v=2db794020f3247898e622dd60e7c8794&pvs=4'
                                        className="inline-block flex gap-2 rounded bg-primary px-4 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg">
                                        <SiNotion /> notion
                                    </a>
                                    <a
                                        target="_blank"
                                        href='https://github.com/JinkyoJB/jungle-front.git'
                                        className="inline-block flex gap-2 rounded bg-primary px-4 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg">
                                        <BsGithub /> github
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ol>
        </div>
    );
};

export default History