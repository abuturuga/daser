import PubSub from './pubsub.js';

export const UPDATE_STATE = 'UPDATE_STATE';
export const UPDATE_TABLE = 'UPDATE_TABLE';
export const SET_SELECTED_TABLE = 'SET_SELECTED_TABLE';
export const TOGGLE_PROPERTIES_PANEL = 'TOGGLE_PROPERTIES_PANEL';
export const CREATE_TABLE = 'CREATE_TABLE';
export const UPDATE_TABLE_ROW = 'UPDATE_TABLE_ROW';

export function updateState(payload) {
  return { type: UPDATE_STATE, payload };
}

export function updateTable(payload) {
  return { type: UPDATE_TABLE, payload };
}

export function setSelectedTable(payload) {
  return { type: SET_SELECTED_TABLE, payload };
}

export function togglePropertiesPanel(payload) {
  return { type: TOGGLE_PROPERTIES_PANEL, payload };
}

export function createTable(payload) {
  return { type: CREATE_TABLE, payload };
}

export function updateTableRow(payload) {
  PubSub.emit('state:set', ({ type: UPDATE_TABLE_ROW, payload }));
}