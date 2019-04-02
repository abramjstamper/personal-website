import React, { Component } from 'react';
import Step from './step';

interface Props {
  steps: Array<StepDT>
}

interface StepDT {
  id: number,
  employer: String,
  position: String,
  date: String,
  description: String,
  link: String
}

class Steps extends Component<Props, {}> {

  render() {
    return (
      <ul className='steps is-large has-content-centered is-horizontal has-content-above'>
        {this.props.steps.map(step => <Step step={step} />).reverse()}
      </ul>
    );
  }
}

export default Steps;