import TableConfig from './table-component/table.config.js';

export class CanvasLayoutService {

  constructor() {
    this.tables = [];
  }

  getTableHeight(table) {
    const headerHeight = TableConfig.get().header.height;
    const rowHeight = TableConfig.get().content.row.height;
    return headerHeight + rowHeight * table.rows.length + rowHeight;
  }

  getTablePosition(table) {
    const width = TableConfig.get().width;

    if (this.tables.length === 0) {
      this.tables.push({
        id: table.id,
        x: 40,
        y: 30
      });
    } else if(!this.tables.find(t => parseInt(t.id) === parseInt(table.id))) {
      const lastIndex = this.tables.length - 1;
      const lastTable = this.tables[lastIndex];
      let y = 30;
      let x = lastTable.x + width + 20;
      

      this.tables.push({
        id: table.id,
        x,
        y
      })
    }

    return this.tables.find(t => t.id === table.id);
  }

}
