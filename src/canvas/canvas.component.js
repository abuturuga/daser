import { BaseComponent } from '../base.component.js';
import PubSub from '../pubsub.js';

const COMPONENT_CLASS = 'canvas-component';
const ZOOM_BAR_CLASS = `${COMPONENT_CLASS}__zoom-bar`;
const ZOOM_BAR_BUTTON_CLASS = `${ZOOM_BAR_CLASS}__button`;
const SVG_CLASS = `${COMPONENT_CLASS}__svg`;

export class CanvasComponent extends BaseComponent {
  
  constructor() {
    super('div', COMPONENT_CLASS)
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