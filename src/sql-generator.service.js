function generateColumnsSQL(rows) {
  return rows.map(row => `${row.name} ${row.type}`).join(', \n')
}

function generateTableSQL(table) {
  const columns = generateColumnsSQL(table.rows);
  
  return `CREATE TABLE ${table.title} (
    ${columns}
  )
  \/ \n
  `
}

export function generateSQL(tables) {
  return tables.map(table => generateTableSQL(table))
    .join('');
}