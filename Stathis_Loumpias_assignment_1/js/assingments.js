var rIndex,
  table = document.getElementById("table");


function checkEmptyInput() {
  var isEmpty = false;
  var letters = (/^[A-Za-z]+$/);
  var title = document.getElementById("title").value;
  var description = document.getElementById("description").value;
  var subDateTime = document.getElementById("subDateTime").value;
  var oranlMark = document.getElementById("oranlMark").value;
  var totalMark = document.getElementById("totalMark").value;

  if (title === "") {
    alert("Please enter valid title");
    isEmpty = true;
  } else if(!title.match(letters)){
    alert("Title must contain only letters")
    isEmpty = true;
  } else if (title.length > 15){
    alert ("Your title is too long")
    isEmpty = true;
  }  else if (description === "") {
    alert("Please enter valid description");
    isEmpty = true;
  } else if(!description.match(letters)){
    alert("Description must contain only letters")
    isEmpty = true;
  } else if (description.length > 25){
    alert ("Your title is too long")
    isEmpty = true;
  } else if (subDateTime === "") {
    alert("Please enter valid sub date time");
    isEmpty = true;
  } else if (oranlMark === "") {
    alert("Please enter valid oral mark ");
    isEmpty = true;
  } else if (oranlMark > 40 ){
    alert ("Your oral mark can't be higher than 40")
    isEmpty = true;
  } else if (totalMark === "") {
    alert("Please enter valid total mark");
    isEmpty = true;
  }else if (totalMark > 100) {
    alert("Your total mark can't be higher than 100");
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
    description = document.getElementById("description").value;
    subDateTime = document.getElementById("subDateTime").value;
    oranlMark = document.getElementById("oranlMark").value;
    totalMark = document.getElementById("totalMark").value;
    cell1.innerHTML = title;
    cell2.innerHTML = description;
    cell3.innerHTML = subDateTime;
    cell4.innerHTML = oranlMark;
    cell5.innerHTML = totalMark;
    cell6.innerHTML = `<input type="button" value="Delete" id="delete" onclick="removeSelectedRow(this)"/>`;
   
    selectedRowToInput();
  }
}


function selectedRowToInput() {
  for (var i = 1; i < table.rows.length; i++) {
    table.rows[i].onclick = function () {
      
      rIndex = this.rowIndex;
      document.getElementById("title").value = this.cells[0].innerHTML;
      document.getElementById("description").value = this.cells[1].innerHTML;
      document.getElementById("subDateTime").value = this.cells[2].innerHTML;
      document.getElementById("oralMark").value = this.cells[3].innerHTML;
      document.getElementById("totalMark").value = this.cells[4].innerHTML;
    };
  }
}
selectedRowToInput();

function removeSelectedRow(indexOfRow) {
  table.deleteRow(indexOfRow.parentNode.parentNode.rowIndex);
}