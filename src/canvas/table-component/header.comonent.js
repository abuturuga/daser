export class HeaderComponent {

    constructor(config) {
        this.config = config;
    }

    generateTemplate(props) {
      const { height } = this.config.header;
      const { width } = this.config;

      return `<g class="table__header" transform="translate(0, 0)">
        <rect x="0" y="0" width="${width}" height="${height}" class="table__header__background"/>
        <use xlink:href="assets/icons/table.svg#table-icon" class="icon table__header__icon" x="4" y="6" width="18" height="18"></use>
        <text x="30" y="20" class="table__header__title">${props.title}</text>
      </g>`;
    }

    render(props) {
      const template = this.generateTemplate(props);

      return template;
    }
}
