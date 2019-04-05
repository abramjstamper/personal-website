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
            Welcome! I'm Abram J. Stamper. I am a full stack software engineer with experience building highly-scalable, production-grade web applications. Graduating magna cum laude, I received a <a href='https://cse.taylor.edu' target='_blank'>Bachelor of Science in Computer Science/Systems</a> from Taylor University. My concentration was software engineering focused on the agile software development life cycle. If you're not familiar with <a href='http://www.taylor.edu/' target='_blank'>Taylor University</a>, it is a private, Christian, Liberal Arts school located in the cornfields of Upload, Indiana. While attending Taylor, I was involved in many extracurricular activities. I was actively involved in representing students to administrators and coordinating student activities as the student body treasurer for two years. At Taylor, I experienced exponential spiritual and personal growth. Before attending Taylor, I graduated from Kokomo High School, in my hometown of Kokomo, Indiana. During my senior year, I was awarded the <a href='https://pittsburghfoundation.org/scholarship/1510' target='_blank'>Wherrett Memorial Scholarship</a>.
          </p>
          <p>
            In my current role, I am currently working as an Advanced Software Engineer for <a href='https://aptiv.com' target='_blank'>Aptiv</a>. Aptiv is a tier one automotive supplier and technology company. My team and I work in advanced development for <a href='https://www.aptiv.com/user-experience' target='_blank'>Active Safety and User Experience</a> business lines. Due to the nature of advanced development, much of what I am currently working on is confidential. Essentially, I work as a product and concept developer for Aptiv's AS/UX product lines. We are the imagineers of Aptiv.
          </p>
          <p>
            My career interests and personality is peaked by developing people, creating innovative products, and learning new things. I'm always open to engaging and exciting opportunities. I self-identify as an entrepreneur. While I'm not currently pursing any businesses, I have had two successful businesses in Kokomo while in College and High School. In addition to computer science, I studied scaling businesses and entrepreneurship during college. I plan to return to entrepreneurship someday in the distant future. As important as it is to be a leader, it's also important to learn when to follow and support others. This is a place I'm currently experiencing personal growth as I work in corporate America with a large management structure. When I chose to pursue entrepreneurship, I know I won't regret taking the time now to gain broader perspective and unique personal growth. I have a passion for creating innovative concepts by using design thinking principles. From my passion to learn new things, I have a breadth of knowledge spanning many different fields from psychology, management, software engineering, UX design, history, business, technology, science, and many more; I see entrepreneurship at the intersection and culmination of all my interests. Having that breadth of knowledge allows me to cast a vision as a leader and see the big picture. However, having a detail-oriented personality, I can envisions the steps necessary to carry that vision into fruition.
          </p>
          <p>
            If you'd like to connect with me, feel like I would be a good fit for your organization, or are interested in getting lunch, reach out to me at any of the links in the footer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;