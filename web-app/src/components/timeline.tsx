import React, { Component } from 'react';
import Steps from './shared/steps';

class Timeline extends Component {
  render() {
    return (
      <div className='content'>
        <h2 className='subtitle'>Experience</h2>
        <Steps steps={[{ id: 1, name: 'Taylor', date: '2016' }, { id: 2, name: 'Vibenomics', date: '2017' }, { id: 3, name: 'Graduation', date: '2018' }, { id: 4, name: 'Aptiv', date: '2019' }].reverse()} />
      </div>
    );
  }
}

export default Timeline;