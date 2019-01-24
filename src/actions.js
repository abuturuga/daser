export const UPDATE_STATE = 'UPDATE_STATE';
export const UPDATE_TABLE = 'UPDATE_TABLE';
export const SET_SELECTED_TABLE = 'SET_SELECTED_TABLE';

export function updateState(payload) {
  return { type: UPDATE_STATE, payload };
}

export function updateTable(payload) {
  return { type: UPDATE_TABLE, payload };
}

export function setSelectedTable(payload) {
  return { type: SET_SELECTED_TABLE, payload };
}
