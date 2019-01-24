import { ModalComponent } from '../shared/index.js';
import { generateSQL } from '../../sql-generator.service.js';

const SQL_INPUT_CLASS = 'modal-sql-input';

export class GeneratedModalComponent extends ModalComponent {

  constructor() {
    super();
  }

  open(tables) {
    const sql = generateSQL(tables);
    this.$element.querySelector(`.${SQL_INPUT_CLASS}`).value = sql;
    super.open();
  }

  getModalContent() {
    return `
      <div class="input-form">
        <textarea placeholder="Your SQL code" row="8" class="${SQL_INPUT_CLASS}"></textarea>
      </div>
    `
  }

  render() {
    super.render({title: 'Your SQL code'});
    return this.$element;
  }

}
