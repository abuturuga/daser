import PubSub from './pubsub.js';
import {
  UPDATE_STATE,
  UPDATE_TABLE,
  SET_SELECTED_TABLE,
  TOGGLE_PROPERTIES_PANEL
} from './actions.js'


let state = {
  tables: [],
  references: [],
  isMobile: false,
  selectedTable: null,
  panels: {
    isStructureOpen: true,
    isPropertiesOpen: true
  }
};

function reducer({type, payload}) {
  switch(type) {
    case UPDATE_STATE:
      return Object.assign({}, state, payload);
    case SET_SELECTED_TABLE:
      return Object.assign({}, state, { selectedTable: payload });
    case UPDATE_TABLE:
      const table = state.tables.find(t => parseInt(t.id) === parseInt(payload.id));
      if (!table) return state;
      Object.assign(table, payload);
      return state;
    case TOGGLE_PROPERTIES_PANEL:
      return Object.assign({}, state, { panels: {isPropertiesOpen: payload }});
    default:
      return state;
  }
}

PubSub.on('state:set', (action) => {
  state = reducer(action);
  console.log(action);
  PubSub.emit('state:changed', state);
});

export function init() {
  PubSub.emit('state:set', state);
}
