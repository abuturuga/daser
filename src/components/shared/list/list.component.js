import { BaseComponent } from '../../../base.component.js';


const COMPONENT_CLASS = 'list-component';


export class ListComponent extends BaseComponent {

  constructor() {
    super('ul', COMPONENT_CLASS);
    this.items = [];
  }


  getTemplate(properties) {
    const icon = properties.icon ? `<i class="material-icons">${properties.icon}</i>` : '';
    
    return properties.items.map(item => `
      <li class="${COMPONENT_CLASS}__item">
        ${icon}
        <span>${item}</span>
      </li>
    `).join('');
  }

}
