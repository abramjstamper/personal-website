import React from 'react';

const footer = (props: Object) => {
  return (
    <div className='hero-foot'>
      <footer className='footer has-text-white'>
        <div className='level is-mobile'>
          <div className='level-item has-text-centered'>
            <a href='https://github.com/abramjstamper' target='_blank' rel='noopener noreferrer'>
              <span className='icon is-large has-text-light'><i className='fab fa-github fa-3x'></i></span>
            </a>
          </div>
          <div className='level-item has-text-centered'>
            <a href='https://www.linkedin.com/in/abramstamper/' target='_blank' rel='noopener noreferrer'>
              <span className='icon is-large has-text-light'><i className='fab fa-linkedin fa-3x'></i></span>
            </a>
          </div>
          <div className='level-item has-text-centered'>
            <a href='https://stackexchange.com/users/2158482/abram-stamper' target='_blank' rel='noopener noreferrer'>
              <span className='icon is-large has-text-light'><i className='fab fa-stack-overflow fa-3x'></i></span>
            </a>
          </div>
          <div className='level-item has-text-centered'>
            <a href='resume.pdf' target='_blank' rel='noopener noreferrer'>
              <span className='icon is-large has-text-light'><i className='fas fa-file-pdf fa-3x'></i></span>
            </a>
          </div>
        </div>
        <br />
        <div className='content'>
          <p className='is-size-7'>
            © Abram Stamper 2020
          <br />
            The source code is licensed <a href='http://opensource.org/licenses/mit-license.php' target='_blank' rel='noopener noreferrer'> MIT</a>.
        </p>
        </div>
      </footer>
    </div>
  );
};

export default footer;