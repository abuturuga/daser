import { timingSafeEqual } from "crypto";

export class AppController {

  constructor() {
    this.toggleStructureBtn = document.querySelector('#structure-toggle-btn');
    this.togglePropertiesBtn = document.querySelector('#properties-toggle-btn');

    this.structurePanel = document.querySelector('.structure-panel');
  }

  init() {
    this.initTogglePanels();
  }

  initTogglePanels() {
    this.toggleStructureBtn.addEventListener('click', _ => {
      (this.structurePanel.style.display === 'none')
        ? this.structurePanel.style.display = 'block'
        : this.structurePanel.style.display = 'none';
    });
  }

}
