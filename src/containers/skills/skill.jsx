import React from 'react';
import { Line } from 'rc-progress';
import { BsInfoCircleFill } from 'react-icons/bs';
import PageHeaderContent from './../../components/pageHeaderContent/index';
import { skillsData } from './utils';
import { Animate, AnimateKeyframes } from 'react-simple-animate';
import './style.scss';

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <PageHeaderContent
        headerText="My Skills"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="skills__content-wrapper">
        {skillsData.map((skill, i) => (
          <div key={i} className="skills__content-wrapper__inner-content">
            <Animate
              play
              delay={0.3}
              duration={1}
              start={{
                transform: 'translateX(-200px)',
              }}
              end={{
                transform: 'translateX(0px)',
              }}
            >
              <h3 className="skills__content-wrapper__inner-content__category-text">
                {skill.label}
              </h3>
              <div className='skills__content-wrapper__inner-content__progressbar-container'>
                {skill.data.map((skillsItem, j) => (
                  <AnimateKeyframes
                    play
                    duration={1}
                    keyframes={['opacity: 1', 'opacity: 0']}
                    iterationCount="1"
                  >
                    <div className="progressbar-wrapper" key={j}>
                      <p>{skillsItem.skillName}</p>
                      <Line
                        percent={skillsItem.percentage}
                        strokeWidth="2"
                        strokeColor="var(--yellow-theme-main-color)"
                        trailWidth="2"
                        strokeLinecap="square"
                      />
                    </div>
                  </AnimateKeyframes>
                ))}
              </div>
            </Animate>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;