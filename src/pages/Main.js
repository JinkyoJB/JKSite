import React from 'react';

import Penguin from '../assets/tenor.gif';
import Picture from '../assets/mypicture.jpg';

import Typewriter from "typewriter-effect";

//icons
import BadgeIcon from '@mui/icons-material/Badge';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import HomeIcon from '@mui/icons-material/Home';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import GitHubIcon from '@mui/icons-material/GitHub';
import BookIcon from '@mui/icons-material/Book';
import FavoriteIcon from '@mui/icons-material/Favorite';

import logo from '../assets/logo.svg';

import { Button, initTE } from "tw-elements";
initTE({ Button });

function Main() {

    return (
        <div className='MainPage'>
            <div className="container my-12 mx-auto md:px-6">
                <section className="mb-32 text-center">
                    <div className="px-6 py-12 md:px-12">
                        <div className="container mx-auto xl:px-32">
                            <div className="flex grid items-center lg:grid-cols-2">
                                <div className="mb-12 md:mt-12 lg:mt-0 lg:mb-0">
                                    <div className="relative z-[1] block rounded-lg bg-[hsla(0,0%,100%,0.55)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[25px] dark:bg-[hsla(0,0%,5%,0.55)] dark:shadow-black/20 md:px-12 lg:-mr-14">
                                        <div className='justify-items-start '>
                                            <img
                                                className="w-36 h-auto rounded-full mx-auto mb-2"
                                                src={Picture}
                                                alt="profile" />
                                            <div className='text-start'>
                                                <p className="text-lg text-neutral-600 font-semibold">
                                                    <BadgeIcon className='pr-1 mr-1' />정진교 pro
                                                </p>
                                                <p className="text-lg text-neutral-600">
                                                    <CalendarMonthIcon className='pr-1 mr-1' />1993.09.10
                                                </p>
                                                <p className="text-lg line-through text-neutral-600">
                                                    <HomeIcon className='pr-1 mr-1' /> 경기도 안양 토박이(대전 집 구하는 중)
                                                </p>
                                                <p className="text-lg text-neutral-600 flex">
                                                    <FavoriteIcon className='pr-1 mr-1' /> <img src={logo} alt="Logo" className='h-3 mx-1 my-auto' />(🦄기업😍) AI 주니어 개발자
                                                </p>
                                                <p className="text-lg text-neutral-600">
                                                    <LocalPhoneIcon className='pr-1 mr-1' /> +82 1092706847
                                                </p>
                                                <p className="text-lg text-neutral-600">
                                                    <a href='https://github.com/JinkyoJB'><GitHubIcon className='pr-1 mr-1' /> https://github.com/JinkyoJB</a>
                                                </p>
                                                <p className="text-lg text-neutral-600 flex flex-col">
                                                    <a href='https://velog.io/@jing93'><div><BookIcon className='pr-1 mr-1' /> https://velog.io/@jing93 </div></a>
                                                    <a href='https://blog.naver.com/wlsry6847'><div><BookIcon className='pr-1 mr-1' /> https://blog.naver.com/wlsry6847 </div></a>
                                                </p>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                                <div className="md:mb-12 lg:mb-0">
                                    <img src={Penguin} alt="Penguin" className="lg:rotate-[3deg] rounded-lg shadow-lg w-[800px] h-[400px] object-cover ml-8" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Main;