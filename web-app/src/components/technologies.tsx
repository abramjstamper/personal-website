import React from 'react';
import { TileProps } from '../types/tile';
import technologies from '../static/technologies';

const Tile = (props: TileProps) => {
  return (
    <div className='tile is-parent has-text-centered' >
      <article className={`tile is-child notification ${props.color}`}>
        <p className='title'>{props.title}</p>
        <ul>
          {props.technologies.map(tech => <li key={tech}>{tech}</li>)}
        </ul>
      </article>
    </div>
  );
};

const Technologies = (props: Object) => {
  return (
    <div>
      <div className='content'>
        <h2 className='subtitle'>Technologies</h2>
      </div>
      <div className='tile is-ancestor' style={{ flexWrap: 'wrap' }}>
        {technologies.map(tech => <Tile key={tech.title} {...tech} />)}
      </div>
    </div>
  );
};

export default Technologies;