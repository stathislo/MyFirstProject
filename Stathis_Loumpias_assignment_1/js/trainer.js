var rIndex,
  table = document.getElementById("table");



function checkEmptyInput() {
  var isEmpty = false;
  var letters = (/^[A-Za-z]+$/);
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var courses = document.getElementById("courses").value;
  
  if (firstName === "") {
    alert("Please enter a valid first name");
    isEmpty=true;
  }else if (!firstName.match(letters)) {
    alert ("First name must contain only letters")
    isEmpty = true ;
  }else if  (firstName.length > 15) {
    alert("First name is too long");
    isEmpty=true;
  }else if (lastName === "") {
    alert("Please enter a valid last name");
    isEmpty=true;
  }else if (!lastName.match(letters)) {
    alert ("Last name must contain only letters")
    isEmpty = true ;
  }else if (lastName.length > 15) {
    alert("Last name is too long");
    isEmpty=true;
  }else if (courses == "Select") {
    alert("Please enter a subject");
    isEmpty=true;
  }
  return isEmpty 
}


function addHtmlTableRow() {
  
  if (!checkEmptyInput()) {
    var newRow = table.insertRow(table.length),
    cell1 = newRow.insertCell(0),
    cell2 = newRow.insertCell(1),
    cell3 = newRow.insertCell(2),
    cell4 = newRow.insertCell(3)
    firstName = document.getElementById("firstName").value;
    lastName = document.getElementById("lastName").value;
    courses = document.getElementById("courses").value;

    cell1.innerHTML = firstName;
    cell2.innerHTML = lastName;
    cell3.innerHTML = courses;
    cell4.innerHTML = `<input type="button" value="Delete" id="delete" onclick="removeSelectedRow(this)"/>`;
   
    selectedRowToInput();
  }
}


function selectedRowToInput() {
  for (var i = 1; i < table.rows.length; i++) {
    table.rows[i].onclick = function () {
     
      rIndex = this.rowIndex;
      document.getElementById("firstName").value = this.cells[0].innerHTML;
      document.getElementById("lastName").value = this.cells[1].innerHTML;
      document.getElementById("courses").value = this.cells[2].innerHTML;
    };
  }
}
selectedRowToInput();


function removeSelectedRow(indexOfRow) {
  table.deleteRow(indexOfRow.parentNode.parentNode.rowIndex);
}