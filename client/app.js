const tableBody = document.getElementById("table-body");

const getFlights = () => {
  fetch("http://localhost:8000/flights")
    .then((response) => response.json())
    .then((flights) => {
      populateTable(flights);
    })
    .catch((err) => console.log(err));
};

getFlights();

const populateTable = (flights) => {
  //for each object in the array (flight=object, flights = array)
  for (const flight of flights) {
    const tableRow = document.createElement("tr");
    const tableIcon = document.createElement("td");
    tableIcon.textContent = "+";
    tableRow.append(tableIcon);
    tableBody.append(tableRow);
  }
};
