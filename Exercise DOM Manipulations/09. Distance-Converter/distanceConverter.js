function attachEventsListeners() {
    let inputDistance = document.getElementById('inputDistance');
    let outputDistance = document.getElementById('outputDistance');

    let inputUnits = document.getElementById('inputUnits');
    let outputUnits = document.getElementById('outputUnits');

    let convertButton = document.getElementById('convert');

    let conversionRatesFromMeter = {
        km: 1000,
        m: 1,
        cm: 0.01,
        mm: 0.001,
        mi: 1609.34,
        yrd: 0.9144,
        ft: 0.3048,
        in: 0.0254 
    }

    convertButton.addEventListener('click', function () {
        let convertFrom = inputUnits.value;
        let convertTo = outputUnits.value;

        let valueInMeters = inputDistance.value * conversionRatesFromMeter[convertFrom];
        let convertedValue = valueInMeters / conversionRatesFromMeter[convertTo];
        outputDistance.value = convertedValue;
    })
}
