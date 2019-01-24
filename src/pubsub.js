
export class PubSub {

  constructor() {
    this.events = {};
  }

  on(event, listener) {
    if (!this.events[event]) {
      this.events[event] = [];
    }

    this.events[event].push(listener);
  }

  emit(event, data) {
    if (!this.events[event]) {
      this.events[event] = [];
    }

    this.events[event].forEach(listener => listener(data));
  }

}

const pubSub = new PubSub();
export default pubSub;
