import React from 'react';

const Technologies = (props: Object) => {
  return (
    // <div className='content'>
    <div>
      <div className='content'>
        <h2 className='subtitle'>Technologies</h2>
      </div>
      <div className='tile is-ancestor'>
        <div className='tile is-parent has-text-centered'>
          <article className='tile is-child notification is-primary'>
            <p className='title'>Design</p>
            <ul>
              <li>Sketch App</li>
              <li>Bootstrap</li>
              <li>Bulma</li>
              <li>Materialize CSS</li>
            </ul>
          </article>
        </div>
        <div className='tile is-parent has-text-centered'>
          <article className='tile is-child notification is-danger'>
            <p className='title'>UX</p>
            <ul>
              <li>React/Redux</li>
              <li>Angular</li>
              <li>Sass</li>
            </ul>
          </article>
        </div>
        <div className='tile is-parent has-text-centered'>
          <article className='tile is-child notification is-info'>
            <p className='title'>API</p>
            <ul>
              <li>HapiJS</li>
              <li>ObjectionJS</li>
              <li>KnexJS</li>
              <li>Ruby on Rails</li>
              <li>Flask</li>
            </ul>
          </article>
        </div>
        <div className='tile is-parent has-text-centered'>
          <article className='tile is-child notification is-warning'>
            <p className='title'>DB</p>
            <ul>
              <li>Postgres</li>
              <li>MySQL</li>
              <li>SQLite</li>
            </ul>
          </article>
        </div>
        <div className='tile is-parent has-text-centered'>
          <article className='tile is-child notification is-success'>
            <p className='title'>Cloud</p>
            <ul>
              <li>AWS</li>
              <li>Azure</li>
              <li>Kafka</li>
              <li>CRON</li>
              <li>Ubuntu</li>
            </ul>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Technologies;