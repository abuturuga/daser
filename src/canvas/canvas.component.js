import { BaseComponent } from '../base.component.js';
import PubSub from '../pubsub.js';
import { TableComponent } from './table-component/table.comonent.js';
import { CanvasLayoutService } from './canvas-layout.service.js';

/** Component CSS classes */
const COMPONENT_CLASS = 'canvas-component';
const ZOOM_BAR_CLASS = `${COMPONENT_CLASS}__zoom-bar`;
const ZOOM_BAR_BUTTON_CLASS = `${ZOOM_BAR_CLASS}__button`;

const ZOOM_IN_CLASS = `${ZOOM_BAR_CLASS}--in`;
const ZOOM_FIT_CLASS = `${ZOOM_BAR_CLASS}--fit`;
const ZOOM_OUT_CLASS = `${ZOOM_BAR_CLASS}--OUT`;

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
    
    this.state = {
      zoom: 1,
      tables: []
    };

    this.layoutService = new CanvasLayoutService();

    this.handleStateChange = this.handleStateChange.bind(this);
    PubSub.on('state:changed', this.handleStateChange);
  }

  bindEventListeners() {
    this.$element.querySelector(`.${ZOOM_IN_CLASS}`).addEventListener('click', () => {
      this.setState(({zoom: this.state.zoom + .3}));
    });
    
    this.$element.querySelector(`.${ZOOM_FIT_CLASS}`).addEventListener('click', () => {
      this.setState(({zoom: 1}));
    });

    this.$element.querySelector(`.${ZOOM_OUT_CLASS}`).addEventListener('click', () => {
      this.setState(({zoom: this.state.zoom - .3}));
    });
  }

  updateComponent() {
    const { tables, zoom } = this.state;

    this.$element.querySelector(`.${SVG_CLASS}`).innerHTML = 
    `<g transform=scale(${zoom})>` +
    tables.map(props => {
      const tableComponent = new TableComponent();
      const position = this.layoutService.getTablePosition(props);

      if (position) {
        tableComponent.setPosition(position.x, position.y);
      }
      return tableComponent.render(props);
    }).join('')
    + `</g>`;
  }

  handleStateChange(state) {
    const { tables } = state;
    this.setState({tables});
  }

  getTemplate() {
    return `
      <div class="${ZOOM_BAR_CLASS}">
        <button class="${ZOOM_BAR_BUTTON_CLASS} ${ZOOM_IN_CLASS}" title="Zoom In">
          <i class="material-icons">zoom_in</i>
        </button>
    
        <button class="${ZOOM_BAR_BUTTON_CLASS} ${ZOOM_FIT_CLASS}" title="Fit zoom">
          <i class="material-icons">search</i>
        </button>
    
        <button class="${ZOOM_BAR_BUTTON_CLASS} ${ZOOM_OUT_CLASS}" title="Zoom Out">
          <i class="material-icons">zoom_out</i>
        </button>
      </div>
    
      <svg class="${SVG_CLASS}"></svg>
    `;
  }

}
