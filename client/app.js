const tableBody = document.getElementById("table-body");

const getFlights = () => {
  fetch("http://localhost:8000/flights")
    .then((response) => response.json())
    .then((flights) => {
      // console.log(flights)
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

    const flightDetails = {
      time: flight.departing.slice(0, 5),
      destination: flight.destination.toUppercase(),
      flight: flight.flightNumber.shift(),
      gate: flight.gate,
      remarks: flight.status.toUppercase(),
    };

    for (const flightDetail in flightDetails) {
      const tableCell = document.createElement("td");
      const word = Array.from(flightDetails[flightDetail]);
      console.log(flightDetail)

      for (const [index, letter] of word.entries()) {
        const letterElement = document.createElement("div");

        letterElement.textContent = letter;

        tableCell.append(letterElement);
      }
      tableRow.append(tableCell);
    }

    tableBody.append(tableRow);
  }
};
