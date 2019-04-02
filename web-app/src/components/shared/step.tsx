import React from 'react';

interface Step {
  id: number,
  employer: String,
  position: String,
  date: String,
  description: String,
  link: String
}

interface Props {
  step: Step
}

const Step = ({ step }: Props) => {
  return (
    <li key={step.id} className='steps-segment'>
      <span className='steps-marker is-light'></span>
      <div className='steps-content '>
        <div className='card has-text-black'>
          <header className='card-header'>
            <p className='card-header-title is-centered has-text-black'>
              {step.employer}
            </p>
          </header>
          <div className='card-content'>
            {/* {step.description} */}
            {/* <br /> */}
            <time>{step.date}</time>
          </div>
          <footer className='card-footer'>
            <a href="#" className='card-footer-item'>View</a>
          </footer>
        </div>
      </div>
    </li>
  );
};

export default Step;
