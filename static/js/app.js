// from data.js
var tableData = data;


var tbody = d3.select("tbody");

 // // Use d3 to update each cell's text with 
 tableData.forEach(function(sightReport) {
    // console.log(sightReport);
    var row = tbody.append("tr");
    Object.entries(sightReport).forEach(function([key, value]) {
      var cell = row.append("td");
      cell.text(value);
    });
  });

var button = d3.select("#filter-btn");
var form = d3.select("#form");

button.on("click", handleClick);
form.on("submit", handleClick);

// This function is triggered when the button is clicked
function handleClick() {

  d3.event.preventDefault();

  var inputField = d3.select("#datetime");
  var inputValue = inputField.property("value");

  // console.log(inputValue);

  var filteredData = tableData.filter(datetime => datetime.datetime === inputValue);
  
  var tbody = d3.select("tbody");
  
  tbody.html("");
 
  filteredData.forEach(function(sightReport) {
    var row = tbody.append("tr");
    Object.entries(sightReport).forEach(function([key, value]) {
      var cell = row.append("td");
      cell.text(value);
    });
  });

}

