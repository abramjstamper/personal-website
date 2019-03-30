import React, { Component } from 'react';
import Steps from './shared/steps';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='columns'>
          <div className='column'>
          </div>
          <div className='column'>
            <Steps steps={[{ id: 1, name: 'Vibenomics', date: '2017' }, { id: 3, name: 'Taylor', date: '2018' }, { id: 2, name: 'Aptiv', date: '2019' }]} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
