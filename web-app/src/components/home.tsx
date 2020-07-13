import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import ReactGA from 'react-ga';
import { RouteChildrenProps } from 'react-router';
import posed, { Transition } from 'react-pose';
import About from './about';
import Technologies from './technologies';
import Experience from './experience';

const RouteContainer = posed.div({
  enter: {
    x: 0,
    delay: 300, beforeChildren: true,
    transition: {
      x: { type: 'spring', stiffness: 1000, damping: 20 },
      default: { duration: 250 },
      opacity: () => (
        { type: 'keyframes', values: [0, 0.5, 0.75, 0.99, 1] })
    },
    opacity: 1
  },
  exit: {
    opacity: 0,
    x: -100,
    transition: {
      x: () => (
        { type: 'keyframes', values: [0, -25, -50, -75, -100] }),
      default: { duration: 400 },
      opacity: () => (
        { type: 'keyframes', values: [1, 0.99, 0.75, 0.5, 0] })
    }
  }
});

class Home extends Component<RouteChildrenProps> {

  componentDidMount() {
    if (this.props.location.pathname === '/') {
      this.props.history.push('/about');
    }
  }

  render() {
    const { location } = this.props;
    ReactGA.pageview(location.pathname);

    return (
      <section className='section container'>
        <Transition key={location.pathname} >
          <RouteContainer key={location.pathname} initialPose='exit'>
            <Switch>
              <Route path='/about' exact component={About} />
              <Route path='/experience' component={Experience} />
              <Route path='/technologies' component={Technologies} />
              <Route component={About} />
            </Switch>
          </RouteContainer>
        </Transition>
      </section>
    );
  }
}

export default Home;