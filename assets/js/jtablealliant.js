document.getElementById("toggle-table").addEventListener("click", function() {
  var table = document.getElementById("my-table");
  if (table.style.display === "none") {
    table.style.display = "table";
  } else {
    table.style.display = "none";
  }
});