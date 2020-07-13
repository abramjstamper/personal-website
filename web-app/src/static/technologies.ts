import { TileProps } from '../types/tile';

const technologies: Array<TileProps> = [
  {
    title: 'Front-End',
    color: 'is-danger',
    technologies: ['Angular', 'React/Redux', 'Sass']
  },
  {
    title: 'Back-End',
    color: 'is-success',
    technologies: ['Flask • Python', 'HapiJS • NodeJS', 'Ruby on Rails • Ruby']
  },
  {
    title: 'Database',
    color: 'is-primary',
    technologies: ['MySQL', 'PostgreSQL', 'SQLite']
  },
  {
    title: 'Design',
    color: 'is-warning',
    technologies: ['Adobe Illustrator', 'Adobe Photoshop', 'Bootstrap', 'Bulma', 'Final Cut Pro', 'Materialize CSS', 'Sketch App']
  },
  {
    title: 'Cloud',
    color: 'is-info',
    technologies: ['AWS', 'Azure', 'Digital Ocean', 'Firebase']
  },
  {
    title: 'Tools',
    color: 'is-link',
    technologies: ['bash', 'CRON', 'git', 'Mac OS', 'systemd', 'Ubuntu/linux', 'VS Code']
  }
];

export default technologies;