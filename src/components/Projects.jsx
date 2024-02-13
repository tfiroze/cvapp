const Projects = () => {
  const projectList = [
    {
      title: "Smart City Explorer",
      description: "Developed 'Smart City Explorer,' a data-driven web application designed to create personalized Manhattan itineraries based on user preferences and real-time data. Spearheaded backend development using Node.js and managed DevOps tasks including server deployment, MySQL configuration, and performance monitoring."
    },
    {
      title: "Dublin Bikes Web Application",
      description: "Deployed a web application resembling the Dublin Bikes website on AWS, leveraging an EC2 server and RDS. Developed a Flask backend, integrated the Google Maps API, and constructed an ML model based on data obtained from the Dublin Bikes API."
    },
    {
      title: "Asteroids Game on Java",
      description: "Utilizing JavaFX, an asteroid arcade game was crafted. The game included multiple moving asteroids, projectiles, alien ships, and a dynamic high score system."
    },
    {
      title: "Post Quantum Cryptography",
      description: "In this project, we simulate a secure cryptography system through quantum key distribution using the BB84 protocol. A Python program was developed to enhance the protocol and allow the transmission of data."
    },
    {
      title: "User-based RPG using Python",
      description: "The goal of this project is to employ OOPS principles to create a user-based role-playing game (RPG) with various classes."
    },
    {
      title: "COVID-19 Death Risk Prediction Models",
      description: "Worked with a dataset from the CDC to build and evaluate prediction models for death risk in relation to COVID-19."
    }
  ];

  return (
    <div name="projects" className='w-full h-auto bg-gradient-to-t from-gray-700 via-gray-900 to-black text-white py-8 z-0 relative'>
      <div className='max-w-screen-lg p-4 md:p-8 pb-10 mb-10 lg:p-12 mx-auto flex flex-col justify-center w-full h-full pt-4  md:pt-8 lg:pt-12'>
        <div className='pb-14 px-4'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Projects</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 '>
          {projectList.map((project, index) => (
            <div key={index} className='group bg-gray-800 rounded-lg p-6 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110'>
              <h3 className='text-2xl font-semibold mb-4'>{project.title}</h3>
              <p className='text-base mb-4'>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
