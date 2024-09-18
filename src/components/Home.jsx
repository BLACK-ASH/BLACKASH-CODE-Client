import React from 'react'
import { NavLink } from 'react-router-dom'
import Typewriter from 'typewriter-effect';
import { infoLanguage } from "../editors/content";
import playgroundImg from "../images/Playground.png";
import webBuilderImg from "../images/webbuilder.jpg";
import codingProblem from "../images/problem.png";
import learnToCode from "../images/learn.jpg";

const Home = () => {

  // For Typewriter Effect
  const language = Object.keys(infoLanguage).map((item) => (
    item.toUpperCase()
  ));

  return (
    <div className='min-h-screen w-4/5 md:w-2/3 lg:w-1/2 my-8  mx-auto' >
      <header className="bg-base-100 text-base-content text-center py-20">
        <h1 className="text-4xl font-bold">Welcome to BLACKASH<span className="text-accent" >.Code</span></h1>
        <p className="mt-4 text-lg">Your Ultimate Coding Playground!</p>
        <div className='mt-4 text-4xl font-mono font-bold text-primary' >
          <Typewriter
            options={
              {
                strings: language,
                autoStart: true,
                loop: true,
              }
            }
          />
        </div>
        <div className='flex justify-center items-center mt-4 gap-3' >
          <button className='btn min-w-40 btn-primary font-bold text-primary-content my-3' ><NavLink to="/playground">Playground</NavLink></button>
          <button className='btn min-w-40 btn-neutral btn-outline  font-bold text-primary-content my-3'><NavLink to="/login">Login</NavLink></button>
        </div>
      </header>
      <section className=' mb-12 ' >
        <h2 className='text-3xl my-4 font-bold text-secondary' >Playground</h2>
        <div className="flex w-full justify-center items-center flex-col-reverse lg:flex-row">
          <div className="w-full space-y-4 lg:w-1/2 ">
            <p className="mt-1 text-lg text-accent">Get started with our Playground.This is your ultimate coding playground that serves as a learning platform.For multiple languages. </p>
            <button className='btn btn-primary font-bold text-primary-content my-3' ><NavLink to="/playground">Playground</NavLink></button>
          </div>
          <div className="divider lg:divider-horizontal"></div>
          <div className="w-full lg:w-1/2">
            <img width={400} height={400} className="w-full rounded-lg " src={playgroundImg} alt="Playground" />
          </div>
        </div>
      </section>
      <section className=' my-12'>
        <h2 className="text-3xl my-4 font-bold text-secondary">Web Builder</h2>
        <div className="flex w-full justify-center items-center flex-col-reverse lg:flex-row">
          <div className="w-full space-y-4 lg:w-1/2 ">
            <p className="mt-4 text-lg text-accent">Get started with our web builder. For development of websites. </p>
            <button className='btn btn-primary font-bold text-primary-content my-3' ><NavLink to="/web-builder">Web Builder</NavLink></button>
          </div>
          <div className="divider lg:divider-horizontal"></div>
          <div className="w-full lg:w-1/2">
            <img width={400} height={400} className="w-full rounded-lg " src={webBuilderImg} alt="Web Builder" />
          </div>
        </div>
      </section>
      <section className=' my-12' >
        <h2 className="text-3xl my-4 font-bold text-secondary">Coding Problems</h2>
        <div className="flex w-full justify-center items-center flex-col-reverse lg:flex-row">
          <div className="w-full lg:w-1/2">
            <p className="mt-4 text-lg text-accent">Get started with our coding problems. Enhance your problem solving skills. </p>
            <button className='btn btn-primary font-bold text-primary-content my-3' ><NavLink to="/coding-problems">Coding Problems</NavLink></button>
          </div>
          <div className="divider lg:divider-horizontal"></div>
          <div className="w-full lg:w-1/2">
            <img width={400} height={400} className="w-full rounded-lg " src={codingProblem} alt="Coding Problems" />
          </div>
        </div>
      </section>
      <section className=' my-12'>
        <h2 className="text-3xl font-bold text-secondary">Learn To Code</h2>
        <div className="flex w-full justify-center items-center flex-col-reverse lg:flex-row">
          <div className="w-full lg:w-1/2">
            <p className="mt-4 text-lg text-accent">Get started with our settings. Customize your settings. </p>
            <button className='btn btn-primary font-bold text-primary-content my-3' ><NavLink to="/learn-to-code">Learn To Code</NavLink></button>
          </div>
          <div className="divider lg:divider-horizontal"></div>
          <div className="w-full lg:w-1/2">
            <img width={400} height={400} className="w-full rounded-lg " src={learnToCode} alt="Learn To Code" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home