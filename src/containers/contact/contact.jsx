import React from 'react'
import { BsInfoCircleFill } from 'react-icons/bs';
import PageHeaderContent from './../../components/pageHeaderContent/index';
import { Animate } from 'react-simple-animate';
import './style.scss';

const Contact = () => {
  return (
    <section id="contact" className="contact">

      <PageHeaderContent
        headerText="Contact Me"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="contact__content">
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: 'translateX(-200px)',
            opacity: 0,
          }}
          end={{
            transform: 'translateX(0px)',
            opacity: 1,
          }}
        >
          <h3 className='contact__content__header-text'>Let's Talk</h3>
        </Animate>
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: 'translateX(200px)',
            opacity: 0,
          }}
          end={{
            transform: 'translateX(0px)',
            opacity: 1,
          }}
        >
          <div className="contact__content__form">
            <div className="contact__content__form__controlwrapper">
              <div>
                <input required name='name' className='inputName' type={'text'} />
                <label htmlFor='name' className='nameLabel'>Name</label>
              </div>
              <div>
                <input required name='email' className='inputEmail' type={'text'} />
                <label htmlFor='email' className='emailLabel'>Email</label>
              </div>
              <div>
                <textarea required name='message' className='inputMessage' type={'text'} rows={5}/>
                <label htmlFor='message' className='messageLabel'>Message</label>
              </div>
            </div>
            <button>Submit</button>
          </div>
        </Animate>
      </div>
    </section>
  );
};

export default Contact;
