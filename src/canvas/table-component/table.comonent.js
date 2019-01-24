import { HeaderComponent } from './header.comonent.js';
import { ContentComponent } from './content.component.js';

export class TableComponent {

  constructor(config) {
    this.config = config;

    this.width = config.width;
    this.height = config.header.height;

    this.headerComponent = new HeaderComponent(config);
    this.contentComponent = new ContentComponent(config);
    this.setPosition(20, 20);
  }

  setPosition(x, y) {
    this.position = { x, y };
  }

  generateTemplate(props) {
    const headerTemplate = this.headerComponent.render(props);
    const contentTemplate = this.contentComponent.render(props);
    this.height += props.rows.length * this.config.content.row.height;

    const { x, y } = this.position;
    return `
      <g class="table" transform="translate(${x}, ${y})">
        <rect x="0" y="0" width="${this.width}" height="${this.height}" class="table-background"/>
        ${headerTemplate}
        ${contentTemplate}
        <rect x="0" y="0" width="${this.width}" height="${this.height}" class="table-border"/>
      </g>
    `;
  }

  render(props) {
    const template = this.generateTemplate(props);
    
    return template;
  }
}
