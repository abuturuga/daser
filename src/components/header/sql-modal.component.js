import { ModalComponent } from '../shared/index.js';

export class SQLModalComponent extends ModalComponent {

  constructor() {
    super();
  }

  getModalContent() {
    return `
     fsadfsadfsdafasdfsadf
    `
  }

  render() {
    super.render({title: 'Paste your SQL code'});
    return this.$element;
  }

}
