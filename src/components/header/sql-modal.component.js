import { ModalComponent } from '../shared/index.js';
import PubSub from '../../pubsub.js';
import { parseSQL } from '../../sql-parser.service.js';
import { updateState } from '../../actions.js';

const PARSE_BUTTON_CLASS = 'modal-parse-sql-button';
const SQL_INPUT_CLASS = 'modal-sql-input';

export class SQLModalComponent extends ModalComponent {

  constructor() {
    super();
  }

  bindEventListeners() {
    super.bindEventListeners();
    this.$element.querySelector(`.${PARSE_BUTTON_CLASS}`)
      .addEventListener('click', () => {
        const sql = this.$element.querySelector(`.${SQL_INPUT_CLASS}`).value;
        const parsedSQL = parseSQL(sql);

        PubSub.emit('state:set', updateState({tables: parsedSQL}));
        this.close();
      });
  }

  getModalContent() {
    return `
      <div class="input-form">
        <textarea placeholder="SQL code here..." row="8" class="${SQL_INPUT_CLASS}"></textarea>
      </div>
      <button class="${PARSE_BUTTON_CLASS}">Parse</button>
    `
  }

  render() {
    super.render({title: 'Paste your SQL code'});
    return this.$element;
  }

}
