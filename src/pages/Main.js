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

import { Button, initTE } from "tw-elements";
initTE({ Button });

function Main() {

    return (
        <div className='MainPage p-8'>
            <div className='mx-auto' style={{ padding: '20px' }}>
                <img src={Penguin} alt="Penguin" style={{ width: '90vw', height: 'auto', maxWidth: '1200px' }} />
            </div>
            <div
                className="box-content mx-4 block rounded-lg bg-white text-left shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ">
                <div className="p-6 flex flex-row gap-4">
                    <div>
                        <img
                            className="w-40 h-auto rounded-lg"
                            src={Picture}
                            alt="" />
                    </div>
                    <div className='justify-items-start'>
                        <p className="text-lg text-neutral-600 font-semibold">
                            <BadgeIcon className='pr-1 mr-1'/>정진교 pro
                        </p>
                        <p className="text-lg text-neutral-600">
                            <CalendarMonthIcon className='pr-1 mr-1' />1993.09.10
                        </p>
                        <p className="text-lg line-through text-neutral-600">
                            <HomeIcon className='pr-1 mr-1' /> 경기도 안양 토박이(대전 집 구하는 중)
                        </p>
                        <p className="text-lg text-neutral-600">
                            <LocalPhoneIcon className='pr-1 mr-1' /> +82 1092706847
                        </p>
                        <p className="text-lg text-neutral-600">
                            <GitHubIcon className='pr-1 mr-1' /> https://github.com/JinkyoJB
                        </p>
                        <p className="text-lg text-neutral-600 flex flex-row gap-4">
                            <div><BookIcon className='pr-1 mr-1' /> https://velog.io/@jing93 </div>
                            <div><BookIcon className='pr-1 mr-1' /> https://blog.naver.com/wlsry6847 </div>
                        </p>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Main;