// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");
// console.log(tableData);

// // // Step 1: Loop Through `data` and console.log each weather report object
tableData.forEach(function(sightReport) {
    // console.log(sightReport);
  });

//   / // Step 2:  Use d3 to append one table row `tr` for each weather report object
tableData.forEach(function(sightReport) {
    // console.log(sightReport);
    var row = tbody.append("tr");
  });

  // // Step 3:  Use `Object.entries` to console.log each weather report value
  tableData.forEach(function(sightReport) {
    // console.log(sightReport);
    var row = tbody.append("tr");
  
    Object.entries(sightReport).forEach(function([key, value]) {
      console.log(key, value);
    });
  });

  // // Step 4: Use d3 to append 1 cell per weather report value (weekday, date, high, low)
tableData.forEach(function(sightReport) {
    console.log(sightReport);
    var row = tbody.append("tr");
  
    Object.entries(sightReport).forEach(function([key, value]) {
    //   console.log(key, value);
      // Append a cell to the row for each value
      var cell = row.append("td");
    });
  });

 // // Step 5: Use d3 to update each cell's text with 
 tableData.forEach(function(sightReport) {
    // console.log(sightReport);
    var row = tbody.append("tr");
    Object.entries(sightReport).forEach(function([key, value]) {
      console.log(key, value);
      // Append a cell to the row for each value
      var cell = row.append("td");
      cell.text(value);
    });
  });