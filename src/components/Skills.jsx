import React from 'react';
import python from '../assets/python.png';
import c from '../assets/c.png';
import cp from '../assets/cp.png';
import java from '../assets/java.png';
import javascript from '../assets/javascript.png';
import sql from '../assets/sql.png';
import node from '../assets/node.png';
import express from '../assets/express.png';
import flask from '../assets/flask.png';
import django from '../assets/django.png';
import react from '../assets/react.png';
import aws from '../assets/aws.png';

const Skills = () => {
  const techs = [
    {
      id: 1,
      title: 'Python',
      src: python,
      style: 'shadow-orange-500',
    },
    {
      id: 2,
      title: 'C',
      src: c,
      style: 'shadow-blue-500',
    },
    {
      id: 3,
      title: 'C++',
      src: cp,
      style: 'shadow-yellow-500',
    },
    {
      id: 4,
      title: 'Java',
      src: java,
      style: 'shadow-green-500',
    },
    {
      id: 5,
      title: 'JavaScript',
      src: javascript,
      style: 'shadow-blue-600',
    },
    {
      id: 6,
      title: 'SQL',
      src: sql,
      style: 'shadow-sky-400',
    },
    {
      id: 7,
      title: 'Node',
      src: node,
      style: 'shadow-pink-400',
    },
    {
      id: 8,
      title: 'Express',
      src: express,
      style: 'shadow-purple-400',
    },
    {
      id: 9,
      title: 'Flask',
      src: flask,
      style: 'shadow-red-500',
    },
    {
      id: 10,
      title: 'Django',
      src: django,
      style: 'shadow-green-600',
    },
    {
      id: 11,
      title: 'React',
      src: react,
      style: 'shadow-blue-600',
    },
    {
      id: 12,
      title: 'AWS',
      src: aws,
      style: 'shadow-gray-400',
    },
    // add more skills here
  ]
  return (
    <div
      name="skills"
      className="bg-gradient-to-b from-gray-700 via-gray-900 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-10 flex flex-col justify-center w-full h-full text-white pt-32 pb-10">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Skills
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
