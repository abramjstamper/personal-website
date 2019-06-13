import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import posed, { PoseGroup } from 'react-pose';
import About from './about';
import Technologies from './technologies';
import Timeline from './timeline';

const RouteContainer = posed.div({
  enter: { opacity: 1, delay: 50, beforeChildren: true },
  exit: { opacity: 0, delay: 50 }
});

class Home extends Component {

  render() {
    return (
      <div className='hero-body'>
        <section className='section'>
          <Route render={({ location }) => (
            <PoseGroup>
              <RouteContainer key={location.key}>
                <Switch location={location}>
                  <Route path='/about' exact component={About} />
                  <Route path='/timeline' component={Timeline} />
                  <Route path='/technologies' component={Technologies} />
                  <Route component={About} />
                </Switch>
              </RouteContainer>
            </PoseGroup>
          )} />
        </section>
      </div>
    );
  }
}

export default Home;