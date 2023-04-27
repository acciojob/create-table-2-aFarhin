function createTable() {
    //Write your code here
	 const table = document.getElementById('myTable');
  const rows = prompt('Input number of rows');
  const cols = prompt('Input number of columns');

  for (let i = 0; i < rows; i++) {
    const row = table.insertRow(i);
    for (let j = 0; j < cols; j++) {
      const cell = row.insertCell(j);
      cell.innerText = `Row-${i} Column-${j}`;
    }
  }
  
}
