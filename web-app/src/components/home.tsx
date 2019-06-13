import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
// import posed from 'react-pose';
import About from './about';
import Technologies from './technologies';
import Timeline from './timeline';

class Home extends Component {

  render() {
    return (
      <div className='hero-body'>
        <section className='section'>
          <Switch>
            <Route path='/about' exact component={About} />
            <Route path='/timeline' component={Timeline} />
            <Route path='/technologies' component={Technologies} />
            <Route component={About} />
          </Switch>
        </section>
      </div>
    );
  }
}

export default Home;