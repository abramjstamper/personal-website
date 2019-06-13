import { TimelineItemProps } from '../../types/timelineItem';

const steps: Array<TimelineItemProps> = [
  {
    id: 1,
    employer: 'Taylor University',
    position: 'Back-End Developer',
    date: 'Summer 2016',
    description: 'I worked to develop the foundation for Faraday: Learning Management 2.0 with another student and two supervising professors. We used an agile software development methodology to develop the web application. The project\'s key goals were to bring learning management into modernity by applying machine learning and artificial intelligence to classroom management. I worked to design and build the backend architecture in PostgreSQL and NodeJS.',
    link: 'https://github.com/faraday-effect/faraday'
  },
  {
    id: 2,
    employer: 'Vibenomics',
    position: 'Full Stack Developer',
    date: 'Summer 2017',
    description: 'Vibenomics is a SaaS company in Indianapolis, IN that provides music and professionally-created voice over advertisements to its clients for airplay in their businesses. I worked as a software engineering intern on the product development team. The technology stack was Amazon Web Services Serverless, Dynamo DB, and ReactJS. Within their sprints, I designed and developed, from scratch, several internal systems monitoring and diagnostic web applications.',
    link: 'http://www.vibenomics.com/'
  },
  {
    id: 3,
    employer: 'Graduation',
    position: 'Computer Science/Systems',
    date: 'May 2018',
    description: 'I graduated magna cum laude from Taylor University with a Bachelor of Science degree. Taylor University is a private, Christian, liberal arts university in central Indiana. My major was computer science with a minor in systems engineering and a concentration in software engineering.',
    link: 'https://cse.taylor.edu'
  },
  {
    id: 4,
    employer: 'Aptiv',
    position: 'Advanced Software Engineer',
    date: 'May 2018',
    description: 'Aptiv is a tier one automotive supplier and technology company. I work in advanced development for Active Safety and User Experience business lines. While working for Aptiv, I created the architecture for a cloud IoT software product, developed the initial user experience wire frames. I worked with Azure IaaS & PaaS, PostgreSQL, NodeJS, and ReactJS - among other additional technologies not listed.',
    link: 'https://www.aptiv.com'
  }
];

export default steps;