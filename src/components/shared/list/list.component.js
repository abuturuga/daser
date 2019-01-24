import { BaseComponent } from '../../../base.component.js';


const COMPONENT_CLASS = 'list-component';
const ITEM_CLASS = `${COMPONENT_CLASS}__item`;
const ITEM_SELECTED_CLASS = `${ITEM_CLASS}--selected`

export class ListComponent extends BaseComponent {

  constructor() {
    super('ul', COMPONENT_CLASS);
    this.items = [];
  }

  update(properties) {
    this.$element.innerHTML = this.getTemplate(properties);
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

    return (properties.items.length === 0)
      ? '<div>No items<div>' 
      : properties.items.map(item => `
          <li class="${ITEM_CLASS}
            ${(parseInt(item.id) === parseInt(properties.selected)) ? ITEM_SELECTED_CLASS : ''}" 
            data-item=${item.id}>
            ${icon}
            <span>${item.title}</span>
          </li>
      `).join('');
  }

}
