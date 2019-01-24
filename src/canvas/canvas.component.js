import { BaseComponent } from '../base.component.js';
import PubSub from '../pubsub.js';
import { TableComponent } from './table-component/table.comonent.js';
import { CanvasLayoutService } from './canvas-layout.service.js';

/** Component CSS classes */
const COMPONENT_CLASS = 'canvas-component';
const ZOOM_BAR_CLASS = `${COMPONENT_CLASS}__zoom-bar`;
const ZOOM_BAR_BUTTON_CLASS = `${ZOOM_BAR_CLASS}__button`;
const SVG_CLASS = `${COMPONENT_CLASS}__svg`;

/**
 * Component responsible with rendering and handleling all the
 * svg content of the application.
 * This component is responsible with renderig the visualization
 * of the database.
 * @class
 * @public
 */
export class CanvasComponent extends BaseComponent {
  
  constructor() {
    super('div', COMPONENT_CLASS);
    this.layoutService = new CanvasLayoutService();

    this.handleStateChange = this.handleStateChange.bind(this);
    PubSub.on('state:changed', this.handleStateChange);
  }

  handleStateChange(state) {
    const { tables } = state;
    document.querySelector(`.${SVG_CLASS}`).innerHTML = 
    tables.map(props => {
      const tableComponent = new TableComponent();
      const position = this.layoutService.getTablePosition(props);

      if (position) {
        tableComponent.setPosition(position.x, position.y);
      }
      return tableComponent.render(props);
    }).join('');
  }

  getTemplate() {
    return `
      <div class="${ZOOM_BAR_CLASS}">
        <button class="${ZOOM_BAR_BUTTON_CLASS}" title="Zoom In">
          <i class="material-icons">zoom_in</i>
        </button>
    
        <button class="${ZOOM_BAR_BUTTON_CLASS}" title="Fit zoom">
          <i class="material-icons">search</i>
        </button>
    
        <button class="${ZOOM_BAR_BUTTON_CLASS}" title="Zoom Out">
          <i class="material-icons">zoom_out</i>
        </button>
      </div>
    
      <svg class="${SVG_CLASS}"></svg>
    `;
  }

}
