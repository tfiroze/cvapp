import React from 'react';
import me from '../assets/me.jpeg';
import { HiArrowRight } from 'react-icons/hi';

const Home = () => {
  return (
    <div name="home" className='pt-28 pb-15 h-screen w-full bg-gradient-to-t from-gray-700 via-gray-900 to-black'>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row '>
        {/* Paragraph */}
        <div className='flex flex-col justify-center h-full md:w-1/2 md:pr-4'>
          <h2 className='text-2xl sm:text-6xl font-bold text-white'>Hey there! I'm a Software Engineer</h2>
          <p className='text-lg text-slate-400 font-semibold py-4 max-w-lg'>
            I'm a prospective MSc graduate in Computer Science from University College Dublin,
            set to complete my degree in December 2023 and ready to embark on a career in January
            2024. With a strong educational background and skills in Python, C++, Java, React, Nodejs, AWS, and Data Analytics,
            I am well-prepared for roles in computer science and engineering.
          </p>

          <div>
            <button className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
              Projects
              <span className='group-hover:rotate-90 duration-300 '>
                <HiArrowRight className='ml-2'/>
              </span>
            </button>
          </div>
        </div>

        {/* Image */}
        <div className='md:w-1/2 mb-32'>
        <img src={me} alt="my profile" className='rounded-2xl mx-auto ml-10 mt-4 w-48 md:w-auto' />
          {/* Adjusted the width of the image */}
        </div>
      </div>
    </div>
  );
};

export default Home;
