function addTableRow() {
    var table = document.querySelector("#myTable");
    var totalrows = document.querySelectorAll("#myTable tr").length;
    var row = table.insertRow(totalrows);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    cell1.innerHTML = "NEW CELL1";
    cell2.innerHTML = "NEW CELL2";
    cell3.innerHTML = "NEW CELL1";
    cell4.innerHTML = "NEW CELL2";
    cell5.innerHTML = "NEW CELL1";
}

