import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-700 via-gray-900 to-black text-white'>
    <div className='max-w-screen-lg p-4 md:p-8 lg:p-12 mx-auto flex flex-col justify-center w-full h-full pb-40 md:pb-8 lg:pb-12'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
        </div>
        <p className='text-xl mt-5'>
          I'm Tehsein Firoze Akhtar, an ambitious MSc Computer Science student at the esteemed 
          University College Dublin, deeply committed to devising innovative software and data-related 
          solutions. My proficiency in various programming languages and tools has empowered me to successfully 
          carry out complex projects, ranging from simulating Post Quantum Cryptography using Python, to deploying 
          a Dublin Bikes Web Application on AWS.
        </p>
        <br />
        <p className='text-xl'>
          Apart from my academic accomplishments, I've honed my professional skills through a rewarding internship experience 
          at Bluelearn as a Front End Web Developer. Not only did I have the chance to develop and test numerous website modules, 
          but I also gained in-depth understanding of the entire web development process, from design to deployment. Moreover, my 
          leadership role in managing the VIT Music Club and my volunteering experience with the NGO Anokha highlight my strong 
          interpersonal and organizational skills. With a keen interest in Machine Learning and Cryptography, I am always on the 
          lookout for the next challenge in the tech industry.
        </p>
      </div>
    </div>
  )
}

export default About;
