import types from './types.js';
import PubSub from './pubsub.js';
import { updateState } from './actions.js';

const tableData = {
  title: 'Main table',
  id: 0,
  rows: [
    {
      name: 'Col name',
      type: 'VARCHAR(30)',
      default: 'NULL',
      key: types.KEYS.PRIMARY
    },
    {
      name: 'Col name2',
      type: 'VARCHAR(30)',
      default: 'NULL',
    },
    {
      name: 'Col name2',
      type: 'VARCHAR(30)',
      default: 'NULL',
    },
    {
      name: 'Col name2',
      type: 'VARCHAR(30)',
      default: 'NULL',
    },
    {
      name: 'Col name2',
      type: 'VARCHAR(30)',
      default: 'NULL',
    }
  ]
};

export function seed() {
  const tables = Array(3).fill(0).map((_, index) => Object.assign({}, tableData, {id: index}));
  PubSub.emit('state:set', updateState({tables}));
}
