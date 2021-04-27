var rIndex,
  table = document.getElementById("table");


function checkEmptyInput() {
  var isEmpty = false;
  var letters = (/^[A-Za-z]+$/);
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var subject = document.getElementById("subject").value;
  var title = document.getElementById("title").value;
  var type = document.getElementById("type").value;
  var startDate = document.getElementById("startDate").value;
  var endDate = document.getElementById("endDate").value;

  if (firstName === "") {
    alert("Please enter a valid first name");
    isEmpty=true;
  } else if (!firstName.match(letters)) {
    alert ("First name must contain only letters")
    isEmpty = true ;
  } else if  (firstName.length > 15) {
    alert("First name is too long");
    isEmpty=true;
  } else if (lastName === "") {
    alert("Please enter a valid last name");
    isEmpty=true;
  } else if (!lastName.match(letters)) {
    alert ("Last name must contain only letters")
    isEmpty = true ;
  } else if (lastName.length > 15) {
    alert("Last name is too long");
    isEmpty=true;
  } else if (subject == "Select") {
    alert("Please enter a subject");
    isEmpty=true;
  } else if (title === "") {
    alert("Please enter valid title");
    isEmpty = true;
  } else if (!title.match(letters)) {
    alert ("Title must contain only letters")
    isEmpty = true ;
  } else if (title.length > 15){
    alert ("Title is too long")
    isEmpty = true;  
  } else if (type === "") {
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
  } else if (endDate === "") {
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
    cell7 = newRow.insertCell(6);
    cell8 = newRow.insertCell(7);

    firstName = document.getElementById("firstName").value;
    lastName = document.getElementById("lastName").value;
    subject = document.getElementById("subject").value;
    title = document.getElementById("title").value;
    type = document.getElementById("type").value;
    startDate = document.getElementById("startDate").value;
    endDate = document.getElementById("endDate").value;

    cell1.innerHTML = firstName;
    cell2.innerHTML = lastName;
    cell3.innerHTML = subject;
    cell4.innerHTML = title;
    cell5.innerHTML = type;
    cell6.innerHTML = startDate;
    cell7.innerHTML = endDate;
    cell8.innerHTML = `<input type="button" value="Delete" id="delete" onclick="removeSelectedRow(this)"/>`;

    
    selectedRowToInput();
  }
}


function selectedRowToInput() {
  for (var i = 1; i < table.rows.length; i++) {
    table.rows[i].onclick = function () {
     
      rIndex = this.rowIndex;
      document.getElementById("firstName" ).value = this.cells[1].innerHTML;
      document.getElementById("lastName" ).value = this.cells[2].innerHTML;
      document.getElementById("courses").value = this.cells[3].innerHTML;
      document.getElementById("title").value = this.cells[4].innerHTML;
      document.getElementById("type").value = this.cells[6].innerHTML;
      document.getElementById("startDate").value = this.cells[7].innerHTML;
      document.getElementById("endDate").value = this.cells[8].innerHTML;
    };
  }
}
selectedRowToInput();

function removeSelectedRow(indexOfRow) {
  table.deleteRow(indexOfRow.parentNode.parentNode.rowIndex);
}

