import { useEffect, useState } from 'react';
import Typewriter from "typewriter-effect";
import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters';
import LogoTitle from '../../assets/images/logo-p.png';
import './index.scss';
import Loader from 'react-loaders';
import {
    faAngular,
    faCss3,
    faGitAlt,
    faHtml5,
    faJsSquare,
    faReact,
  } from '@fortawesome/free-brands-svg-icons'
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SocialIcons from './SocialMedia';

const Home = () => {
    const [letterClass , setletterClass] = useState('text-animate')
    const nameArray = ['r','a', 't', 'h','a','m']
    const jobArray = [
        'w',
        'e',
        'b',
        ' ',
        'd',
        'e',
        'v',
        'e',
        'l',
        'o',
        'p',
        'e',
        'r',
        '.',
    ]

    useEffect(() => { 
      setTimeout (() => {
                setletterClass('text-animate-hover') 
            },4000);
        },[])
    return (
    <>
    <div className="container home-page">
        <div className="text-zone">
            <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i,</span>
                <br /> 
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span>
            <img src={LogoTitle} alt="developer"/>
            <AnimatedLetters letterClass={letterClass}
            strArray={nameArray}
            idx={15} />
            <br/>
            <AnimatedLetters letterClass={letterClass}
            strArray={jobArray}
            idx={21} />
            </h1>
            <div className="text">
              <Typewriter options={{
                autoStart:true,
                loop:true,
                delay:60,
                strings:[
                  "Full Stack Developer || Javascript Expert.",
                  " Coding Enthusiast || Java Developer.",
                  " Loves to Sketch && Explore new Things "
                ],
              }}
              />
            </div>
            <Link to="/contact" className='flat-button'>CONTACT ME</Link>
        </div>
        <SocialIcons />
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
    </div>
    <Loader type='ball-grid-pulse' />
    </>
);
}
export default Home;