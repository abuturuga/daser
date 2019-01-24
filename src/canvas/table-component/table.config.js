class TableConfig {

  constructor() {
    this.config = {
      width: 300,
      header: {
        height: 30,
        padding: 4,
        icon: {
          width: 18,
          height: 18
        }
      },
      content: {
        row: {
          width: 300,
          height: 30
        },
        layout: [
          {key: 'key', start: 4, end: 20},
          {key: 'name', start: 24, end: 120},
          {key: 'type', start: 120, end: 200},
          {key: 'default', start: 220, end: 250},
          {key: 'edit', start: 270, end: 300}
        ],
        hasVerticalGrid: true,
        hasHorizontalGrid: true
      }
    }
  }

  get() {
    return this.config; 
  }
}

const configService = new TableConfig();
export default configService;
