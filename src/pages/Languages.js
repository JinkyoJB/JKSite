import React from 'react'

import { SiPytorch, SiPython, SiOpencv, SiC, SiNumpy, SiPandas, SiArduino, SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";

function Languages() {
  return (
    <div className='LanguagesPage w-full h-screen flex flex-col items-center justify-center'>
      <h2 className="text-3xl mb-8">Languages & Tools</h2>
      <div className="grid grid-cols-3 gap-8">
        <div className="flex flex-col items-center hover:scale-110 transform transition-all">
          <SiPytorch className="text-6xl mb-2" />
          <span>PyTorch</span>
        </div>
        <div className="flex flex-col items-center hover:scale-110 transform transition-all">
          <SiPython className="text-6xl mb-2" />
          <span>Python</span>
        </div>
        <div className="flex flex-col items-center hover:scale-110 transform transition-all">
          <SiOpencv className="text-6xl mb-2" />
          <span>OpenCV</span>
        </div>
        <div className="flex flex-col items-center hover:scale-110 transform transition-all">
          <SiC className="text-6xl mb-2" />
          <span>C</span>
        </div>
        <div className="flex flex-col items-center hover:scale-110 transform transition-all">
          <SiNumpy className="text-6xl mb-2" />
          <span>Numpy</span>
        </div>
        <div className="flex flex-col items-center hover:scale-110 transform transition-all">
          <SiPandas className="text-6xl mb-2" />
          <span>Pandas</span>
        </div>
        <div className="flex flex-col items-center hover:scale-110 transform transition-all">
          <SiArduino className="text-6xl mb-2" />
          <span>Arduino</span>
        </div>
        <div className="flex flex-col items-center hover:scale-110 transform transition-all">
          <SiJavascript className="text-6xl mb-2" />
          <span>JavaScript</span>
        </div>
        <div className="flex flex-col items-center hover:scale-110 transform transition-all">
          <FaReact className="text-6xl mb-2" />
          <span>React</span>
        </div>
      </div>
    </div>
  )
}

export default Languages;
