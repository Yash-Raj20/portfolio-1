import React from 'react'
import { BsInfoCircleFill } from 'react-icons/bs';
import PageHeaderContent from './../../components/pageHeaderContent/index';
import { Animate } from 'react-simple-animate';
import './style.scss';
import { DiAndroid, DiApple } from 'react-icons/di';
import { FaDev, FaDatabase } from 'react-icons/fa';


const personalDetails = [
  {
    label: 'Name:-',
    value: 'Ratnesh Kumar',
  },
  {
    label: 'Age:-',
    value: '21',
  },
  {
    label: 'Address:-',
    value: 'Chandlodhiya Ahmedabad (382481), Gujrat',
  },
  {
    label: 'Email:-',
    value: 'ratneshkumarstm987@gmail.com',
  },
  {
    label: 'Contact Me:-',
    value: '+91 983-5854-042',
  },
];

const jobSummary = "Hello! I'm Ratnesh Kumar, a passionate and dedicated software developer with over 1 years of experience in crafting innovative solutions and bringing ideas to life through code. My journey in the world of software development started with a fascination for technology and a keen interest in problem-solving, which has since blossomed into a fulfilling career.  Throughout my career, I have honed my skills in various programming languages, frameworks, and tools. My expertise includes but is not limited."

function about() {
  return (
    <section id="about" className="about">

      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="about__content">
        <div className='about__content__personalWrapper'>
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: 'translateX(-900px)',
            }}
            end={{
              transform: 'translateX(0px)',
            }}
          >
            <h3>Software Developer</h3>
            <p>{jobSummary}</p>

          </Animate>

          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: 'translateX(500px)',
            }}
            end={{
              transform: 'translateX(0px)',
            }}
          >
            <h3 className='personalInformation'>Personal Information</h3>
            <ul>
              {
                personalDetails.map((item, i) => (
                  <li key={i}>
                    <span className="title">{item.label}</span>
                    <span className="value">{item.value}</span>
                  </li>
                ))
              }
            </ul>
          </Animate>
        </div>
        <div className='about__content__servicesWrapper'>
        <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: 'translateX(600px)',
            }}
            end={{
              transform: 'translateX(0px)',
            }}
          >
          <div className="about__content__servicesWrapper__innerContent">
            <div>
              <FaDev size={55} color="var(--yellow-theme-main-color)" />
            </div>
            <div>
              <DiAndroid size={60} color="var(--yellow-theme-main-color)" />
            </div>
            <div>
              <FaDatabase size={50} color="var(--yellow-theme-main-color)" />
            </div>
            <div>
              <DiApple size={70} color="var(--yellow-theme-main-color)" />
            </div>
          </div>
          </Animate>
        </div>
      </div>
    </section>
  )
}

export default about;
