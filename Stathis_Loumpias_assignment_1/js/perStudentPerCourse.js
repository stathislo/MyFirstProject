var rIndex,
  table = document.getElementById("table");


function checkEmptyInput() {
  var isEmpty = false;
  var letters = (/^[A-Za-z]+$/);
  var title = document.getElementById("title").value;
  var description = document.getElementById("description").value;
  var subDateTime = document.getElementById("subDateTime").value;
  var oranlMark = document.getElementById("oralMark").value;
  var totalMark = document.getElementById("totalMark").value;
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var dateOfBirth = document.getElementById("dateOfBirth").value;
  var tuitionFees = document.getElementById("tuitionFees").value;
  var stream = document.getElementById("stream").value;
  var type = document.getElementById("type").value;
  var startDate = document.getElementById("startDate").value;
  var endDate = document.getElementById("endDate").value;

  if (title === "") {
    alert("Please enter valid title");
    isEmpty = true;
  } else if(!title.match(letters)){
    alert("Title must contain only letters")
    isEmpty = true;
  } else if (title.length > 15){
    alert ("Your title is too long")
    isEmpty = true;
  } else if (description === "") {
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
  } else if (totalMark > 100) {
    alert("Your total mark can't be higher than 100");
    isEmpty = true;
  } else if (firstName === "") {
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
  } else if (dateOfBirth === "") {
    alert("Please enter valid date of birth");
    isEmpty = true;
  } else if (tuitionFees === "") {
    alert("Please enter valid tuition fees");
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
  } else if (endDate === "") {
    alert("Please enter valid end date");
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
    cell9 = newRow.insertCell(8);
    cell10 = newRow.insertCell(9);
    cell11 = newRow.insertCell(10);
    cell12 = newRow.insertCell(11);
    cell13 = newRow.insertCell(12);
    cell14 = newRow.insertCell(13);

    title = document.getElementById("title").value;
    description = document.getElementById("description").value;
    subDateTime = document.getElementById("subDateTime").value;
    oralMark = document.getElementById("oralMark").value;
    totalMark = document.getElementById("totalMark").value;
    firstName = document.getElementById("firstName").value;
    lastName = document.getElementById("lastName").value;
    dateOfBirth = document.getElementById("dateOfBirth").value;
    tuitionFees = document.getElementById("tuitionFees").value;
    stream = document.getElementById("stream").value;
    type = document.getElementById("type").value;
    startDate = document.getElementById("startDate").value;
    endDate = document.getElementById("endDate").value;

    cell1.innerHTML = title;
    cell2.innerHTML = description;
    cell3.innerHTML = subDateTime;
    cell4.innerHTML = oralMark;
    cell5.innerHTML = totalMark;
    cell6.innerHTML = firstName;
    cell7.innerHTML = lastName;
    cell8.innerHTML = dateOfBirth;
    cell9.innerHTML = tuitionFees;
    cell10.innerHTML = stream;
    cell11.innerHTML = type;
    cell12.innerHTML = startDate;
    cell13.innerHTML = endDate;
    cell14.innerHTML = `<input type="button" value="Delete" id="delete" onclick="removeSelectedRow(this)"/>`;
    
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
      document.getElementById("firstName").value = this.cells[5].innerHTML;
      document.getElementById("lastName").value = this.cells[6].innerHTML;
      document.getElementById("dateOfBirth").value = this.cells[7].innerHTML;
      document.getElementById("tuitionFees").value = this.cells[8].innerHTML;
      document.getElementById("stream").value = this.cells[9].innerHTML;
      document.getElementById("type").value = this.cells[10].innerHTML;
      document.getElementById("startDate").value = this.cells[11].innerHTML;
      document.getElementById("endDate").value = this.cells[12].innerHTML;
    };
  }
}
selectedRowToInput();

function removeSelectedRow(indexOfRow) {
  table.deleteRow(indexOfRow.parentNode.parentNode.rowIndex);
}
