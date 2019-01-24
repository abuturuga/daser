function GetTablesStrings(SQL) {
  const TABLE_REGEX =  /(^CREATE TABLE\s+\w+\((\n.+)+\)$)/gm;
  return SQL.match(TABLE_REGEX);
}

function ExtractTableTitle(tableSql) {
  const TABLE_TITLE_REGEX = /CREATE TABLE\s*(\w+)\s*\(/gm;;
  return TABLE_TITLE_REGEX.exec(tableSql)[1];
}

function extractColumn(columnSql) {
  const raw = columnSql.split(' ');

  return {
    key: null,
    name: raw[0].trim(),
    type: raw[1].trim()
  };
}

function ExtractColumns(tableSql) {
  const cols = tableSql.split('\n');
  const result = [];
  for (let i = 1; i < cols.length - 1; i++) {
     const column = extractColumn(cols[i].trim());

     result.push(column);
  }

  return result;
}

export function parseSQL(sql) {
  GetTablesStrings(sql)
  .map((tableSql, index) => {
    const title = ExtractTableTitle(tableSql);
    const columns = ExtractColumns(tableSql);
    return {
      id: index,
      sql: tableSql,
      title,
      columns
    }
  });
}
