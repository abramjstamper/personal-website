import React from 'react';

const About = (props: Object) => {
  return (
    <div className='content'>
      <div className='columns'>
        <div className='column is-3'>
          <h2 className='subtitle'>About</h2>
          <figure className='image'>
            <img className='is-rounded' src='professional-headshot.png' />
          </figure>
        </div>
        <div className='column'>
          <p>
            Welcome! I'm Abram J. Stamper. I am a full stack software engineer with experience building highly-scalable, production-grade web applications. Graduating magna cum laude, I recieved a <a href='https://cse.taylor.edu' target='_blank'>Bachelor of Science in Computer Science/Systems</a> from Taylor University. My concentration was software engineering focused on the agile software development lifecycle. If you're not familiar with <a href='http://www.taylor.edu/' target='_blank'>Taylor University</a>, it is a private, Christian, Liberal Arts school located in the cornfields of Upload, Indiana. While attending Taylor, I was involved in many extracurricular activities. I was actively involved in representing students to administrators and coordinating student activites as the student body treasuer for two years. At Taylor, I experienced exponential spiritual and personal growth. Before attending Taylor, I graduated from Kokomo High School, in my hometown of Kokomo, Indiana. During my senior year, I was awarded the <a href='https://pittsburghfoundation.org/scholarship/1510' target='_blank'>Wherrett Memorial Scholarship</a>.
          </p>
          <p>
            In my current role, I am currently working as an Advanced Software Engineer for <a href='https://aptiv.com' target='_blank'>Aptiv</a>. Aptiv is a tier one automotive supplier and technology company. My team and I work in advanced development for <a href='https://www.aptiv.com/user-experience' target='_blank'>Active Safety and User Experience</a> business lines. Due to the nature of advanced development, much of what I am currently working on is confidential.
          </p>
          <p>
            My career interests and personality is peaked by developing people, creating innovative products, and learning new things. I'm always open to engaging and exciting opportunities. Below is a sample of my previous jobs, projects, awards, and leadership positions. 
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;