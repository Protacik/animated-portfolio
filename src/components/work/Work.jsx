import React from 'react'


const Work = () => {
  return (
    <div name="work" className='w-full md:h-screen text-gray-300 bg-[#111132]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-green-600'>Work</p>
                <p className='py-6'>Check out some of my recent work</p>
            </div>

            <div className='grid grid-cols-2 sm:grid-cols-4 gap-4'>
               
                <div style={{backgroundImage: `url(/todolistnew.png)`}} 
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                
                    <div className='opacity-0 group-hover:opacity-100'>
                    
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            React JS Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://protacik.github.io/todolist/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Demo</button>
                            </a>
                            <a href="https://github.com/Protacik/todolist">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(/weather.png)`}} 
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                
                    <div className='opacity-0 group-hover:opacity-100'>
                    
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            React JS Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://protacik.github.io/Weather/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Demo</button>
                            </a>
                            <a href="https://github.com/Protacik/Weather">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(/calculator.png)`}} 
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                
                    <div className='opacity-0 group-hover:opacity-100'>
                    
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            React JS Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://protacik.github.io/Calculator/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Demo</button>
                            </a>
                            <a href="https://github.com/Protacik/Calculator">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Code</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Work