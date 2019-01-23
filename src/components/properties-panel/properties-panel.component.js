import { BaseComponent } from '../../base.component.js';


const COMPONENT_CLASS = 'properties-panel-component';


export class PropertiesPanelComponent extends BaseComponent {

  constructor() {
    super('div', COMPONENT_CLASS);
  }

  getTemplate() {
    return `
      <header class="panel__header"></header>

    <div class="panel__content">
      <div class="table-properties-panel">
        <section class="panel__content__section">
          <header class="panel__content__section__header">
            <h3 class="panel__content__section__header__title">Meta</h3>
          </header>
          <div class="input-form">
            <label>Name</label>
            <input type="text" placeholder="Table name"/>
          </div>

          <div class="input-form">
            <label>Description</label>
            <textarea rows="2" placeholder="Table description"></textarea>
          </div>
        </section>

        <section class="panel__content__section">
          <header class="panel__content__section__header">
            <h3 class="panel__content__section__header__title">Columns</h3>        
          </header>
      
          <div class="table-properties__columns__header">
            <label>Name</label>
            <label>Type</label>
            <label>NL</label>
            <label>PK</label>
          </div>

          <ul class="table-properties__columns__list">
            <li>
              <div class="input-form">
                <label>Name</label>
                <input type="text" placeholder="Column Name"/>
              </div>
              <div class="input-form">
                <label>Type</label>
                <input type="text" placeholder="Column Type"/>
              </div>
              <span class="input-checkbox">
                <label><span>Not Null</span>
                  <i class="material-icons">check_box</i>
                </label>
              </span>
              <span class="input-checkbox">
                <label><span>PK</span>
                  <i class="material-icons">check_box</i>
                </label>
              </span>
              <i class="material-icons">edit</i>
              <i class="material-icons">delete</i>
            </li>
          </ul>
        </section>

        <section class="panel__content__section">
          <header class="panel__content__section__header">
            <h3 class="panel__content__section__header__title">Aditional Scripts</h3>        
          </header>

          <div class="input-form">
            <label>Before table creation</label>
            <textarea placeholder="SQL code here..."></textarea>
          </div>

          <div class="input-form">
            <label>After table creation</label>
            <textarea placeholder="SQL code here..."></textarea>
          </div>
        </section>
      </div>
    </div>
    `
  }

}
