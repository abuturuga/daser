import { HeaderComponent } from './header.comonent.js';
import { ContentComponent } from './content.component.js';
import TableConfig from './table.config.js';

export class TableComponent {

  constructor() {
    this.config = TableConfig.get();

    this.width = this.config.width;
    this.height = this.config.header.height;

    this.headerComponent = new HeaderComponent(this.config);
    this.contentComponent = new ContentComponent(this.config);
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
