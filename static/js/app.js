// import data from data.js
var tableData = data;

var tbody = d3.select("tbody");

 // // Use d3 to update each cell's text with and create the initial load chart on the page
 tableData.forEach(function(sightReport) {
    // console.log(sightReport);
    var row = tbody.append("tr");
    Object.entries(sightReport).forEach(function([key, value]) {
      var cell = row.append("td");
      cell.text(value);
    });
  });

var button = d3.select("#filter-btn");
var form = d3.select("form");

// activate the button and submit action
button.on("click", handleClick);
form.on("submit", handleClick);

// This function is triggered when the button is clicked to apply the date filter
function handleClick() {

  // prevent hitting enter causing a page reload
  d3.event.preventDefault();

  // creating the fields for the date input for filtering

  var inputField = d3.select("#datetime");
  var inputValue = inputField.property("value");
  
  // getting the filtered data
  var filteredData = tableData.filter(datetime => datetime.datetime === inputValue);
  
  // getting the body tag where the table code exists
  var tbody = d3.select("tbody");
  
  // clears the initial build table
  tbody.html("");
  
  // rewrites the table with the filtered results
  filteredData.forEach(function(sightReport) {
    var row = tbody.append("tr");
    Object.entries(sightReport).forEach(function([key, value]) {
      var cell = row.append("td");
      cell.text(value);
    });
    d3.event.preventDefault();
  });

}

