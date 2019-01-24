import { BaseComponent } from '../../../base.component.js';


const COMPONENT_CLASS = 'list-component';
const ITEM_CLASS = `${COMPONENT_CLASS}__item`;

export class ListComponent extends BaseComponent {

  constructor() {
    super('ul', COMPONENT_CLASS);
    this.items = [];
  }

  bindEventListeners(properties) {
    this.$element.addEventListener('click', event => {
      const { path } = event;
      const $item = Array.prototype.find
        .call(path, ($element) => $element.classList.contains(ITEM_CLASS));
      
      if ($item && properties.onSelect && typeof properties.onSelect === 'function') {
        properties.onSelect($item.dataset.item);
      }
    });
  }

  getTemplate(properties) {
    const icon = properties.icon ? `<i class="material-icons">${properties.icon}</i>` : '';
    
    return properties.items.map(item => `
      <li class="${ITEM_CLASS}" data-item=${item}>
        ${icon}
        <span>${item}</span>
      </li>
    `).join('');
  }

}
