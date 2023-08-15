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

import { Carousel, Button, initTE } from "tw-elements";

function History() {
  useEffect(() => {
    initTE({ Carousel });
    initTE({ Button });
  }, []);

  return (
    <div className='HistoryPage flex flex-col px-32'>
      <div className="col1 flex flex-col item-center my-4 py-4 bg-zinc-100 rounded-lg">
        <h4 className="text-2xl font-medium leading-tight">
          2013.03 ~ 2017.02
          <span
            className="mx-4 inline-block whitespace-nowrap rounded-[0.27rem] bg-primary-100 px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline text-[0.75em] font-bold leading-none text-primary-700"
          >목포해양대학교 기관시스템공학부 / 복수전공 전기제어공학과​</span>
        </h4>
        <div className="grid-cols-1 sm:grid md:grid-cols-3 ">
          <div
            className="mx-3 mt-6 flex flex-col self-start rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
            <div className='flex gap-1'>
              <img
                className="rounded-t-lg w-1/2"
                src={m1}
                alt="Hollywood Sign on The Hill" />
              <img
                className="rounded-t-lg w-1/2"
                src={m2}
                alt="Hollywood Sign on The Hill" />
            </div>
            <div className="p-6">
              <h5
                className="mb-2 text-lg font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                새누리호,새유달호 실습
              </h5>
              <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                싱가폴, 일본, 베트남 등 항해
                
              </p>
            </div>
          </div>
          <div
            className="mx-3 mt-6 flex flex-col self-start rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
            <div className='flex gap-1'>
              <img
                className="rounded-t-lg w-1/2"
                src={m6}
                alt="Hollywood Sign on The Hill" />
              <img
                className="rounded-t-lg w-1/2"
                src={m5}
                alt="Hollywood Sign on The Hill" />
            </div>
            <div className="p-6">
              <h5
                className="mb-2 text-lg font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                박용보기 operating 경험
              </h5>
              <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                교대 근무 실습을 통해 박용보기 유지보수 및 각종 기기 오버홀 경험
              </p>
            </div>
          </div>
          <div
            className="mx-3 mt-6 flex flex-col self-start rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
            <div className='flex gap-1'>
              <img
                className="rounded-t-lg w-1/2"
                src={m7}
                alt="Hollywood Sign on The Hill" />
              <img
                className="rounded-t-lg w-1/2"
                src={m8}
                alt="Hollywood Sign on The Hill" />
            </div>
            <div className="p-6">
              <h5
                className="mb-2 text-lg font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                현장교육
              </h5>
              <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                실습선 배관 설계도 작성 및 각 종 기기 메뉴얼 교육 수료
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="col1 flex flex-col item-center my-4 py-4 bg-zinc-100 rounded-lg">
        <h4 className="text-2xl font-medium leading-tight">
          2018.06 ~ 2020.06
          <span
            className="mx-4 inline-block whitespace-nowrap rounded-[0.27rem] bg-primary-100 px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline text-[0.75em] font-bold leading-none text-primary-700"
          >아그루코리아 융착기술팀 엔지니어/ 사원 팀원​​</span>
        </h4>
        <div className="grid-cols-1 sm:grid md:grid-cols-3 ">
          <div
            className="mx-3 mt-6 flex flex-col self-start rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
            <div className='flex gap-1'>
              <img
                className="rounded-t-lg w-1/2"
                src={a1}
                alt="Hollywood Sign on The Hill" />
              <img
                className="rounded-t-lg w-1/2"
                src={a2}
                alt="Hollywood Sign on The Hill" />
            </div>
            <div className="p-6">
              <h5
                className="mb-2 text-lg font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                장비 유지보수 
              </h5>
              <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                수원,화성,파주,이천,평택, 중국시안 등 현장 파견 대응
              </p>
            </div>
          </div>
          <div
            className="mx-3 mt-6 flex flex-col self-start rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
            <div className='flex gap-1'>
              <img
                className="rounded-t-lg w-5/6 mx-auto"
                src={a3}
                alt="Hollywood Sign on The Hill" />

            </div>
            <div className="p-6">
              <h5
                className="mb-2 text-lg font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                장비 및 기술 교육
              </h5>
              <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                융착기술 및 융착기기 사용법 교육 및 보조
              </p>
            </div>
          </div>
          <div
            className="mx-3 mt-6 flex flex-col self-start rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
            <div className='flex gap-1'>
              <img
                className="rounded-t-lg w-5/6 mx-auto"
                src={a4}
                alt="Hollywood Sign on The Hill" />
            </div>
            <div className="p-6">
              <h5
                className="mb-2 text-lg font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                사무 자동화​
              </h5>
              <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                excel vba로 사무 자동화 및 3D모델링으로 pipe 형상-교육자료 제작
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="col1 flex flex-col item-center my-4 py-4 bg-zinc-100 rounded-lg">
        <h4 className="text-2xl font-medium leading-tight">
          2020.08 ~ 2023.02
          <span
            className="mx-4 inline-block whitespace-nowrap rounded-[0.27rem] bg-primary-100 px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline text-[0.75em] font-bold leading-none text-primary-700"
          >서울과학기술대학교 기계정보공학과 일반대학원​ / 석사과정​​</span>
        </h4>
        <div className="grid-cols-1 sm:grid md:grid-cols-2">
          <div
            className="mx-3 mt-6 flex flex-col self-start rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
            <div className='flex gap-1'>
              <img
                className="rounded-t-lg w-1/2"
                src={u1}
                alt="Hollywood Sign on The Hill" />
              <img
                className="rounded-t-lg w-1/2 p-2 object-fit py-12"
                src={u2}
                alt="Hollywood Sign on The Hill" />
            </div>
            <div className="p-6">
              <h5
                className="mb-2 text-lg font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                세라믹, 설탕 소재의 3D프린터 개발
              </h5>
              <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                <li>3D프린터 설계(NX tool) 및 제작</li>
                <li>재료물성 테스트(인장실험, 3점,4점 굽힘 실험, 주사전자현미경) 진행</li>
                <li>관련 논문 게재​</li>
              </p>
              <div className='flex flex-row justify-center gap-4'>
        
                <a
                  target="_blank"
                  href='https://www.mdpi.com/2210946'
                  className="inline-block rounded bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg">
                  paper1
                </a>
                
                <a
                  target="_blank"
                  href='https://www.mdpi.com/2076-3417/12/9/4189'
                  className="inline-block rounded bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg">
                  paper2
                </a>
              </div>
            </div>
          </div>
          <div
            className="mx-3 mt-6 flex flex-col self-start rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
            <div className='flex gap-1'>
              <img
                className="rounded-t-lg w-5/6 mx-auto"
                src={u3}
                alt="Hollywood Sign on The Hill" />

            </div>
            <div className="p-6">
              <h5
                className="mb-2 text-lg font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                CNN기반 고점도 세라믹 광경화 3D프린터 개발
              </h5>
              <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                <li>하드웨어 설계,제작</li>
                <li>AI관련 데이터셋 구축,훈련,학습 및 모델 최적화 진행</li>
                <li>제어 소프트웨어 제작</li>
                <li>물성 테스트</li>
                <li>한국생산제조학회에서 우수논문상 수상 및 해외저널에 게재</li>
              </p>
            </div>
            <div className='flex flex-row justify-center gap-4 pb-4'>
              <a
                target="_blank"
                href='https://www.mdpi.com/1996-1944/16/13/4734'
                className="inline-block rounded bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg">
                paper
              </a>
            </div>
          </div>

        </div>
      </div>
      <div className="col1 flex flex-col item-center my-4 py-4 bg-zinc-100 rounded-lg">
        <h4 className="text-2xl font-medium leading-tight">
          2023.02 ~ 2023.07
          <span
            className="mx-4 inline-block whitespace-nowrap rounded-[0.27rem] bg-primary-100 px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline text-[0.75em] font-bold leading-none text-primary-700"
          >SW사관학교 정글 부트캠프 수료​​​</span>
        </h4>
        <div className="grid-cols-1 sm:grid md:grid-cols-3">
          <div
            className="col1 mx-3 mt-6 flex flex-col self-start rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
            <div className='flex gap-1'>
              <img
                className="rounded-t-lg w-full"
                src={j1}
                alt="Hollywood Sign on The Hill" />
            </div>
            <div className="p-6">
              <h5
                className="mb-2 text-lg font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                  알고리즘 문제 풀이
              </h5>
              <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                기초, 수학, 재귀함수, 정렬, 완전탐색, 이분탐색, 분할정복, 스택, 큐, 우선순위 큐, 그래프탐색, DFS, BFS, 위상정렬, 동적 프로그래밍, 그리디 등 문제 풀이 
              </p>
            </div>
            <div className='flex flex-row justify-center gap-4 pb-4'>
              <a
                target="_blank"
                href='https://www.notion.so/week01-04-e8807e6486ca49ef91450f3142f3178c?pvs=4'
                className="inline-block rounded bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg">
                notion
              </a>
            </div>
          </div>
          <div
            className="mx-3 mt-6 flex flex-col self-start rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
            <div className='flex gap-1'>
              <img
                className="rounded-t-lg w-full"
                src={j2}
                alt="Hollywood Sign on The Hill" />

            </div>
            <div className="p-6">
              <h5
                className="mb-2 text-lg font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                자료구조,서버, OS 구현
              </h5>
              <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                KAIST 컴퓨터공학과 과정에서 진행하는 malloc lab, proxy lab, PintOS 등의 대규모 프로그램을 개선 및 구현
              </p>
            </div>
            <div className='flex flex-row justify-center gap-4 pb-4'>
              <a
                target="_blank"
                href='https://www.notion.so/PintOS-805a9939d27f4b0e8ed0ca2fabd370da?pvs=4'
                className="inline-block rounded bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg">
                notion
              </a>
            </div>
          </div>
          <div
            className="mx-3 mt-6 flex flex-col self-start rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
            <div className='flex gap-1'>
              <img
                className="rounded-t-lg w-full"
                src={j3}
                alt="Hollywood Sign on The Hill" />
            </div>
            <div className="p-6">
              <h5
                className="mb-2 text-lg font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                이미지 공유 협업툴 - Phodo 웹서비스 개발​
              </h5>
              <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                이미지 카테고리 분류 / 음성통화와 실시간 동시작업 / Ai를 이용한 협업내용 레포트 생성
              </p>
              <p>주요 업무: 프로젝트 관리(팀장) / AI API 담당 / 프론트엔드 담당</p>
            </div>
            <div className='flex flex-row justify-center gap-4 pb-4'>
              <a
                target="_blank"
                href='https://www.notion.so/1376b12a17364b738c5896adcefa42ee?v=2db794020f3247898e622dd60e7c8794&pvs=4'
                className="inline-block rounded bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg">
                notion
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History