import React from 'react';

interface StepsProps {
  steps: Array<Step>
}

interface Step {
  id: number,
  name: String,
  date: String
}

const renderStep = (step: Step) => {
  return (
    <li key={step.id} className='steps-segment'>
      <span className='steps-marker is-light'></span>
      <div className='steps-content has-text-white'>
        <p className='is-size-4'>{step.date}</p>
        <p className='heading'>{step.name}</p>
      </div>
    </li>
  );
}

const Steps = (props: StepsProps) => {
  return (
    <div className='level'>
      <div className='level-item'>
        <ul className='steps is-vertical is-centered is-large has-content-centered'>
          {props.steps.map(step => renderStep(step))}
        </ul>
      </div>
    </div>
  );
};

export default Steps;