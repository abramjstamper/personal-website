import React, { Component } from 'react';
import { TimelineItemProps } from '../types/timelineItem';
import timeline from '../static/timeline';

const TimelineItem = (props: TimelineItemProps) => {
  return (
    <div className='timeline-item'>
      <div className='timeline-marker'></div>
      <div className='timeline-content'>
        <p className='heading'>{props.date} • {props.position} • {props.employer}</p>
        <p>{props.description} &nbsp;
          <a href={props.link} target='_blank' rel='noopener noreferrer'>View More</a>
        </p>
      </div>
    </div>
  );
};

class Timeline extends Component {
  render() {
    return (
      <div className='content'>
        <h2 className='subtitle'>Experience</h2>
        <div className='timeline is-centered'>
          {timeline.reverse().map(item => <TimelineItem key={item.id} {...item} />)}
        </div>
      </div>
    );
  }
}

export default Timeline;