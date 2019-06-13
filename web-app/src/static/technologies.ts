import { TileProps } from '../types/tile';

const technologies: Array<TileProps> = [
  {
    title: 'Design',
    color: 'is-primary',
    technologies: ['Bootstrap', 'Bulma', 'Materialize CSS', 'Sketch App', 'Adobe Products']
  },
  {
    title: 'UX',
    color: 'is-danger',
    technologies: ['Angular', 'React/Redux', 'Sass']
  },
  {
    title: 'API',
    color: 'is-info',
    technologies: ['Flask', 'HapiJS', 'KnexJS', 'ObjectionJS', 'Ruby on Rails']
  },
  {
    title: 'DB',
    color: 'is-warning',
    technologies: ['MySQL', 'PostgreSQL', 'SQLite']
  },
  {
    title: 'Cloud',
    color: 'is-success',
    technologies: ['AWS', 'Azure', 'CRON', 'Kafka', 'Ubuntu']
  }
];

export default technologies;