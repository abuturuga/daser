import types from './types.js';
import PubSub from './pubsub.js';

const tableData = {
  title: 'Main table',
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

const state = {
  tables: Array(1).fill(0).map(_ => Object.assign({}, tableData)),
  references: []
}

PubSub.on('state:set', (event) => {

  PubSub.emit('state:changed', state);
});



export function init() {
  PubSub.emit('state:set', state);
}
