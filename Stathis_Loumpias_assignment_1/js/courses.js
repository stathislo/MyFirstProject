
var rIndex,
  table = document.getElementById("table");

  function checkEmptyInput() {
    var isEmpty = false;
    var letters = (/^[A-Za-z]+$/);
    var title = document.getElementById("title").value;
    var stream = document.getElementById("stream").value;
    var type = document.getElementById("type").value;
    var startDate = document.getElementById("startDate").value;
    var endDate = document.getElementById("endDate").value;

 if (title === "") {
    alert("Please enter valid title");
    isEmpty = true;
  } else if (!title.match(letters)) {
    alert ("Title must contain only letters")
    isEmpty = true ;
  } else if (title.length > 15){
    alert ("Title is too long")
    isEmpty = true;  
  } else if (stream === "Select"){
    alert ("Please select stream")
    isEmpty = true;
  }else if (type === "") {
    alert("Please enter valid type");
    isEmpty = true;
  } else if (!type.match(letters)) {
    alert ("Type must contain only letters")
    isEmpty = true ;
  } else if (type.length > 15){
    alert ("Type is too long")
    isEmpty = true; 
  } else if (startDate === "") {
    alert("Please enter valid start date");
  } else if (endDate === ""){
    alert("Please enter valid end date");
    isEmpty = true;
  }
  return isEmpty;
}

function addHtmlTableRow() {
  
  if (!checkEmptyInput()) {
    var newRow = table.insertRow(table.length),
    cell1 = newRow.insertCell(0),
    cell2 = newRow.insertCell(1),
    cell3 = newRow.insertCell(2),
    cell4 = newRow.insertCell(3),
    cell5 = newRow.insertCell(4);
    cell6 = newRow.insertCell(5);
    title = document.getElementById("title").value;
    stream = document.getElementById("stream").value;
    type = document.getElementById("type").value;
    startDate = document.getElementById("startDate").value;
    endDate = document.getElementById("endDate").value;

    cell1.innerHTML = title;
    cell2.innerHTML = stream;
    cell3.innerHTML = type;
    cell4.innerHTML = startDate;
    cell5.innerHTML = endDate;
    cell6.innerHTML = `<input type="button" value="Delete" id="delete" onclick="removeSelectedRow(this)"/>`;
      
    selectedRowToInput();
  }
}
function selectedRowToInput() {
  for (var i = 1; i < table.rows.length; i++) {
    table.rows[i].onclick = function () {

      rIndex = this.rowIndex;
      document.getElementById("title").value = this.cells[1].innerHTML;
      document.getElementById("stream").value = this.cells[2].innerHTML;
      document.getElementById("type").value = this.cells[3].innerHTML;
      document.getElementById("startDate").value = this.cells[4].innerHTML;
      document.getElementById("endDate").value = this.cells[5].innerHTML;
    };
  }
}
selectedRowToInput();


function removeSelectedRow(indexOfRow) {
  table.deleteRow(indexOfRow.parentNode.parentNode.rowIndex);
}