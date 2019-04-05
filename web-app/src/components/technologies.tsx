import React from 'react';

const Technologies = (props: Object) => {
  return (
    <div>
      <div className='content'>
        <h2 className='subtitle'>Technologies</h2>
      </div>
      <div className='tile is-ancestor' style={{ flexWrap: 'wrap' }}>
        <div className='tile is-parent has-text-centered' >
          <article className='tile is-child notification is-primary'>
            <p className='title'>Design</p>
            <ul>
              <li>Bootstrap</li>
              <li>Bulma</li>
              <li>Materialize CSS</li>
              <li>Sketch App</li>
              <li>Adobe Products</li>
            </ul>
          </article>
        </div>
        <div className='tile is-parent has-text-centered'>
          <article className='tile is-child notification is-danger'>
            <p className='title'>UX</p>
            <ul>
              <li>Angular</li>
              <li>React/Redux</li>
              <li>Sass</li>
            </ul>
          </article>
        </div>
        <div className='tile is-parent has-text-centered'>
          <article className='tile is-child notification is-info'>
            <p className='title'>API</p>
            <ul>
              <li>Flask</li>
              <li>HapiJS</li>
              <li>KnexJS</li>
              <li>ObjectionJS</li>
              <li>Ruby on Rails</li>
            </ul>
          </article>
        </div>
        <div className='tile is-parent has-text-centered'>
          <article className='tile is-child notification is-warning'>
            <p className='title'>DB</p>
            <ul>
              <li>MySQL</li>
              <li>PostgreSQL</li>
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
              <li>CRON</li>
              <li>Kafka</li>
              <li>Ubuntu</li>
            </ul>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Technologies;