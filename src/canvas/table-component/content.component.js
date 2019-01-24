export class ContentComponent {

  constructor(config) {
    this.config = config;
  }

  renderGridLines(props) {
    const { content, width } = this.config;
    const { height } = content.row;
    
    const horizontalGrid = props.rows.map((_, index) => {
      const y = index * height;
      return `<line x1="0" y1="${y}" x2="${width}" y2="${y}" stroke-width="1" stroke="black"/>`
    })
    .filter((_, index) => index > 0).join('');

    const gridEnd = props.rows.length * height;
    const vertivalGrid = content.layout.map(field => {
      const { start } = field;
      return `<line x1="${start}" y1="0" x2="${start}" y2="${gridEnd}" stroke-width="1" stroke="black"/>`            
    }).filter((_, index) => index > 0).join('');

    return `<g class="grid">
      ${horizontalGrid}
      ${vertivalGrid}
    </g>`;   
  }

  generateKeyTemplate(meta, start) {
      return `<use xlink:href="assets/icons/key.svg#key-icon" class="icon table__column_key-pk" x="${start}" y="6" width="18" height="18"></use>`
  }

  generateColsTemplate(cols) {
    const { layout } = this.config.content;

    return layout.map(field => {
      const { start, key } = field;
      const value = cols[key];

      if (!value) return '';

      if (key === 'key') {
        return this.generateKeyTemplate(value, start)
      }

      return `<text x="${start + 4}" y="20" class="col-${key}">${value}</text>`;
    }).join('');
  }

  generateRowTemplate(row, index) {
    const y = index * this.config.content.row.height;
    const coltemplate = this.generateColsTemplate(row);

    return `<g class="table-row" transform="translate(0, ${y})">
      ${coltemplate}
    </g>`;
  }

  generateTemplate(props) {
    const { height } = this.config.header;
    const rowsTemplate = props.rows.map((row, index) => this.generateRowTemplate(row, index)).join('');
    const gridLinesTemplate = this.renderGridLines(props);

    return `
      <g class="table-content" transform="translate(0, ${height})">
        ${rowsTemplate}
        ${gridLinesTemplate}
      </g>
    `;
  }

  render(props) {
    const template = this.generateTemplate(props);

    return template;
  }
}
