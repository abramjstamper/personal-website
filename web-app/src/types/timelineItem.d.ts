import React from 'react';

export interface TimelineItemProps {
  id: number,
  employer: string,
  position: strings,
  date: string,
  description: string,
  link: string
};

declare const TimelineItem: React.FunctionComponent<TimelineItemProps>;

export default TimelineItem;