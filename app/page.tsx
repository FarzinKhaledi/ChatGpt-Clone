import React from 'react';
import {
  SunIcon,
  BoltIcon,
  ExclamationTriangleIcon,
} from '@heroicons/react/24/solid';

function HomePage() {
  return (
    <div className="flex flex-col h-screen items-center text-white justify-center p-5">
      <h1 className="text-5xl font-bold mb-20">ChatGpt-Massenger</h1>
      <div className='flex space-x-2 text-center '>
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <SunIcon className="h-8 w-8" />
            <h2>Examples</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">"Explain somting to me "</p>
            <p className="infoText">
              "What is the diffrence between npm and yarn?"
            </p>
            <p className="infoText">"What is the AI?"</p>
          </div>
        </div>

        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <BoltIcon className="h-8 w-8" />
            <h2>Capabiliteis</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">"Explain somting to me "</p>
            <p className="infoText">
              "What is the diffrence between npm and yarn?"
            </p>
            <p className="infoText">"What is the AI?"</p>
          </div>
        </div>

        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <ExclamationTriangleIcon className="h-8 w-8" />
            <h2>Limitations</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">"Explain somting to me "</p>
            <p className="infoText">
              "What is the diffrence between npm and yarn?"
            </p>
            <p className="infoText">"What is the AI?"</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
