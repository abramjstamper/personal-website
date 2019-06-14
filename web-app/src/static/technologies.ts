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
    technologies: ['Flask', 'HapiJS', 'KnexJS', 'ObjectionJS', 'Ruby on Rails']
  },
  {
    title: 'Database',
    color: 'is-primary',
    technologies: ['MySQL', 'PostgreSQL', 'SQLite']
  },
  {
    title: 'Design',
    color: 'is-warning',
    technologies: ['Bootstrap', 'Bulma', 'Materialize CSS', 'Sketch App', 'Adobe Products']
  },
  {
    title: 'Cloud',
    color: 'is-info',
    technologies: ['AWS', 'Azure', 'Firebase']
  },
  {
    title: 'Linux',
    color: 'is-link',
    technologies: ['bash', 'CRON', 'git', 'systemd', 'Ubuntu']
  }
];

export default technologies;