import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { RouteChildrenProps } from 'react-router';
import posed, { PoseGroup } from 'react-pose';
import About from './about';
import Technologies from './technologies';
import Timeline from './timeline';

const RouteContainer = posed.div({
  enter: { opacity: 1, delay: 50, beforeChildren: true },
  exit: { opacity: 0, delay: 50 }
});

class Home extends Component<RouteChildrenProps> {

  componentDidMount() {
    if (this.props.location.pathname === '/') {
      this.props.history.push('/about');
    }
  }

  render() {
    const { location } = this.props;
    return (
      <div className='hero-body'>
        <section className='section'>
          <PoseGroup>
            <RouteContainer key={location.pathname}>
              <Switch>
                <Route path='/about' exact component={About} />
                <Route path='/timeline' component={Timeline} />
                <Route path='/technologies' component={Technologies} />
                <Route component={About} />
              </Switch>
            </RouteContainer>
          </PoseGroup>
        </section>
      </div>
    );
  }
}

export default Home;