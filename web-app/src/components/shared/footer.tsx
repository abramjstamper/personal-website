import React from 'react';

const footer = (props: Object) => {
  return (
    <footer className='footer has-text-white'>
      <div className='level'>
        <div className='level-item has-text-centered'>
          <a href='https://github.com/abramjstamper' target='_blank'>
            <span className='icon is-large has-text-light'><i className='fab fa-github fa-3x'></i></span>
          </a>
        </div>
        <div className='level-item has-text-centered'>
          <a href='https://www.linkedin.com/in/abramstamper/' target='_blank'>
            <span className='icon is-large has-text-light'><i className='fab fa-linkedin fa-3x'></i></span>
          </a>
        </div>
        <div className='level-item has-text-centered'>
          <a href='https://stackexchange.com/users/2158482/abram-stamper' target='_blank'>
            <span className='icon is-large has-text-light'><i className='fab fa-stack-overflow fa-3x'></i></span>
          </a>
        </div>
      </div>
      <div className='has-text-center'>
        © Abram Stamper
      </div>
    </footer>
  );
};

export default footer;