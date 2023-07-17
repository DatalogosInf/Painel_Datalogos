function searchTable() {
  // Get input value
  var input = document.getElementById("search-box").value.toUpperCase();

  // Get all table containers
  var containers = document.querySelectorAll(".table-container");

  // Loop through containers and hide those that don't match the search query
  for (var i = 0; i < containers.length; i++) {
    var container = containers[i];
    var rows = container.querySelectorAll("table tbody tr");
    var match = false;
    for (var j = 0; j < rows.length; j++) {
      var td = rows[j].querySelectorAll("td");
      var rowMatch = false;
      for (var k = 0; k < td.length; k++) {
        if (td[k].textContent.toUpperCase().indexOf(input) > -1) {
          rowMatch = true;
          break;
        }
      }
      if (rowMatch) {
        rows[j].style.display = "";
        match = true;
      } else {
        rows[j].style.display = "none";
      }
    }
    if (match) {
      container.style.display = "";
    } else {
      container.style.display = "none";
    }
  }
}
