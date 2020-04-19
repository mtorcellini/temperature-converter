const degC = document.getElementById('celsius');
const K = document.getElementById('kelvin');
const convertC = document.getElementById('convertC');
const convertK = document.getElementById('convertK');
const dataTable = document.getElementById('data-table');

// conversion functions
const kelvinToCelsius = kelvin => parseFloat(kelvin) - 273.15;
const celsiusToKelvin = celsius => parseFloat(celsius) + 273.15;



// logger function

let row = 0;

const logTemp = (c, k) => {

    row++;

    if (row > 10) {
        dataTable.removeChild(dataTable.children[0]);
    }

    let newRow = document.createElement('tr');
    newRow.innerHTML = `<td>${row}</td><td>${c}</td><td>${k}</td>`;

    dataTable.append(newRow);

}










convertC.addEventListener('click', () => {
    let celsius = degC.value;
    let kelvin = celsiusToKelvin(celsius).toFixed(2);
    console.log('C: ' + celsius + '\tK: ' + kelvin);
    K.value = kelvin;
    logTemp(celsius, kelvin);
});

convertK.addEventListener('click', () => {
    let kelvin = K.value;
    let celsius = kelvinToCelsius(kelvin).toFixed(2);
    console.log('C: ' + celsius + '\tK: ' + kelvin);
    degC.value = celsius;
    logTemp(celsius, kelvin);
})

